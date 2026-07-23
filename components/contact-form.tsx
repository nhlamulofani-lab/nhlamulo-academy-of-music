'use client'

import { useState, type FormEvent } from 'react'
import { Send, Phone, Mail } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { instruments } from '@/lib/lessons'
import { site } from '@/lib/site'

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    instrument: '',
    message: '',
  })

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.includes('@') || !form.message.trim()) {
      toast.error('Please fill in your name, a valid email, and a message.')
      return
    }
    toast.success('Thank you! Your message has been sent to the founder.')
    setForm({ name: '', email: '', phone: '', instrument: '', message: '' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Your phone number" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="instrument">Instrument Interested In</Label>
          <select
            id="instrument"
            value={form.instrument}
            onChange={(e) => update('instrument', e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Select an instrument</option>
            {instruments.map((i) => (
              <option key={i.slug} value={i.name}>
                {i.name}
              </option>
            ))}
            <option value="Music Theory">Music Theory</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell the founder what you would like to learn..." rows={5} />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button type="submit">
          <Send className="size-4" />
          Send Message
        </Button>
        <Button render={<a href={`tel:${site.phoneDial}`} />} type="button" variant="outline">
          <Phone className="size-4" />
          Call Founder
        </Button>
        <Button render={<a href={`mailto:${site.email}`} />} type="button" variant="ghost">
          <Mail className="size-4" />
          Email Founder
        </Button>
      </div>
    </form>
  )
}
