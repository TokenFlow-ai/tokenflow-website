import React from "react";
import { Hero } from "./Hero";
// import { OurClients } from "./OurClients";
import { WhyUs } from "./WhyUs";
import { OurServices } from "./OurServices";
import { OurClients } from "./OurClients";
import { Partners } from "./Partners";
import { Testimonials } from "./Testimonials";
import { Stats } from "./Stats";
import { TheTeam } from "./TheTeam";
import { FAQs } from "./FAQs";
import { Chains } from "./Chains";
import { testimonials } from "../data/testimonials";
import { clients } from "../data/clients";

type HomePageProps = {
  children?: React.ReactNode;
};

export const HomePage: React.FC<HomePageProps> = (): JSX.Element => {
  return (
    <React.Fragment>
      {/* Dark mode for the entire website & update the developed contracts list doc to reach 200+ over time */}
      <Hero />
      <WhyUs />
      <OurServices />
      {/* Add cross-chain & layer 3/app chains service cards to OurServices */}
      <Testimonials testimonials={testimonials} />
      <OurClients clients={clients} />
      <Stats />
      <TheTeam />
      <Partners />
      <Chains />
      <FAQs />
    </React.Fragment>
  );
};
