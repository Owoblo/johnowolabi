'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function SubscribeInline() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // For now, we'll use a placeholder API endpoint
      // You can replace this with your actual Buttondown API integration
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
        className="p-4 bg-accent/10 border border-accent/20 rounded-sm"
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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
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
      
      {error && (
        <motion.p
          className="text-sm text-red-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
    </form>
  )
}
