import React from "react";
import { motion } from "framer-motion";

const BigText = ({ children, text = "ALIVE", repeat = 10 }) => {
  const letters = text.split("");

  return (
    <div className="relative  flex items-center justify-center bg-black overflow-hidden">
      {/* Background Moving Text */}
      <div className="absolute flex flex-col items-center justify-center -rotate-45">
        {Array.from({ length: repeat }).map((_, row) => (
          <motion.div
            key={row}
            className="flex space-x-12 text-white text-[8rem] rounded-2xl md:text-[14rem] font-extrabold opacity-10 select-none border-2 border-dashed border-blue-300"
            initial={{ x: -100, y: -100 }}
            animate={{ x: 100, y: 100 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: row * 0.5, // stagger each line
            }}
          >
            {letters.map((letter, index) => (
              <span key={index} className="tracking-[2rem]">
                {letter}
              </span>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {children}
      </div>
    </div>
  );
};

export default BigText;
