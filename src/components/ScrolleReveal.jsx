import { motion } from "framer-motion";

const Box = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: false }}
      className="w-32 h-44 border rounded-sm bg-pink-300 m-4 text-center"
    >
      {text}
    </motion.div>
  );
};

const ScrolleReveal = () => {
  const gretins = ["hello", "welcome", "Come In"];
  return (
    <div>
      {gretins.map((geting, index) => (
        <Box key={index} text={geting}></Box>
      ))}
    </div>
  );
};

export default ScrolleReveal;
