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

type HomePageProps = {
  children?: React.ReactNode;
};

export const HomePage: React.FC<HomePageProps> = (): JSX.Element => {
  const clients = [
    { name: "MAJR", logo: majr },
    { name: "LongTerm Finance", logo: "/path-to-logo-b.png" },
    { name: "Avix Finance", logo: "/path-to-logo-c.png" },
    { name: "Cool Lions Club", logo: "/path-to-logo-d.png" },
    { name: "DVenture DAO", logo: "/path-to-logo-e.png" },
    { name: "NFT Mintr", logo: "/path-to-logo-f.png" },
    { name: "ScarceCoin", logo: "/path-to-logo-g.png" },
    { name: "SolidSwap", logo: "/path-to-logo-h.png" },
    { name: "MoonFarm", logo: "/path-to-logo-i.png" },
    { name: "ScaleRoad", logo: "/path-to-logo-j.png" },
    { name: "MultiSignr", logo: "/path-to-logo-l.png" },
    { name: "ZK Something 1", logo: "/path-to-logo-m.png" },
    { name: "ZK Something 2", logo: "/path-to-logo-m.png" },
    { name: "Web3 Starter Pack", logo: "/path-to-logo-k.png" },
  ];

  const testimonials = [
    {
      logoURL: avix,
      projectName: "Avix Finance",
      text: "TokenFlow nailed it! Avix's on-chain VIX tracking is a seamless perfection. Only they were able to understand our needs and deliver the solution we wanted.",
    },
    {
      logoURL: majr,
      projectName: "MAJR, Inc.",
      text: "TokenFlow accelerated MAJR DAO's launch by building our custom governance & treasury management solutions from the ground up. They're a true partner in our mission to bring DAOs to the masses!",
    },
    {
      logoURL: longterm,
      projectName: "LongTerm Finance",
      text: "TokenFlow's mastery in DeFi integrations made ALTS a game-changer for crypto diversification. It's truly a dream come true for long-term focused investors in the altcoin space!",
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
      {/* Dark mode for the entire website & update the developed contracts list to reach 200+ over time */}
      <Hero />
      {/* <OurClients clients={clients} /> */}
      {/* Entire section like on Asteria labs' website */}
      <WhyUs />
      <OurServices />
      {/* <TestimonialCarousel testimonials={testimonials} /> */}
      {/* Entire section: cards + carousel */}
      <Stats />
      {/* Stats circles animations like on promo video */}
      <TheTeam />
      {/* <Partners />  */}
      {/* Reenable this section after all of the partnerships have become official */}
      <Chains />
      <FAQs />
    </React.Fragment>
  );
};
