import React from "react";
import "./stats.scss";

type StatsProps = {
  children?: React.ReactNode;
};

export const Stats: React.FC<StatsProps> = (): JSX.Element => {
  return (
    <div className="stats-container">
      <h2 className="stats-title">Our Achievements</h2>

      <div className="stats">
        <div className="stat-circle">
          <div className="stat-circle-title">Contracts Developed</div>
          <div className="stat-circle-number">150+</div>
        </div>

        <div className="stat-circle">
          <div className="stat-circle-title">Chains Supported</div>
          <div className="stat-circle-number">90+</div>
        </div>

        <div className="stat-circle">
          <div className="stat-circle-title">Contract Types Offered</div>
          <div className="stat-circle-number">60+</div>
        </div>
      </div>
    </div>
  );
};
