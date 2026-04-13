'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ArrowDown, ExternalLink } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="section-panel min-h-[92vh] flex items-center section-padding relative"
    >
      <div className="panel-num"><b>01</b> / 06</div>

      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-[1.25fr_0.75fr] gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="label mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Leadership Coach &amp; AI Adoption Consultant
            </motion.p>

            <motion.h1
              className="font-serif font-medium tracking-tight leading-[0.98] mb-10 text-6xl md:text-7xl lg:text-8xl xl:text-[108px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Athira <span className="accent-italic">Das</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              10+ years in tech &middot; Now empowering leaders and teams
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <a
                href="https://calendly.com/athiradas/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="inline-flex items-center gap-2">
                  Book a Discovery Call
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </a>
              <a
                href="#coaching"
                className="inline-flex items-center gap-2 text-foreground-muted hover:text-accent transition-colors text-sm"
              >
                Learn more <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
              <div className="absolute -inset-3 border border-accent/30 rounded-2xl -z-10" />
              <div className="absolute -inset-6 border border-border -z-10 rounded-[1.75rem]" />

              <div className="relative w-full h-full overflow-hidden bg-background-secondary rounded-2xl">
                <Image
                  src="/images/Athira Das.jpg"
                  alt="Athira Das"
                  width={500}
                  height={667}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
