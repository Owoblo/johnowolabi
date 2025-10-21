'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function SubscribeFooter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubscribed(true)
        setEmail('')
      } else {
        const data = await response.json()
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubscribed) {
    return (
      <motion.div
        className="text-center p-6 bg-accent/10 border border-accent/20 rounded-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm text-accent">
          Thank you for subscribing. You'll receive occasional updates about new writing and projects.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="text-center">
      <h3 className="text-lg font-serif font-medium text-text mb-2">
        Stay Updated
      </h3>
      <p className="text-sm text-subtle mb-6 max-w-md mx-auto">
        Get occasional updates about new writing, projects, and thoughts on design and creativity.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 bg-background border border-rule rounded-sm text-text placeholder-subtle focus:outline-none focus:border-accent transition-colors duration-150"
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className="px-6 py-3 bg-accent text-accent-contrast font-medium rounded-sm hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {error && (
        <motion.p
          className="text-sm text-red-600 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
      
      <p className="text-xs text-subtle mt-4">
        No spam, unsubscribe at any time.
      </p>
    </div>
  )
}
