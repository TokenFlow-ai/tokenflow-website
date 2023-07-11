import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ourClients.scss";
import { useMediaQuery } from "react-responsive";

type Client = {
  name?: string;
  logo: string;
  width?: number;
  height?: number;
};

type ClientSliderProps = {
  clients: Client[];
};

export const OurClients: React.FC<ClientSliderProps> = ({
  clients,
}): JSX.Element => {
  const isTablet = useMediaQuery({
    query: "(min-width: 767px) and (max-width: 992px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 4 : isMobile ? 2 : 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="slider-container our-clients-container-main"
      style={{
        marginTop: isMobile ? "-33px" : "-38px",
        marginBottom: isMobile ? "-55px" : "-57px",
      }}
    >
      <h1 className="our-clients-title">Experience True Client Satisfaction</h1>

      <Slider {...settings}>
        {clients.map((client, index) => (
          <div key={index} className="client">
            <img
              src={client.logo}
              alt={client.name}
              style={{ width: client.width, height: client.height }}
            />
            <span className="client-name">{client.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};
