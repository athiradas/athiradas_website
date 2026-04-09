'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
  const [isHovered, setIsHovered] = useState(false)

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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo with hover swap */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/images/about-speaking.jpg"
                alt="Athira Das speaking"
                fill
                className={`object-cover transition-opacity duration-500 ${
                  isHovered ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <Image
                src="/images/about-hover.jpg"
                alt="Athira Das with family"
                fill
                className={`object-contain transition-opacity duration-500 bg-background-tertiary ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </motion.div>

          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">The Pivot</h3>
              <p className="text-foreground-secondary leading-relaxed">
                After more than a decade building data infrastructure at companies like
                Meta, WeWork, and fast-growing startups, I made a deliberate shift. I
                traded dashboards and pipelines for deeper conversations about what
                drives people: their ambitions, fears, and untapped potential. My
                journey into coaching wasn&apos;t a departure from tech; it was an
                evolution. The same curiosity that made me a strong engineer now fuels
                my work helping leaders navigate change.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Outside of Work</h3>
              <p className="text-foreground-secondary leading-relaxed">
                When I&apos;m not coaching or consulting, you&apos;ll find me exploring
                new places with my family, trying new recipes, working on hobby
                projects with AI, writing blogs and children&apos;s stories, and
                spending lots of time with my baby. I believe in living with the same
                intentionality I bring to my clients: showing up fully, staying
                curious, and embracing the messiness of growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
