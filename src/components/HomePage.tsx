import React from "react";
import { Hero } from "./Hero";
// import { OurClients } from "./OurClients";
import { WhyUs } from "./WhyUs";
import { OurServices } from "./OurServices";
import { OurClients } from "./OurClients";
import { Partners } from "./Partners";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { Stats } from "./Stats";
import { TheTeam } from "./TheTeam";
import { FAQs } from "./FAQs";
import { Chains } from "./Chains";
import avix from "../assets/clients/avix.png";
import majr from "../assets/clients/MAJR.png";
import longterm from "../assets/clients/longterm.png";
import scaleroad from "../assets/clients/scaleroad.png";
import clc from "../assets/clients/clc.png";
import moonfarm from "../assets/clients/moonfarm.png";

type HomePageProps = {
  children?: React.ReactNode;
};

export const HomePage: React.FC<HomePageProps> = (): JSX.Element => {
  const clients = [
    { name: "Avix Finance", logo: avix },
    { name: "LongTerm Finance", logo: longterm },
    { name: "MAJR", logo: majr },
    { name: "ScaleRoad", logo: scaleroad },
    { name: "Cool Lions Club", logo: clc },
    // { name: "DVenture DAO", logo: clc },
    // { name: "NFT Mintr", logo: clc },
    // { name: "ScarceCoin", logo: clc },
    // { name: "SolidSwap", logo: clc },
    // { name: "MoonFarm", logo: moonfarm },
    // { name: "MultiSignr", logo: clc },
    // { name: "Web3 Starter Pack", logo: clc },
    // { name: "ZK Something", logo: clc },
    // { name: "Cross Chain Something", logo: clc },
    // { name: "Layer 3 Something", logo: clc },
  ];

  const testimonials = [
    {
      logoURL: avix,
      projectName: "Avix Finance",
      text: "TokenFlow nailed it! Avix's on-chain VIX tracking is a seamless perfection. Only they were able to understand our needs and deliver the solution we wanted.",
    },
    {
      logoURL: longterm,
      projectName: "LongTerm Finance",
      text: "TokenFlow's mastery in DeFi integrations made ALTS a game-changer for crypto diversification. It's truly a dream come true for long-term focused investors in the altcoin space!",
    },
    {
      logoURL: majr,
      projectName: "MAJR, Inc.",
      text: "TokenFlow accelerated MAJR DAO's launch by building our custom governance & treasury management solutions from the ground up. They're a true partner in our mission to bring DAOs to the masses!",
    },
    {
      logoURL: scaleroad,
      projectName: "ScaleRoad LLC",
      text: "TokenFlow fortified ScaleRoad with secure blockchain integrations, and created a framework for us to experiment with the asset tokenization and other enterprise solutions.",
    },
    {
      logoURL: clc,
      projectName: "Cool Lions Club",
      text: "With TokenFlow, our Cool Lions Club NFT collections's mint went flawlessly. They enabled us to truly put the focus on our community, and not worry about the technical details!",
    },
  ];

  return (
    <React.Fragment>
      {/* Dark mode for the entire website & update the developed contracts list doc to reach 200+ over time */}
      <Hero />
      {/* <OurClients clients={clients} /> */}
      <WhyUs />
      <OurServices />
      <TestimonialCarousel testimonials={testimonials} />
      <Stats />
      {/* Stats circles animations like on promo video */}
      <TheTeam />
      <Partners />
      <Chains />
      <FAQs />
    </React.Fragment>
  );
};
