import { motion } from "framer-motion";

const Simple = () => {
  return (
    <motion.div
      className="bg-red-500 border w-36 h-36 rounded-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transtion={{ duration: 1 }}
    ></motion.div>
  );
};

export default Simple;
