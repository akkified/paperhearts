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
        <p>From origami flowers to painted rocks, our activities are designed to be accessible and enjoyable for everyone. We've learned that the process is just as important as the final product – it's about the connections we make along the way.</p>
        
        <h2>Volunteer Testimonials</h2>
        <p>"Working with the residents at Towne Club has been one of the most rewarding experiences of my life. Their stories and wisdom have taught me so much." - Maria, Volunteer</p>
      `,
      author: "ChatGPT",
      date: "2025-09-1",
      category: "Volunteer Stories",
      imageUrl: "/elderly-help.jpeg",
      readTime: 2,
    },
  ]
  