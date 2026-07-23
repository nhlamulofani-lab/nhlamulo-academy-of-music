import { Piano, Guitar, Drum, Mic, Music, Music2, Music4, type LucideProps } from 'lucide-react'

const map = {
  Piano,
  Guitar,
  Drum,
  Mic,
  Music,
  Music2,
  Music4,
} as const

export function InstrumentIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = map[name as keyof typeof map] ?? Music
  return <Icon {...props} />
}
