'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { experiences } from '@/content/experience'

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Experience
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl">
            Over a decade of building and leading data engineering teams, working with
            cutting-edge technologies, and delivering impactful solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-purple to-accent-cyan hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary glow hidden md:block" />

                <div className="md:ml-20">
                  <Card>
                    <div className="mb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <span className="text-foreground-secondary text-sm">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>

                    <p className="text-foreground-secondary">{exp.description}</p>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-background-secondary border border-border rounded-full text-foreground-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
