import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial } from "./common/Testimonial";
import "./testimonials.scss";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    arrows: true,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "50px 0" }}>
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
