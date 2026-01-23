'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { GraduationCap, Briefcase, Heart } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="section-padding bg-background-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl">
            My journey from tech to coaching has been driven by a passion for helping
            people unlock their potential. After spending over a decade in data
            engineering and machine learning, I discovered the transformative power of
            coaching.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <li>• MS in Organizational Dynamics, University of Pennsylvania</li>
                <li>• MS in Business Analytics, University of Illinois at Chicago</li>
                <li>• Bachelor&apos;s in Electronics and Biomedical Engineering, Cochin University of Science and Technology</li>
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
      </div>
    </section>
  )
}
