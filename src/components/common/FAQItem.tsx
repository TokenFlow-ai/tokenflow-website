import { useState } from "react";
import "./faqItem.scss";
import PlusIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Remove";

type FAQItemProps = {
  question: string;
  answer: React.ReactNode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  style,
  children,
}): JSX.Element => {
  const [toggleFAQ, setToggleFAQ] = useState<boolean>(false);

  const toggleFAQHandler = (): void => setToggleFAQ(!toggleFAQ);

  return (
    <div
      style={{
        ...style,
      }}
    >
      <div className="faq-item">
        <div className="faq-item__question" onClick={toggleFAQHandler}>
          <p className="faq-item__question__text">{question}</p>
          <div className="faq-item__question__icon">
            {toggleFAQ ? (
              <MinusIcon className="toggle-faq-icon" />
            ) : (
              <PlusIcon className="toggle-faq-icon" />
            )}
          </div>
        </div>
        {toggleFAQ && (
          <div className="faq-item__answer">
            <p>{answer}</p>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

FAQItem.defaultProps = {};
