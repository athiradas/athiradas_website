export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  featured?: boolean
  image?: string
  content: string
  readingTime?: number
  link?: string // External link to Substack post
}
