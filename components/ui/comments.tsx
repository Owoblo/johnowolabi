'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CommentsProps {
  slug: string
}

export function Comments({ slug }: CommentsProps) {
  const [showComments, setShowComments] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (showComments && !isLoaded) {
      // Load Giscus script
      const script = document.createElement('script')
      script.src = 'https://giscus.app/client.js'
      script.setAttribute('data-repo', 'johnowolabi/johnowolabi.com') // Replace with your repo
      script.setAttribute('data-repo-id', 'R_kgDO_REPO_ID') // Replace with your repo ID
      script.setAttribute('data-category', 'General')
      script.setAttribute('data-category-id', 'DIC_kwDO_CATEGORY_ID') // Replace with your category ID
      script.setAttribute('data-mapping', 'pathname')
      script.setAttribute('data-strict', '0')
      script.setAttribute('data-reactions-enabled', '1')
      script.setAttribute('data-emit-metadata', '0')
      script.setAttribute('data-input-position', 'bottom')
      script.setAttribute('data-theme', 'light')
      script.setAttribute('data-lang', 'en')
      script.setAttribute('data-loading', 'lazy')
      script.crossOrigin = 'anonymous'
      script.async = true

      const commentsContainer = document.getElementById('giscus-comments')
      if (commentsContainer) {
        commentsContainer.appendChild(script)
        setIsLoaded(true)
      }
    }
  }, [showComments, isLoaded])

  return (
    <div>
      <h3 className="text-lg font-serif font-medium text-text mb-4">
        Comments
      </h3>
      
      {!showComments ? (
        <motion.button
          onClick={() => setShowComments(true)}
          className="px-4 py-2 text-sm text-text border border-rule rounded-sm hover:border-accent transition-colors duration-150"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Show comments
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div id="giscus-comments" className="mt-4"></div>
        </motion.div>
      )}
    </div>
  )
}
