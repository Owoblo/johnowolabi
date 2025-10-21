import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Thoughts on design, creativity, and the intersection of technology with human experience.',
}

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
