import { Input, Typography } from "@material-tailwind/react";
import React from "react";
import { FilledButton } from "../components/common/ButtonComponent";

const NewsletterSection = () => {
  return (
    <div className="container max-w-full mx-auto mt-12">
      <section className="mb-32 text-center lg:text-left">
        <div className="flex flex-wrap justify-center">
          <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
            <div className="grid gap-x-6 lg:grid-cols-2">
              <div className="mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold text-white text-footer">
                  Join our newsletter
                </h2>
                <p className="text-white text-caption2 font-body font-light">
                  Get updated on the freshest news!
                </p>
              </div>

              <div className="mb-6 flex-row md:mb-0 md:flex justify-end">
                <div className="" data-te-input-wrapper-init>
                  <div className="w-full pr-[16px]">
                    <Input
                      type="text"
                      color="gray"
                      size="lg"
                      label="Enter your email"
                      className="bg-white border-none"
                    />
                    <Typography
                      variant="small"
                      color="gray"
                      className="mt-2 flex items-center gap-1 font-normal font-body text-white"
                    >
                      By subscribing you agree to with our Privacy Policy
                    </Typography>
                  </div>
                </div>
                <FilledButton color={"white"}>Subscribe</FilledButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;
