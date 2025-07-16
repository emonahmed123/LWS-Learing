import { useEffect } from "react";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const Counter = () => {
  const count = useMotionValue(0);

  const rounedvalue = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 5, delay: 1 });

    return animation.stop;
  }, []);

  return <motion.div>{rounedvalue}</motion.div>;
};

export default Counter;
