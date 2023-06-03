import React, { useState } from "react";
import { copyToClipboard } from "../utils/utils";
import { FAQItem } from "./common/FAQItem";
import "./faqs.scss";

type FAQsProps = {
  children?: React.ReactNode;
};

export const FAQs: React.FC<FAQsProps> = (): JSX.Element => {
  const [copiedEthUsdt, setCopiedEthUsdt] = useState<boolean>(false);
  const [copiedBtc, setCopiedBtc] = useState<boolean>(false);

  const handleSetCopiedEthUsdt = (): void => {
    setCopiedEthUsdt(true);

    setTimeout(() => {
      setCopiedEthUsdt(false);
    }, 2000);
  };

  const handleSetCopiedBtc = (): void => {
    setCopiedBtc(true);

    setTimeout(() => {
      setCopiedBtc(false);
    }, 2000);
  };

  return (
    <div
      className="faq-container container col-lg-6 col-md-8 col-sm-9"
      id="faqs"
    >
      <h1
        className="text-center faq-title-main bold"
        style={{ borderBottom: "1px solid #999" }}
      >
        Frequently Asked Questions
      </h1>
      <FAQItem
        question="1.) What is a smart contract?"
        answer={
          <span>
            <strong>A smart contract</strong> is a computer program or a
            transaction protocol that is intended to automatically execute,
            control or document events and actions according to the terms of a
            contract or an agreement.
          </span>
        }
      />
      <FAQItem
        question="2.) What are the benefits of using smart contracts?"
        answer={
          <span>
            Smart contracts are{" "}
            <strong>
              transparent, immutable, and can be executed automatically,
            </strong>{" "}
            which can reduce transaction times, minimize the need for
            intermediaries, and lower costs.
          </span>
        }
      />
      <FAQItem
        question="3.) What types of smart contracts do you build?"
        answer={
          <span>
            <strong>
              Our specialty is in the development of token and NFT contracts
            </strong>{" "}
            for various use cases. However, we have the experience in building
            smart contracts for all sorts of specialized use cases.
            <br /> <br /> Here's the link to{" "}
            <a
              className="faq-link"
              href="/contract_types.pdf"
              rel="noopener noreferrer"
              target="_blank"
              title="The Full List of Custom Smart Contract Types"
            >
              the full list of smart contract types
            </a>{" "}
            that we can build for you. If you can imagine it, we can build it!
          </span>
        }
      />
      <FAQItem
        question="4.) Which blockchains do you support?"
        answer={
          <span>
            <strong>Our primary supported blockchains include:</strong> Ethereum
            mainnet, Arbitrum One, Optimism, Polygon (PoS chain and zkEVM),
            zkSync Era, BNB Smart Chain (BSC), Avalanche C-Chain and Fantom
            Opera. In addition to these, we support and can build smart
            contracts for you on 85+ of the{" "}
            <a
              className="faq-link"
              href="/evm_networks.pdf"
              rel="noopener noreferrer"
              target="_blank"
              title="List of EVM Compatible Networks"
            >
              most popular EVM compatible networks.
            </a>
          </span>
        }
      />
      <FAQItem
        question="5.) Do you use AI in your smart contract development process, and if so, how?"
        answer={
          <span>
            Yes, we use AI in our smart contract development process to automate
            certain tasks and improve efficiency. This includes using{" "}
            <strong>machine learning</strong> to analyze data and predict how
            the contract will behave once deployed, and using{" "}
            <strong>natural language processing</strong> to analyze smart
            contract code and generate better tests and documentation for the
            contracts.
            <br /> <br />
            While AI is a helpful tool, we still rely on{" "}
            <strong>human expertise</strong> to ensure the final product meets
            our clients' needs and is <strong>of the highest quality.</strong>
          </span>
        }
      />
      <FAQItem
        question="6.) Which payment methods do you accept?"
        answer={
          <span>
            As a crypto-native company,{" "}
            <strong>
              our primary payment methods include BTC, ETH and USDT.
            </strong>{" "}
            You can send ETH and USDT to our <strong>ENS address</strong> (
            <a
              className="faq-link"
              href="https://etherscan.io/address/tokenflowai.eth"
              rel="noopener noreferrer"
              target="_blank"
            >
              tokenflowai.eth
            </a>
            ). If you'd like to use the traditional address format, our address
            is as follows for the <strong>ETH and USDT:</strong>{" "}
            <span
              onClick={() => {
                copyToClipboard("0x32acDAdB2D7E7FAF79A60a6AEfEC5264D9A5a790");
                handleSetCopiedEthUsdt();
              }}
              className="payment-address"
            >
              0x32acDAdB2D7E7FAF79A60a6AEfEC5264D9A5a790
            </span>{" "}
            {copiedEthUsdt ? (
              <span
                style={{
                  color: "#28a745",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                ✔ Copied to Clipboard!
              </span>
            ) : (
              <span>(click on the address to copy).</span>
            )}
            <br /> <br />
            For <strong>BTC payments,</strong> our address is as follows:{" "}
            <span
              onClick={() => {
                copyToClipboard("bc1qq6amn3u2g4n3lc0fx3942x9k2dljlr5lzc83qa");
                handleSetCopiedBtc();
              }}
              className="payment-address"
            >
              bc1qq6amn3u2g4n3lc0fx3942x9k2dljlr5lzc83qa
            </span>{" "}
            {copiedBtc ? (
              <span
                style={{
                  color: "#28a745",
                  marginLeft: "10px",
                  fontWeight: "bold",
                }}
              >
                ✔ Copied to Clipboard!
              </span>
            ) : (
              <span>(click on the address to copy).</span>
            )}
            <br /> <br />
            <strong>
              We accept ETH and USDT on any of the following networks:
            </strong>{" "}
            Ethereum Mainnet, Arbitrum One, Optimism, Polygon (PoS chain and
            zkEVM), zkSync Era, BNB Smart Chain (BSC), Avalanche C-Chain and
            Fantom Opera.{" "}
            <strong>
              As for BTC , we accept it on the Bitcoin network only.
            </strong>
          </span>
        }
      />
      <FAQItem
        question="7.) What is the payment structure for your smart contract development services?"
        answer={
          <span>
            Our payment structure is{" "}
            <strong>30% upfront and 70% after the project is completed</strong>{" "}
            to your satisfaction.
            <br /> <br />
            This structure ensures that we have the resources necessary to start
            the project, while also giving you the peace of mind that the
            majority of the payment is due only after you are{" "}
            <strong>satisfied with the final product.</strong>
          </span>
        }
      />
      <FAQItem
        question="8.) What is your typical project delivery time?"
        answer={
          <span>
            The project delivery time varies depending on the complexity of the
            contracts and other factors. In general,{" "}
            <strong>typical project delivery takes 3-6 weeks.</strong> We offer
            a 30-minute free consultation call to provide a better estimate of
            the development time. You can{" "}
            <a
              className="faq-link"
              href="https://calendly.com/tokenflow"
              rel="noopener noreferrer"
              target="_blank"
            >
              schedule it here
            </a>{" "}
            at any time.
          </span>
        }
      />
      <FAQItem
        question="9.) Is there an option to get the faster service delivery?"
        answer={
          <span>
            Yes,{" "}
            <strong>
              we can deliver your project in as little as 1-2 weeks
            </strong>{" "}
            with the fast-track delivery option, which is 50% more expensive
            than the originally agreed upon project price.
          </span>
        }
      />
      <FAQItem
        question="10.) Are there any additional fees or charges?"
        answer={
          <span>
            For the <strong>Ethereum mainnet contract development,</strong> we
            typically charge an additional{" "}
            <strong>
              fee of up to $1,000 per contract to cover the gas costs
            </strong>{" "}
            associated with the contract deployment.
            <br /> <br />
            Apart from that,{" "}
            <strong>there are no additional fees or charges,</strong> and all
            costs will be agreed upon before the project starts.
          </span>
        }
      />
      <FAQItem
        question="11.) Do you have a referral program currently active?"
        answer={
          <span>
            Yes, we have a referral program for our smart contract development
            services. If you like our work and{" "}
            <strong>
              know of anyone who might be interested in our services,
            </strong>{" "}
            please feel free to refer them to us. We will be more than happy to
            provide you with{" "}
            <strong>a 10% discount on your next project with us.</strong>
          </span>
        }
      />
      <FAQItem
        question="12.) Are the smart contracts you develop audited, tested and secure?"
        answer={
          <span>
            Even though we are not an auditing firm,{" "}
            <strong>we take security very seriously</strong> and do our best to
            ensure that the contracts we develop are secure and bug-free.{" "}
            <strong>We offer 100% test coverage</strong> for all of the
            contracts that we develop, which means that we test every single
            line of code.
            <br /> <br />
            In an unfortunate event that you find a bug in the contract, or if
            it gets hacked,{" "}
            <strong>we will provide a fix for it free of charge.</strong> Also,
            if you are interested in a{" "}
            <strong>third-party audit of the contracts,</strong> we can point
            you in the right direction by providing you with a list of reputable
            auditing firms that can perform the audit for you.
          </span>
        }
      />
      <FAQItem
        question="13.) I haven't found an answer to my question. Where can I get help?"
        answer={
          <span>
            You can always contact us directly via email at{" "}
            <a
              className="faq-link"
              href="mailto:contact@tokenflow.ai"
              rel="noopener noreferrer"
              target="_blank"
            >
              contact@tokenflow.ai
            </a>
            , or by scheduling a 30-minute free consultation call with us{" "}
            <a
              className="faq-link"
              href="https://calendly.com/tokenflow"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
            . We love questions, and would love to help you out!
          </span>
        }
      />
    </div>
  );
};
