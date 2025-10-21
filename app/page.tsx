import { Hero } from '@/components/home/hero'
import { HighlightsTeaser } from '@/components/home/highlights-teaser'
import { JournalPreview } from '@/components/home/journal-preview'
import { Newsletter } from '@/components/home/newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HighlightsTeaser />
      <JournalPreview />
      <Newsletter />
    </>
  )
}
