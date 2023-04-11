import React from "react";
import "./theTeam.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import mihailo from "../assets/mihailo_small.png";
import andela from "../assets/andela_small.png";

type TheTeamProps = {
  children?: React.ReactNode;
};

export const TheTeam: React.FC<TheTeamProps> = (): JSX.Element => {
  return (
    <div className="the-team-container">
      <div className="the-team-title-container">
        <p className="the-team-subtitle">Behind TokenFlow</p>
        <h2 className="the-team-title">The Team</h2>
      </div>

      <div className="team-members-container">
        <div className="team-member team-member-mihailo">
          <img className="team-member-image" src={mihailo} alt="Team Member" />
          <div className="team-member-info">
            <h3 className="team-member-name">Mihailo Maksa</h3>
            <p className="team-member-position text-muted">
              VP of Blockchain Engineering
            </p>
            <div className="team-member-socials">
              <a
                className="team-member-social"
                href="https://twitter.com/MihailoMaksa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon style={{ color: "#04ABED", fontSize: "2em" }} />
              </a>
              <a
                className="team-member-social"
                href="https://linkedin.com/in/mihailomaksa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ color: "#0177B7", fontSize: "2em" }} />
              </a>
            </div>
            <div className="team-member-description">
              Mihailo is a highly skilled smart contract engineer with over 4
              years of experience in the development of DeFi protocols, NFT
              contracts, DAOs and various different dApps and web3 applications.
              <br /> <br />
              He is responsible for managing the delivery of work to our clients
              in a timely manner, and has a proven track record of delivering
              secure contracts that have been audited and approved by reputable
              security firms.
            </div>
          </div>
        </div>

        <div className="team-member">
          <img className="team-member-image" src={andela} alt="Team Member" />
          <div className="team-member-info">
            <h3 className="team-member-name">Andela Bobic</h3>
            <p className="team-member-position text-muted">
              Head of Business Development
            </p>
            <div className="team-member-socials">
              <a
                className="team-member-social"
                href="https://twitter.com/andela_bobic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon style={{ color: "#04ABED", fontSize: "2em" }} />
              </a>
              <a
                className="team-member-social"
                href="https://www.linkedin.com/in/andelabobic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ color: "#0177B7", fontSize: "2em" }} />
              </a>
            </div>
            <div className="team-member-description">
              Andela's extensive experience in crypto startup scene and
              strategic vision have enabled her to identify new business
              opportunities and develop innovative solutions to meet the needs
              of clients.
              <br /> <br />
              With her strong leadership skills and dedication to excellence,
              she plays a pivotal role in driving the growth and expansion of
              the company's client base. #Women in Blockchain
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
