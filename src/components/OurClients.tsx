import React from "react";
import "./ourClients.scss";
import { Client } from "./common/Client";
import starkNetLogo from "../assets/starknet_logo.png";

type OurClientsProps = {
  children?: React.ReactNode;
};

export const OurClients: React.FC<OurClientsProps> = (): JSX.Element => {
  return (
    <div className="our-clients">
      <h1 className="our-clients-title">Our Clients</h1>
      <div className="our-clients-container">
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
        <Client
          name="StarkNet"
          imageURL={starkNetLogo}
          targetURL="https://starknet.io/"
        />
      </div>
    </div>
  );
};
