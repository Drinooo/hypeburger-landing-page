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
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "100px",
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="my-24 mx-auto">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-heading md:text-h2 sm:text-h2Mobile text-white drop-shadow-1xl">
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
                  <Typography className="font-body md:text-body1 sm:text-body2">{item.desc}</Typography>
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
