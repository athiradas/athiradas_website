'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export function Talk() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    if (isInView && !hasTriggered) {
      setHasTriggered(true)
    }
  }, [isInView, hasTriggered])

  return (
    <section id="talk" className="section-panel panel-dark section-padding relative">
      <div className="panel-num"><b>03</b> / 06</div>
      <div className="divider mb-20 lg:mb-24" />

      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="label mb-4">Featured</p>
          <h2 className="font-serif font-medium tracking-tight text-4xl md:text-5xl lg:text-6xl">
            <span className="accent-italic">Talks</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-10 lg:gap-16 items-start">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-border bg-background-secondary">
              {hasTriggered ? (
                <iframe
                  src="https://www.youtube.com/embed/LPDM7bkUBvw?autoplay=1&mute=1"
                  title="Athira Das Talk"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-2xl"
                />
              ) : (
                <img
                  src="https://img.youtube.com/vi/LPDM7bkUBvw/maxresdefault.jpg"
                  alt="Athira Das Talk thumbnail"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              )}
            </div>
            <div className="mt-8">
              <p className="label mb-3">Penn Grad Talks</p>
              <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground leading-snug">
                AI Integration in Organizations: The Question to Ask Before You Adopt AI
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:pt-2"
          >
            <p className="label mb-6">Athira talks about</p>
            <ul className="space-y-5">
              {[
                'AI Integration in Organizations',
                'Change management strategies for AI Adoption',
                'Importance of coaching in AI Adoption',
                'Future of work with AI-Human collaboration',
              ].map((topic) => (
                <li key={topic} className="flex items-start gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-foreground-secondary leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
