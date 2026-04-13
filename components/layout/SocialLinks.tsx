import { Github, Linkedin, Youtube } from 'lucide-react'
import { SpotifyIcon } from '@/components/icons/SpotifyIcon'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/athiradas',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/athiradas',
    icon: Github,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@athira_das',
    icon: Youtube,
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/5zLwrk8JEHUZT4vQSFc4BU',
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
        href="https://www.greymahout.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground-muted hover:text-accent transition-colors duration-300 text-xs uppercase tracking-wider"
      >
        Grey Mahout
      </a>
    </div>
  )
}
