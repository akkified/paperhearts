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
      title: "The Art of Paper Hearts: Bringing Joy Through Handmade Crafts",
      excerpt:
        "Discover how our handmade paper hearts are touching lives and spreading joy in communities across the country.",
      content: `
        <h2>The Beginning of Our Journey</h2>
        <p>PaperHearts started with a simple idea: that handmade crafts could bring people together and create meaningful connections. What began as a small community project has grown into a movement that touches lives across the country.</p>
        
        <h2>The Impact of Handmade Art</h2>
        <p>Every paper heart we create carries with it the love and care of our volunteers. These aren't just crafts – they're symbols of hope, connection, and community. We've seen how a simple handmade gift can brighten someone's day and create lasting memories.</p>
        
        <h2>Community Stories</h2>
        <p>From elderly care facilities to foster homes, our paper hearts have found their way into the hands of those who need them most. Each story reminds us why this work matters and motivates us to continue spreading joy through art.</p>
        
        <h2>Join Our Mission</h2>
        <p>Whether you're an experienced crafter or just starting out, there's a place for you in our community. Together, we can continue to make a difference, one paper heart at a time.</p>
      `,
      author: "Sarah Johnson",
      date: "2025-08-20",
      category: "Community Impact",
      imageUrl: "/colorful-paper-hearts-craft.png",
      readTime: 5,
    },
    {
      id: "2",
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
      author: "Michael Chen",
      date: "2025-08-15",
      category: "Volunteer Stories",
      imageUrl: "/elderly-people-doing-arts-and-crafts-with-young-vo.png",
      readTime: 4,
    },
    {
      id: "3",
      title: "DIY Craft Tutorial: Creating Beautiful Origami Hearts",
      excerpt:
        "Learn how to make stunning origami hearts with our step-by-step tutorial. Perfect for beginners and experienced crafters alike.",
      content: `
        <h2>Materials You'll Need</h2>
        <ul>
          <li>Square paper (6x6 inches works best)</li>
          <li>Colored pencils or markers (optional)</li>
          <li>Patience and creativity!</li>
        </ul>
        
        <h2>Step-by-Step Instructions</h2>
        <p><strong>Step 1:</strong> Start with your square paper colored side down. Fold it in half diagonally both ways, then unfold.</p>
        
        <p><strong>Step 2:</strong> Fold the paper in half horizontally and vertically, then unfold. You should now have crease lines forming a grid.</p>
        
        <p><strong>Step 3:</strong> Using the crease lines as guides, fold the paper into a preliminary base.</p>
        
        <p><strong>Step 4:</strong> Continue folding following the traditional origami heart pattern, creating the distinctive heart shape.</p>
        
        <h2>Tips for Success</h2>
        <p>Take your time with each fold and make sure your creases are sharp. Don't worry if it doesn't look perfect on your first try – practice makes perfect!</p>
        
        <h2>Share Your Creations</h2>
        <p>We'd love to see your origami hearts! Share them with us on social media using #PaperHeartsOrigami.</p>
      `,
      author: "Emma Rodriguez",
      date: "2025-08-10",
      category: "Tutorials",
      imageUrl: "/origami-heart-tutorial-steps.png",
      readTime: 6,
    },
    {
      id: "4",
      title: "Building Community Through Art: Our Mission and Vision",
      excerpt:
        "Learn about PaperHearts' mission to foster community connections through handmade art and creative activities.",
      content: `
        <h2>Our Mission</h2>
        <p>At PaperHearts, we believe that art has the power to bring people together, heal communities, and create lasting positive change. Our mission is to foster meaningful connections through handmade crafts and creative activities.</p>
        
        <h2>Why Handmade Matters</h2>
        <p>In our digital age, there's something special about creating something with your own hands. Handmade items carry the energy and intention of their creators, making them powerful tools for connection and healing.</p>
        
        <h2>Our Community Impact</h2>
        <p>Since our founding, we've:</p>
        <ul>
          <li>Distributed over 10,000 handmade items to community members in need</li>
          <li>Organized 200+ craft workshops and activities</li>
          <li>Connected volunteers with elderly residents, foster children, and community centers</li>
          <li>Built lasting relationships that extend beyond our programs</li>
        </ul>
        
        <h2>Looking Forward</h2>
        <p>As we continue to grow, our vision remains the same: to create a world where everyone feels connected, valued, and loved through the simple act of making and sharing handmade art.</p>
      `,
      author: "David Park",
      date: "2025-08-05",
      category: "About Us",
      imageUrl: "/community-art-workshop-people-crafting-together.png",
      readTime: 4,
    },
    {
      id: "5",
      title: "Upcoming Events: Fall Craft Fair and Workshop Series",
      excerpt:
        "Join us for our upcoming fall events including our annual craft fair and new workshop series for all skill levels.",
      content: `
        <h2>Fall Craft Fair - September 15th</h2>
        <p>Mark your calendars! Our annual Fall Craft Fair is coming up on September 15th at the Community Center. This year's fair will feature:</p>
        <ul>
          <li>Handmade items from local artisans</li>
          <li>Live craft demonstrations</li>
          <li>Kids' activity corner</li>
          <li>Food trucks and refreshments</li>
          <li>Silent auction to support our programs</li>
        </ul>
        
        <h2>New Workshop Series</h2>
        <p>Starting in October, we're launching a new monthly workshop series covering different craft techniques:</p>
        <ul>
          <li><strong>October:</strong> Advanced Origami Techniques</li>
          <li><strong>November:</strong> Holiday Card Making</li>
          <li><strong>December:</strong> Gift Wrapping with Style</li>
        </ul>
        
        <h2>How to Register</h2>
        <p>Registration for all events opens September 1st. Spaces are limited, so sign up early! All workshops include materials and light refreshments.</p>
        
        <h2>Volunteer Opportunities</h2>
        <p>We're also looking for volunteers to help with setup, demonstrations, and cleanup. It's a great way to get involved and meet fellow craft enthusiasts!</p>
      `,
      author: "Lisa Thompson",
      date: "2025-08-25",
      category: "Events",
      imageUrl: "/craft-fair-with-booths-and-people-shopping.png",
      readTime: 3,
    },
  ]
  