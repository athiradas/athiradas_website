'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { experiences } from '@/content/experience'
import { GraduationCap, Briefcase, Heart } from 'lucide-react'

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
            Resume
          </h2>
        </motion.div>

        {/* Education & Background Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <div className="mb-4">
                <GraduationCap className="w-10 h-10 text-accent-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <ul className="text-foreground-secondary space-y-2 text-sm">
                <li>&bull; MS in Organizational Dynamics, University of Pennsylvania</li>
                <li>&bull; MS in Business Analytics, University of Illinois at Chicago</li>
                <li>&bull; Bachelor&apos;s in Electronics and Biomedical Engineering, Cochin University of Science and Technology</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <div className="mb-4">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tech Background</h3>
              <p className="text-foreground-secondary text-sm">
                10+ years of experience building data infrastructure and pipelines, developing metrics to drive critical business decisions, and leading engineering teams at <span className="font-semibold text-foreground">Meta</span>, <span className="font-semibold text-foreground">WeWork</span>, <span className="font-semibold text-foreground">GSN Games</span>, and <span className="font-semibold text-foreground">startups</span>.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full">
              <div className="mb-4">
                <Heart className="w-10 h-10 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">Coaching</h3>
              <p className="text-foreground-secondary text-sm">
                Supporting leaders through transitions, growth, organizational challenges, and personal growth journeys using <span className="font-semibold text-foreground">evidence-based coaching</span>.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Work Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
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
