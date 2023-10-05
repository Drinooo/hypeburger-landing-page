import React from "react";
import { FilledButton } from "../components/common/ButtonComponent";

const CTASection = () => {
  return (
    <section className="bg-primary bg-contain bg-no-repeat py-[75px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-full text-center text-white">
          <h2 className="mb-4 text-h2 font-normal font-heading drop-shadow-1xl">
            TASTE THE HYPE
          </h2>
          <p className="mb-6 font-medium font-body text-caption">
            Come visit us at your local HYPEBURGER location
          </p>
          <FilledButton color={"white"}>FIND A LOCATION</FilledButton>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
