// import React from "react";
// import "./ourClients.scss";
// import { Client } from "./common/Client";
// import starkNetLogo from "../assets/starknet_logo.png";

// type OurClientsProps = {
//   children?: React.ReactNode;
// };

// export const OurClients: React.FC<OurClientsProps> = (): JSX.Element => {
//   return (
//     <div className="our-clients">
//       <h1 className="our-clients-title">Our Clients</h1>
//       <div className="our-clients-container">
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//         <Client
//           name="StarkNet"
//           imageURL={starkNetLogo}
//           targetURL="https://starknet.io/"
//         />
//       </div>
//     </div>
//   );
// };

// src/ClientSlider.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ourClients.scss";
import majr from "../assets/clients/MAJR.png";

type Client = {
  name: string;
  logo: string;
};

type ClientSliderProps = {
  clients: Client[];
};

export const OurClients: React.FC<ClientSliderProps> = ({
  clients,
}): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index} className="client">
            <img
              src={client.logo}
              alt={client.name}
              style={{ width: "100px", height: "100px" }}
            />
            <p>{client.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
