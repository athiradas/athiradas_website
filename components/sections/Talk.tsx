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
    <section id="talk" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Talks
          </h2>
        </motion.div>

        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border">
            {hasTriggered ? (
              <iframe
                src="https://www.youtube.com/embed/LPDM7bkUBvw?autoplay=1&mute=1"
                title="Athira Das Talk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <img
                src="https://img.youtube.com/vi/LPDM7bkUBvw/maxresdefault.jpg"
                alt="Athira Das Talk thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm uppercase tracking-widest text-primary mb-2">
              Penn Grad Talks
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
              AI Integration in Organizations: The Question to Ask Before You Adopt AI
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
