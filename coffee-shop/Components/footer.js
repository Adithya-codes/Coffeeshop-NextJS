import React from "react";

export const Footer = () => {
  return (
    <div className="w-full text-center rounded-sm p-4 inset-0 xs:mt-12">
      <h2 className=' text-heading font-medium xs:text-2xl mb-8'> The Coffeeshop </h2>
      <div className="w-full flex justify-around">
        {" "}
        <a href="">
          <img src="../images/facebook.png" className="w-[2rem]" alt="" />
        </a>
        <a href="">
          <img src="../images/instagram.png" className="w-[2rem]" alt="" />
        </a>
        <a href="/">
          <img src="../images/twitter.png" className="w-[2rem]" alt="" />
        </a>{" "}
      </div>
    </div>
  );
};
