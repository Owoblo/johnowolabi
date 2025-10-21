import { MasonryGrid } from '@/components/highlights/masonry-grid'

export const metadata = {
  title: 'Writing & Ideas',
  description: 'Essays and thoughts on design, culture, and life.',
}

const writingItems = [
  {
    id: '1',
    image: '/images/highlights/writing-1.jpg',
    title: 'The Writing Process',
    caption: 'How I approach long-form writing and research'
  },
  {
    id: '2',
    image: '/images/highlights/writing-2.jpg',
    title: 'Reading Habits',
    caption: 'Building a sustainable reading practice'
  },
  {
    id: '3',
    image: '/images/highlights/writing-3.jpg',
    title: 'Ideas & Inspiration',
    caption: 'Where good ideas come from and how to capture them'
  },
  {
    id: '4',
    image: '/images/highlights/writing-4.jpg',
    title: 'Editing Process',
    caption: 'The importance of revision and refinement'
  }
]

export default function WritingPage() {
  return (
    <section className="section">
      <div className="container-safe">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-text mb-4">
            Writing & Ideas
          </h1>
          <p className="text-lg text-subtle max-w-2xl">
            Long-form thoughts on design, culture, and the intersection of technology 
            with human experience.
          </p>
        </div>
        
        <MasonryGrid items={writingItems} />
      </div>
    </section>
  )
}
