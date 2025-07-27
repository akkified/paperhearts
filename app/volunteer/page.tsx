// app/volunteer/page.tsx
"use client";

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Data Structure for Activities ---
interface Activity {
  date: string; // Date in YYYY-MM-DD format for easy comparison
  description: string;
  youtubeId?: string; // Optional: YouTube video ID (e.g., 'dQw4w9WgXcQ' from youtube.com/watch?v=dQw4w9WgXcQ)
}

// --- Dummy Activity Data (now with YouTube IDs) ---
// IMPORTANT: Replace the 'youtubeId' values with actual YouTube video IDs relevant to your activities.
// You can find a video's ID in its URL: youtube.com/watch?v=<VIDEO_ID>
const activities: Activity[] = [
  {
    date: '2025-08-01',
    description: 'First Activity! Join us at Towne Club Windermere (3950 Towne Club Pkwy, Cumming, GA, 30041). We will be doing some arts and crafts to entertain the elderly.',
    youtubeId: 'FzX101pM8v8' // Example: Mehendi design process
  },
];

export default function VolunteerPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1); // Month (1-indexed)
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // We now store the entire selected activity object, not just the description
  const [selectedActivityObject, setSelectedActivityObject] = useState<Activity | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Use useMemo to re-calculate calendar days only when month/year changes
  const { daysInMonth, firstDayOfMonth, days } = useMemo(() => {
    const dInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const fDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay(); // 0 for Sunday, 6 for Saturday

    const calendarDays = [];
    for (let i = 0; i < fDayOfMonth; i++) {
      calendarDays.push(null); // Placeholder for empty days at the start of the month
    }
    for (let i = 1; i <= dInMonth; i++) {
      calendarDays.push(i);
    }
    return { daysInMonth: dInMonth, firstDayOfMonth: fDayOfMonth, days: calendarDays };
  }, [currentMonth, currentYear]);

  // --- Navigation Handlers ---
  const handlePrevMonth = () => {
    setSelectedDate(null); // Clear selection on month change
    setSelectedActivityObject(null); // Clear selected activity object
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(prevYear => prevYear - 1);
    } else {
      setCurrentMonth(prevMonth => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    setSelectedDate(null); // Clear selection on month change
    setSelectedActivityObject(null); // Clear selected activity object
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(prevYear => prevYear + 1);
    } else {
      setCurrentMonth(prevMonth => prevMonth + 1);
    }
  };

  // --- Event Handler for Date Clicks ---
  const handleDayClick = (day: number | null) => {
    if (day) {
      // Format the date to match the activity data format (YYYY-MM-DD)
      const dateString = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      // Find if an activity exists for the clicked date
      const foundActivity = activities.find(activity => activity.date === dateString);

      setSelectedDate(dateString);
      setSelectedActivityObject(foundActivity || null); // Store the entire object or null
    } else {
      // If an empty cell is clicked, clear the selection
      setSelectedDate(null);
      setSelectedActivityObject(null);
    }
  };

  // Helper function to format the selected date for display
  const formatDateForDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    // Month is 0-indexed in Date constructor, so subtract 1
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen container mx-auto px-6 py-12">
      {/* Hero Section for Volunteer Page */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Volunteer With Us!
        </h1>
        <p className="text-gray-800 text-lg leading-relaxed max-w-2xl mx-auto">
          Join the PaperHearts community and help us spread joy through handmade art. Select a date on the calendar to see past activities, upcoming opportunities, and watch videos of our fun!
        </p>
      </div>

      {/* Calendar Section */}
      <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-3xl mx-auto mb-12">
        <div className="flex justify-between items-center mb-6">
          {/* Previous Month Button */}
          <button
            onClick={handlePrevMonth}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            aria-label="Previous Month"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <h2 className="text-2xl font-semibold text-gray-900">
            {/* Display the current month and year (e.g., "July 2025") */}
            {new Date(currentYear, currentMonth - 1).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          </h2>

          {/* Next Month Button */}
          <button
            onClick={handleNextMonth}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            aria-label="Next Month"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Calendar Weekday Headers */}
        <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-700 mb-4">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Calendar Days Grid */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            // Create a full date string for comparison if the day is not null
            const dateString = day ? `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}` : null;
            // Check if there's an activity on this date
            const hasActivity = dateString && activities.some(activity => activity.date === dateString);
            // Check if this date is currently selected
            const isSelected = selectedDate === dateString;
            // Check if the current day being rendered is today
            const isToday = day && currentMonth === (today.getMonth() + 1) && currentYear === today.getFullYear() && day === today.getDate();

            return (
              <div
                key={index} // Using index as key is acceptable here since items are static and not reordered
                className={`p-2 rounded-lg transition-colors duration-200
                  ${day // If it's a valid day (not a null placeholder)
                    ? 'cursor-pointer hover:bg-purple-100 text-gray-800' // Make it clickable
                    : 'text-gray-400 cursor-default' // Make placeholder non-interactive
                  }
                  ${hasActivity // Style for dates with activities
                    ? 'bg-purple-200 font-bold border border-purple-500'
                    : ''
                  }
                  ${isSelected // Style for the currently selected date
                    ? 'bg-purple-500 text-white shadow-md'
                    : ''
                  }
                  ${isToday && !isSelected // Style for today's date if not selected
                    ? 'border-2 border-purple-700 bg-purple-100 text-purple-800'
                    : ''
                  }
                `}
                onClick={() => handleDayClick(day)} // Handle click event
              >
                {day} {/* Display the day number */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity Details & Video Display */}
      {selectedActivityObject && ( // Only render this block if an activity is selected
        <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-3xl mx-auto text-center animate-fadeIn">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Details for {formatDateForDisplay(selectedDate!)} {/* selectedDate will not be null here */}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {selectedActivityObject.description}
          </p>

          {/* Conditionally render video if a youtubeId is available for the selected activity */}
          {selectedActivityObject.youtubeId && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mx-auto shadow-md mt-4">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                // Construct the YouTube embed URL
                src={`https://www.youtube.com/embed/${selectedActivityObject.youtubeId}`}
                title={`YouTube video about ${selectedActivityObject.description.substring(0, 30)}...`} // Accessible title
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}

      {/* Message for no activity selected / no activity on date */}
      {!selectedActivityObject && selectedDate && (
         <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-3xl mx-auto text-center animate-fadeIn">
           <h3 className="text-xl font-semibold text-gray-900 mb-3">
             No Activity Found
           </h3>
           <p className="text-gray-700 leading-relaxed">
             No activities scheduled for {formatDateForDisplay(selectedDate)}. Please check another date or come back later for new updates!
           </p>
         </div>
      )}
    </div>
  );
}