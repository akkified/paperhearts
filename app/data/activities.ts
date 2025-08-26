// app/data/activities.ts

// Data Structure for Activities - ensure this matches your component's interface
export interface Activity {
    date: string; // Date in YYYY-MM-DD format for easy comparison
    description: string;
    youtubeId?: string; // Optional: YouTube video ID
    requiresRegistration?: boolean; // Flag if this activity needs registration
  }
  
  // Your array of activities
  export const activities: Activity[] = [
    {
      date: '2025-08-01',
      description: 'First Activity! Join us at Towne Club Windermere (3950 Towne Club Pkwy, Cumming, GA, 30041). We will be doing some arts and crafts to entertain the elderly.',
      youtubeId: 'FzX101pM8v8', // Replace with relevant video ID
      requiresRegistration: true,
    },
    {
      date: '2025-08-31',
      description: 'Officer Meeting! Officers only',
      youtubeId: 'FzX101pM8v8', // Replace with relevant video ID
      requiresRegistration: false,
    },
    {
      date: '2025-09-07',
      description: 'test activity',
      youtubeId: 'FzX101pM8v8', // Replace with relevant video ID
      requiresRegistration: true,
    },
  ];