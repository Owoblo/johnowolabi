'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your email service
    console.log('Subscribing:', email)
    setIsSubscribed(true)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <motion.section 
        className="section-sm bg-surface"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-safe text-center">
          <h2 className="text-xl font-serif font-medium text-text mb-2">
            Thank you for subscribing
          </h2>
          <p className="text-subtle">
            You'll receive occasional updates about new writing and projects.
          </p>
        </div>
      </motion.section>
    )
  }

  return (
    <section className="section-sm bg-surface">
      <div className="container-safe">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-serif font-medium text-text mb-4">
            Stay Updated
          </h2>
          <p className="text-subtle mb-8">
            Get occasional updates about new writing, projects, and thoughts on design and creativity.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-background border border-surface rounded-sm text-text placeholder-subtle focus:outline-none focus:border-accent transition-colors duration-150"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-accent-contrast font-medium rounded-sm hover:bg-accent/90 transition-colors duration-150"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-subtle mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
