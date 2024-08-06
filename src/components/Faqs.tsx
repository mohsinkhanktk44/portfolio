import React, { useState } from "react";

const Faqs = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index: any) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqData = [
    {
      question: "What is a SIM-only deal?",
      answer:
        "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
    },
    {
      question: "Why choose a SIM-only deal?",
      answer:
        "SIM-only deals are considerably cheaper than the traditional mobile phone contracts. They offer flexibility to enjoy better savings without having to be tied into a long-term contract.",
    },
    {
      question: "How much data should I look for in a SIM-only deal?",
      answer:
        "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
    },
    {
      question: "Can I keep my number on a SIM-only deal?",
      answer:
        "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
    },
  ];

  return (
    <div className=" py-8 px-4 max-w-5xl mx-auto flex flex-col md:flex-row justify-center ">
      {/* <div className="flex flex-col text-left basis-1/2">
        <p className="inline-block font-semibold text-primary mb-4">
          Insurance FAQ
        </p>
        <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
          Frequently Asked Questions
        </p>
      </div> */}
      <ul className="basis-[70%]">
        {faqData.map((item, index) => (
          <li key={index}>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              aria-expanded={expanded === index}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 text-base-content">{item.question}</span>
              <svg
                className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200 ease-out ${
                  expanded === index ? "rotate-90" : ""
                }`}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="7" width="16" height="2" rx="1" />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className="transform origin-center rotate-90"
                />
              </svg>
            </button>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                expanded === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">{item.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
