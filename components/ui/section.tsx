import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'sm' | 'lg'
}

export function Section({ 
  children, 
  className, 
  size = 'default' 
}: SectionProps) {
  const sizeClasses = {
    default: 'py-16 lg:py-24',
    sm: 'py-8 lg:py-12',
    lg: 'py-24 lg:py-32'
  }

  return (
    <section className={cn(sizeClasses[size], className)}>
      {children}
    </section>
  )
}
