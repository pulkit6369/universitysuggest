import  { useState } from 'react'; // Import useState hook from React
import './faq.css'; // Importing the CSS for this component

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is universitysuggest?",
      answer: "universitysuggest is a platform where individuals can compare 100+ online universities and find the best online program with the help of expert counsellors."
    },
    {
      question: "Do universitysuggest charge for counselling?",
      answer: "No, universitysuggest provides free counselling to students to help them choose the best university. universitysuggest is dedicated to providing educational solutions to the maximum number of students and working professionals."
    },
    {
      question: "How can universitysuggest help me to apply to the best university?",
      answer: "universitysuggest’s experts will provide you with counselling to help you choose the best university according to your priorities and discover the most affordable university."
    },
    {
      question: "How can I compare multiple programs at once?",
      answer: "universitysuggest’s expert professionals will help you assess your career goals and objectives. Based on this information, the counselling experts will guide you in selecting a program to help you achieve your aspirations."
    },
    {
      question: "Can I get personalized advice from universitysuggest?",
      answer: "Yes, the counsellors will analyse your priorities and goals and find you the best program and university. The experts will also help you find the best program within your budget."
    }
  ];

  return (
    <section className="faq-section my-5">
      <div className="container">
        <div className="header">
          <h2>FAQ: Get the Information You Need</h2>
        </div>
        <div className="body mt-4">
          <div className="accordion" id="accordionExample">
            {faqItems.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header ">
                  <button
                    className={`accordion-button faq-acc shadow-none ${activeIndex === index ? 'active' : ''}`}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>⭐</span>
                    <b className="ms-5 text-danger">{item.question}</b>
                  </button>
                </h2>
                <div className={`accordion-collapse collapse faq-collapse ${activeIndex === index ? 'show' : ''}`}>
                  <div className="accordion-body">
                    <strong>{item.answer}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
