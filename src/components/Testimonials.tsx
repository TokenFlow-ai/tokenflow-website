import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial } from "./common/Testimonial";
import "./testimonials.scss";
import { useMediaQuery } from "react-responsive";

interface TestimonialData {
  logoURL: string;
  projectName: string;
  text: string;
  author?: string;
  position?: string;
  width?: number;
  height?: number;
}

interface TestimonialsProps {
  testimonials: TestimonialData[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const isTablet = useMediaQuery({
    query: "(min-width: 767px) and (max-width: 1100px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 2 : isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
  };

  return (
    <div className="testimonials-container">
      <h1 className="bold text-center testimonials-title">
        What Our Clients are Saying
      </h1>

      <Slider {...settings} className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            logoURL={testimonial.logoURL}
            projectName={testimonial.projectName}
            text={testimonial.text}
            author={testimonial.author}
            position={testimonial.position}
            width={testimonial.width}
            height={testimonial.height}
          />
        ))}
      </Slider>
    </div>
  );
};
