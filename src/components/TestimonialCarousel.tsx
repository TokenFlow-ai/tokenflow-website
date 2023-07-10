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
}

interface TestimonialCarouselProps {
  testimonials: TestimonialData[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
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
    autoplaySpeed: 400000,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
  };

  return (
    <div
      style={{ width: "100vw", margin: "0 auto", padding: "50px 0" }}
      className="testimonials-container"
    >
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
          />
        ))}
      </Slider>
    </div>
  );
};
