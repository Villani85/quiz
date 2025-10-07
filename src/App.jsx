import React, { useState, useMemo, useEffect } from 'react';
import { DOMANDE_INLINE } from './quiz-data.js';

export default function App() {
  return (
    <div className="min-h-screen">
      <QuizComponent questions={DOMANDE_INLINE} />
    </div>
  );
}

function QuizComponent({ questions }) {
  const [idx, setIdx] = useState(0);
  const [order, setOrder] = useState(() => Array.from({ length: questions.length }, (_, i) => i));
  const [showSolution, setShowSolution] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showState, setShowState] = useState(false);

  const total = order.length;
  const currentQuestion = questions[order[idx]];
  const progressPct = Math.round(((idx + 1) / total) * 100);

  const explanation = useMemo(() => {
    if (!currentQuestion?.answers) return null;
    const correctAnsw = currentQuestion.answers.find((ans) => ans.isCorrect);
    return correctAnsw?.explanation || "Spiegazione non disponibile.";
  }, [currentQuestion]);

  const resetQuestionState = () => {
    setShowSolution(false);
    setSelectedAnswer(null);
    setShowState(false);
  };

  const next = () => {
    if (idx < order.length - 1) {
      setIdx((v) => v + 1);
      resetQuestionState();
      scrollToTopSmooth();
    }
  };

  const prev = () => {
    if (idx > 0) {
      setIdx((v) => v - 1);
      resetQuestionState();
      scrollToTopSmooth();
    }
  };

  const reshuffle = () => {
    setOrder((currentOrder) => [...currentOrder].sort(() => Math.random() - 0.5));
    setIdx(0);
    resetQuestionState();
    scrollToTopSmooth();
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowState(true);
  };

  // scorciatoie tastiera: ← → e S
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key.toLowerCase() === 's') setShowSolution((s) => !s);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, order.length]);

  if (!currentQuestion) {
    return <div className="p-8">Caricamento domande...</div>;
  }

  return (
    <div className="px-4 py-8 md:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4 shadow-lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 ring-1 ring-white/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20ZM11 7h2v6h-2V7Zm0 8h2v2h-2v-2Z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">Quiz App</h1>
                <p className="text-xs text-white/70">Allenati a riconoscere le strategie comunicative.</p>
              </div>
            </div>

            <div className="text-sm text-white/80">
              Domanda <span className="font-semibold">{idx + 1}</span> / {total}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full w-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-500"
              style={{ width: `${progressPct}%` }}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progressPct}
              role="progressbar"
            />
          </div>
        </header>

        {/* Card domanda */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
          <h2 className="text-2xl font-bold leading-tight">
            {currentQuestion.question}
          </h2>

          {/* Opzioni */}
          {currentQuestion.answers && currentQuestion.answers.length > 0 ? (
            <div className="mt-6 flex flex-col gap-3">
              {currentQuestion.answers.map((answer, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = answer.isCorrect;

                const base =
                  "group relative block w-full rounded-2xl border bg-white/5 p-4 text-left shadow transition-all duration-200 hover:bg-white/10 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 disabled:cursor-not-allowed";
                const correct =
                  "border-emerald-400/70 bg-emerald-400/10 ring-1 ring-emerald-400/40";
                const wrong =
                  "border-rose-400/70 bg-rose-400/10 ring-1 ring-rose-400/40";
                const dimmed = "opacity-60";

                let classes = base;
                if (showState && isCorrect) classes += " " + correct;
                if (showState && isSelected && !isCorrect) classes += " " + wrong;
                if (showState && !isSelected && !isCorrect) classes += " " + dimmed;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showState}
                    className={classes}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-base font-medium leading-tight">{answer.text}</span>

                      {/* Badge stato */}
                      {showState && isCorrect && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/90 px-2 py-0.5 text-xs font-semibold text-emerald-950">
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M9 16.17l-3.88-3.88L4 13.41l5 5 11-11-1.41-1.41z"/></svg>
                          Corretto
                        </span>
                      )}
                      {showState && isSelected && !isCorrect && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-rose-400/90 px-2 py-0.5 text-xs font-semibold text-rose-950">
                          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M18.3 5.71L12 12.01 5.7 5.7 4.29 7.11l6.3 6.3-6.3 6.29 1.41 1.41L12 14.83l6.29 6.28 1.41-1.41-6.3-6.29 6.3-6.3z"/></svg>
                          Sbagliato
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mt-2 text-white/80">
              <em>Questa domanda non ha opzioni predefinite.</em>
            </div>
          )}

          {/* Spiegazione */}
          {showSolution && explanation && (
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4 shadow">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-emerald-400 to-cyan-400" />
              <div className="mb-1 pl-3 text-xs uppercase tracking-widest text-white/70">Spiegazione</div>
              <div className="pl-3 text-white/90 leading-relaxed">{explanation}</div>
            </div>
          )}

          {/* Controls */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setShowSolution((s) => !s)}
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold shadow hover:bg-white/20"
              >
                {showSolution ? "Nascondi soluzione" : "Mostra soluzione"}
              </button>
              <button
                onClick={reshuffle}
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold shadow hover:bg-white/20"
                title="Rigenera un nuovo ordine casuale"
              >
                Mescola di nuovo
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold shadow hover:bg-white/20 disabled:opacity-40"
                disabled={idx === 0}
              >
                ← Indietro
              </button>
              <button
                onClick={next}
                className="rounded-xl border border-emerald-400/50 bg-emerald-400/10 px-4 py-2 text-sm font-semibold shadow hover:bg-emerald-400/20 disabled:opacity-40"
                disabled={idx === order.length - 1}
              >
                Avanti →
              </button>
            </div>
          </div>
        </div>

        {/* Footer hint */}
        <footer className="mx-auto mt-10 max-w-3xl text-center text-xs text-white/80">
          <p>
            Suggerimenti: premi{" "}
            <kbd className="rounded bg-white/20 px-1">→</kbd> per avanzare,{" "}
            <kbd className="rounded bg-white/20 px-1">←</kbd> per tornare indietro,{" "}
            <kbd className="rounded bg-white/20 px-1">S</kbd> per mostrare/nascondere la soluzione.
          </p>
        </footer>
      </div>
    </div>
  );
}

function scrollToTopSmooth() {
  try {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch {
    window.scrollTo(0, 0);
  }
}
