import React from "react";
import "./footer.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "../../assets/linkedin_icon.svg";
import TelegramIcon from "@material-ui/icons/Telegram";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import YouTubeIcon from "../../assets/youtube_icon.svg";
import EmailIcon from "@material-ui/icons/Email";
import { getYear } from "../../utils/utils";
import { PopupButton } from "react-calendly";

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
          <br />
          <a href="/#why_us" className="website-section-link">
            Why Us
          </a>
          <a href="/#our_services" className="website-section-link">
            Our Services
          </a>
          <a href="/#faqs" className="website-section-link">
            FAQs
          </a>
        </div>

        <div className="social-links">
          <span className="social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/TokenFlow_ai"
              className="social-link"
            >
              <TwitterIcon style={{ color: "#04ABED", fontSize: "2em" }} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/company/tokenflow-ai"
              className="social-link"
            >
              <img
                src={LinkedInIcon}
                alt="LinkedIn"
                style={{
                  width: "25px",
                  height: "25px",
                  margin: "0 5px",
                }}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com/channel/UClpnVlob8iQKsdg_Ih3HWFA"
              className="social-link"
            >
              <img
                src={YouTubeIcon}
                alt="YouTube"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/TokenFlow_ai"
              className="social-link"
            >
              <TelegramIcon
                style={{
                  color: "#219CD7",
                  fontSize: "2em",
                  marginRight: "5px",
                }}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:contact@tokenflow.ai"
              className="social-link"
            >
              <EmailIcon style={{ color: "#fff", fontSize: "2em" }} />
            </a>
          </span>
          <PopupButton
            url="https://calendly.com/tokenflow"
            rootElement={document.getElementById("root") as HTMLElement}
            text="Let's Talk"
            className="btn shadow-btn schedule-a-call-button"
          />
        </div>
      </div>

      <p className="copyright-text">
        &copy; {getYear()} TokenFlow. All rights reserved.
      </p>
    </div>
  );
};
