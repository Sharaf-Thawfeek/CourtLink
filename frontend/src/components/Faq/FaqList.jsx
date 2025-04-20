import React, { useState } from "react";
import { faqs } from './../../assets/data/faqs';
import FaqCard from "./FaqCard";

const FaqList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-12">
      <h2 className="text-3xl font-semibold text-center mb-8 text-headingColor">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <FaqCard
            key={index}
            question={faq.question}
            content={faq.content}
            isOpen={openIndex === index}
            onToggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqList;
