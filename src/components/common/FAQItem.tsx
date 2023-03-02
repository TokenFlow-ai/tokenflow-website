import { useState } from "react";
import "./faqItem.scss";

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
          <h3 className="faq-item__question__text">{question}</h3>
          <div className="faq-item__question__icon">
            {toggleFAQ ? (
              <i className="fas fa-minus"></i>
            ) : (
              <i className="fas fa-plus"></i>
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
