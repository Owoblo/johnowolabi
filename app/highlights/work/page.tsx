import { MasonryGrid } from '@/components/highlights/masonry-grid'

export const metadata = {
  title: 'Work & Process',
  description: 'Behind the scenes of design and creative work.',
}

const workItems = [
  {
    id: '1',
    image: '/images/highlights/work-1.jpg',
    title: 'Design System',
    caption: 'Building consistent, scalable design systems'
  },
  {
    id: '2',
    image: '/images/highlights/work-2.jpg', 
    title: 'User Research',
    caption: 'Understanding user needs through thoughtful research'
  },
  {
    id: '3',
    image: '/images/highlights/work-3.jpg',
    title: 'Prototyping',
    caption: 'Testing ideas quickly and iteratively'
  },
  {
    id: '4',
    image: '/images/highlights/work-4.jpg',
    title: 'Collaboration',
    caption: 'Working with cross-functional teams'
  },
  {
    id: '5',
    image: '/images/highlights/work-5.jpg',
    title: 'Design Tools',
    caption: 'Choosing the right tools for the job'
  },
  {
    id: '6',
    image: '/images/highlights/work-6.jpg',
    title: 'Feedback Loops',
    caption: 'Creating effective feedback processes'
  }
]

export default function WorkPage() {
  return (
    <section className="section">
      <div className="container-safe">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-text mb-4">
            Work & Process
          </h1>
          <p className="text-lg text-subtle max-w-2xl">
            Documenting the creative process, from initial concepts to final execution. 
            The messy middle that makes good work possible.
          </p>
        </div>
        
        <MasonryGrid items={workItems} />
      </div>
    </section>
  )
}
