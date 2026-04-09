'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { coaching } from '@/content/coaching'
import { ExternalLink, CheckCircle } from 'lucide-react'

export function Coaching() {
  return (
    <section id="coaching" className="section-padding bg-background-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            {coaching.title}
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            I run a boutique coaching company, <a href="https://www.greymahout.com" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-primary transition-colors">Grey Mahout</a>, offering 1-on-1 coaching, team coaching, and AI adoption consulting. I also bring my coaching practice to other organizations as a trusted external partner. My approach is rooted in Psychodynamics, Humanistic Psychology, and Systems Thinking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Credentials & Expertise</h3>
            <ul className="space-y-4">
              {coaching.credentials.map((credential, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-secondary">{credential}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(coaching.ctaUrl, '_blank')}
              className="inline-flex items-center gap-2"
            >
              {coaching.ctaText}
              <ExternalLink className="w-5 h-5" />
            </Button>
            <p className="text-sm text-foreground-muted mt-4">
              Visit{' '}
              <a
                href={coaching.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                greymahout.com
              </a>{' '}
              to learn more about my coaching services
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
