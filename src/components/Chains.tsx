import React from "react";
import "./chains.scss";
import { Chain } from "./common/Chain";
import ethLogo from "../assets/eth_logo.svg";
import arbLogo from "../assets/arb_logo.png";
import opLogo from "../assets/op_logo.png";
import maticLogo from "../assets/matic_logo.png";
import bnbLogo from "../assets/bnb_logo.png";
import avaxLogo from "../assets/avax_logo.png";
import ftmLogo from "../assets/ftm_logo.png";
import evmLogo from "../assets/microchip.png";

type ChainsProps = {
  children?: React.ReactNode;
};

export const Chains: React.FC<ChainsProps> = (): JSX.Element => {
  return (
    <div className="chains" id="supported_chains">
      <h1 className="chains-heading">Blockchains That We Support:</h1>
      <div className="chains-container">
        <Chain name="Ethereum Mainnet" imageURL={ethLogo} />
        <Chain name="Arbitrum One" imageURL={arbLogo} />
        <Chain name="Optimism" imageURL={opLogo} />
        <Chain name="Polygon" imageURL={maticLogo} />
        <Chain name="BNB Smart Chain" imageURL={bnbLogo} />
        <Chain name="Avalanche C-Chain" imageURL={avaxLogo} />
        <Chain name="Fantom Opera" imageURL={ftmLogo} />
        <Chain
          name={
            <a
              href="/EVM_Compatible_Networks.pdf"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                color: "#06f",
                textDecoration: "underline",
              }}
              title="List of EVM Compatible Networks"
            >
              Other EVM Chains
            </a>
          }
          imageURL={evmLogo}
        />
      </div>
    </div>
  );
};
