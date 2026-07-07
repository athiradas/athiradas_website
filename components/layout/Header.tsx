'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, Linkedin, Github, Youtube } from 'lucide-react'
import { SpotifyIcon } from '@/components/icons/SpotifyIcon'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/', section: 'home', num: '01' },
  { name: 'Coaching', href: '/#coaching', section: 'coaching', num: '02' },
  { name: 'Talks & Workshops', href: '/#talk', section: 'talk', num: '03' },
  { name: 'Resume', href: '/#experience', section: 'experience', num: '04' },
  { name: 'About', href: '/#about', section: 'about', num: '05' },
  { name: 'Blog', href: '/blog', section: null, num: '06' },
]

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/athiradas', Icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/athiradas', Icon: Github },
  { name: 'YouTube', url: 'https://www.youtube.com/@athira_das', Icon: Youtube },
  { name: 'Spotify', url: 'https://open.spotify.com/show/5zLwrk8JEHUZT4vQSFc4BU', Icon: SpotifyIcon },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [isHomePage])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: { href: string; section: string | null }
  ) => {
    setIsMobileMenuOpen(false)

    if (isHomePage && item.section) {
      e.preventDefault()
      const element = document.querySelector(`#${item.section}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl text-foreground">
          Athira <span className="accent-italic">Das</span>
        </Link>
        <button
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-foreground-secondary p-2"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] z-40 bg-background border-b border-border/60">
          <ul className="flex flex-col px-6 py-6">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-border/40">
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="flex items-center justify-between py-4 text-foreground hover:text-accent transition-colors"
                >
                  <span className="font-serif text-lg">{item.name}</span>
                  <span className="text-xs text-foreground-muted">{item.num}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 bottom-0 w-[260px] bg-background-secondary border-r border-border/80 flex-col px-8 py-10 z-40">
        <Link href="/" className="block mb-1">
          <span className="font-serif text-[26px] leading-none text-foreground">
            Athira <span className="accent-italic">Das</span>
          </span>
        </Link>
        <p className="text-[10px] uppercase tracking-[0.18em] text-foreground-muted leading-[1.7] mb-10 mt-2 whitespace-nowrap">
          Leadership Coach<br />AI Adoption Consultant
        </p>

        <nav className="flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item)}
              className={cn(
                'group flex items-center justify-between py-[11px] border-b border-border/60 text-[13px] text-foreground hover:text-accent transition-all duration-300 hover:pl-1'
              )}
            >
              <span>{item.name}</span>
              <span className="text-[10px] text-foreground-muted group-hover:text-accent transition-colors">
                {item.num}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-border/60">
          <div className="flex items-center gap-4 mb-3">
            {socialLinks.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-foreground-muted hover:text-accent transition-colors"
              >
                <Icon className="w-[14px] h-[14px]" />
              </a>
            ))}
          </div>
          <a
            href="https://www.greymahout.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.14em] text-foreground-muted hover:text-accent transition-colors"
          >
            Grey Mahout →
          </a>
        </div>
      </aside>
    </>
  )
}
