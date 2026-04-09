import { SocialLinks } from './SocialLinks'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Athira Das</h3>
            <p className="text-foreground-secondary text-sm">
              Leadership Coach & AI Adoption Consultant
            </p>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-foreground-muted text-sm">
          <p>&copy; {currentYear} Athira Das. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
