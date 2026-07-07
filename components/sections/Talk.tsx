'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { featuredTalks, workshop } from '@/content/talks'
import { FeaturedTalk } from '@/types/talk'

function TalkVideo({ talk, delay }: { talk: FeaturedTalk; delay: number }) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-border bg-background-secondary">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${talk.videoId}?autoplay=1`}
            title={talk.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-2xl"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play video: ${talk.title}`}
            className="group absolute inset-0 w-full h-full"
          >
            <img
              src={`https://img.youtube.com/vi/${talk.videoId}/maxresdefault.jpg`}
              alt={`${talk.title} thumbnail`}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <span className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/90 group-hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-background translate-x-0.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="mt-8">
        <p className="label mb-3">{talk.label}</p>
        <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground leading-snug">
          {talk.title}
        </h3>
      </div>
    </motion.div>
  )
}

export function Talk() {
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
            Talks &amp; <span className="accent-italic">Workshops</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-14 lg:space-y-16">
            {featuredTalks.map((talk, i) => (
              <TalkVideo key={talk.videoId} talk={talk} delay={0.1 + i * 0.1} />
            ))}
          </div>

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

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-28"
        >
          <p className="label mb-8">Workshops</p>

          <div className="rounded-2xl border border-border bg-background-secondary/40 p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-foreground leading-tight">
                {workshop.title}
              </h3>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/40 text-accent text-xs uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {workshop.status}
              </span>
            </div>

            <p className="mt-5 text-foreground-secondary leading-relaxed max-w-2xl">
              {workshop.description}
            </p>
            <p className="mt-4 text-foreground-secondary leading-relaxed max-w-2xl">
              {workshop.audience}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {workshop.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs text-foreground-muted border border-border bg-background-secondary/60 tracking-wide rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {workshop.ctaUrl && workshop.ctaText && (
              <a
                href={workshop.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-accent hover:gap-3 transition-all duration-300"
              >
                {workshop.ctaText}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
