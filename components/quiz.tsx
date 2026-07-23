'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, RotateCcw, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { quizQuestions } from '@/lib/quiz'
import { useAuth } from '@/components/auth-provider'
import { cn } from '@/lib/utils'

export function Quiz() {
  const { user, addQuizScore } = useAuth()
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null),
  )
  const [submitted, setSubmitted] = useState(false)

  const score = answers.reduce(
    (total, answer, i) => (answer === quizQuestions[i].answer ? total + 1 : total),
    0,
  )
  const allAnswered = answers.every((a) => a !== null)

  function handleSubmit() {
    setSubmitted(true)
    if (user) addQuizScore(score, quizQuestions.length)
  }

  function handleReset() {
    setAnswers(Array(quizQuestions.length).fill(null))
    setSubmitted(false)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="space-y-8">
        {quizQuestions.map((q, qi) => (
          <fieldset key={qi} className="border-0 p-0">
            <legend className="font-serif text-lg font-semibold text-foreground">
              {qi + 1}. {q.question}
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {q.options.map((option, oi) => {
                const selected = answers[qi] === oi
                const isCorrect = q.answer === oi
                const showCorrect = submitted && isCorrect
                const showWrong = submitted && selected && !isCorrect
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={submitted}
                    onClick={() =>
                      setAnswers((prev) => {
                        const next = [...prev]
                        next[qi] = oi
                        return next
                      })
                    }
                    className={cn(
                      'flex items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition-colors',
                      'border-border hover:border-primary/50 hover:bg-secondary',
                      selected && !submitted && 'border-primary bg-primary/10 text-primary',
                      showCorrect && 'border-green-600 bg-green-600/10 text-green-700',
                      showWrong && 'border-destructive bg-destructive/10 text-destructive',
                    )}
                  >
                    <span>{option}</span>
                    {showCorrect && <Check className="size-4" />}
                    {showWrong && <X className="size-4" />}
                  </button>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {!submitted ? (
          <Button size="lg" onClick={handleSubmit} disabled={!allAnswered}>
            {allAnswered ? 'Submit Quiz' : 'Answer all questions to submit'}
          </Button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl bg-primary p-6 text-center text-primary-foreground"
          >
            <Trophy className="mx-auto size-8 text-accent" />
            <p className="mt-3 font-serif text-2xl font-bold">
              You scored {score} / {quizQuestions.length}
            </p>
            <p className="mt-1 text-sm text-primary-foreground/75">
              {score === quizQuestions.length
                ? 'Perfect score! You are ready for your next lesson.'
                : score >= quizQuestions.length / 2
                  ? 'Great effort! Review the topics and try again.'
                  : 'Keep practicing! Read the topics above and give it another go.'}
            </p>
            {user ? (
              <p className="mt-3 text-xs text-accent">Your score has been saved to your dashboard.</p>
            ) : (
              <p className="mt-3 text-xs text-primary-foreground/60">
                Log in to save your quiz scores to your dashboard.
              </p>
            )}
            <Button variant="secondary" className="mt-4" onClick={handleReset}>
              <RotateCcw className="size-4" />
              Try Again
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
