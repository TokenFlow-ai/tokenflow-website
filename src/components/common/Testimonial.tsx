import React from "react";
import "./testimonial.scss";

interface TestimonialProps {
  logoURL: string;
  projectName: string;
  text: string;
  author?: string;
  position?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  logoURL,
  projectName,
  text,
  author,
  position,
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-logo">
        <img
          src={logoURL}
          alt={projectName}
          title={projectName}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            margin: "20px auto 20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
      <h4 className="testimonial-title">{projectName}</h4>
      <p
        className="testimonial-text"
        style={{ fontStyle: "italic", fontSize: "0.95em" }}
      >{`"${text}"`}</p>
      {/* <h5>{author}</h5>
      <p>{position}</p> */}
    </div>
  );
};
