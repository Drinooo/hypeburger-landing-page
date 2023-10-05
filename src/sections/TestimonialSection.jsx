import React from "react";
import { TESTIMONIALS_DATA } from "../utils/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";

const TestimonialSection = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    dots: true,
  };

  return (
    <div className="my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

        <div className="">
          <Slider {...settings}>
            {TESTIMONIALS_DATA.map((item) => (
              <Card className="mt-6 w-96">
                <CardHeader className="relative mx-auto max-w-fit rounded-full">
                  <img
                    src={item.img}
                    alt="card-image"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {item.name}
                  </Typography>
                  <Typography>
                    {item.desc}
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
