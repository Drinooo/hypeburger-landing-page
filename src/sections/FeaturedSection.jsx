import React from "react";
import { FEATURED_DATA } from "../utils/Data";

const FeaturedSection = () => {
  return (
    <section class="max-w-full mx-auto bg-featured bg-contain bg-no-repeat">
      <div class="container py-8 px-4 mx-auto sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <p class="text-caption font-body text-white">Made with love</p>
          <h2 class="mb-4 text-h2 text-white drop-shadow-1xl font-normal">
            Featured Burgers
          </h2>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {FEATURED_DATA.map((item) => (
            <div>
              <div class="flex justify-center items-center mb-4 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img src={item.img} alt="" />
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">{item.title}</h3>
              <h3 class="mb-2 text-xl font-bold dark:text-white">{item.price}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
