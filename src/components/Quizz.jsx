import { useState } from "react";
import QUESTIONS from "../questions";

const Quizz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quizz;
