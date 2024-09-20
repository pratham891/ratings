import React from "react";
import "./Question.css";
import { FaChevronUp } from "react-icons/fa";

import { BiRightTopArrowCircle } from "react-icons/bi";

const Question = () => {
  return (
    <>
      <div className="ques">
        <h1>Frequently Asked Questions</h1>
        <div className="ques_1">

        <div className='ques_1_img'>
          <div className="ques_1_1">
            <img src="https://picsum.photos/id/237/200/300" alt="" />
          </div>

          <div className="ques_1_2">
            <img src="https://picsum.photos/id/237/200/300" alt="" />
          </div>
          </div>

          <div className="ques_1_3">
            <p>
              Is it necessary to log in to book hotels or access Last-Minute
              Deals? <FaChevronUp />
            </p>
           
            <p>How are payments and refunds handled in the Roommate Feature? <FaChevronUp /></p>
            <p>
              What measures are in place to ensure security and fairness in the
              Roommate Feature? <FaChevronUp />
            </p>
            <p>Can I cancel a roommate arrangement or hourly rental booking? <FaChevronUp /></p>
            <p>How does the Roommate Feature work? <FaChevronUp /></p>
            <p>
              Can I use the Hourly Rental Service without creating an account? <FaChevronUp />
            </p>

            <p>What types of spaces can I rent hourly? <FaChevronUp /></p>
            <p>How do Last-Minute Deals work? <FaChevronUp /></p>
          </div>
          {/* <button>Book a demo </button> */}
        </div>
        <button className='ques_btn'>Book a demo <BiRightTopArrowCircle />  </button>

      </div>
    </>
  );
};
export default Question;
