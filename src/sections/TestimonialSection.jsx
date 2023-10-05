import React from "react";
import { TESTIMONIALS_DATA } from "../utils/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const TestimonialSection = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 15000,
    cssEase: "linear",
    dots: true,
  };

  return (
    <div className="my-24 mx-auto md:px-6 py-[75px]">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-heading text-h2 text-white drop-shadow-1xl">
          Hear the hype
        </h2>

        <div className="">
          <Slider {...settings}>
            {TESTIMONIALS_DATA.map((item) => (
              <Card key={item.index} className="mt-12 mb-20">
                <CardHeader className="relative mx-auto max-w-fit rounded-full">
                  <img src={item.img} alt="card-image" className="w-full" />
                </CardHeader>
                <CardBody className="text-black">
                  <Typography className="font-body text-body1">{item.desc}</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 font-heading font-normal text-caption"
                  >
                    {item.name}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
