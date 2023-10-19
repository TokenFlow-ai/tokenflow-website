import React from "react";
import "./partners.scss";
import { Client as Partner } from "./common/Client";
import arbitrumFoundation from "../assets/partners/arbitrum_foundation.jpeg";
import polygon from "../assets/partners/polygon.png";
import linea from "../assets/partners/linea.png";
import avalanche from "../assets/partners/avalanche.svg";
import aurora from "../assets/partners/aurora.png";
import beosin from "../assets/partners/beosin.png";
import fasterCapital from "../assets/partners/faster_capital.png";
import startupStack from "../assets/partners/startup_stack.svg";
import theCryptoRecruiters from "../assets/partners/the_crypto_recruiters.png";
import miraiDAO from "../assets/partners/mirai_dao.jpeg";
import fuseIgnite from "../assets/partners/fuse_ignite.png";
import certik from "../assets/partners/certik.jpeg";
import hacken from "../assets/partners/hacken.jpg";
import consensysDiligence from "../assets/partners/consensys_diligence.png";
import quantstamp from "../assets/partners/quantstamp.png";
import openZeppelin from "../assets/partners/openzeppelin.png";
import cyberscope from "../assets/partners/cyberscope.png";
import quillAudits from "../assets/partners/quill_audits.png";
import moonstruck from "../components/misc/Moonstruck.svg";
import dfx from "../assets/partners/dfx.jpeg";
import chainstack from "../assets/partners/chainstack.png";
import metaKeep from "../assets/partners/meta_keep.jpeg";
import nalikesStudio from "../assets/partners/nalikes_studio.png";
import life3 from "../assets/partners/life3.png";

type PartnersProps = {
  children?: React.ReactNode;
};

export const Partners: React.FC<PartnersProps> = (): JSX.Element => {
  return (
    <div className="our-partners">
      <h1 className="our-partners-title">Our Partners</h1>
      <div className="our-partners-container">
        {/* <Partner
          name="Arbitrum Foundation"
          imageURL={arbitrumFoundation}
          targetURL="https://arbitrum.foundation"
          width={150}
          height={100}
        />
        <Partner
          name="Avalanche"
          imageURL={avalanche}
          targetURL="https://avax.network"
          width={150}
          height={100}
        />
        <Partner
          name="Polygon"
          imageURL={polygon}
          targetURL="https://polygon.technology"
          width={150}
          height={100}
        /> */}
        {/* <Partner
          name="Linea"
          imageURL={linea}
          targetURL="https://linea.build"
          width={150}
          height={100}
        />
        <Partner
          name="Aurora"
          imageURL={aurora}
          targetURL="https://aurora.dev"
          width={150}
          height={100}
        />
        <Partner
          name="Fuse Ignite"
          imageURL={fuseIgnite}
          targetURL="https://fuse.io/ignite"
          width={150}
          height={100}
        /> */}
        {/* <Partner
          name="Certik"
          imageURL={certik}
          targetURL="https://certik.com"
          width={150}
          height={100}
        /> */}
        <Partner
          name="Hacken"
          imageURL={hacken}
          targetURL="https://hacken.io"
          width={100}
          height={100}
        />
        {/* <Partner
          name="Consensys Diligence"
          imageURL={consensysDiligence}
          targetURL="https://consensys.io/diligence"
          width={150}
          height={100}
        /> */}
        {/* <Partner
          name="Quantstamp"
          imageURL={quantstamp}
          targetURL="https://quantstamp.com"
          width={160}
          height={100}
        /> */}
        {/* <Partner
          name="Open Zeppelin"
          imageURL={openZeppelin}
          targetURL="https://openzeppelin.com"
          width={100}
          height={100}
        /> */}
        <Partner
          name="Beosin"
          imageURL={beosin}
          targetURL="https://beosin.com"
          width={130}
          height={100}
        />
        <Partner
          name="Cyberscope"
          imageURL={cyberscope}
          targetURL="https://cyberscope.io"
          width={150}
          height={100}
        />
        {/* <Partner
          name="Chainstack"
          imageURL={chainstack}
          targetURL="https://chainstack.com"
          width={180}
          height={100}
        /> */}
        <Partner
          name="Faster Capital"
          imageURL={fasterCapital}
          targetURL="https://fastercapital.com"
          width={130}
          height={80}
        />
        <Partner
          name="Startup Stack"
          imageURL={startupStack}
          targetURL="https://mystartupstack.com"
          width={120}
        />
        <Partner
          name="The Crypto Recruiters"
          imageURL={theCryptoRecruiters}
          targetURL="https://thecryptorecruiters.io"
          width={95}
          height={100}
        />
        <Partner
          name="Mirai DAO"
          imageURL={miraiDAO}
          targetURL="https://miraidao.io"
          width={100}
          height={100}
        />
        <Partner
          name="QuillAudits"
          imageURL={quillAudits}
          targetURL="https://quillaudits.com"
          width={90}
          height={100}
        />
        <Partner
          name="DFX"
          imageURL={dfx}
          targetURL="https://dfx.swiss"
          width={130}
          height={100}
        />
        <Partner
          name="Life3"
          imageURL={life3}
          targetURL="https://life3.io"
          width={100}
          height={100}
          style={{
            borderRadius: "3%",
          }}
        />
        {/* <Partner
          name="Moonstruck"
          imageURL={moonstruck}
          targetURL="https://moonstruck.io"
          width={160}
          height={100}
        /> */}
        {/* <Partner
          name="MetaKeep"
          imageURL={metaKeep}
          targetURL="https://metakeep.xyz/"
          width={150}
          height={100}
        /> */}
      </div>
    </div>
  );
};
