import { CategoryGrid } from '@/components/highlights/category-grid'

export const metadata = {
  title: 'Highlights',
  description: 'A curated collection of thoughts, work, and visual explorations across different areas of interest.',
}

export default function HighlightsPage() {
  return (
    <section className="section">
      <div className="container-safe">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-text mb-6">
            Highlights
          </h1>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            A curated collection of thoughts, work, and visual explorations across different areas of interest. 
            Each category represents a different facet of my creative practice.
          </p>
        </div>
        
        <CategoryGrid />
      </div>
    </section>
  )
}
