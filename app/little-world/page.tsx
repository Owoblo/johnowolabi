import { getAllLittleWorldEntries } from '@/lib/little-world'
import { EntryCard } from '@/components/little-world/entry-card'

export default function LittleWorldPage() {
  const entries = getAllLittleWorldEntries()

  return (
    <section className="section">
      <div className="container-safe">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-text mb-6">
            Little World
          </h1>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            A collection of songs, videos, objects, and quotes that inspire and influence my work. 
            Small moments and things that make the world feel a little more interesting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {entries.map((entry, index) => (
            <EntryCard
              key={entry.slug}
              title={entry.title}
              caption={entry.caption}
              type={entry.type}
              date={entry.date}
              href={entry.url}
              image={entry.image}
              link={entry.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
