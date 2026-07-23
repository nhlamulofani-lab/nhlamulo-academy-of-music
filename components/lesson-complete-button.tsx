'use client'

import Link from 'next/link'
import { CheckCircle2, Circle } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/auth-provider'

export function LessonCompleteButton({ slug, name }: { slug: string; name: string }) {
  const { user, completedLessons, markLessonComplete, ready } = useAuth()
  const done = completedLessons.includes(slug)

  if (ready && !user) {
    return (
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-secondary/50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Log in as a student to track your progress and save completed lessons.
        </p>
        <div className="flex gap-2">
          <Button render={<Link href="/login" />} size="sm" variant="outline">
            Log In
          </Button>
          <Button render={<Link href="/signup" />} size="sm">
            Sign Up
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Button
      size="lg"
      variant={done ? 'outline' : 'default'}
      disabled={done}
      onClick={() => {
        markLessonComplete(slug)
        toast.success(`${name} lesson marked complete!`)
      }}
    >
      {done ? (
        <>
          <CheckCircle2 className="size-5" />
          Lesson Completed
        </>
      ) : (
        <>
          <Circle className="size-5" />
          Mark Lesson Complete
        </>
      )}
    </Button>
  )
}
