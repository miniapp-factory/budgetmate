"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Question = {
  text: string;
  options: string[];
  correct: number;
  explanation: string;
};

const questions: Question[] = [
  {
    text: "What’s the first step in tracking your daily expenses?",
    options: [
      "Ignore small purchases",
      "Write down everything you spend",
      "Only track big expenses",
      "Wait until the end of the month",
    ],
    correct: 1,
    explanation:
      "You can’t manage what you don’t measure — start by recording everything.",
  },
  {
    text: "Which of these is a need?",
    options: ["New sneakers", "Pizza delivery", "Rent", "Concert tickets"],
    correct: 2,
    explanation:
      "Needs are essentials like food, housing, and transport.",
  },
  {
    text: "What’s a good habit for saving money?",
    options: [
      "Spend first, save later",
      "Save only when you feel like it",
      "Pay yourself first",
      "Save only once a year",
    ],
    correct: 2,
    explanation:
      "Paying yourself first means saving before spending.",
  },
  // Add the remaining 17 questions here following the same structure
];

export function Quiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const question = questions[current];

  const handleAnswer = (index: number) => {
    if (index === question.correct) {
      setScore((s) => s + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setShowExplanation(false);
    } else {
      router.push(`/results?score=${score}&total=${questions.length}`);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <CardHeader>
        <h2 className="text-2xl font-semibold">
          Question {current + 1} of {questions.length}
        </h2>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{question.text}</p>
        {question.options.map((opt, idx) => (
          <Button
            key={idx}
            variant={showExplanation ? "outline" : "default"}
            className="w-full text-left mb-2"
            onClick={() => handleAnswer(idx)}
            disabled={showExplanation}
          >
            {opt}
          </Button>
        ))}
        {showExplanation && (
          <div className="mt-4 p-4 bg-muted rounded">
            <p className="font-semibold">Explanation:</p>
            <p>{question.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {showExplanation && (
          <Button onClick={nextQuestion}>
            {current + 1 < questions.length ? "Next Question" : "See Results"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
