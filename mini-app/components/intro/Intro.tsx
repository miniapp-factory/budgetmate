"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Intro() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className="text-4xl font-bold text-center">
        Welcome to SpendSense Quiz!
      </h1>
      <p className="text-lg text-center max-w-2xl">
        Test how smart you are with money through fun, quick questions about spending,
        saving, and budgeting. Learn easy tips that help you make better daily financial
        decisions. Ready to find out your money score? Let’s begin!
      </p>
      <Button onClick={() => router.push("/quiz")}>Start Quiz</Button>
    </div>
  );
}
