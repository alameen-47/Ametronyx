import React from "react";
import ecommerce from "../assets/icons/ecommerce.png";
import credi8 from "../assets/icons/Credit.png";
import customApps from "../assets/icons/Apps.png";
import bill47 from "../assets/icons/bill47.svg";
import downloads from "../assets/icons/downloads.svg";
import up from "../assets/icons/up.svg";
import graph1 from "../assets/illustrations/graph.svg";
import graph2 from "../assets/illustrations/graph2.svg";
export const Products = () => {
  return (
    <>
      <div className="products-container  ">
        <div className="LEFT w-full flex flex-col lg:flex-row gap-[1rem]">
          <div className="cursor-pointer hover:bg-white/10 bg-white/5 min-w-[10rem]  rounded-xl p-[1rem] flex gap-[2rem] md:gap-[3rem] align-middle items-center ">
            <img
              src={ecommerce}
              className="w-[4rem] md:w-[5rem] l"
              alt="E-Commerce"
            />
            <h3 className="text-white font-poppins min-h-[5rem]  text-sm md:text-xl lg:text-2xl flex justify-center align-middle items-center">
              Full-Stack ,<br />
              E-Commerce Sites.
            </h3>
          </div>
          <div className="cursor-pointer hover:bg-white/10 bg-white/5 min-w-[10rem]  rounded-xl p-[1rem] flex gap-[2rem] md:gap-[3rem] align-middle items-center ">
            <img
              src={credi8}
              className="w-[4rem] md:w-[5rem] l"
              alt="E-Commerce"
            />
            <h3 className="text-white font-poppins min-h-[5rem]  text-sm md:text-xl lg:text-2xl flex justify-center align-middle items-center">
              CREDI8 ,<br />
              Credit Calls Management App.
            </h3>
          </div>
          <div className="cursor-pointer hover:bg-white/10 bg-white/5 min-w-[10rem]  rounded-xl p-[1rem] flex gap-[2rem] md:gap-[3rem] align-middle items-center ">
            <img
              src={bill47}
              className="w-[4rem] md:w-[5rem] l"
              alt="E-Commerce"
            />
            <h3 className="text-white font-poppins min-h-[5rem]  text-sm md:text-xl lg:text-2xl flex justify-center align-middle items-center">
              Bill47,
              <br />
              Billing Made Simple.
            </h3>
          </div>
          <div className="cursor-pointer hover:bg-white/10 bg-white/5 min-w-[10rem]  rounded-xl p-[1rem] flex gap-[2rem] md:gap-[3rem] align-middle items-center ">
            <img
              src={customApps}
              className="w-[4rem] md:w-[5rem] l"
              alt="E-Commerce"
            />
            <h3 className="text-white font-poppins min-h-[5rem]  text-sm md:text-xl lg:text-2xl flex justify-center align-middle items-center">
              Custom Websites,
              <br />
              Mobile Apps (Android & iOS).
            </h3>
          </div>
        </div>
        <div className="RIGHT w-full flex h-full flex-col justify-center align-middle items-center gap-[1rem]">
          <div className="flex justify-center align-middle items-center gap-[5%] px-[20%]">
            <div className="DOWNLOADS bg-white/10 min-h-[2rem] min-w-[7rem]  flex flex-col rounded-2xl p-[.5rem] md:p-[.1rem] ">
              <p className="text-white/60 xl:text-2xl text-center ">
                Downloads
              </p>
              <div className="text-white flex justify-center align-middle items-center ">
                <img
                  className="w-[13%] h-auto"
                  src={downloads}
                  alt="downloads"
                />
                <p className="text-white text-lg sm:text-xl xl:text-3xl font-extrabold text-center ">
                  14.4K
                </p>
              </div>
            </div>
            <div className="GROWTH_RATE bg-white/10 min-h-[2rem] min-w-[7rem]  flex flex-col rounded-2xl p-[.5rem] md:p-[.1rem] ">
              <p className="text-white/60 D xl:text-2xl text-center ">
                Growth Rate
              </p>
              <div className="text-white flex justify-center align-middle items-center ">
                <img className="w-[13%] h-auto" src={up} alt="downloads" />
                <p className="text-white text-lg sm:text-xl xl:text-3xl font-extrabold text-center ">
                  200.7%
                </p>
              </div>
            </div>
          </div>
          <img
            className="min-w-[20rem]  w-[60%] h-[35%]"
            src={graph1}
            alt="downloads"
          />
          <img
            className="min-w-[20rem]   w-[60%] h-[35%]"
            src={graph2}
            alt="downloads"
          />
        </div>
      </div>
      <></>
      <></>
      {/* MAIN DIV FLEX ISSUE FIXED USING CSS ONLY */}
      <style>{`
  .products-container {
    display: flex;
    flex-direction: column;   /* default: column for small screens */
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100;
    background-color: black;
    padding: 0 5rem;
  }

  @media (min-width: 1024px) {
    .products-container {
      flex-direction: row;   /* row layout for large screens */
    }
  }
`}</style>
      ;
    </>
  );
};
