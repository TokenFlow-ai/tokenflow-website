import React from "react";
import "./client.scss";

type ClientProps = {
  children?: React.ReactNode;
  name: string;
  imageURL: string;
  targetURL: string;
};

export const Client: React.FC<ClientProps> = ({
  name,
  imageURL,
  targetURL,
}): JSX.Element => {
  return (
    <div className="client">
      <a
        href={targetURL}
        rel="noopener noreferrer"
        target="_blank"
        title={name}
        className="client-link"
      >
        <img
          src={imageURL}
          alt={name}
          className="client-logo"
          width={90}
          height={90}
        />
      </a>
    </div>
  );
};
