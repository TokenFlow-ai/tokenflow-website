import React from "react";
import "./testimonial.scss";

type TestimonialProps = {
  children?: React.ReactNode;
};

export const Testimonial: React.FC<TestimonialProps> = (): JSX.Element => {
  return <div className="testimonial"></div>;
};
