import React from "react";
import "./chain.scss";

type ChainProps = {
  name: string | React.ReactNode;
  imageURL: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Chain: React.FC<ChainProps> = ({
  name,
  imageURL,
  style,
}): JSX.Element => {
  return (
    <div className="chain">
      <img
        src={imageURL}
        alt={name as string}
        width={90}
        height={90}
        className="chain-image"
        style={{
          ...style,
        }}
      />
      <h4 className="chain-title">{name}</h4>
    </div>
  );
};
