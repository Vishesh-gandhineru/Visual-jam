export default function Contact() {
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

        <div className="ContactForm my-10 w-1/2">
          <form className="flex flex-col gap-4 items-center md:gap-8">
            <input type="text" name="fullName" id="name" placeholder="Your Name" className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold" />
            <input type="email" name="email" id="email" placeholder="Your Email" className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold" />
            <textarea name="message" id="message" placeholder="Your Message" className="bg-[#f8f8f8] w-full p-4 placeholder:text-[#666] font-semibold" />
            <button className="bg-[black] text-[white] p-4 w-full font-semibold">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
