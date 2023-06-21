import React from "react";
import { Hero } from "./Hero";
// import { OurClients } from "./OurClients";
import { WhyUs } from "./WhyUs";
import { OurServices } from "./OurServices";
import { OurClients } from "./OurClients";
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
      {/* Dark mode for the entire website & update the developed contracts list to reach 200+ over time */}
      <Hero />
      <WhyUs />
      <OurServices />
      {/* <OurClients /> */}
      {/* Entire section like on Asteria labs' website */}
      <Testimonials /> {/* Entire section: cards + carousel */}
      <Stats /> {/* Stats circles animations like on promo video */}
      <TheTeam />
      <FAQs />
      <Chains />
    </React.Fragment>
  );
};
