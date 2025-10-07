import React, { useState, useMemo } from 'react';
import { DOMANDE_INLINE } from './quiz-data.js'; // Importiamo le domande

// Stile base per non avere una pagina bianca
const pageStyles = {
  backgroundColor: '#111827',
  color: '#F9FAFB',
  minHeight: '100vh',
  fontFamily: 'sans-serif',
};

export default function App() {
  // Passiamo le domande al componente Quiz
  return (
    <div style={pageStyles}>
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

  const currentQuestion = questions[order[idx]];

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
      setIdx(idx + 1);
      resetQuestionState();
    }
  };

  const prev = () => {
    if (idx > 0) {
      setIdx(idx - 1);
      resetQuestionState();
    }
  };

  const reshuffle = () => {
    setOrder((currentOrder) => [...currentOrder].sort(() => Math.random() - 0.5));
    setIdx(0);
    resetQuestionState();
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowState(true);
  };

  if (!currentQuestion) {
    return <div className="p-8">Caricamento domande...</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold leading-tight text-white">{currentQuestion.question}</h2>

        {currentQuestion.answers && currentQuestion.answers.length > 0 ? (
          <div className="mt-6 flex flex-col gap-3">
            {currentQuestion.answers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = answer.isCorrect;
              return (
                <button key={index} onClick={() => handleAnswerSelect(index)} disabled={showState} className="block w-full rounded-2xl border border-white/20 bg-white/5 p-4 text-left shadow transition-colors hover:bg-white/10 disabled:cursor-not-allowed">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-base font-medium leading-tight">{answer.text}</span>
                    {showState && isCorrect && <span className="shrink-0 rounded-full bg-emerald-400/80 px-2 py-0.5 text-xs font-semibold text-emerald-950">Corretto</span>}
                    {showState && isSelected && !isCorrect && <span className="shrink-0 rounded-full bg-rose-400/80 px-2 py-0.5 text-xs font-semibold text-rose-950">Sbagliato</span>}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-2 text-white/80"><em>Questa domanda non ha opzioni predefinite.</em></div>
        )}

        {showSolution && explanation && (
          <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm leading-relaxed text-white/90">
            <div className="mb-1 text-xs uppercase tracking-widest text-white/70">Spiegazione</div>
            <div>{explanation}</div>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            <button onClick={() => setShowSolution((s) => !s)} className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold shadow hover:bg-white/20">{showSolution ? "Nascondi soluzione" : "Mostra soluzione"}</button>
            <button onClick={reshuffle} className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold shadow hover:bg-white/20" title="Rigenera un nuovo ordine casuale">Mescola di nuovo</button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={prev} className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold shadow hover:bg-white/20 disabled:opacity-40" disabled={idx === 0}>← Indietro</button>
            <button onClick={next} className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold shadow hover:bg-white/20 disabled:opacity-40" disabled={idx === order.length - 1}>Avanti →</button>
          </div>
        </div>

        <footer className="mx-auto mt-12 max-w-3xl text-center text-xs text-white/80">
          <p>Suggerimenti: premi <kbd className="rounded bg-white/20 px-1">→</kbd> per avanzare, <kbd className="rounded bg-white/20 px-1">←</kbd> per tornare indietro, <kbd className="rounded bg-white/20 px-1">S</kbd> per mostrare/nascondere la soluzione.</p>
        </footer>
      </div>
    </div>
  );
}
