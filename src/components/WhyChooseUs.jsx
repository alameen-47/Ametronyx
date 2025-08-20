import React from "react";
import sheild from "../assets/icons/sheild.svg";
import star from "../assets/icons/star.svg";
import globe from "../assets/icons/globe.svg";
import rocket from "../assets/icons/rocket.svg";
export const WhyChooseUs = () => {
  return (
    <div className=" w-full flex">
      <div className=" flex justify-center align-middle items-center">
        <img src={sheild} alt="secure" className="w-[20%] animate-pulse " />
        <p className="font-bold text-white/70 text-xs md:text-2xl">
          Secure <br /> Horizon
        </p>
      </div>
      <div className=" flex justify-center align-middle items-center">
        <img src={star} alt="star" className="w-[20%] animate-pulse " />
        <p className="font-bold text-white/70 text-xs md:text-2xl">
          Expert <br /> Support
        </p>
      </div>
      <div className=" flex justify-center align-middle items-center">
        <img src={globe} alt="globe" className="w-[20%] animate-pulse " />
        <p className="font-bold text-white/70 text-xs md:text-2xl">
          Global <br /> Reach
        </p>
      </div>
      <div className=" flex justify-center align-middle items-center">
        <img src={rocket} alt="rocket" className="w-[20%] animate-pulse " />
        <p className="font-bold text-white/70 text-xs md:text-2xl">
          Boost <br /> Perfomance
        </p>
      </div>
    </div>
  );
};
