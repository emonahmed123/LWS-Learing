import { motion } from "framer-motion";

const Simple = () => {
  return (
    <motion.div
      className="bg-red-500 border w-36 h-36 m-4 "
      // initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 90, 180, 270, 0],
        scale: [1, 1, 2, 2, 2],
      }}
      transtion={{ duration: 2 }}
    ></motion.div>
  );
};

export default Simple;
