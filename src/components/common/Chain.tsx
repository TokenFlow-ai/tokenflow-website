import React from "react";
import "./chain.scss";

type ChainProps = {
  name: string | React.ReactNode;
  imageURL: string;
  targetURL: string;
  linkTitle?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const Chain: React.FC<ChainProps> = ({
  name,
  imageURL,
  targetURL,
  linkTitle,
  style,
}): JSX.Element => {
  const title = typeof name === "string" ? name : linkTitle;

  return (
    <div className="chain">
      <a
        href={targetURL}
        rel="noopener noreferrer"
        target="_blank"
        title={title}
        className="client-link"
      >
        <img
          src={imageURL}
          alt={title}
          title={title}
          width={90}
          height={90}
          className="chain-image"
          style={{
            ...style,
          }}
        />
      </a>
      <p className="chain-title">
        <a
          href={targetURL}
          rel="noopener noreferrer"
          target="_blank"
          title={title}
          className="chain-link"
        >
          {name}
        </a>
      </p>
    </div>
  );
};
