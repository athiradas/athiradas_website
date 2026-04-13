'use client'

import { motion } from 'framer-motion'
import { BlogCard } from '@/components/blog/BlogCard'
import { Button } from '@/components/ui/Button'
import { BlogPost } from '@/types/blog'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface FeaturedBlogProps {
  posts: BlogPost[]
}

export function FeaturedBlog({ posts }: FeaturedBlogProps) {
  const featuredPosts = posts.slice(0, 3)

  if (featuredPosts.length === 0) {
    return null
  }

  return (
    <section className="section-panel section-padding relative">
      <div className="panel-num"><b>06</b> / 06</div>
      <div className="divider mb-20 lg:mb-24" />

      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <p className="label mb-4">Writing</p>
            <h2 className="font-serif font-medium tracking-tight text-4xl md:text-5xl lg:text-6xl">
              Latest from the <span className="accent-italic">Blog</span>
            </h2>
          </div>
          <p className="text-foreground-muted mt-4 md:mt-0 max-w-sm text-sm leading-relaxed">
            Insights on leadership, coaching, AI, and the future of work
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/blog">
            <Button variant="outline" className="inline-flex items-center gap-3">
              View All Posts
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
