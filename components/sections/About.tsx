'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="about" className="section-panel panel-dark section-padding relative">
      <div className="panel-num"><b>05</b> / 06</div>
      <div className="divider mb-20 lg:mb-24" />

      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-24"
        >
          <p className="label mb-5">Personal</p>
          <h2 className="font-serif font-medium tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[1]">
            About <span className="accent-italic">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-24 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-16"
          >
            <div
              className="relative aspect-[4/5] overflow-hidden cursor-pointer rounded-[20px] bg-background-secondary"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute -inset-px rounded-[20px] border border-border pointer-events-none z-10" />
              <div className="absolute -inset-3 rounded-[24px] border border-accent/25 pointer-events-none -z-0" />

              <Image
                src="/images/about-speaking.jpg"
                alt="Athira Das speaking"
                fill
                className={`object-cover transition-all duration-700 ${
                  isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                }`}
              />
              <Image
                src="/images/about-hover.jpg"
                alt="Athira Das with family"
                fill
                className={`object-cover transition-all duration-700 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="text-[10px] uppercase tracking-[0.2em] bg-background/85 backdrop-blur-sm px-3 py-1.5 rounded-md text-foreground border border-border">
                  {isHovered ? 'Life outside work' : 'Hover to see more'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-14"
          >
            <div>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif italic text-accent text-xl">i.</span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                  The <span className="accent-italic">Pivot</span>
                </h3>
              </div>
              <p className="text-[17px] leading-[1.85] text-foreground-secondary font-light max-w-[560px]">
                After more than a decade building data infrastructure at companies like
                Meta, WeWork, and fast-growing startups, I made a deliberate shift. I
                traded dashboards and pipelines for deeper conversations about what
                drives people: their ambitions, fears, and untapped potential. My
                journey into coaching wasn&apos;t a departure from tech; it was an
                evolution. The same curiosity that made me a strong engineer now fuels
                my work helping leaders navigate change.
              </p>
            </div>

            <div className="h-px w-24 bg-accent/40" />

            <div>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif italic text-accent text-xl">ii.</span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                  Outside of <span className="accent-italic">Work</span>
                </h3>
              </div>
              <p className="text-[17px] leading-[1.85] text-foreground-secondary font-light max-w-[560px]">
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
