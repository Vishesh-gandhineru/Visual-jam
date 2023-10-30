import TeamsGrid from "../Components/TeamsGrid";
import TextAnimation from "../Components/TextAnimation";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Team() {
  return (
    <main>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Our Crew</title>
            </Helmet>
      <section className="my-[50px]">
        <div className="WorktitleSection mb-2 md:mb-20 ">
          <TextAnimation>
            <h1 className="text-center font-semibold text-mob-h1 md:text-[80px] md:mt-[30px] uppercase">
              OUR CREW
            </h1>
          </TextAnimation>
          <motion.h4
            initial={{ opacity: 0, translateY: "50px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-mob-h7 mt-3 font-normal md:text-[35px] "
          >
            TEAM WORK MAKES DREAM WORK.
          </motion.h4>
        </div>
        <TeamsGrid />
      </section>
    </main>
  );
}
