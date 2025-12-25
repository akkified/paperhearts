// Blog Articles Data Structure
export interface BlogArticle {
    id: string
    title: string
    excerpt: string
    content: string
    author: string
    date: string // Date in YYYY-MM-DD format
    category: string
    imageUrl?: string
    readTime: number // Reading time in minutes
  }
  
  // Sample blog articles
  export const blogArticles: BlogArticle[] = [
    {
      id: "1",
      title: "Volunteer Spotlight: Making a Difference at Towne Club Windermere",
      excerpt:
        "Meet our amazing volunteers who are bringing arts and crafts activities to elderly residents and creating lasting connections.",
      content: `
        <h2>A Day at Towne Club Windermere</h2>
        <p>Our recent visit to Towne Club Windermere was filled with laughter, creativity, and meaningful connections. Volunteers worked alongside elderly residents to create beautiful art pieces while sharing stories and building friendships.</p>
        <h2>The Power of Intergenerational Connection</h2>
        <p>There's something magical that happens when young volunteers work with elderly residents. The exchange of stories, wisdom, and creativity creates bonds that extend far beyond the craft table.</p>
        <h2>Activities That Bring Joy</h2>
        <p>From origami flowers to painted rocks, our activities are designed to be accessible and enjoyable for everyone.</p>
      `,
      author: "PaperHearts Team",
      date: "2025-09-01",
      category: "Volunteer Stories",
      imageUrl: "/elderly-help.jpeg",
      readTime: 3,
    },
    {
      id: "2",
      title: "Tutorial: Folding Hope with Origami Hearts",
      excerpt: "Learn how to create our signature origami hearts. These small tokens of affection are the cornerstone of our care packages.",
      content: `
        <h2>The Art of the Fold</h2>
        <p>Origami isn't just about paper; it's about patience and intention. Each fold represents a moment of care for the person who will eventually receive it.</p>
        
        <h3>Step-by-Step Guide</h3>
        <ul>
          <li><strong>Step 1:</strong> Start with a square piece of paper, colored side down.</li>
          <li><strong>Step 2:</strong> Fold in half diagonally both ways to create a 'cross' crease.</li>
          <li><strong>Step 3:</strong> Fold the top point down to the center crease.</li>
          <li><strong>Step 4:</strong> Fold the bottom point all the way up to the top edge.</li>
          <li><strong>Step 5:</strong> Fold the left and right sides up diagonally to meet in the middle.</li>
        </ul>
        
        <p>Don't worry if your first few aren't perfect! The beauty lies in the handmade nature of the gift.</p>
      `,
      author: "Creative Lead",
      date: "2025-10-12",
      category: "Tutorials",
      imageUrl: "https://images.unsplash.com/photo-1533228100845-08145b01de14?q=80&w=2000",
      readTime: 4,
    },
    {
      id: "3",
      title: "Big News: PaperHearts is Expanding to Georgia Schools!",
      excerpt: "We are thrilled to announce our new partnership with local high schools to bring art-driven community service to more students.",
      content: `
        <h2>Growing Our Community</h2>
        <p>What started as a small group of students has now grown into a multi-school initiative. We are officially launching PaperHearts chapters in three new Georgia high schools this fall!</p>
        
        <h2>Why Student-Led Matters</h2>
        <p>We believe that students have a unique capacity for empathy and creativity. By leading these chapters, students aren't just volunteering—they are learning leadership, project management, and the value of civic engagement.</p>
        
        <h2>How to Join</h2>
        <p>If you're a student or teacher interested in starting a chapter, head over to our volunteer page to learn more about our starter kits.</p>
      `,
      author: "Founder",
      date: "2025-11-05",
      category: "News",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
      readTime: 2,
    },
    {
      id: "4",
      title: "Why Handmade Art Heals",
      excerpt: "In a digital world, the act of holding something handmade can change a person's entire day. Let's explore the science of craft.",
      content: `
        <h2>The Tangible Connection</h2>
        <p>For elderly residents or youth in foster care, isolation can often feel overwhelming. Receiving a store-bought card is nice, but receiving a hand-painted rock or an origami crane sends a different message: <em>"Someone sat down and spent time thinking of me."</em></p>
        
        <h2>The 'Helper's High'</h2>
        <p>It's not just the recipient who benefits. Studies show that 'craftivism'—using craft for charitable ends—significantly reduces stress and increases feelings of purpose in the creator.</p>
        
        <p>Every time you sit down to paint or fold with us, you're contributing to a cycle of wellness that spans generations.</p>
      `,
      author: "Community Liaison",
      date: "2025-12-01",
      category: "Inspiration",
      imageUrl: "https://images.unsplash.com/photo-1459802071246-377c0346da93?q=80&w=2000",
      readTime: 5,
    },
    {
      id: "5",
      title: "Rock Painting 101: Spreading Kindness One Stone at a Time",
      excerpt: "Painting rocks is one of our most popular activities. Here are some tips for making your art weather-proof and wonderful.",
      content: `
        <h2>Finding the Perfect Canvas</h2>
        <p>Look for smooth, flat river stones. They provide the best surface for detailed painting and encouraging messages.</p>
        
        <h2>Pro Tips for Rock Art</h2>
        <p>1. <strong>Base Coat:</strong> Always start with a white base coat to make your colors pop.</p>
        <p>2. <strong>Sealant:</strong> Since many of our rocks are placed in community gardens, we use a clear acrylic sealer to protect them from the rain.</p>
        <p>3. <strong>Messages:</strong> Keep it simple! 'You are loved,' 'Stay strong,' or 'Smile' can mean the world to a stranger.</p>
      `,
      author: "Art Director",
      date: "2025-12-20",
      category: "Tutorials",
      imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2000",
      readTime: 3,
    }
  ]
  