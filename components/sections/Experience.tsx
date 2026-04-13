'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { experiences } from '@/content/experience'
import { GraduationCap, Briefcase, Heart } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="section-panel section-padding relative">
      <div className="panel-num"><b>04</b> / 06</div>
      <div className="divider mb-20 lg:mb-24" />

      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="label mb-4">Background</p>
          <h2 className="font-serif font-medium tracking-tight text-4xl md:text-5xl lg:text-6xl">
            <span className="accent-italic">Resume</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="h-full">
              <div className="mb-5">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-4">Education</h3>
              <ul className="text-foreground-secondary space-y-3 text-sm leading-relaxed">
                <li>&bull; MS in Organizational Dynamics, University of Pennsylvania</li>
                <li>&bull; MS in Business Analytics, University of Illinois at Chicago</li>
                <li>&bull; Bachelor&apos;s in Electronics and Biomedical Engineering, Cochin University of Science and Technology</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="h-full">
              <div className="mb-5">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-4">Tech Background</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                10+ years of experience building data infrastructure and pipelines,
                developing metrics to drive critical business decisions, and leading
                engineering teams at{' '}
                <span className="font-medium text-foreground">Meta</span>,{' '}
                <span className="font-medium text-foreground">WeWork</span>,{' '}
                <span className="font-medium text-foreground">GSN Games</span>, and{' '}
                <span className="font-medium text-foreground">startups</span>.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="h-full">
              <div className="mb-5">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-4">Coaching</h3>
              <p className="text-foreground-secondary text-sm leading-relaxed">
                Supporting leaders through transitions, growth, organizational
                challenges, and personal growth journeys using{' '}
                <span className="font-medium text-foreground">evidence-based coaching</span>.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="font-serif text-2xl font-medium">
            Work <span className="accent-italic">Experience</span>
          </h3>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border-t border-border py-8 md:py-10 grid md:grid-cols-[200px_1fr] gap-4 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-foreground-muted">
                    {exp.period}
                  </span>
                  <span className="text-sm text-accent font-medium mt-1">{exp.company}</span>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">{exp.role}</h3>
                  <p className="text-foreground-secondary leading-relaxed text-sm">
                    {exp.description}
                  </p>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs text-foreground-muted border border-border bg-background-secondary/60 tracking-wide rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
