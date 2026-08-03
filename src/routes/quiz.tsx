import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { quizQuestions } from "@/data/lore";
import { PageHeader } from "@/components/site/Ui";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Ninja Quiz — Naruto Fan Hub" },
      { name: "description", content: "Test your Naruto knowledge with a ten-question quiz on jutsu, clans and villages." },
      { property: "og:title", content: "Naruto Ninja Quiz" },
      { property: "og:description", content: "Ten questions on characters, jutsu and lore." },
    ],
  }),
  component: () => {
    const [index, setIndex] = useState(0);
    const [picked, setPicked] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);
    const q = quizQuestions[index]!;

    const choose = (i: number) => {
      if (picked !== null) return;
      setPicked(i);
      if (i === q.answer) setScore((s) => s + 1);
    };
    const next = () => {
      if (index + 1 >= quizQuestions.length) setDone(true);
      else {
        setIndex(index + 1);
        setPicked(null);
      }
    };

    return (
      <div className="mx-auto max-w-2xl px-4 py-8">
        <PageHeader eyebrow="Interactive" title="Ninja Quiz" description="Ten questions. No hints." />
        {done ? (
          <div className="panel-surface p-6 text-center">
            <p className="display text-5xl text-primary">
              {score}/{quizQuestions.length}
            </p>
            <button
              onClick={() => {
                setIndex(0);
                setPicked(null);
                setScore(0);
                setDone(false);
              }}
              className="bg-ember mt-5 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground"
            >
              Play again
            </button>
          </div>
        ) : (
          <div className="panel-surface p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Question {index + 1} of {quizQuestions.length}
            </p>
            <h2 className="mt-2 text-xl">{q.question}</h2>
            <div className="mt-4 space-y-2">
              {q.options.map((o, i) => {
                const state =
                  picked === null ? "" : i === q.answer ? "border-primary text-primary" : picked === i ? "border-destructive text-destructive" : "opacity-60";
                return (
                  <button
                    key={o}
                    onClick={() => choose(i)}
                    className={`w-full rounded-md border border-border bg-card px-4 py-3 text-left text-sm transition-colors hover:border-primary ${state}`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
            {picked !== null && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">{q.explanation}</p>
                <button
                  onClick={next}
                  className="bg-ember mt-3 rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
});
