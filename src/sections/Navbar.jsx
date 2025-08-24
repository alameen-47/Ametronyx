import React, { useState } from "react";
import { motion } from "framer-motion";
export const Navbar = () => {
  const [open, setOpen] = useState();
  return (
    <div className="flex justify-between align-middle   bg-gradient-to-r from-[#FFFFFF]   via-[#808080]  via-35% to-[#000000]  to-70% text-lg w-full p-[1.5%] ">
      <div className="LOGO flex  gap-4 align-middle  items-center">
        <div className="AX-Logo flex-shrink-0 w-[40%] sm:w-[40%]  lg:w-[300px] xl:w-[350px]">
          <svg
            className="w-full h-auto"
            viewBox="0 0 834 442"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M204.5 1L0.5 442H115L260 130L324 266H271.5L226.5 367.5H370.5L406 442H523L315.5 1H204.5Z"
              fill="url(#paint0_linear_1171_10)"
            />
            <path
              d="M540 0H414.5L559 214.5L506 289L559 397.5L619.5 310.5L708.5 441H834L540 0Z"
              fill="url(#paint1_linear_1171_10)"
            />
            <path
              d="M696.5 0L647.5 74L708.5 167L817 0H696.5Z"
              fill="url(#paint2_linear_1171_10)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1171_10"
                x1="17.5"
                y1="442"
                x2="280.5"
                y2="241.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#22D7EB" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1171_10"
                x1="558.5"
                y1="-240.5"
                x2="624.25"
                y2="441"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C61BC4" />
                <stop offset="1" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1171_10"
                x1="791"
                y1="1.75196e-06"
                x2="718.5"
                y2="140.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#25D4EB" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className="font-reemKulfi hidden md:!flex !text-xl md:!text-2xl tracking-[0.8rem]">
          AMETRONYX
        </h1>
      </div>
      <div className="hidden lg:!flex text-white font-reemKulfi">
        <ul className="uppercase flex  justify-center align-middle items-center text-center gap-3   lg:gap-10 xl:gap-30 md:text-lg lg:text-xl ">
          <li className="cursor-pointer flex  lg:hidden  text-sm  md:text-md lg:text-lg">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer flex  lg:hidden  text-sm  md:text-md lg:text-lg">
            <a href="#products">Products</a>
          </li>
          <li className="cursor-pointer flex  lg:hidden  text-sm  md:text-md lg:text-lg">
            <a href="#about">About</a>
          </li>
          <button className="uppercase cursor-pointer flex  lg:hidden  active:scale-95 transition transform  shadow-2 text-sm  md:text-md lg:text-lg text-center bg-gradient-to-r from-[#148293] via-[#093A41] to-[#000000] rounded-md px-3 py-1">
            <a href="#contact">Contact</a>
          </button>
        </ul>
      </div>
      <div className="relative  items-center align-middle justify-center">
        <div className="Hamburger_Menu   flex lg:!hidden justify-center align-middle items-center active:scale-95 transform duration-75 absolute top-4 right-4 md:top-10 z-80">
          <motion.svg
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
            stroke={open ? `black` : `white`}
            fill="white"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="2em"
            width="5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={{
                closed: { d: "M4  6h16M4 12h16M4 18h16" },
                open: { d: "M6 6L18 18M6 18L18 6" },
              }}
              animate={open ? "open" : "closed"}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></motion.path>
          </motion.svg>
        </div>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className=" absolute -top-1 -right-1 z-60 h-screen  p-20 py-30 flex flex-col justify-center items-center bg-white text-black"
          >
            <ul className="uppercase flex flex-col justify-center items-center text-center gap-10  font-reemKulfi">
              <li className="cursor-pointer text-xl ">
                <a href="#home"> Home</a>
              </li>
              <li className="cursor-pointer  text-xl">
                <a href="#products"> Products</a>
              </li>
              <li className="cursor-pointer text-xl">
                <a href="#about"> About</a>
              </li>
              <li className="cursor-pointer text-xl">
                <a href="#contact"> Contact</a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};
