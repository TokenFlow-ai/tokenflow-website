import React from "react";
import { Hero } from "./Hero";
import { OurClients } from "./OurClients";
import { WhyUs } from "./WhyUs";
import { Pricing } from "./Pricing";
import { Testimonials } from "./Testimonials";
import { TeamMembers } from "./TeamMembers";
import { FAQs } from "./FAQs";
import { Chains } from "./Chains";

type HomePageProps = {
  children?: React.ReactNode;
};

export const HomePage: React.FC<HomePageProps> = (): JSX.Element => {
  return (
    <React.Fragment>
      <Hero />
      <OurClients />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <TeamMembers />
      <FAQs />
      <Chains />
    </React.Fragment>
  );
};
