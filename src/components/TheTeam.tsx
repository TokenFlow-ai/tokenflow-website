import React from "react";
import "./theTeam.scss";

type TheTeamProps = {
  children?: React.ReactNode;
};

export const TheTeam: React.FC<TheTeamProps> = (): JSX.Element => {
  return <div className="the-team-container"></div>;
};
