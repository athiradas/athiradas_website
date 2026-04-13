import { SocialLinks } from './SocialLinks'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="md:pl-[260px]">
      <div className="border-t border-border/60 bg-background-secondary/50">
        <div className="max-w-5xl px-6 md:px-12 lg:px-20 xl:px-24 py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                Athira <span className="accent-italic">Das</span>
              </h3>
              <p className="text-foreground-muted text-sm">
                Leadership Coach &amp; AI Adoption Consultant
              </p>
            </div>

            <SocialLinks />
          </div>

          <div className="mt-12 pt-8 border-t border-border/60 text-foreground-muted text-[10px] tracking-[0.16em] uppercase">
            <p>&copy; {currentYear} Athira Das. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
