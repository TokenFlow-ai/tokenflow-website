import React from "react";
import "./footer.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";
import { getYear } from "../../utils/utils";

type FooterProps = {
  children?: React.ReactNode;
};

export const Footer: React.FC<FooterProps> = (): JSX.Element => {
  return (
    <div className="links-container pt-5">
      <h2 className="footer-slogan text-center bold">
        If you can imagine it, we can build it!
      </h2>

      <div className="footer-links">
        <div className="website-sections-links">
          <a href="/#tokenflow" className="website-section-link">
            TokenFlow
          </a>
          <a href="/#why_us" className="website-section-link">
            Why Us
          </a>
          <a href="/#our_services" className="website-section-link">
            Our Services
          </a>
          <a href="/#faqs" className="website-section-link">
            FAQs
          </a>
          <a href="/#supported_chains" className="website-section-link">
            Supported Chains
          </a>
        </div>

        <div className="social-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/TokenFlow_ai"
            className="social-link"
          >
            <TwitterIcon style={{ color: "#04ABED", fontSize: "2em" }} />
            <span className="ml-2 mr-5 icon-text">Twitter</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/tokenflow_ai"
            className="social-link"
          >
            <TelegramIcon style={{ color: "#219CD7", fontSize: "2em" }} />
            <span className="ml-2 mr-5 icon-text">Telegram</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:contact@tokenflow.ai"
            className="social-link"
          >
            <EmailIcon style={{ color: "#fff", fontSize: "2em" }} />
            <span className="ml-2 mr-5 icon-text">contact@tokenflow.ai</span>
          </a>

          <button className="btn shadow-btn schedule-a-call-button">
            <a
              href="https://calendly.com/tokenflow"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                color: "white",
              }}
            >
              Schedule a Call
            </a>
          </button>
        </div>
      </div>

      <p className="copyright-text">
        &copy; {getYear()} TokenFlow. All rights reserved.
      </p>
    </div>
  );
};
