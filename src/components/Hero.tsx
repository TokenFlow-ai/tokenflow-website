import React from "react";
import "./hero.scss";
import { useMediaQuery } from "react-responsive";

type HeroProps = {
  children?: React.ReactNode;
};

export const Hero: React.FC<HeroProps> = (): JSX.Element => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 350px)" });

  return (
    <div className="intro-screen" id="tokenflow">
      <div className="intro-text">
        <h1 className="intro-title text-left mb-5 bold">
          Your Premium Smart Contract Development Agency
        </h1>

        <p className="intro-description mb-5">
          At TokenFlow, we create custom smart contracts to meet all of your
          project's needs and requirements and to help{" "}
          <strong>turn your vision into a reality.</strong>
          <br /> <br />
          With our deep expertise and commitment to excellence, we'll work with
          you every step of the way.{" "}
          <strong>If you can imagine it, we can build it!</strong>
        </p>

        <div className="intro-buttons">
          <button
            className="btn shadow-btn mr-5 hero-btn"
            type="button"
            style={{
              width: isSmallScreen ? "100px" : "",
              fontSize: isSmallScreen ? "1.1rem" : "",
            }}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
              href="https://calendly.com/tokenflow"
              style={{
                fontSize: isSmallScreen ? "0.97rem" : "1.2rem",
              }}
            >
              Schedule a Call
            </a>
          </button>
        </div>
      </div>

      <div className="intro-video">
        <iframe
          src="https://www.youtube.com/embed/NpEaa2P7qZI"
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mr-4 video promo-video"
        />
      </div>
    </div>
  );
};
