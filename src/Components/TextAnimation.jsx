import { motion } from "framer-motion";

export default function TextAnimation({children}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "50px" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
