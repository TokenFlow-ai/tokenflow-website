import React from "react";
import "./whyUs.scss";
import clientFocusedIcon from "../assets/client_focused.png";
import premiumQualityIcon from "../assets/premium_quality.png";
import transparentPricingIcon from "../assets/transparent_pricing.png";

type WhyUsProps = {
  children?: React.ReactNode;
};

export const WhyUs: React.FC<WhyUsProps> = (): JSX.Element => {
  return (
    <div
      className="key-features-container expanded-grid-container-6"
      id="why_us"
    >
      <h2 className="bold key-feats-title text-center mb-5 why-us-title">
        Why TokenFlow?
      </h2>

      <div className="key-features-why-us mb-5">
        <div className="key-feature">
          <div className="key-feat-icon text-center">
            <img
              width="100"
              height="100"
              src={clientFocusedIcon}
              alt="Client-Focused"
            />
          </div>
          <div className="key-feat-text">
            <h3 className="key-feat-title">Client-Focused</h3>
            <p className="key-feat-desc">
              From the initial consultation to the final product delivery, we
              work closely with you to gain{" "}
              <strong>
                a deep understanding of your desired goals and preferences.
              </strong>
              <br /> <br />
              This allows us to deliver{" "}
              <strong>
                personalized solutions that exceed your expectations
              </strong>{" "}
              and help you achieve your project's objectives.
            </p>
          </div>
        </div>

        <div className="key-feature">
          <div className="key-feat-icon text-center">
            <img
              width="100"
              height="100"
              src={premiumQualityIcon}
              alt="Premium Quality"
            />
          </div>
          <div className="key-feat-text">
            <h3 className="key-feat-title">Premium Quality</h3>
            <p className="key-feat-desc">
              As smart contracts are immutable,{" "}
              <strong>quality is of the utmost importance.</strong> We pay close
              attention to detail, test thoroughly and optimize performance.
              <br /> <br />
              We make sure that{" "}
              <strong>
                every contract we deliver is secure, reliable and scalable.
              </strong>{" "}
              You can trust us to deliver the results that you can be proud of.
            </p>
          </div>
        </div>

        <div className="key-feature last-feat">
          <div className="key-feat-icon text-center">
            <img
              width="100"
              height="100"
              src={transparentPricingIcon}
              alt="Transparent Pricing"
            />
          </div>
          <div className="key-feat-text">
            <h3 className="key-feat-title mt-4">Transparent Pricing</h3>
            <p className="key-feat-desc tp-pricing">
              We believe in honest and upfront communication. That's why{" "}
              <strong>we provide simple and transparent pricing</strong> to our
              clients.
              <br /> <br />
              Our pricing structure is clear, concise, and provides you with the{" "}
              <strong>
                upfront information on the project cost and timelines.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
