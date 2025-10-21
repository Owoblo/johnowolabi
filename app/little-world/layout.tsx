import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Little World',
  description: 'A collection of songs, videos, objects, and quotes that inspire and influence my work.',
}

export default function LittleWorldLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
