import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'wide' | 'narrow'
}

export function Container({ 
  children, 
  className, 
  size = 'default' 
}: ContainerProps) {
  const sizeClasses = {
    default: 'max-w-container',
    wide: 'max-w-7xl',
    narrow: 'max-w-4xl'
  }

  return (
    <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}>
      {children}
    </div>
  )
}
