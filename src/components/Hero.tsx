import React from "react";
import "./hero.scss";
import { PopupButton } from "react-calendly";

type HeroProps = {
  children?: React.ReactNode;
};

export const Hero: React.FC<HeroProps> = (): JSX.Element => {
  return (
    <div className="intro-screen" id="tokenflow">
      <div className="intro-text">
        <h1 className="intro-title text-left mb-5 bold">
          Your Go-To Smart Contract Development Agency
        </h1>

        <p className="intro-description mb-5">
          At TokenFlow, we specialize in developing custom smart contracts
          tailored to your project's needs and requirements{" "}
          <strong>turning your vision into a reality.</strong>
          <br /> <br />
          With our deep expertise and commitment to excellence, we'll work with
          you every step of the way.{" "}
          <strong>If you can imagine it, we can build it!</strong>
        </p>

        <div className="intro-buttons">
          <PopupButton
            url="https://calendly.com/tokenflow"
            rootElement={document.getElementById("root") as HTMLElement}
            text="Schedule a FREE Call"
            className="btn shadow-btn mr-5 hero-btn"
          />
        </div>
      </div>

      <div className="intro-video">
        <iframe
          src="https://www.youtube.com/embed/nE7oMZyfsbY?autoplay=1&mute=1"
          title="TokenFlow Explainer Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mr-4 video promo-video"
          loading="lazy"
        />
      </div>
    </div>
  );
};
