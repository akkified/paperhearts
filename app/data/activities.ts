// app/data/activities.ts

// Data Structure for Activities - ensure this matches your component's interface
export interface Activity {
    date: string; // Date in YYYY-MM-DD format for easy comparison
    description: string;
    requiresRegistration?: boolean; // Flag if this activity needs registration
  }
  
  // Your array of activities
  export const activities: Activity[] = [
    {
      date: '2025-08-01',
      description: 'First Activity! Join us at Towne Club Windermere (3950 Towne Club Pkwy, Cumming, GA, 30041). We will be doing some arts and crafts to entertain the elderly.',
      requiresRegistration: true,
    },
    {
      date: '2025-08-31',
      description: 'Officer Meeting! We discussed our plans for future events, and any ideas about advertising.',
      requiresRegistration: false,
    },
    {
      date: '2025-10-12',
      description: 'We will be meeting at Towne Club Windermere for the fall festival from 10 to 12. We need help running games!', 
      requiresRegistration: true,
    },
  ];