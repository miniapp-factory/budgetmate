"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Results() {
  const router = useRouter();
  const params = useSearchParams();
  const score = Number(params.get("score") ?? 0);
  const total = Number(params.get("total") ?? 0);
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const tips = [
    "Track your expenses daily to spot patterns.",
    "Set a realistic budget and stick to it.",
    "Save a fixed percentage of each paycheck.",
    "Avoid impulse purchases by waiting 24 hours.",
    "Build an emergency fund covering 3–6 months of expenses.",
  ];

  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <CardHeader>
        <h2 className="text-2xl font-semibold">Your Results</h2>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold mb-4">
          {score} / {total} ({percentage}%)
        </p>
        <p className="mb-4">
          {percentage >= 80
            ? "Excellent! You have strong money habits."
            : percentage >= 50
            ? "Good job! You have a solid foundation."
            : "Keep learning! These tips can help you improve."}
        </p>
        <h3 className="font-semibold mb-2">Money Tips:</h3>
        <ul className="list-disc pl-5 space-y-1">
          {tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </CardFooter>
    </Card>
  );
}
