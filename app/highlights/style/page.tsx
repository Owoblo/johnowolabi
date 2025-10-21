import { MasonryGrid } from '@/components/highlights/masonry-grid'

export const metadata = {
  title: 'Style & Aesthetics',
  description: 'Thoughts on design, fashion, and visual culture.',
}

const styleItems = [
  {
    id: '1',
    image: '/images/highlights/style-1.jpg',
    title: 'Minimal Wardrobe',
    caption: 'Building a capsule wardrobe focused on quality and versatility'
  },
  {
    id: '2', 
    image: '/images/highlights/style-2.jpg',
    title: 'Typography in Fashion',
    caption: 'How type choices reflect brand personality'
  },
  {
    id: '3',
    image: '/images/highlights/style-3.jpg', 
    title: 'Color Theory',
    caption: 'Exploring the psychology of color in design'
  },
  {
    id: '4',
    image: '/images/highlights/style-4.jpg',
    title: 'Spatial Design',
    caption: 'Creating intentional spaces for living and working'
  },
  {
    id: '5',
    image: '/images/highlights/style-5.jpg',
    title: 'Material Choices',
    caption: 'The importance of texture and material in design'
  },
  {
    id: '6',
    image: '/images/highlights/style-6.jpg',
    title: 'Visual Hierarchy',
    caption: 'Guiding the eye through intentional design choices'
  }
]

export default function StylePage() {
  return (
    <section className="section">
      <div className="container-safe">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-text mb-4">
            Style & Aesthetics
          </h1>
          <p className="text-lg text-subtle max-w-2xl">
            Exploring the intersection of design, fashion, and visual culture. 
            How we present ourselves and our work matters.
          </p>
        </div>
        
        <MasonryGrid items={styleItems} />
      </div>
    </section>
  )
}
