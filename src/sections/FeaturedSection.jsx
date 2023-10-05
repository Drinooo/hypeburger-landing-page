import React, { Fragment } from "react";
import { FEATURED_DATA } from "../utils/Data";
import { FilledButton } from "../components/common/ButtonComponent";

const FeaturedSection = () => {
  return (
    <div className="bg-primary bg-contain bg-no-repeat text-center mx-auto py-[75px]">
      <div className="container mx-auto space-y-20">
        <div className="mb-8 lg:mb-16">
          <p className="text-caption font-body text-white">Made with love</p>
          <h2 className="mb-4 text-h2 text-white drop-shadow-1xl font-normal font-heading">
            Featured Burgers
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {FEATURED_DATA.map((item) => (
            <div className="border-2 rounded-3xl border-white">
              <div className="flex justify-center">
                <img src={item.img} alt="" />
              </div>
              <div className="grid grid-cols-2 text-center">
                <h3 className="mb-2 text-h3 font-heading text-white">
                  {item.title}
                </h3>
                <h3 className="mb-2 text-h3 font-heading text-white">
                  {item.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <FilledButton color={"white"}>VIEW ALL</FilledButton>
      </div>
    </div>
  );
};

export default FeaturedSection;
