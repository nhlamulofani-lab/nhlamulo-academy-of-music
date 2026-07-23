export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <section className="border-b border-border bg-primary">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-widest text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-balance font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
