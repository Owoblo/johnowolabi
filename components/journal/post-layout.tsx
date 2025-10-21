'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp } from '@/lib/motion'
import { formatReadingTime } from '@/lib/reading-time'
import { SubscribeInline } from '@/components/ui/subscribe-inline'
import { Comments } from '@/components/ui/comments'

interface PostLayoutProps {
  title: string
  date: string
  readingTime: number
  tags: string[]
  children: React.ReactNode
  previousPost?: {
    title: string
    href: string
  }
  nextPost?: {
    title: string
    href: string
  }
  slug: string
}

export function PostLayout({ 
  title, 
  date, 
  readingTime, 
  tags, 
  children, 
  previousPost, 
  nextPost,
  slug 
}: PostLayoutProps) {
  const [showToast, setShowToast] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href)
    const text = encodeURIComponent(title)
    
    let shareUrl = ''
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        break
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  return (
    <motion.article
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      {/* Title Block */}
      <motion.header 
        className="section"
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        <div className="container-safe">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-accent font-medium mb-4">
              {new Date(date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} • {formatReadingTime(readingTime)}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-text mb-6 leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-subtle bg-surface px-3 py-1 rounded-full border border-rule"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.div
        className="section-sm"
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <div className="container-safe">
          <div className="max-w-4xl mx-auto prose-muted">
            {children}
          </div>
        </div>
      </motion.div>

      {/* Afterword Block */}
      <motion.section
        className="section-sm bg-surface"
        variants={fadeInUp}
        transition={{ delay: 0.3 }}
      >
        <div className="container-safe">
          <div className="max-w-4xl mx-auto">
            {/* Email Subscribe */}
            <div className="mb-12">
              <h3 className="text-lg font-serif font-medium text-text mb-4">
                Stay Updated
              </h3>
              <p className="text-subtle mb-6">
                Get occasional updates about new writing and thoughts on design and creativity.
              </p>
              <SubscribeInline />
            </div>

            {/* Share Actions */}
            <div className="mb-12">
              <h3 className="text-lg font-serif font-medium text-text mb-4">
                Share
              </h3>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2 text-sm text-text border border-rule rounded-sm hover:border-accent transition-colors duration-150"
                  aria-label="Copy link to this post"
                >
                  Copy Link
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="px-4 py-2 text-sm text-text border border-rule rounded-sm hover:border-accent transition-colors duration-150"
                  aria-label="Share on X (Twitter)"
                >
                  X / Twitter
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="px-4 py-2 text-sm text-text border border-rule rounded-sm hover:border-accent transition-colors duration-150"
                  aria-label="Share on LinkedIn"
                >
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Comments */}
            <div className="mb-12">
              <Comments slug={slug} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Prev/Next Navigation */}
      {(previousPost || nextPost) && (
        <motion.nav
          className="section-sm border-t border-rule"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <div className="container-safe">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Previous post */}
                <div>
                  {previousPost ? (
                    <Link
                      href={previousPost.href}
                      className="group block p-6 bg-surface rounded-sm border border-rule hover:border-accent/30 transition-colors duration-150"
                    >
                      <div className="text-xs text-accent font-medium mb-2">
                        Previous
                      </div>
                      <h3 className="text-lg font-medium text-text group-hover:text-accent transition-colors duration-150">
                        {previousPost.title}
                      </h3>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </div>
                
                {/* Next post */}
                <div>
                  {nextPost ? (
                    <Link
                      href={nextPost.href}
                      className="group block p-6 bg-surface rounded-sm border border-rule hover:border-accent/30 transition-colors duration-150 text-right"
                    >
                      <div className="text-xs text-accent font-medium mb-2">
                        Next
                      </div>
                      <h3 className="text-lg font-medium text-text group-hover:text-accent transition-colors duration-150">
                        {nextPost.title}
                      </h3>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      )}

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          className="fixed bottom-4 right-4 bg-accent text-accent-contrast px-4 py-2 rounded-sm text-sm z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          Link copied to clipboard
        </motion.div>
      )}
    </motion.article>
  )
}
