'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cardHover } from '@/lib/motion'

interface EntryCardProps {
  title: string
  caption: string
  type: 'song' | 'video' | 'object' | 'quote'
  date: string
  href: string
  image?: string
  link?: string
  index: number
}

export function EntryCard({ 
  title, 
  caption, 
  type, 
  date, 
  href, 
  image,
  link,
  index 
}: EntryCardProps) {
  const renderContent = () => {
    switch (type) {
      case 'song':
        return (
          <div className="aspect-square bg-surface border border-rule rounded-sm flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <p className="text-xs text-subtle">Song</p>
            </div>
          </div>
        )
      case 'video':
        return (
          <div className="aspect-video bg-surface border border-rule rounded-sm flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-xs text-subtle">Video</p>
            </div>
          </div>
        )
      case 'object':
        return image ? (
          <div className="aspect-square relative overflow-hidden rounded-sm">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="aspect-square bg-surface border border-rule rounded-sm flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <p className="text-xs text-subtle">Object</p>
            </div>
          </div>
        )
      case 'quote':
        return (
          <div className="aspect-square bg-surface border border-rule rounded-sm flex items-center justify-center p-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
              <p className="text-xs text-subtle">Quote</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      transition={{ delay: index * 0.1 }}
      className="bg-surface rounded-sm border border-rule overflow-hidden"
    >
      <Link href={href} className="block group">
        {renderContent()}
        
        <div className="p-4">
          <div className="text-xs text-accent font-medium mb-2">
            {new Date(date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          
          <h3 className="text-lg font-serif font-medium text-text mb-2 group-hover:text-accent transition-colors duration-150 leading-tight">
            {title}
          </h3>
          
          <p className="text-sm text-subtle line-clamp-2">
            {caption}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}
