import { useState } from "react";


const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of trees do you sell?",
      answer: "We offer a wide variety of trees including fruit trees, ornamental trees, shade trees, and evergreen trees."
    },
    {
      question: "How do I choose the right tree for my garden?",
      answer: "Consider factors such as the tree’s mature size, growth rate, soil requirements, and sunlight needs. Our team is also available to provide personalized advice."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we offer delivery services to many locations. Delivery fees may apply depending on the distance and size of the order."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 14-day return policy for trees that arrive damaged or are not as described. Please contact us immediately if you encounter any issues."
    },
    {
      question: "How should I care for my new tree?",
      answer: "Each tree comes with detailed care instructions. Generally, new trees need regular watering, mulching, and occasional fertilization. For specific care, refer to the guide provided with your purchase."
    }
  ];
    return (
        <div>
            <div className="max-w-4xl mx-auto my-10 p-5">
      <h2 className="text-3xl font-bold mb-11 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-xl font-medium">{faq.question}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default FAQ;