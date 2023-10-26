import { useState } from "react";

export default function Contact() {
 
  const [values , setValues] = useState({});

  function isFormSubmissionError(response) {
    return response.status === "validation_failed";
  }

  const formSubmissionHandler = (event) => {
  event.preventDefault();

  const formElement = event.target,
    { action, method } = formElement,
    body = new FormData(formElement);

  fetch(action, {
    method,
    body
  })
    .then((response) => response.json())
    .then((response) => {
      // Determine if the submission is not valid
      if (isFormSubmissionError(response)) {
        // Handle the case when there are validation errors
        const errorMessage = response.message;
        alert(errorMessage);
      } else {
        // Handle the happy path
        window.location.reload();
      }
    })
    .catch((error) => {
      // Handle the case when there's a problem with the request
      console.log(`There is an error ${error}`)
    });
};

window.onload = function() {
  const formElement = document.querySelector("form");
  formElement.addEventListener("submit", formSubmissionHandler);  

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

        <div className="ContactForm my-10 w-1/2" action="https://react.visualjam.in/wp-json/contact-form-7/v1/contact-forms/71b8e92/feedback" method="post">
          <form className="flex flex-col gap-4 items-center md:gap-8">
            <input type="text" name="your-name" id="your-name" placeholder="Your Name" className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold" />
            <input type="email" name="your-email" id="your-email" placeholder="Your Email" className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold" />
            <textarea name="your-message" id="your-message" placeholder="Your Message" className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold" />
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
