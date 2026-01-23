'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SocialLinks } from '@/components/layout/SocialLinks'
import { Button } from '@/components/ui/Button'
import { ArrowDown, ExternalLink } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-gradient">Athira Das</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-foreground-secondary mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Data Engineer turned Leadership Coach
              </motion.p>
              <motion.p
                className="text-base md:text-lg text-foreground-muted"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                10+ years in tech • Now empowering leaders and teams
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8"
            >
              <SocialLinks />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8"
            >
              <a
                href="https://www.greymahout.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="inline-flex items-center gap-2">
                  Visit Grey Mahout
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://www.greymahout.com/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="inline-flex items-center gap-2">
                  Book a Discovery Call
                </Button>
              </a>
            </motion.div>

            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Learn more <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-full blur-3xl" />
              <div className="relative glass rounded-full overflow-hidden glow">
                <Image
                  src="/images/Athira Das.jpg"
                  alt="Athira Das"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
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
