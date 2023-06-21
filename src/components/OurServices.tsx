import React from "react";
import "./ourServices.scss";
import token from "../assets/token.png";
import nft from "../assets/nft.png";
import custom from "../assets/custom.png";

export type OurServicesProps = {
  children?: React.ReactNode;
};

export const OurServices: React.FC<OurServicesProps> = (): JSX.Element => {
  return (
    <div className="pricing-card-main-container" id="our_services">
      <div className="pricing-card-text">
        <h1 className="pricing-card-title bold text-center">Our Services</h1>
      </div>

      <div className="our-services-intro">
        <div className="pricing-cards-container">
          <div className="pricing-card pricing-card-1">
            <img
              src={token}
              alt="Token Contract Development"
              className="pricing-card-image"
            />

            <h2 className="pricing-plan-title">Token Development</h2>

            <div className="plan-features">
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Custom-made token smart
                contract for your project
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Supported token
                standards: ERC20, BEP20, ERC777 & more
              </p>
            </div>
          </div>

          <div className="pricing-card pricing-card-1">
            <img
              src={nft}
              alt="NFT Contract Development"
              className="pricing-card-image"
            />

            <h2 className="pricing-plan-title">NFT Development</h2>

            <div className="plan-features">
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span> Custom-made
                NFT smart contract for your project
              </p>
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span> Supported
                token standards: ERC721, ERC1155 & more
              </p>
            </div>
          </div>

          <div className="pricing-card pricing-card-2">
            <img
              src={custom}
              alt="Custom Smart Contract Development"
              className="pricing-card-image"
            />

            <h2 className="pricing-plan-title">Custom Development</h2>

            <div className="plan-features">
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> 80+ types of{" "}
                <a
                  href="/contract_types.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-link"
                  title="Smart Contract Types Supported by TokenFlow"
                >
                  custom smart contracts
                </a>{" "}
                that we can build for you
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Your vision, our
                expertise: If you can imagine it, we can build it!
              </p>
            </div>
          </div>
        </div>

        <p className="our-services-intro-text">
          We provide full-service smart contract development with benefits which
          include:
        </p>

        <div className="intro-features">
          <div className="intro-features-subcontainer">
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> 100% test coverage
            </p>
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> Full contract
              documentation
            </p>
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> Testnet & mainnet
              deployment
            </p>
          </div>
          <div className="intro-features-subcontainer">
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> 24/7 email & Telegram
              support
            </p>
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> Weekly updates on the
              project progress
            </p>
            <p className="intro-feature">
              <span className="pricing-tick">✔</span> Free code revision in case
              of any issues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
