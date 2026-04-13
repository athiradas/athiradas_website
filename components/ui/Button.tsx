import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary:
        'bg-primary text-background hover:bg-accent hover:text-primary shadow-sm',
      secondary:
        'bg-background-secondary hover:bg-background-tertiary text-foreground border border-border',
      outline:
        'border border-primary text-primary hover:bg-primary hover:text-background',
    }

    const sizes = {
      sm: 'px-5 py-2.5 text-xs tracking-wider uppercase',
      md: 'px-7 py-3.5 text-xs tracking-wider uppercase',
      lg: 'px-9 py-4 text-sm tracking-wider uppercase',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'font-medium rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
