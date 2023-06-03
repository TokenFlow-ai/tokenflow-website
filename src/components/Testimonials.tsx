import React from "react";
import "./testimonials.scss";
import { Testimonial } from "./common/Testimonial";

type TestimonialsProps = {
  children?: React.ReactNode;
};

export const Testimonials: React.FC<TestimonialsProps> = (): JSX.Element => {
  return (
    <div className="testimonials-container">
      <Testimonial />
      <Testimonial />
      <Testimonial />
    </div>
  );
};
