import React, { Fragment } from "react";
import { ABOUT_DATA } from "../utils/Data";
import { FilledButton } from "../components/common/ButtonComponent";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import BannerSection from "./BannerSection";

const AboutSection = () => {
  return (
    <Fragment>
      <div className="mx-auto bg-secondary">
        <div className="">
          <img src="/images/Banner/Tape.png" alt="" className="w-full" />
        </div>
        <section className="mb-32 text-center py-[75px]">
          <p className="text-caption text-white font-body font-normal">
            Happiness in your hands
          </p>
          <h2 className="mb-16 md:text-h2 sm:text-h2Mobile text-white font-heading font-normal drop-shadow-1xl">
            Feel The Hype
          </h2>
          <div className="container mx-auto grid gap-x-6 md:grid-cols-3 lg:gap-x-12 sm:gap-y-12">
            {ABOUT_DATA.map((item) => (
              <Card className="bg-primary">
                <CardBody className="text-white space-y-6">
                  <div className="flex justify-center">
                    <img src={item.img} alt="" />
                  </div>
                  <Typography className="text-white text-h4 font-normal font-heading">
                    {item.title}
                  </Typography>
                  <Typography variant="body" className="text-body1 font-body">
                    {item.desc}
                  </Typography>
                </CardBody>
                <CardFooter className="">
                  <FilledButton color="white">Learn More</FilledButton>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AboutSection;
