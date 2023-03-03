import React, { useState } from "react";
import { copyToClipboard } from "../utils/utils";
import { FAQItem } from "./common/FAQItem";
import "./faqs.scss";

type FAQsProps = {
  children?: React.ReactNode;
};

export const FAQs: React.FC<FAQsProps> = (): JSX.Element => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleSetCopied = (): void => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
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
        question="What is a smart contract?"
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
        question="What are the benefits of using smart contracts?"
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
        question="What types of smart contracts do you build?"
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
              href="/The_Full_List_of_Custom_Smart_Contract_Types.pdf"
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
        question="Which blockchains do you support?"
        answer={
          <span>
            <strong>Our primary supported blockchains include:</strong> Ethereum
            mainnet, Arbitrum One, Optimism, Polygon, BNB Smart Chain (BSC),
            Avalanche C-Chain and Fantom Opera. In addition to these, we support
            and can build smart contracts for you on dozens of the{" "}
            <a
              className="faq-link"
              href="/EVM_Compatible_Networks.pdf"
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
        question="Do you use AI in your smart contract development process, and if so, how?"
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
        question="Which payment methods do you accept?"
        answer={
          <span>
            As a crypto-native company,{" "}
            <strong>
              we accept payments in USDT, USDC and DAI stablecoins
            </strong>{" "}
            to our ENS address (
            <a
              className="faq-link"
              href="https://etherscan.io/address/tokenflowai.eth"
              rel="noopener noreferrer"
              target="_blank"
            >
              tokenflowai.eth
            </a>
            ). If you'd like to use the standard address format, our address is
            as follows:{" "}
            <span
              onClick={() => {
                copyToClipboard("0x32acDAdB2D7E7FAF79A60a6AEfEC5264D9A5a790");
                handleSetCopied();
              }}
              className="payment-address"
            >
              0x32acDAdB2D7E7FAF79A60a6AEfEC5264D9A5a790
            </span>{" "}
            {copied ? (
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
              <span className="pricing-">(click on the address to copy).</span>
            )}
            <br /> <br />
            <strong>You can pay on any of the following networks:</strong>{" "}
            Ethereum Mainnet, Arbitrum One, Optimism, Polygon, BNB Smart Chain
            (BSC), Avalanche C-Chain and Fantom Opera.
          </span>
        }
      />
      <FAQItem
        question="What is the payment structure for your smart contract development services?"
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
        question="What is your typical project delivery time?"
        answer={
          <span>
            The project delivery time varies depending on the complexity of the
            contracts and other factors. In general,{" "}
            <strong>typical project delivery takes 3-6 weeks.</strong> We offer
            a 30 minute free consultation call to provide a better estimate of
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
        question="Is there an option to get the faster service delivery?"
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
        question="Are there any additional fees or charges?"
        answer={
          <span>
            For the <strong>Ethereum mainnet contract development,</strong> we
            typically charge an additional{" "}
            <strong>
              $1,000 fixed fee per contract to cover the gas costs
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
        question="I haven't found an answer to my question. Where can I get help?"
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
            , or by scheduling a 30 minute free consultation call{" "}
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
