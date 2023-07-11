import React from "react";
import "./client.scss";

type ClientProps = {
  children?: React.ReactNode;
  name: string;
  imageURL: string;
  targetURL: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
};

export const Client: React.FC<ClientProps> = ({
  name,
  imageURL,
  targetURL,
  style,
  width,
  height,
}): JSX.Element => {
  return (
    <div className="client" style={style}>
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
          width={width || 100}
          height={height || 100}
        />
      </a>
    </div>
  );
};
