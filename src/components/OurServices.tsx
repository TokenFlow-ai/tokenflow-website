import React from "react";
import { PopupButton } from "react-calendly";
import "./ourServices.scss";

export type OurServicesProps = {
  children?: React.ReactNode;
};

export const OurServices: React.FC<OurServicesProps> = (): JSX.Element => {
  return (
    <div id="our_services">
      <div className="pricing-card-main-container">
        <div className="pricing-card-text">
          <h1 className="pricing-card-title bold text-center">Our Services</h1>
        </div>

        <div className="pricing-cards-container">
          <div className="pricing-card pricing-card-1">
            <h2 className="pricing-plan-title">Token Contract Development</h2>

            <p className="plan-price-container price-card-1">
              <span className="plan-price">starting from $10,000</span>{" "}
            </p>

            <div className="plan-features">
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Custom-built token
                contract for your project
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Supported token
                standards: ERC20, BEP20, ERC777 & more
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> 100% test coverage
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Full contract
                documentation
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Testnet & mainnet
                deployment
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> 24/7 email & Telegram
                support
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Weekly updates on the
                project progress
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> One free code revision
                in case of any issues
              </p>
            </div>

            <PopupButton
              url="https://calendly.com/tokenflow"
              rootElement={document.getElementById("root") as HTMLElement}
              text="Schedule a Call"
              className="btn shadow-btn pricing-btn"
            />
          </div>

          <div className="pricing-card pricing-card-1">
            <h2 className="pricing-plan-title">NFT Contract Development</h2>

            <p className="plan-price-container">
              <span className="plan-price">starting from $20,000</span>{" "}
            </p>
            <div className="plan-features">
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span>{" "}
                Custom-built NFT contract for your project
              </p>
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span> Supported
                token standards: ERC721, ERC1155 & more
              </p>
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span> 100% test
                coverage
              </p>
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span> Full
                contract documentation
              </p>
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span> Testnet &
                mainnet deployment
              </p>
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span> 24/7 email
                & Telegram support
              </p>
              <p className="plan-feature">
                <span className="pricing-tick pricing-tick">✔</span> Weekly
                updates on the project progress
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> One free code revision
                in case of any issues
              </p>
            </div>

            <PopupButton
              url="https://calendly.com/tokenflow"
              rootElement={document.getElementById("root") as HTMLElement}
              text="Schedule a Call"
              className="btn shadow-btn pricing-btn"
            />
          </div>

          <div className="pricing-card pricing-card-2">
            <h2 className="pricing-plan-title">
              Custom Smart Contract Development
            </h2>

            <p className="plan-price-container">
              <span className="plan-price">starting from $30,000</span>{" "}
            </p>

            <div className="plan-features">
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> If you can imagine it,
                we can build it!
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span>{" "}
                <a
                  href="/contract_types.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-link"
                  title="The Full List of Custom Smart Contract Types"
                >
                  60+ types of custom smart contracts
                </a>{" "}
                that we can build for you
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> 100% test coverage
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Full contract
                documentation
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Testnet & mainnet
                deployment
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> 24/7 email & Telegram
                support
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> Weekly updates on the
                project progress
              </p>
              <p className="plan-feature">
                <span className="pricing-tick">✔</span> One free code revision
                in case of any issues
              </p>
            </div>

            <PopupButton
              url="https://calendly.com/tokenflow"
              rootElement={document.getElementById("root") as HTMLElement}
              text="Schedule a Call"
              className="btn shadow-btn pricing-btn"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
