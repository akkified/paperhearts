// app/data/activities.ts

// Data Structure for Activities
export interface Activity {
  date: string; // Date in YYYY-MM-DD format
  description: string;
  requiresRegistration?: boolean; 
}

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
    date: '2025-10-11',
    description: 'We will be meeting at Towne Club Windermere for the fall festival from 10 to 12. We need help running games!', 
    requiresRegistration: true,
  },
  {
    date: '2025-12-20',
    description: 'Holiday Card Event at The Phoenix at James Creek (90 Ruth Ln, Cumming, GA 30041). We will be handing out hand-made holiday cards and socializing with seniors from 1:15pm to 2:15pm. Please arrive at 1:00pm.',
    requiresRegistration: true,
  },
  {
    date: '2025-12-21',
    description: 'Partnership Event with The Crescendo Initiative at Antebellum (1520 James Burgess Rd, Suwanee, GA 30024). Join us for a music concert and socializing from 12:30pm to 2:30pm. Limited to 10 volunteers.',
    requiresRegistration: true,
  },
];