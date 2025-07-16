import { motion } from "framer-motion";

const TextMotion = () => {
  const message = "we Are Enjoying Reactionve Accelarator Course !!!";

  const wordArray = message.split(" ");

  return (
    <div className="text-2xl m-4 text-center">
      {wordArray.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: index / 10,
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default TextMotion;
