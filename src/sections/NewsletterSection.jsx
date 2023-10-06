import { Input, Typography } from "@material-tailwind/react";
import React from "react";
import {
  FilledButton,
  OutlinedButton,
} from "../components/common/ButtonComponent";

const NewsletterSection = () => {
  return (
    <div class="container mx-auto">
      <section class="mb-20 text-center lg:text-left">
        <div class="flex flex-wrap justify-center">
          <div class="w-full shrink-0 grow-0 basis-auto">
            <div class="grid items-center gap-x-6 lg:grid-cols-2">
              <div class="mb-10 lg:mb-0">
                <h2 class="text-caption font-semibold font-body text-white">
                  Join our newsletter
                </h2>
                <p className="text-footer text-white font-light">
                  Get updated on the freshest news!
                </p>
              </div>

              <div class="mb-6 flex-row md:mb-0 md:flex justify-end">
                <div
                  class="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96"
                  data-te-input-wrapper-init
                >
                  <Input
                    label="Enter your email"
                    size="lg"
                    color="gray"
                    className="bg-white bg-none h-fit border-none"
                  />
                  <Typography
                    variant="small"
                    color="white"
                    className="mt-2 flex items-center gap-1 font-normal font-body"
                  >
                    By subscribing you agree to with our Privacy Policy.
                  </Typography>
                </div>
                <OutlinedButton color={"white"}>Subscribe</OutlinedButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;
