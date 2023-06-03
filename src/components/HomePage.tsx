import React from "react";
import { Hero } from "./Hero";
// import { OurClients } from "./OurClients";
import { WhyUs } from "./WhyUs";
import { OurServices } from "./OurServices";
import { Testimonials } from "./Testimonials";
import { Stats } from "./Stats";
import { TheTeam } from "./TheTeam";
import { FAQs } from "./FAQs";
import { Chains } from "./Chains";

type HomePageProps = {
  children?: React.ReactNode;
};

export const HomePage: React.FC<HomePageProps> = (): JSX.Element => {
  return (
    <React.Fragment>
      <Hero />
      <WhyUs />
      <OurServices />
      {/* <OurClients /> */}
      <Testimonials />
      <Stats />
      <TheTeam />
      <FAQs />
      <Chains />
    </React.Fragment>
  );
};
