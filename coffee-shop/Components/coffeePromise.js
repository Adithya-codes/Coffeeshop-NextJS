import React from "react";
import { CoffeePromiseArr as data } from "./constants";

export const CoffeePromise = () => {
  console.log(data);
  return (
    <section className="w-full text-center mt-32">
      <h1 className=" font-heading text-heading font-extrabold mb-16 text-4xl">
        {" "}
        A Coffee Promise{" "}
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2">
        {data.map((promise, idx) => {
            return(
          <div key={promise.title} className="Promise mb-16">
            <div className="flex justify-center promise-img xs:w-16">
              {" "}
              <img
                src={`../images/${promise.image}`}
                alt=""
                className="max-w-full mb-4 "
              />
            </div>

            <h2 className="text-heading font-medium xs:text-[1.7rem] mb-3">
              {promise.title}
            </h2>

            <article className="text-para font-light text-2xl sm:text-xl">
              {" "}
              {promise.text}{" "}
            </article>
          </div>
        )})}
      </div>
    </section>
  );
};
