import React from "react";
import "./chains.scss";
import { Chain } from "./common/Chain";
import ethLogo from "../assets/eth_logo_new.png";
import arbLogo from "../assets/arb_logo_new.png";
import arbNovaLogo from "../assets/arb_nova_logo.png";
import opLogo from "../assets/op_logo.png";
// import metisLogo from "../assets/metis_logo.jpeg";
import maticLogo from "../assets/matic_logo.png";
import polygonZkEVMLogo from "../assets/polygon_zkevm_logo.png";
import zkSyncLogo from "../assets/zksync_logo.png";
// import starkNetLogo from "../assets/starknet_logo.png";
import lineaLogo from "../assets/linea_logo.png";
import scrollLogo from "../assets/scroll_logo.png";
import taikoLogo from "../assets/taiko_logo.png";
import baseLogo from "../assets/base_logo.png";
import mantleLogo from "../assets/mantle_logo.jpeg";
import altLayerLogo from "../assets/altlayer_logo.png";
import zetaChainLogo from "../assets/zetachain_logo.png";
import bnbLogo from "../assets/bnb_smart_chain_logo.png";
// import opbnbLogo from "../assets/opbnb_logo.png";
import avaxLogo from "../assets/avax_logo.png";
import ftmLogo from "../assets/ftm_logo.png";
import celoLogo from "../assets/celo_logo.png";
import fuseLogo from "../assets/fuse_logo.png";
import evmLogo from "../assets/chain.png";

type ChainsProps = {
  children?: React.ReactNode;
};

export const Chains: React.FC<ChainsProps> = (): JSX.Element => {
  return (
    <div className="chains">
      <h1 className="chains-title">Supported Blockchains</h1>
      <div className="chains-container">
        <Chain
          name="Ethereum Mainnet"
          imageURL={ethLogo}
          targetURL="https://ethereum.org"
        />
        <Chain
          name="Arbitrum One"
          imageURL={arbLogo}
          targetURL="https://arbitrum.io"
        />
        <Chain
          name="Arbitrum Nova"
          imageURL={arbNovaLogo}
          targetURL="https://nova.arbitrum.io"
        />
        <Chain
          name="Optimism"
          imageURL={opLogo}
          targetURL="https://optimism.io"
        />
        {/* <Chain
          name="Metis"
          imageURL={metisLogo}
          targetURL="https://metis.io"
          style={{
            borderRadius: "50%",
          }}
        /> */}
        <Chain
          name="Polygon"
          imageURL={maticLogo}
          targetURL="https://polygon.technology"
        />
        <Chain
          name="Polygon zkEVM"
          imageURL={polygonZkEVMLogo}
          targetURL="https://polygon.technology/polygon-zkevm"
        />
        <Chain
          name="zkSync Era"
          imageURL={zkSyncLogo}
          targetURL="https://zksync.io"
        />
        {/* <Chain
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io"
        /> */}
        <Chain
          name="Linea"
          imageURL={lineaLogo}
          targetURL="https://linea.build"
          style={{
            borderRadius: "50%",
          }}
        />
        <Chain
          name="Scroll"
          imageURL={scrollLogo}
          targetURL="https://scroll.io"
        />
        <Chain
          name="Taiko"
          imageURL={taikoLogo}
          targetURL="https://taiko.xyz"
        />
        <Chain name="Base" imageURL={baseLogo} targetURL="https://base.org" />
        <Chain
          name="Mantle"
          imageURL={mantleLogo}
          targetURL="https://mantle.xyz"
          style={{
            borderRadius: "50%",
          }}
        />
        <Chain
          name="AltLayer"
          imageURL={altLayerLogo}
          targetURL="https://altlayer.io"
          style={{
            borderRadius: "50%",
          }}
        />
        <Chain
          name="ZetaChain"
          imageURL={zetaChainLogo}
          targetURL="https://zetachain.com"
          style={{
            borderRadius: "50%",
          }}
        />
        <Chain
          name="BNB Smart Chain"
          imageURL={bnbLogo}
          targetURL="https://bnbchain.org/en/smartChain"
        />
        {/* <Chain
          name="opBNB"
          imageURL={opbnbLogo}
          targetURL="https://opbnb.bnbchain.org/en"
        /> */}
        <Chain
          name="Avalanche C-Chain"
          imageURL={avaxLogo}
          targetURL="https://avax.network"
        />
        <Chain
          name="Fantom"
          imageURL={ftmLogo}
          targetURL="https://fantom.foundation"
        />
        <Chain name="Celo" imageURL={celoLogo} targetURL="https://celo.org" />
        <Chain name="Fuse" imageURL={fuseLogo} targetURL="https://fuse.io" />
        <Chain
          name={
            <a
              href="/supported_chains.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="supported-chains-link"
              title="Blockchains Supported by TokenFlow"
            >
              100+ Other Chains
            </a>
          }
          imageURL={evmLogo}
          targetURL="/supported_chains.pdf"
          linkTitle="Blockchains Supported by TokenFlow"
        />
      </div>
    </div>
  );
};
