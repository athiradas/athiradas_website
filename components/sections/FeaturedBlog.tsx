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
    <section className="section-padding bg-background-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Latest from the Blog
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Insights on leadership, coaching, AI, and the future of work
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
          className="text-center"
        >
          <Link href="/blog">
            <Button variant="outline" className="inline-flex items-center gap-2">
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
