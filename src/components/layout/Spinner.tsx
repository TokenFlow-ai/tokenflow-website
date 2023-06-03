import React from "react";
import "./spinner.scss";
import spinner from "../../assets/spinner.gif";

type SpinnerProps = {
  children?: React.ReactNode;
};

export const Spinner: React.FC<SpinnerProps> = (): JSX.Element => {
  return (
    <div className="spinner-container">
      <div>
        <img
          src={spinner}
          alt="Loading..."
          title="Loading..."
          className="spinner"
        />
        <p className="spinner-loading" title="Loading..." style={{ color: "" }}>
          Loading...
        </p>
      </div>
    </div>
  );
};
