'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { coaching } from '@/content/coaching'
import { ExternalLink } from 'lucide-react'

export function Coaching() {
  return (
    <section id="coaching" className="section-panel section-padding relative">
      <div className="panel-num"><b>02</b> / 06</div>
      <div className="divider mb-20 lg:mb-24" />

      <div className="max-w-5xl">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label mb-4">What I Do</p>
            <h2 className="font-serif font-medium tracking-tight mb-8 leading-[1.05] text-4xl md:text-5xl lg:text-6xl">
              {coaching.title}
            </h2>
            <p className="text-foreground-secondary leading-relaxed text-lg">
              I run a boutique coaching company,{' '}
              <a
                href="https://www.greymahout.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground border-b border-foreground/30 hover:border-accent hover:text-accent transition-colors"
              >
                Grey Mahout
              </a>
              , offering 1-on-1 coaching, team coaching, and AI adoption consulting. I also
              bring my coaching practice to other organizations as a trusted external
              partner. My approach is rooted in Psychodynamics, Humanistic Psychology, and
              Systems Thinking.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(coaching.ctaUrl, '_blank')}
                className="inline-flex items-center gap-2"
              >
                {coaching.ctaText}
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </div>
            <p className="text-xs text-foreground-muted mt-4 tracking-wide">
              Visit{' '}
              <a
                href={coaching.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-secondary hover:text-accent transition-colors border-b border-border hover:border-accent"
              >
                greymahout.com
              </a>{' '}
              to learn more about my coaching services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="p-10 lg:p-12">
              <h3 className="font-serif text-2xl font-medium mb-8">
                Credentials &amp; <span className="accent-italic">Expertise</span>
              </h3>
              <ul className="space-y-5">
                {coaching.credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-foreground-secondary leading-relaxed">
                      {credential}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
