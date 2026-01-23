import { getAllPosts } from '@/lib/substack'
import { BlogCard } from '@/components/blog/BlogCard'

export const metadata = {
  title: 'Blog',
  description:
    'Thoughts on leadership, coaching, AI, and the future of work from my Substack',
}

// Revalidate every 5 minutes
export const revalidate = 300

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="section-padding max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Blog</h1>
        <p className="text-lg text-foreground-secondary mb-4">
          Thoughts on leadership, coaching, AI, and the future of work
        </p>
        <a
          href="https://blog.athiradas.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-2"
        >
          Visit my Substack
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-foreground-secondary text-lg">
            Loading posts from Substack...
          </p>
        </div>
      )}
    </main>
  )
}
