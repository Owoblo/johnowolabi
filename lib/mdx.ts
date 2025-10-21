import matter from 'gray-matter'
import { getReadingTime } from './reading-time'

// Static content data - in a real app, you'd load this from files
const journalPosts = [
  {
    slug: 'first-post',
    title: 'The Art of Digital Minimalism',
    date: '2024-01-25',
    summary: 'Exploring how to create meaningful digital experiences that respect our attention and time.',
    tags: ['design', 'minimalism', 'digital-wellness'],
    cover: '/images/journal/digital-minimalism.jpg',
    published: true,
    content: `# The Art of Digital Minimalism

In our hyperconnected world, the most radical act might be choosing what not to engage with.

## The Attention Economy

Every app, notification, and feature competes for our most precious resource: attention. The companies that win are often those that can capture and hold our focus the longest, regardless of whether that serves our actual needs.

> "The best minds of my generation are thinking about how to make people click ads." — Jeff Hammerbacher

This isn't inherently evil, but it does create a system where user wellbeing is often secondary to engagement metrics.

## Designing for Intentionality

As designers, we have a responsibility to create experiences that respect users' time and attention. This means:

- **Clear purpose**: Every feature should serve a specific, valuable function
- **Minimal friction**: Reduce cognitive load wherever possible
- **Respectful defaults**: Opt for settings that protect user wellbeing
- **Easy exits**: Make it simple to disengage when desired

## The Paradox of Choice

More options don't always mean better experiences. Sometimes the most thoughtful design is knowing what to leave out.

Consider the difference between a cluttered dashboard with dozens of metrics and a clean interface that surfaces only the most important information. The latter requires more discipline to create but results in a more focused, useful experience.

## Practical Steps

For those building digital products:

1. **Audit your features**: What actually serves your users' core needs?
2. **Measure what matters**: Look beyond engagement metrics to user satisfaction and wellbeing
3. **Design for disconnection**: Make it easy for users to step away
4. **Question every addition**: Before adding new features, ask if they truly enhance the core experience

## The Long View

Digital minimalism isn't about using less technology—it's about using technology more intentionally. It's about creating tools that amplify human potential rather than fragmenting attention.

The future belongs to products that help people focus on what matters most to them, not what matters most to advertisers or engagement algorithms.

---

*What digital experiences have you found most respectful of your time and attention? I'd love to hear your thoughts.*`
  },
  {
    slug: 'second-post',
    title: 'Building Sustainable Creative Practices',
    date: '2024-01-22',
    summary: 'How to maintain creative energy and avoid burnout in long-term creative work.',
    tags: ['creativity', 'process', 'sustainability', 'work-life-balance'],
    cover: '/images/journal/creative-process.jpg',
    published: true,
    content: `# Building Sustainable Creative Practices

Creativity isn't a finite resource, but it does require careful cultivation and protection.

## The Myth of Constant Inspiration

Many people believe creativity is something that strikes like lightning—unpredictable and uncontrollable. While moments of inspiration do happen, sustainable creative work is built on consistent practice and intentional habits.

The most prolific creators aren't necessarily the most inspired; they're often the most disciplined.

## Small Steps, Big Changes

The most sustainable creative practices are built on small, consistent actions rather than grand gestures. A few minutes of writing each day compounds into something meaningful over time.

- **Daily practice**: Even 15 minutes of focused creative work builds momentum
- **Process over outcome**: Focus on showing up consistently rather than producing perfect work
- **Iteration over perfection**: Allow yourself to create imperfect first drafts

## Rest as Part of the Process

True creativity requires both focused work and intentional rest. The space between projects isn't empty time—it's where new connections form and fresh ideas emerge.

- **Scheduled breaks**: Build rest into your creative routine
- **Different types of rest**: Physical, mental, and creative rest serve different purposes
- **Rest without guilt**: Time away from creative work is still productive time

## Finding Your Rhythm

Everyone's creative rhythm is different. Some work best in the early morning, others late at night. The key is finding what works for you and protecting that time fiercely.

- **Track your energy**: Notice when you feel most creative and focused
- **Protect your peak hours**: Guard your best creative time from interruptions
- **Experiment with timing**: Try different schedules to find your optimal rhythm

## The Long Game

Sustainable creative practices are about playing the long game. It's better to create consistently for years than to burn out in months.

What's your creative rhythm? How do you maintain it?`
  },
  {
    slug: 'third-post',
    title: 'The Freedom of Constraints',
    date: '2024-01-18',
    summary: 'How limitations can actually enhance creativity and lead to better solutions.',
    tags: ['constraints', 'creativity', 'design', 'problem-solving'],
    cover: '/images/journal/constraints.jpg',
    published: true,
    content: `# The Freedom of Constraints

Paradoxically, the most creative work often emerges from the tightest constraints.

## Why Constraints Help

When we have unlimited options, we often end up paralyzed by choice. Constraints force us to be more intentional, more focused, and more creative in our solutions.

Think about haiku poetry—the strict 5-7-5 syllable structure doesn't limit creativity; it channels it into more powerful expression.

## Examples in Practice

- **Twitter's character limit**: Forced users to be more concise and creative with language
- **The grid system in design**: Provides structure that actually enhances visual freedom
- **Budget limitations**: Often lead to more innovative solutions than unlimited resources
- **Time constraints**: Can focus attention and eliminate perfectionist paralysis

## Setting Your Own Constraints

You don't have to wait for external constraints. You can create your own:

- **Limit your color palette**: Work with only 2-3 colors
- **Set a word count**: Give yourself a specific limit for writing
- **Time-box projects**: Give yourself a deadline, even if it's artificial
- **Restrict your tools**: Work with a limited set of design tools or materials

## The Sweet Spot

The best constraints are those that feel challenging but not impossible. They should push you to think differently without crushing your creative spirit.

Too few constraints can lead to endless iteration and indecision. Too many constraints can stifle creativity entirely. The magic happens in the middle.

## Embracing Limitations

Instead of seeing constraints as obstacles, try viewing them as creative catalysts. They're not preventing you from doing your best work—they're helping you focus on what matters most.

What constraints have helped you create your best work?`
  },
  {
    slug: 'reading-moment',
    title: 'The Art of Deep Reading',
    date: '2024-01-28',
    summary: 'Finding quiet moments of contemplation in our hyperconnected world, and why the simple act of reading remains one of life\'s greatest pleasures.',
    tags: ['reading', 'contemplation', 'mindfulness', 'books'],
    cover: '/images/journal/reading-moment.jpg',
    published: true,
    content: `# The Art of Deep Reading

In a world of constant notifications and infinite scroll, there's something almost radical about the simple act of reading a book.

## The Quiet Revolution

Reading is one of the few activities that demands our full attention while simultaneously offering complete escape. When we read, we're both present and elsewhere—engaged with the text while transported to other worlds, other minds, other possibilities.

> "A reader lives a thousand lives before he dies. The man who never reads lives only one." — George R.R. Martin

This isn't about productivity or self-improvement. It's about the quiet pleasure of losing yourself in someone else's thoughts, of finding connection across time and space through the simple act of turning pages.

## The Bookstore as Sanctuary

There's something magical about bookstores—these quiet spaces where thousands of stories wait patiently on shelves. They're places where time slows down, where you can browse without agenda, where serendipity still has a chance to work its magic.

The best bookstores feel like sanctuaries from the noise of the world. They're designed for contemplation, for the kind of slow, deliberate browsing that leads to unexpected discoveries.

## Reading as Resistance

In our attention economy, choosing to read a book is a small act of resistance. It's choosing depth over breadth, quality over quantity, the slow burn of a good story over the quick hit of social media.

Reading requires patience. It asks us to sit with ideas, to let them unfold at their own pace. It's an antidote to the constant stimulation that defines so much of modern life.

## The Ritual of Reading

There's a ritual to reading that I find deeply satisfying. Finding the right spot, settling in, opening the book, letting the world around you fade away. It's a practice that rewards consistency—the more you read, the easier it becomes to slip into that focused state.

The best reading happens when we're not trying to extract anything from the text, but simply allowing ourselves to be moved by it.

## A Quiet Pleasure

Reading is one of life's quiet pleasures—something we do for its own sake, not because it will make us more productive or successful, but because it enriches our inner lives in ways that are difficult to measure but impossible to ignore.

In a world that values speed and efficiency above all else, reading reminds us that some things are worth taking slowly.

---

*What are you reading these days? I'd love to hear about the books that are currently capturing your attention.*`
  }
]

