import { motion } from "framer-motion";

const shpeVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    delay: 1,
    duration: 1,
    type: "spring",
  },
};

const childVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.5,
    x: "30px",
    y: "30px",
    transition: { duration: 2 },
  },
};

const Variant = () => {
  return (
    <motion.div
      variants={shpeVariants}
      initial="initial"
      animate="animate"
      className="bg-green-700 w-32 h-32 rounded border m-4"
    >
      <motion.div
        variants={childVariants}
        className="bg-red-500 w-12 h-12 rounded-full border m-2"
      ></motion.div>
    </motion.div>
  );
};

export default Variant;
