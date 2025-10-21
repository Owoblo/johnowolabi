import { PostHeader } from '@/components/journal/post-header'
import { PostContent } from '@/components/journal/post-content'
import { PostNavigation } from '@/components/journal/post-navigation'
import { PullQuote } from '@/components/journal/pull-quote'

export const metadata = {
  title: 'The Quiet Power of Minimal Design',
  description: 'Why less is often more in creating meaningful experiences.',
}

export default function MinimalDesignPost() {
  return (
    <>
      <PostHeader
        title="The Quiet Power of Minimal Design"
        date="January 20, 2024"
        readingTime="5 min read"
        tags={["design", "minimalism", "aesthetics"]}
      />
      
      <PostContent>
        <p className="text-lg text-text mb-6">
          In a world of constant noise and visual overload, minimal design offers something rare: space to breathe.
        </p>
        
        <h2>The Art of Restraint</h2>
        <p>
          True minimalism isn't about removing everything—it's about removing everything that doesn't serve a purpose. 
          Each element that remains must earn its place.
        </p>
        
        <PullQuote attribution="Antoine de Saint-Exupéry">
          Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
        </PullQuote>
        
        <p>
          This principle applies beyond visual design to how we structure our days, organize our thoughts, 
          and build our relationships.
        </p>
        
        <h2>Creating Space for Meaning</h2>
        <p>
          When we strip away the unnecessary, we create space for what truly matters. In design, this might mean 
          letting a single word carry the weight of a message. In life, it might mean saying no to good opportunities 
          to make room for great ones.
        </p>
        
        <h2>The Challenge of Simplicity</h2>
        <p>
          Creating something simple is often more difficult than creating something complex. It requires deep 
          understanding, careful editing, and the courage to trust that less can be more.
        </p>
        
        <p>
          The next time you're tempted to add another feature, another element, another layer—pause. Ask yourself: 
          does this serve the core purpose? If not, let it go.
        </p>
      </PostContent>
      
      <PostNavigation
        nextPost={{
          title: "Building a Sustainable Creative Process",
          href: "/journal/building-a-sustainable-creative-process"
        }}
      />
    </>
  )
}