const littleWorldEntries = [
  {
    slug: 'sample-song',
    title: 'Midnight City',
    date: '2024-01-20',
    type: 'song',
    link: 'https://open.spotify.com/track/1eyzqe2Q0GykYtPrbDpcfB',
    caption: 'M83\'s atmospheric masterpiece that captures the feeling of driving through a neon-lit city at night.',
    content: `# Midnight City

A song that perfectly captures the feeling of urban solitude and the beauty found in the quiet moments between the chaos of city life.`
  },
  {
    slug: 'sample-video',
    title: 'The Art of Looking Sideways',
    date: '2024-01-18',
    type: 'video',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    caption: 'A thoughtful exploration of how we perceive and interact with the world around us.',
    content: `# The Art of Looking Sideways

Sometimes the most profound insights come from changing our perspective, even just slightly.`
  },
  {
    slug: 'sample-object',
    title: 'Vintage Typewriter',
    date: '2024-01-15',
    type: 'object',
    image: '/images/little-world/typewriter.jpg',
    caption: 'A 1960s Olivetti Lettera 32 that I found at a flea market. There\'s something magical about the tactile feedback of mechanical keys.',
    content: `# Vintage Typewriter

The satisfying click-clack of mechanical keys and the physical act of putting words to paper creates a different kind of writing experience.`
  },
  {
    slug: 'sample-quote',
    title: 'On Simplicity',
    date: '2024-01-12',
    type: 'quote',
    caption: 'A reminder that the most profound truths are often the simplest to express.',
    content: `# On Simplicity

> "Simplicity is the ultimate sophistication." — Leonardo da Vinci

Sometimes the most powerful ideas are the ones that can be expressed in the fewest words.`
  },
  {
    slug: 'bookstore-moment',
    title: 'Bookstore Sanctuary',
    date: '2024-01-25',
    type: 'object',
    image: '/images/little-world/bookstore-moment.jpg',
    caption: 'A quiet moment of contemplation in a well-stocked bookstore. There\'s something magical about these spaces where thousands of stories wait patiently on shelves.',
    content: `# Bookstore Sanctuary

The best bookstores feel like sanctuaries from the noise of the world. They're designed for contemplation, for the kind of slow, deliberate browsing that leads to unexpected discoveries.

In our hyperconnected age, these quiet spaces where you can lose yourself among the stacks feel increasingly precious. They're places where time slows down, where serendipity still has a chance to work its magic.`
  }
]

export interface Post {
  title: string
  date: string
  summary: string
  tags: string[]
  cover?: string
  published: boolean
  slug: string
  readingTime: number
  content: string
}

export interface LittleWorldEntry {
  title: string
  date: string
  type: 'song' | 'video' | 'object' | 'quote'
  link?: string
  caption: string
  image?: string
  slug: string
  content: string
}

export function getAllPosts(): Post[] {
  return journalPosts
    .filter((post) => post.published)
    .map((post) => ({
      ...post,
      readingTime: getReadingTime(post.content),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  const post = journalPosts.find((post) => post.slug === slug)
  if (!post || !post.published) return undefined
  
  return {
    ...post,
    readingTime: getReadingTime(post.content),
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getAllLittleWorldEntries(): LittleWorldEntry[] {
  return littleWorldEntries
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getLittleWorldEntryBySlug(slug: string): LittleWorldEntry | undefined {
  return littleWorldEntries.find((entry) => entry.slug === slug)
}
