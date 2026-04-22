import type { Question } from "./questions";

export const getRandomQuestions = (all: Question[], count: number) => {
  const shuffled = [...all].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
