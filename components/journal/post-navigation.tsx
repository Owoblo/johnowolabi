'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp } from '@/lib/motion'

interface PostNavigationProps {
  previousPost?: {
    title: string
    href: string
  }
  nextPost?: {
    title: string
    href: string
  }
}

export function PostNavigation({ previousPost, nextPost }: PostNavigationProps) {
  if (!previousPost && !nextPost) {
    return null
  }

  return (
    <motion.nav
      className="section-sm border-t border-surface"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ delay: 0.3 }}
    >
      <div className="container-safe">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous post */}
            <div>
              {previousPost ? (
                <Link
                  href={previousPost.href}
                  className="group block p-6 bg-surface rounded-sm border border-surface hover:border-accent/30 transition-colors duration-150"
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
                  className="group block p-6 bg-surface rounded-sm border border-surface hover:border-accent/30 transition-colors duration-150 text-right"
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
  )
}
