import React from "react";
import { motion } from "framer-motion";
import logo1 from "/src/assets/illustrations/logo.svg";
export const Hero = () => {
  return (
    <div className="relative flex w-full h-screen bg-black overflow-hidden">
      <motion.img
        src={logo1}
        alt="background logo"
        className="absolute top-0 right-0 !md:w-[80%] md:h-auto h-screen w-screen  opacity-40 pointer-events-none z-40 object-cover"
        animate={{ scale: [1, 1.05, 1], x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="px-[10%] flex flex-col  justify-center z-50">
        <p className="text-white/30 font-reemKulfi tracking-[0.8rem] text-lg md:text-xl">
          AMETRONYX
        </p>
        <h1 className="TITLE  font-bold font-edosz text-5xl lg:text-7xl  text-white">
          Innovative Digital Products
          <br /> for Web & Mobile
        </h1>
        <h3 className="text-white/60 font-poppins tracking-wider text-xl lg:text-3xl">
          Transform your business with <br /> our cutting-edge products
        </h3>
        <div className="BUTTONS__ mt-[2rem] flex align-middle items-center gap-[5%] ">
          <button className="animate-pulse   bg-gradient-to-br from-[#F323C5] from-[25%] via-[#1F68A3] via-[64%] to-[#000000] p-[2%] lg:p-[1%] rounded-lg text-white text-xl font-reemKulfi font-semibold p-2 active:scale-95 transform duration-10">
            <a href="#products">PRODUCTS</a>
          </button>
          <button className=" border-2 shadow-2xl border-[#0f80dd]  p-[2%] lg:p-[1%] rounded-lg text-white text-xl font-poppins font-semibold p-2 hover:bg-[#0f80dd] hover:text-black font-reemKulfi  active:scale-95 transform duration-100">
            <a href="#contact">CONTACT</a>
          </button>
        </div>
      </div>
    </div>
  );
};
