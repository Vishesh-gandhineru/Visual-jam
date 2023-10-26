import axios from "axios";
import { useState } from "react";

export default function Contact() {


  const [formData, setFormData] = useState({
    'full_name': '',
    'email': '',
    'message': ''
  });
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://react.visualjam.in/wp-json/jet-cct/contact_form_db',
        formData
      );
  
      if (response.data.status === 'mail_sent') {
        alert('Message sent successfully!');
      } else {
        alert('Message could not be sent.');
      }
    } catch (error) {
      console.error('There was an error sending the message.', error);
    }
  };
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <section className="contactUs">
      <div className="my-10 flex justify-between ">
        <div className="flex flex-col justify-between gap-5 w-[40%]">
          <h1 className="font-semibold text-mob-h1 md:text-[80px] md:mt-[30px] uppercase">GET IN TOUCH</h1>
          <h4 className="text-mob-h5 md:text-desk-h5">
            OFFICE HOURS
            <span className="block text-mob-p text-[#666666]"> MON - FRI : 10AM TO 6PM IST</span>{" "}
          </h4>
        </div>

        <div className="ContactForm my-10 w-1/2" >
          <form className="flex flex-col gap-4 items-center md:gap-8" onSubmit={handleSubmit}>
            <input type="text" name="full_name" id="your-name" placeholder="Your Name" value={formData['your-name']} onChange={handleChange} className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold" />
            <input type="email" name="email" id="your-email" placeholder="Your Email" value={formData['your-email']} onChange={handleChange} className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold" />
            <textarea name="message" id="your-message" placeholder="Your Message" value={formData['your-message']} onChange={handleChange} className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold" />
            <button type="submit" className="bg-[black] text-[white] p-4 w-full font-semibold">Send Message</button>
          </form>
        </div>
      </div>
      <div className="bg-color-blue md:mx-[-36px] mx-[-23px] text-[white] p-7 flex justify-between items-center">
        <h3 className="uppercase text-mob-h1">FOllow us</h3>
        <a href="#">LINKEDIN</a>
      </div>
    </section>
  );
}
