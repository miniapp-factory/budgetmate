"use client";

import { Results } from "@/components/results/Results";

import { Suspense } from "react";

export default function ResultsPage() {
  return (
    <Suspense fallback={<div>Loading results...</div>}>
      <Results />
    </Suspense>
  );
}
