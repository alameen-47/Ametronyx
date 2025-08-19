import React from "react";
import ecommerce from "../assets/icons/ecommerce.png";
import credi8 from "../assets/icons/Credit.png";
import customApps from "../assets/icons/Apps.png";
import graph1 from "../assets/illustrations/graph.svg";
export const Products = () => {
  return (
    <>
      <div className="products-container  ">
        <div className="LEFT w-full flex flex-col lg:flex-row gap-[1rem]">
          <div className="cursor-pointer hover:bg-white/10 bg-white/5  rounded-xl p-[1rem] flex  gap-[3rem] align-middle items-center ">
            <img src={ecommerce} className="w-[5rem] " alt="E-Commerce" />
            <h3 className="text-white font-poppins text-lg md:text-xl lg:text-3xl">
              Full-Stack ,<br />
              E-Commerce Sites.
            </h3>
          </div>
          <div className="cursor-pointer hover:bg-white/10 bg-white/5  rounded-xl p-[1rem] flex  gap-[3rem] align-middle items-center ">
            <img src={credi8} className="w-[5rem] " alt="E-Commerce" />
            <h3 className="text-white font-poppins text-lg md:text-xl lg:text-3xl">
              CREDI8 ,<br />
              Credit Calls Management App.
            </h3>
          </div>
          <div className="cursor-pointer hover:bg-white/10 bg-white/5  rounded-xl p-[1rem] flex  gap-[3rem] align-middle items-center ">
            <img src={customApps} className="w-[5rem] " alt="E-Commerce" />
            <h3 className="text-white font-poppins text-lg md:text-xl lg:text-3xl">
              Bill47,
              <br />
              Billing Made Simple.
            </h3>
          </div>
          <div className="cursor-pointer hover:bg-white/10 bg-white/5  rounded-xl p-[1rem] flex  gap-[3rem] align-middle items-center ">
            <img src={customApps} className="w-[5rem] " alt="E-Commerce" />
            <h3 className="text-white font-poppins text-lg md:text-xl lg:text-3xl">
              Custom Websites,
              <br />
              Mobile Apps (Android & iOS).
            </h3>
          </div>
        </div>
        <div className="RIGHT w-full flex h-full ">
          <img className="w-[60%]" src={graph1} alt="downloads" />
        </div>
      </div>
      {/* MAIN DIV FLEX ISSUE FIXED USING CSS ONLY */}
      <style>{`
  .products-container {
    display: flex;
    flex-direction: column;   /* default: column for small screens */
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100vh;
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
