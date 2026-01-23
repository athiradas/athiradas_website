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
    <div className="flex gap-4 items-center">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-secondary hover:text-primary transition-colors duration-200"
            aria-label={link.name}
          >
            <Icon className="w-5 h-5" />
          </a>
        )
      })}
      <span className="text-foreground-secondary/50">|</span>
      <a
        href="https://www.greymahout.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground-secondary hover:text-primary transition-colors duration-200 text-sm"
      >
        Grey Mahout
      </a>
    </div>
  )
}
