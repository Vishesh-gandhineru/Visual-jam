import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect , useState } from "react";

export default function footer() {

  const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  


  return (
    <footer className="md:mx-[-36px] mx-[-23px]">
      <div className="marquee">
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

      <div className="bg-[#000] text-[#fff] p-8">
        <div className=" mb-12 flex flex-col items-center justify-center gap-7">
          <h2 className="text-[50px] md:text-[80px] font-semibold text-center">
            LET'S JAM
          </h2>
          <button className="text-[14px] bg-[#01adef] p-3 text-[#fff] font-normal upprecase w-fit">
            Book a call
          </button>
        </div>
        <section className="flex flex-col md:flex-row justify-between">
          <div className="my-10 flex flex-row  items-center justify-center gap-4">
            <img src="/logowhite.svg" alt="Logo" className="h-8" />
            <div style={{ display: "contents" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgb(1, 173, 239)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[10%] h-full md:w-[20%]"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x={2} y={9} width={4} height={12} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:gap-24">
            <div>
              <h4 className="uppercase text-center text-mob-h4 font-semibold  mb-5 md:text-left">
                Our service
              </h4>
              <ul className="flex flex-col gap-4">
                <Link
                  to="/work/custom-illustrations"
                  className="text-center text-[gray] hover:text-[#fff] md:text-left"
                >
                
                  CUSTOM ILLUSTRATIONS
                </Link>
                <Link
                  to="/work/book-covers"
                  className="text-center text-[gray] hover:text-[#fff] md:text-left"
                >
                  
                  BOOK COVERS
                </Link>
                <Link
                  to="/work/compositing"
                  className="text-center text-[gray] hover:text-[#fff] md:text-left"
                >
                  
                  PHOTO COMPOSITING
                </Link>
                <Link
                  to="/work/caricatures"
                  className="text-center text-[gray] hover:text-[#fff] md:text-left"
                >
                  CARICATURES
                </Link>
                <Link
                  to="/work/custom-inconography"
                  className="text-center text-[gray] hover:text-[#fff] md:text-left"
                >
                  
                  CUSTOM ICONS
                </Link>
              </ul>
            </div>

            <div>
              <h4 className="uppercase text-center text-mob-h4 font-semibold  mb-5 md:text-left">
                CONTACT
              </h4>
              <ul className="flex flex-col gap-4">
                <li className="text-center text-[gray] hover:text-[#fff] md:text-left">
                  SET AN EXPLORATORY CALL{" "}
                </li>
                <li className="text-center text-[gray] hover:text-[#fff] md:text-left">
                  EMAIL US
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="my-8 flex flex-col gap-2 md:flex-row justify-between md:mt-[50px]">
          <h6 className="text-center text-[14px]">
            ❤️ MADE WITH LOVE IN INDIA ❤️
          </h6>
          <h6 className="text-center text-[14px]">
            👶 CHILD OF GANDHI&NERU 👶
          </h6>
        </div>
      </div>

      <a href="#" className="fixed bottom-10">
        <motion.img
          src="/Whatsapp Butoon.png"
          className="w-[80px] md:w-[110px] "
          initial = {{rotate:0}}
          animate = {{rotate : scrollPosition / 6 }}
          transition={{duration:0.5}}
          
        />
      </a>
    </footer>
  );
}
