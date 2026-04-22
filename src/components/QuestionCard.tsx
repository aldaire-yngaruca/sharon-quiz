import type { Question } from "../data/questions";

interface Props {
  question: Question;
  onAnswer: (answer: string) => void;
  selected: string | null;
  showAnswer: boolean;
}

const QuestionCard = ({ question, onAnswer, showAnswer, selected }: Props) => {
  return (
    <>
      <div className="card">
        <h2>{question.question}</h2>

        <div className="options">
          {question.options.map((opt) => {
            let className = "option";

            if (showAnswer) {
              if (opt === question.answer) {
                className += " correct";
              } else if (opt === selected) {
                className += " wrong";
              }
            }

            return (
              <button
                key={opt}
                className={className}
                onClick={() => !showAnswer && onAnswer(opt)}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
