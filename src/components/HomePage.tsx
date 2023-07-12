import React from "react";
import { Hero } from "./Hero";
import { WhyUs } from "./WhyUs";
import { OurServices } from "./OurServices";
import { Testimonials } from "./Testimonials";
import { OurClients } from "./OurClients";
import { Stats } from "./Stats";
import { TheTeam } from "./TheTeam";
import { Partners } from "./Partners";
import { Chains } from "./Chains";
import { FAQs } from "./FAQs";
import avix from "../assets/clients/avix.png";
import majr from "../assets/clients/majr.png";
import longterm from "../assets/clients/longterm.png";
import scaleroad from "../assets/clients/scaleroad.png";
import clc from "../assets/clients/clc.png";
import moonfarm from "../assets/clients/moonfarm.png";
import scarcecoin from "../assets/clients/scarcecoin.png";
import dventure from "../assets/clients/dventure.png";
import nftmintr from "../assets/clients/nftmintr.png";
import solidswap from "../assets/clients/solidswap.png";
import multisignr from "../assets/clients/multisignr.png";
import web3StarterPack from "../assets/clients/web3-starter-pack.png";

const clients = [
  { name: "Avix Finance", logo: avix, height: 66.67, width: 66.67 },
  { name: "LongTerm Finance", logo: longterm, height: 66.67, width: 66.67 },
  { name: "MAJR", logo: majr, height: 66.67, width: 130 },
  { name: "ScaleRoad", logo: scaleroad, height: 66.67, width: 76.67 },
  { name: "Cool Lions Club", logo: clc, height: 66.67 },
  { name: "DVenture DAO", logo: dventure, height: 66.67, width: 133.33 },
  { name: "NFT Mintr", logo: nftmintr, height: 66.67, width: 133.33 },
  { name: "ScarceCoin", logo: scarcecoin, height: 66.67, width: 66.67 },
  { name: "SolidSwap", logo: solidswap, height: 66.67, width: 66.67 },
  { name: "MoonFarm", logo: moonfarm, height: 66.67, width: 66.67 },
  { name: "MultiSignr", logo: multisignr, height: 66.67 },
  { name: "Web3 Starter Pack", logo: web3StarterPack, height: 66.67 },
  // { name: "ZK Something", logo: clc, height: 66.67 },
  // { name: "Cross Chain Something", logo: clc, height: 66.67 },
  // { name: "Layer 3 Something", logo: clc, height: 66.67 },
];

const testimonials = [
  {
    logoURL: avix,
    projectName: "Avix Finance",
    text: "TokenFlow nailed it! Avix's on-chain VIX tracking is a seamless perfection. Only they were able to understand our needs and deliver the solution we wanted.",
    height: 80,
    width: 80,
  },
  {
    logoURL: longterm,
    projectName: "LongTerm Finance",
    text: "TokenFlow's mastery in DeFi integrations made ALTS a game-changer for crypto diversification. It's truly a dream come true for long-term focused investors in the altcoin space!",
    height: 80,
    width: 80,
  },
  {
    logoURL: majr,
    projectName: "MAJR, Inc.",
    text: "TokenFlow accelerated MAJR DAO's launch by building our custom governance & treasury management solutions from the ground up. They're a true partner in our mission to bring DAOs to the masses!",
    height: 80,
    width: 120,
  },
  {
    logoURL: scaleroad,
    projectName: "ScaleRoad LLC",
    text: "TokenFlow fortified ScaleRoad with secure blockchain integrations, and created a framework for us to experiment with the asset tokenization and other enterprise solutions.",
    height: 80,
    width: 80,
  },
  {
    logoURL: clc,
    projectName: "Cool Lions Club",
    text: "With TokenFlow, our Cool Lions Club NFT collections's mint went flawlessly. They enabled us to truly put the focus on our community, and not worry about the technical details!",
    height: 80,
    width: 80,
  },
];


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
