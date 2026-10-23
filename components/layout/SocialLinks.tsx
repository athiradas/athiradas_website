import { Github, Linkedin, Youtube } from 'lucide-react'
import { SpotifyIcon } from '@/components/icons/SpotifyIcon'
import { profile } from '@/content/profile'

const { links, work } = profile

const socialLinks = [
  {
    name: 'LinkedIn',
    url: links.linkedin.url,
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: links.github.url,
    icon: Github,
  },
  {
    name: 'YouTube',
    url: links.youtube.url,
    icon: Youtube,
  },
  {
    name: 'Spotify',
    url: links.podcast.url,
    icon: SpotifyIcon,
  },
]

export function SocialLinks() {
  return (
    <div className="flex gap-5 items-center">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-accent transition-colors duration-300"
            aria-label={link.name}
          >
            <Icon className="w-4 h-4" />
          </a>
        )
      })}
      <span className="w-px h-4 bg-border" />
      <a
        href={work['grey-mahout'].url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground-muted hover:text-accent transition-colors duration-300 text-xs uppercase tracking-wider"
      >
        {work['grey-mahout'].name}
      </a>
    </div>
  )
}
