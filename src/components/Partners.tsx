import React from "react";
import "./partners.scss";
import { Client } from "./common/Client";
import beosin from "../assets/partners/beosin.png";
import fasterCapital from "../assets/partners/faster_capital.png";
// import theBloxCo from "../components/misc/TheBlox.svg";
import startupStack from "../assets/partners/startup_stack.svg";
import theCryptoRecruiters from "../assets/partners/the_crypto_recruiters.jpeg";
import miraiDAO from "../assets/partners/mirai_dao.jpeg";
import quillAudits from "../assets/partners/quill_audits.jpeg";
import moonstruck from "../components/misc/Moonstruck.svg";
import dfx from "../assets/partners/dfx.jpeg";
// import alta from "../assets/partners/alta.png";
import chainstack from "../assets/partners/chainstack.png";

type PartnersProps = {
  children?: React.ReactNode;
};

export const Partners: React.FC<PartnersProps> = (): JSX.Element => {
  return (
    <div className="our-partners">
      <h1 className="our-partners-title">Our Partners</h1>
      <div className="our-partners-container">
        <Client
          name="Chainstack"
          imageURL={chainstack}
          targetURL="https://chainstack.com"
          width={180}
          height={100}
        />
        <Client
          name="Beosin"
          imageURL={beosin}
          targetURL="https://beosin.com"
          width={130}
          height={100}
        />
        <Client
          name="Faster Capital"
          imageURL={fasterCapital}
          targetURL="https://fastercapital.com"
          width={130}
          height={80}
        />
        {/* <Client
          name="The Blox"
          imageURL={theBloxCo}
          targetURL="https://theblox.co"
          style={{
            backgroundColor: "#161616",
          }}
          width={133}
          height={50}
        /> */}
        <Client
          name="Startup Stack"
          imageURL={startupStack}
          targetURL="https://mystartupstack.com"
          width={120}
        />
        <Client
          name="The Crypto Recruiters"
          imageURL={theCryptoRecruiters}
          targetURL="https://thecryptorecruiters.io"
          width={120}
          height={100}
        />
        <Client
          name="Mirai DAO"
          imageURL={miraiDAO}
          targetURL="https://miraidao.io"
          width={120}
          height={100}
        />
        <Client
          name="QuillAudits"
          imageURL={quillAudits}
          targetURL="https://quillaudits.com"
          width={100}
          height={100}
        />
        <Client
          name="DFX"
          imageURL={dfx}
          targetURL="https://dfx.swiss"
          width={150}
          height={100}
        />
        <Client
          name="Moonstruck"
          imageURL={moonstruck}
          targetURL="https://moonstruck.io"
          width={150}
          height={100}
        />
      </div>
    </div>
  );
};
