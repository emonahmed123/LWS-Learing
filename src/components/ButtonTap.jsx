import { motion } from "framer-motion";

const ButtonTap = () => {
  return (
    <div>
      <motion.button
        className="bg-black text-white p-5  border rounded-full"
        whileTap={{ scale: 0.5 }}
        whileHover={{
          scale: 1.2,

          //   transtion: { duration: 2 },

          transtion: {
            yoyo: Infinity,
          },
        }}
      >
        Tap Me
      </motion.button>
    </div>
  );
};

export default ButtonTap;
