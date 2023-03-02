import React from "react";
import "./spinner.scss";
import spinner from "../../assets/spinner.gif";

type SpinnerProps = {
  children?: React.ReactNode;
};

export const Spinner: React.FC<SpinnerProps> = (): JSX.Element => {
  return (
    <React.Fragment>
      <img src={spinner} alt="Loading..." className="spinner" />
    </React.Fragment>
  );
};
