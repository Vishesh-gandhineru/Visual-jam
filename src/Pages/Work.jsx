import WorkGrid from "../Components/WorkGrid";
import { motion } from "framer-motion";
import TextAnimation from "../Components/TextAnimation";
import { Helmet } from "react-helmet";

export default function Work() {
  return (
    <main>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Our Work</title>
            </Helmet>
      <section className="my-[50px]">
        <div className="WorktitleSection mb-2 md:mb-20 ">
          <TextAnimation>
          <h1            
            className="text-center font-semibold text-mob-h1 md:text-[80px] md:mt-[30px] uppercase"
          >
            WORK
          </h1>
          </TextAnimation>
          <motion.h4 initial={{ opacity: 0, translateY:"50px"}}
        animate={{ opacity: 1, translateY:0}}
        transition={{ duration: 0.8 , delay:0.4 }} className="text-center text-mob-h7 mt-3 font-normal md:text-[35px] ">
            The applications of our art are limited only by your imagination
          </motion.h4>
        </div>
        <WorkGrid />
      </section>
    </main>
  );
}
