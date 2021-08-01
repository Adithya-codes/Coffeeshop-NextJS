import React from "react";
import { Button } from "./button";

export const Hero = () => {
  return (
    <div className="hero-section flex w-full xs:flex-wrap sm:flex-nowrap sm:items-center sm:justify-between xl:justify-center xl:ml-20 ">
      <div className="hero-content flex flex-col ">
        <h1 className="font-heading text-heading font-extrabold xs:text-5xl sm:text-7xl xl:text-8xl  mb-3 ">
          {" "}
          Let's coffee{" "}
        </h1>
        <h2 className="font-heading text-para font-bold xs:text-[1.7rem] sm:text-2xl xl:text-3xl">
          {" "}
          A lot can happen over a coffee.{" "}
        </h2>
        <div>
          {" "}
          <Button text="Order Now" />
        </div>
      </div>

      <div className="hero-image w-full mt-24 sm:w-6/12 sm:mt-0">
        <img src="../images/coffeeIcon.png" alt="" className="" />
      </div>
    </div>
  );
};
