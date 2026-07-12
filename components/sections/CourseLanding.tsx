'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { course } from '@/content/course'
import { ExternalLink } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function CourseLanding() {
  return (
    <>
      {/* Hero */}
      <section className="section-panel section-padding relative">
        <div className="max-w-5xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <p className="label">{course.label}</p>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/40 text-accent text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {course.status}
              </span>
            </div>
            <h1 className="font-serif font-medium tracking-tight leading-[1.05] text-4xl md:text-5xl lg:text-6xl mb-4">
              {course.title}
              <br />
              <span className="accent-italic">{course.subtitle}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-foreground-secondary leading-relaxed text-lg md:text-xl max-w-2xl mt-8">
              {course.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden mt-14">
              {course.facts.map((fact) => (
                <div key={fact.label} className="bg-background p-5 md:p-6">
                  <p className="label mb-2">{fact.label}</p>
                  <p className="text-sm md:text-base text-foreground font-medium leading-snug">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who it's for + outcomes */}
      <section className="section-panel section-padding relative pt-0 lg:pt-0">
        <div className="divider mb-20 lg:mb-24" />
        <div className="max-w-5xl grid md:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          <Reveal>
            <p className="label mb-4">Who It’s For</p>
            <h2 className="font-serif font-medium tracking-tight text-3xl md:text-4xl leading-[1.1] mb-8">
              Built for the people <span className="accent-italic">leading</span> the change
            </h2>
            <p className="text-foreground-secondary leading-relaxed mb-6">
              {course.description}
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              {course.positioning}
            </p>
            <ul className="space-y-4 mt-8">
              {course.audience.map((item) => (
                <li key={item} className="flex items-start gap-4 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-foreground-secondary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="editorial-card p-10 lg:p-12">
              <h3 className="font-serif text-2xl font-medium mb-8">
                What you’ll <span className="accent-italic">walk away with</span>
              </h3>
              <ul className="space-y-5">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-4 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-foreground-secondary leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The journey — dark panel */}
      <section className="section-panel panel-dark section-padding relative">
        <div className="max-w-5xl">
          <Reveal className="mb-16">
            <p className="label mb-4">The Journey</p>
            <h2 className="font-serif font-medium tracking-tight text-4xl md:text-5xl">
              Eight modules, <span className="accent-italic">one plan</span>
            </h2>
            <p className="text-foreground-secondary leading-relaxed mt-6 max-w-2xl">
              Each module ends with an applied worksheet. By the final module, your own
              accumulated work — not a template — becomes the raw material for your plan.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {course.modules.map((mod, i) => (
              <motion.div
                key={mod.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.05 * i, ease }}
                className="bg-dark p-8 lg:p-10 group hover:bg-dark-card transition-colors duration-500"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-serif italic text-sm text-dark-muted group-hover:text-accent-hi transition-colors duration-300">
                    Module {mod.num}
                  </span>
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-medium text-dark-ink leading-snug mb-3">
                  {mod.title}
                </h3>
                <p className="text-sm leading-relaxed text-dark-muted">{mod.hook}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-panel section-padding relative">
        <div className="max-w-5xl">
          <Reveal>
            <p className="label mb-4">Enrollment</p>
            <h2 className="font-serif font-medium tracking-tight text-4xl md:text-5xl mb-6">
              {course.cta.heading.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="accent-italic">{course.cta.heading.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-foreground-secondary leading-relaxed text-lg max-w-2xl mb-10">
              {course.cta.text}
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(course.cta.primaryUrl, '_blank')}
              className="inline-flex items-center gap-2"
            >
              {course.cta.primaryText}
              <ExternalLink className="w-3.5 h-3.5" />
            </Button>

            <div className="mt-14 pt-10 border-t border-border/60 max-w-2xl">
              <p className="text-foreground-secondary leading-relaxed mb-6">
                {course.cta.orgText}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                <a
                  href={course.cta.orgCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-300"
                >
                  {course.cta.orgCallText}
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={`mailto:${course.cta.orgEmail}`}
                  className="text-sm font-medium text-foreground-secondary border-b border-border hover:text-accent hover:border-accent transition-colors"
                >
                  {course.cta.orgEmail}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
