'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type User = {
  name: string
  email: string
}

type StoredUser = User & { password: string }

type QuizScore = {
  score: number
  total: number
  date: string
}

type AuthContextValue = {
  user: User | null
  ready: boolean
  signUp: (name: string, email: string, password: string) => { ok: boolean; error?: string }
  login: (email: string, password: string) => { ok: boolean; error?: string }
  logout: () => void
  completedLessons: string[]
  markLessonComplete: (slug: string) => void
  quizScores: QuizScore[]
  addQuizScore: (score: number, total: number) => void
}

const USERS_KEY = 'nam_users'
const SESSION_KEY = 'nam_session'
const progressKey = (email: string) => `nam_progress_${email}`
const quizKey = (email: string) => `nam_quiz_${email}`

const AuthContext = createContext<AuthContextValue | null>(null)

function readUsers(): StoredUser[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  } catch {
    return []
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [ready, setReady] = useState(false)
  const [completedLessons, setCompletedLessons] = useState<string[]>([])
  const [quizScores, setQuizScores] = useState<QuizScore[]>([])

  const loadUserData = useCallback((email: string) => {
    try {
      setCompletedLessons(JSON.parse(localStorage.getItem(progressKey(email)) || '[]'))
      setQuizScores(JSON.parse(localStorage.getItem(quizKey(email)) || '[]'))
    } catch {
      setCompletedLessons([])
      setQuizScores([])
    }
  }, [])

  useEffect(() => {
    try {
      const session = localStorage.getItem(SESSION_KEY)
      if (session) {
        const parsed: User = JSON.parse(session)
        setUser(parsed)
        loadUserData(parsed.email)
      }
    } catch {
      // ignore
    }
    setReady(true)
  }, [loadUserData])

  const signUp = useCallback(
    (name: string, email: string, password: string) => {
      const normalized = email.trim().toLowerCase()
      const users = readUsers()
      if (users.some((u) => u.email === normalized)) {
        return { ok: false, error: 'An account with this email already exists.' }
      }
      const stored: StoredUser = { name: name.trim(), email: normalized, password }
      users.push(stored)
      localStorage.setItem(USERS_KEY, JSON.stringify(users))
      const publicUser = { name: stored.name, email: stored.email }
      localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser))
      setUser(publicUser)
      loadUserData(normalized)
      return { ok: true }
    },
    [loadUserData],
  )

  const login = useCallback(
    (email: string, password: string) => {
      const normalized = email.trim().toLowerCase()
      const users = readUsers()
      const found = users.find((u) => u.email === normalized)
      if (!found || found.password !== password) {
        return { ok: false, error: 'Invalid email or password.' }
      }
      const publicUser = { name: found.name, email: found.email }
      localStorage.setItem(SESSION_KEY, JSON.stringify(publicUser))
      setUser(publicUser)
      loadUserData(normalized)
      return { ok: true }
    },
    [loadUserData],
  )

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
    setCompletedLessons([])
    setQuizScores([])
  }, [])

  const markLessonComplete = useCallback(
    (slug: string) => {
      if (!user) return
      setCompletedLessons((prev) => {
        if (prev.includes(slug)) return prev
        const next = [...prev, slug]
        localStorage.setItem(progressKey(user.email), JSON.stringify(next))
        return next
      })
    },
    [user],
  )

  const addQuizScore = useCallback(
    (score: number, total: number) => {
      if (!user) return
      setQuizScores((prev) => {
        const next = [{ score, total, date: new Date().toISOString() }, ...prev].slice(0, 20)
        localStorage.setItem(quizKey(user.email), JSON.stringify(next))
        return next
      })
    },
    [user],
  )

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      ready,
      signUp,
      login,
      logout,
      completedLessons,
      markLessonComplete,
      quizScores,
      addQuizScore,
    }),
    [user, ready, signUp, login, logout, completedLessons, markLessonComplete, quizScores, addQuizScore],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
