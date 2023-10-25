import Iconbox from "../Iconbox";

export default function Services() {
  return (
    <section className="OurService my-10">
      <div className=" relative flex flex-col md:flex-row justify-between">
        <h2 className=" sticky top-0 text-mob-h2 md:text-[60px] uppercase font-semibold text-center md:text-left tracking-wider">
          OUR SERVICES
        </h2>
        <div className="serviceSection my-5 w-full md:w-[50%] flex flex-col gap-5">
          <Iconbox
            icon="/public/Custom Illustration.png"
            title="CUSTOM ILLUSTRATIONS"
            content="Transforming your imaginations & dreams into stunning artwork."
            link="/work/custom-illustrations"
          />

          <Iconbox
            icon="/public/Book Covers.png"
            title="BOOK COVERS"
            content="People judge the book by the cover and we make sure they are impressed!"
            link="/work/book-covers"
          />

          <Iconbox
            icon="/public/Photo Compositing.png"
            title="PHOTO COMPOSITING"
            content="Seamless blending images to create magical artwork."
            link="/work/compositing"
          />

          <Iconbox
            icon="/public/Caricature.png"
            title="CARICATURES"
            content="Capture the essence of the subject playfully, with a hint of exaggeration."
            link="/work/caricatures"
          />

          <Iconbox
            icon="/public/Custom Icons.png"
            title="CUSTOM ICONS"
            content="Distilling complex ideas into attractive symbols that you won't find anywhere else."
            link="/work/custom-inconography"
          />

          <Iconbox
            icon="/public/Celebration Cards.png"
            title="CELEBRATION CARDS"
            content="Distilling complex ideas into attractive symbols that you won't find anywhere else."
            link="/work/celebration-cards"
          />

          <Iconbox
            icon="/public/Doodle Art.png"
            title="DOODLE ART"
            content="Distilling complex ideas into attractive symbols that you won't find anywhere else."
            link="/work/doodle-art"
          />
        </div>
      </div>
    </section>
  );
}
