import axios from "axios";
import { useState } from "react";
import TextAnimation from "../Components/TextAnimation";

export default function Contact() {
  const [formSent, setFormSent] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const initialFormData = {
    name: "",
    email: "",
    message: "",
};

const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + btoa("visheshjhadi:hVls 3wu5 fC8b E1q6 QPH5 Oo8v"),
      },
    };

    try {
      const response = await axios.post(
        "https://react.visualjam.in/wp-json/custom/v1/contact/",
        formData,
        config
      );
      console.log(response.data);
      if (response.data.success === true) {
        setFormSent(true);
        setFormData(initialFormData);
      } else {
        setFormData(false);
      }

      setShowMessage(true);
    } catch (error) {
      console.error("There was an error sending the message.", error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className="contactUs">
      <div className="my-10 flex justify-between ">
        <div className="flex flex-col justify-between gap-5 w-[40%]">
          <TextAnimation>
          <h1 className="font-semibold text-mob-h1 md:text-[80px] md:mt-[30px] uppercase">
            GET IN TOUCH
          </h1>
          </TextAnimation>
          <h4 className="text-mob-h5 md:text-desk-h5">
            OFFICE HOURS
            <span className="block text-mob-p text-[#666666]">
              {" "}
              MON - FRI : 10AM TO 6PM IST
            </span>{" "}
          </h4>
        </div>

        <div className="ContactForm my-10 w-1/2">
          <form
            className="flex flex-col gap-4 items-center md:gap-8"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              id="your-name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold"
            />
            <input
              type="email"
              name="email"
              id="your-email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold"
            />
            <textarea
              name="message"
              id="your-message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold"
            />
            <button
              type="submit"
              className="bg-[black] text-[white] p-4 w-full font-semibold"
            >
              Send Message
            </button>
          </form>
          {showMessage &&
            (formSent ? (
              <div className="p-5 text-[#270] text-[16px] capitalize bg-[#DFF2BF] text-center font-semibold">
                form successfully submitted
              </div>
            ) : (
              <div className="p-5 text-[#D8000C] text-[16px] capitalize bg-[#FFBABA] text-center font-semibold">
                Error submitting
              </div>
            ))}
        </div>
      </div>
      <div className="bg-color-blue md:mx-[-36px] mx-[-23px] text-[white] p-7 flex justify-between items-center">
        <h3 className="uppercase text-mob-h1">FOllow us</h3>
        <a href="#">LINKEDIN</a>
      </div>
    </section>
  );
}
