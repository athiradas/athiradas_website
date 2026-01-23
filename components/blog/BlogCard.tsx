import { Card } from '@/components/ui/Card'
import { BlogPost } from '@/types/blog'
import { Calendar, Clock, ExternalLink } from 'lucide-react'
import { format } from 'date-fns'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const CardContent = (
    <Card className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          {post.featured && (
            <span className="inline-block px-3 py-1 text-xs bg-primary/20 text-primary border border-primary/30 rounded-full mb-3">
              Featured
            </span>
          )}
          <h3 className="text-2xl font-bold mb-2 hover:text-primary transition-colors flex items-start justify-between gap-2">
            <span className="flex-1">{post.title}</span>
            {post.link && <ExternalLink className="w-5 h-5 flex-shrink-0 text-primary" />}
          </h3>
          <p className="text-foreground-secondary line-clamp-3">{post.description}</p>
        </div>

        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-foreground-muted">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
            </div>
            {post.readingTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>
            )}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-background-secondary border border-border rounded text-foreground-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  )

  // If post has external link, use regular anchor tag
  if (post.link) {
    return (
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </a>
    )
  }

  // Otherwise use Next.js Link (for local blog posts if any)
  return <div>{CardContent}</div>
}
