import { motion } from "framer-motion";

const TrantionType = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Learning Animation</h1>
        <p>
          we Love Animation. We are Enjoying it a lot. Framer MOtion is greate
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 1, duration: 2 }}
      >
        <h1>Learning Animation</h1>
        <p>
          we Love Animation. We are Enjoying it a lot. Framer MOtion is greate
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Learning Animation</h1>
        <p>
          we Love Animation. We are Enjoying it a lot. Framer MOtion is greate
        </p>
      </motion.div>
    </>
  );
};

export default TrantionType;
