import React from "react";
import { BestsellersArr as data } from "../Components/constants";

export const Bestsellers = () => {
  return (
    <div className="w-full text-center mt-20">
      <h1 className="text-heading font-extrabold xs:text-4xl xs:mb-12">
        {" "}
        Bestsellers{" "}
      </h1>
      <div className="grid w-full xs:grid-cols-1 xs:gap-12">
        {data.map((card, idx) => {
          return (
            <div
              key={card.title}
              className="card border-2 border-transparent bg-white p-12 pb-4 rounded-lg"
              style={{ boxShadow: "0 2px 4px rgba(3,74,40,.15)" }}
            >
              <div className="image flex justify-center items-center mb-12">
                <img
                  src={`../images/${card.image}`}
                  alt=""
                  className="w-[10rem]"
                />
              </div>
              <h2 className="text-para  font-heading font-bold xs:text-3xl xs:mb-3">
                {card.title}
              </h2>
              <h3 className="font-heading font-medium xs:text-2xl">{card.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
