import { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import Result from "../components/Result";
import type { Question } from "../data/questions";
import { questions } from "../data/questions";

import { getRandomQuestions } from "../data/random";

const Quiz = () => {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setQuiz(getRandomQuestions(questions, 10));
  }, []);

  const handleAnswer = (answer: string) => {
    setSelected(answer);
    setShowAnswer(true);

    if (answer === quiz[current].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);

    const next = current + 1;

    if (next < quiz.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  if (!quiz.length) return <p>Cargando...</p>;

  if (finished) return <Result score={score} />;

  return (
    <div className="container">
      <h2>Pregunta {current + 1} / 10</h2>

      <QuestionCard
        question={quiz[current]}
        onAnswer={handleAnswer}
        selected={selected}
        showAnswer={showAnswer}
      />

      {showAnswer && (
        <div style={{ marginTop: "20px" }}>
          <p>
            {selected === quiz[current].answer
              ? "🔥 Correcto!"
              : "❌ Incorrecto"}
          </p>

          <button className="button-next" onClick={handleNext}>
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
