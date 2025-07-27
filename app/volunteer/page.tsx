// app/volunteer/page.tsx
"use client";

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Data Structure for Activities ---
interface Activity {
  date: string; // Date in YYYY-MM-DD format for easy comparison
  description: string;
  youtubeId?: string; // Optional: YouTube video ID
  requiresRegistration?: boolean; // NEW: Flag if this activity needs registration
}

// --- Dummy Activity Data (now with YouTube IDs and registration flag) ---
// IMPORTANT: Replace the 'youtubeId' values with actual YouTube video IDs relevant to your activities.
// You can find a video's ID in its URL: https://www.youtube.com/watch?v=<VIDEO_ID>
const activities: Activity[] = [
  {
    date: '2025-08-01',
    description: 'First Activity! Join us at Towne Club Windermere (3950 Towne Club Pkwy, Cumming, GA, 30041). We will be doing some arts and crafts to entertain the elderly.',
    youtubeId: 'FzX101pM8v8', // Example: Mehendi design process - replace with relevant video
    requiresRegistration: true, // This activity now requires registration!
  },
  // Add more activities here as needed, and set requiresRegistration: true for those that need it
  // {
  //   date: '2025-08-15',
  //   description: 'Another upcoming activity description.',
  //   youtubeId: 'ANOTHER_VIDEO_ID',
  //   requiresRegistration: true,
  // },
];

export default function VolunteerPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1); // Month (1-indexed)
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // We now store the entire selected activity object, not just the description
  const [selectedActivityObject, setSelectedActivityObject] = useState<Activity | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // NEW: Form state for registration
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    activityDate: '', // Hidden field to store selected activity date
    activityDescription: '' // Hidden field to store selected activity description
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // NEW: Your actual Formspree endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdkdgvan'; 

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
  const handleMonthChange = (direction: 'prev' | 'next') => {
    setSelectedDate(null); // Clear selection on month change
    setSelectedActivityObject(null); // Clear selected activity object
    setFormStatus('idle'); // NEW: Reset form status on month change
    setFormData({ // NEW: Reset form data on month change
      name: '', email: '', phone: '', message: '', activityDate: '', activityDescription: ''
    });

    if (direction === 'prev') {
      if (currentMonth === 1) {
        setCurrentMonth(12);
        setCurrentYear(prevYear => prevYear - 1);
      } else {
        setCurrentMonth(prevMonth => prevMonth - 1);
      }
    } else { // 'next'
      if (currentMonth === 12) {
        setCurrentMonth(1);
        setCurrentYear(prevYear => prevYear + 1);
      } else {
        setCurrentMonth(prevMonth => prevMonth + 1);
      }
    }
  };

  // --- Event Handler for Date Clicks ---
  const handleDayClick = (day: number | null) => {
    setSelectedDate(null); // Clear previous selection
    setSelectedActivityObject(null); // Clear previous activity object
    setFormStatus('idle'); // NEW: Reset form status on new date selection
    setFormData({ // NEW: Reset form data on new date selection
      name: '', email: '', phone: '', message: '', activityDate: '', activityDescription: ''
    });

    if (day) {
      // Format the date to match the activity data format (YYYY-MM-DD)
      const dateString = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      // Find if an activity exists for the clicked date
      const foundActivity = activities.find(activity => activity.date === dateString);

      setSelectedDate(dateString);
      setSelectedActivityObject(foundActivity || null); // Store the entire object or null

      // NEW: Pre-fill form data with activity details if an activity is found
      if (foundActivity) {
        setFormData(prev => ({
          ...prev,
          activityDate: formatDateForDisplay(dateString),
          activityDescription: foundActivity.description.substring(0, 100) + '...' // Use a truncated description for the hidden field
        }));
      }
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

  // NEW: Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // NEW: Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        // Optionally clear form data after successful submission
        setFormData({ name: '', email: '', phone: '', message: '', activityDate: '', activityDescription: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
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
            onClick={() => handleMonthChange('prev')} // Updated to use handleMonthChange
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
            onClick={() => handleMonthChange('next')} // Updated to use handleMonthChange
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
                src={`https://www.youtube.com/embed/${selectedActivityObject.youtubeId}`} // Corrected YouTube embed URL format
                title={`YouTube video about ${selectedActivityObject.description.substring(0, 30)}...`} // Accessible title
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* NEW: Registration Form (Conditional) */}
          {selectedActivityObject.requiresRegistration && (
            <div className="mt-8 pt-8 border-t border-white/50 text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Register for this Activity</h3>

              {formStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                  <strong className="font-bold">Success!</strong>
                  <span className="block sm:inline ml-2">Your registration has been submitted. We'll be in touch!</span>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline ml-2">There was an issue with your submission. Please try again.</span>
                </div>
              )}

              {formStatus !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Hidden fields for activity details, pre-filled by handleDayClick */}
                  <input type="hidden" name="activityDate" value={formData.activityDate} />
                  <input type="hidden" name="activityDescription" value={formData.activityDescription} />

                  <div>
                    <label htmlFor="name" className="block text-gray-800 text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/70 border border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/70 border border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-800 text-sm font-medium mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-white/70 border border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
                      placeholder="e.g., +1 (123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-800 text-sm font-medium mb-1">Message / Questions (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-white/70 border border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 placeholder-gray-500"
                      placeholder="Any questions or notes for us?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Registering...' : 'Submit Registration'}
                  </button>
                </form>
              )}
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