'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/', section: 'home' },
  { name: 'Coaching', href: '/#coaching', section: 'coaching' },
  { name: 'Talk', href: '/#talk', section: 'talk' },
  { name: 'Resume', href: '/#experience', section: 'experience' },
  { name: 'About', href: '/#about', section: 'about' },
  { name: 'Blog', href: '/blog', section: null },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Handle hash navigation when arriving on home page
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

    // If on home page and clicking a section link, smooth scroll
    if (isHomePage && item.section) {
      e.preventDefault()
      const element = document.querySelector(`#${item.section}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    // Otherwise, let Next.js handle the navigation (will go to href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
        >
          Athira Das
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-foreground-secondary hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground-secondary hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-foreground-secondary hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
