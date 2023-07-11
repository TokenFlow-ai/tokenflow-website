import React from "react";
import "./testimonial.scss";

interface TestimonialProps {
  logoURL: string;
  projectName: string;
  text: string;
  author?: string;
  position?: string;
  width?: number;
  height?: number;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  logoURL,
  projectName,
  text,
  author,
  position,
  width,
  height,
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-logo">
        <img
          src={logoURL}
          alt={projectName}
          title={projectName}
          style={{
            width: width,
            height: height,
          }}
        />
      </div>
      <h4 className="testimonial-title">{projectName}</h4>
      <p className="testimonial-text">{`"${text}"`}</p>
      {/* <h5>{author}</h5>
      <p>{position}</p> */}
    </div>
  );
};
