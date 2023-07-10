import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ourClients.scss";
import { useMediaQuery } from "react-responsive";

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
  const isTablet = useMediaQuery({
    query: "(min-width: 767px) and (max-width: 992px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 3 : isMobile ? 2 : 5,
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
