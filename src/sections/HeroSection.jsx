import React from "react";
import { FilledButton } from "../components/common/ButtonComponent";

const HeroSection = () => {
  return (
    <div className="container relative isolate bg-hero bg-no-repeat bg-contain mx-auto max-w-full px-6 pt-14 lg:px-8">
      <div className="mx-auto">
        <div className="text-center mt-40">
          <h1 className="md:text-h1 sm:text-h1Mobile text-white font-heading drop-shadow-1xl">
            MIND BLOWING BITES
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <FilledButton color={"white"}>FIND LOCATION</FilledButton>
          </div>
          <div className="flex justify-center max-w-full">
            <img src="/images/Big Burger.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
