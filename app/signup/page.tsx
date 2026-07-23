'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Music2, UserPlus } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/components/auth-provider'

export default function SignUpPage() {
  const router = useRouter()
  const { signUp } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    if (name.trim().length < 2) return setError('Please enter your full name.')
    if (!email.includes('@')) return setError('Please enter a valid email address.')
    if (password.length < 6) return setError('Password must be at least 6 characters.')

    const result = signUp(name, email, password)
    if (!result.ok) return setError(result.error || 'Something went wrong.')
    toast.success('Welcome to the Academy!')
    router.push('/dashboard')
  }

  return (
    <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center bg-secondary/40 px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="flex flex-col items-center text-center">
          <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Music2 className="size-6" />
          </span>
          <h1 className="mt-4 font-serif text-2xl font-bold text-foreground">Create Your Account</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Join Nhlamulo Academy of Music and start learning today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" autoComplete="new-password" />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" size="lg" className="mt-2">
            <UserPlus className="size-4" />
            Sign Up
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Student Login
          </Link>
        </p>
      </div>
    </div>
  )
}
