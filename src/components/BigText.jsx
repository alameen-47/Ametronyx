import React from "react";
import { motion } from "framer-motion";

const BigText = ({ children, text = "ALIVE" }) => {
  const letters = text.split("");
  const random = (min, max) => Math.random() * (max - min) + min;

  return (
    <div className="relative h-screen flex items-center justify-center  bg-black">
      {/* Background Big Text */}
      <motion.div
        className="absolute  flex flex-col items-center justify-center text-white text-[10rem] md:text-[20rem] font-bold opacity-10 select-none pointer-events-none"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="leading-[0.8] tracking-[5rem]  transform rotate-90 "
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: index * 0.2,
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {children}
      </div>
    </div>
  );
};

export default BigText;
