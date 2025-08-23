import React from "react";
import about from "../assets/illustrations/about.svg";
import star from "../assets/icons/neonStar.svg";
export const About = () => {
  return (
    <div className="   z-40 h-screen w-screen text-white flex justify-center align-middle items-center m-auto">
      <div className="    rounded-3xl bg-gradient-to-br from-[#00d1fb]   via-[#e402b3]  via-35% to-[#000000]  shadow-2xl shadow-white/30 w-[70%]  flex flex-col justify-center align-middle items-center p-[.1%]">
        <div className="bg-black inset-0 rounded-3xl gap-[1rem] w-full h-full flex  flex-col justify-center align-middle items-center lg:p-[1rem]   py-[2rem] px-[1rem] md:py-0 md:px-0">
          <h1 className="TITLE  font-bold text-[2rem] md:!text-[4.5rem] font-edosz text-white">
            OUR MISSION
          </h1>
          <div className="flex flex-col md:!flex-row  w-full  md:py-[5rem] ">
            <div className="LEFT  w-full flex  flex-col justify-center align-middle items-center">
              <img className="w-[70%]" src={about} alt="about svg" />
              <h1 className="uppercase font-edosz flex justify-center align-middle items-center text-center lg:text-xl py-[.5rem]">
                Simple CRM ,
                <br />
                smarter buisness
              </h1>
            </div>
            <div className="RIGHT flex m-auto justify-center align-middle item-center w-full">
              <ul className=" flex flex-col gap-4 justiy-center align-middle item-center text-sm lg:text-lg ">
                <li className="flex gap-1 items-center">
                  <img src={star} className="w-5 h-5" alt="star" />
                  Easy to use – One platform for sales & support.
                </li>
                <li className="flex gap-1 items-center">
                  <img src={star} className="w-5 h-5" alt="star" />
                  Merchant-first – Saves time, cuts complexity.
                </li>
                <li className="flex gap-1 items-center">
                  <img src={star} className="w-5 h-5" alt="star" />
                  Customer-focused – Smooth communication , happy clients.
                </li>
                <li className="flex gap-1 items-center">
                  <img src={star} className="w-5 h-5" alt="star" />
                  Built to grow – Scales with your business.
                </li>
                <li className="flex gap-1 items-center">
                  <img src={star} className="w-5 h-5" alt="star" />
                  Insights at a glance – Track sales and customer data easily.
                </li>
                <li className="flex gap-1 items-center">
                  <img src={star} className="w-5 h-5" alt="star" />
                  Anywhere, anytime – Access your CRM on web and mobile.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
