import React from "react";

export const Contact = () => {
  return (
    <div className="   z-40 w-screen md:w-[50%] text-white flex justify-center align-middle items-center m-auto">
      <div className="    rounded-3xl bg-gradient-to-br from-[#00d1fb]   via-[#e402b3]  via-35% to-[#000000]  shadow-2xl shadow-white/30 md:w-[70%]  flex flex-col justify-center align-middle items-center p-[.1%] ">
        <div className="bg-black inset-0 rounded-3xl gap-[1rem] w-full h-full flex  flex-col justify-center align-middle items-center lg:p-[1rem]   py-[2rem] px-[1rem] md:py-0 md:px-0">
          <h1 className="TITLE  font-bold text-[2rem] md:!text-[4.5rem] font-edosz text-white">
            Get in touch
          </h1>
          <span className="font-poppins font-regular text-white/50">
            We'd love to hear from you.
          </span>
          <div className="flex flex-col justify-center align-middle items-center gap-2.5">
            <div className="flex flex-col">
              <label className="text-[.7rem] md:text-lg">Name</label>
              <input className="border rounded-md md:w-[20rem] bg-white/10" />
            </div>
            <div className="flex flex-col">
              <label className="text-[.7rem] md:text-lg">Email</label>
              <input className="border rounded-md md:w-[20rem] bg-white/10" />
            </div>
            <div className="flex flex-col">
              <label className="text-[.7rem] md:text-lg">Message</label>
              <input className="border rounded-md md:w-[20rem] h-[5rem] md:h-[10rem] bg-white/10" />
            </div>
            <button className="text-sm md:text-xl uppercase font-reemKulfi rounded-xl border  border-blue-400 p-[.4rem] md:px-[2rem] tracking-wider bg-gradient-to-r  from-[#00d1fb]     to-[#000000]  hover:bg-white/30 active:scale-95 transform duration-100">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
