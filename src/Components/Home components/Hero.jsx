import TextAnimation from "../TextAnimation";

export default function Hero() {
  return (
    <section className="HomeSection my-5">
      <TextAnimation>
      <h1       
        className="text-[26px] md:text-desk-h1 font-semibold uppercase tracking-wider"
      >
        A VISUAL DESIGN STUDIO DRIVEN TO CREATE UNIQUE ARTWORK FOR ALL YOUR
        CREATIVE NEEDS.
      </h1>
      </TextAnimation>
      <div className="marquee my-3 md:my-5 md:mx-[-36px] mx-[-23px]">
        <div>
          <span>
            PHOTO COMPOSITING · CARICATURES · CUSTOM ICONS · CUSTOM
            ILLUSTRATIONS · BOOK COVERS · &amp; PHOTO COMPOSITING · CARICATURES
            · CUSTOM ICONS · CUSTOM ILLUSTRATIONS · BOOK COVERS ·
          </span>
          <span>
            PHOTO COMPOSITING · CARICATURES · CUSTOM ICONS · CUSTOM
            ILLUSTRATIONS · BOOK COVERS · &amp; PHOTO COMPOSITING · CARICATURES
            · CUSTOM ICONS · CUSTOM ILLUSTRATIONS · BOOK COVERS ·
          </span>
        </div>
      </div>
    </section>
  );
}
