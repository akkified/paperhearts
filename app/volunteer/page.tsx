// app/volunteer/page.tsx
"use client";

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Data Structure for Activities ---
interface Activity {
  date: string; // Date in YYYY-MM-DD format for easy comparison
  description: string;
  youtubeId?: string; // Optional: YouTube video ID
  requiresRegistration?: boolean; // Flag if this activity needs registration
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
  {
    date: '2025-07-27', // Example: An activity on the current date (today)
    description: 'Current Day Activity: Crafting thank you cards for local essential workers.',
    youtubeId: 'some_other_video_id',
    requiresRegistration: true,
  },
  {
    date: '2025-07-20', // Example: An activity in the past
    description: 'Past Activity: Community mural painting event at the park. Registration is now closed for this past event.',
    youtubeId: 'a_past_video_id',
    requiresRegistration: true,
  },
  // Add more activities here as needed, and set requiresRegistration: true for those that need it
];

export default function VolunteerPage() {
  const today = new Date();
  // Set time to 00:00:00 for accurate date-only comparison
  today.setHours(0, 0, 0, 0); 

  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1); // Month (1-indexed)
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [selectedActivityObject, setSelectedActivityObject] = useState<Activity | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    activityDate: '',
    activityDescription: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdkdgvan'; 

  const { daysInMonth, firstDayOfMonth, days } = useMemo(() => {
    const dInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const fDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();

    const calendarDays = [];
    for (let i = 0; i < fDayOfMonth; i++) {
      calendarDays.push(null);
    }
    for (let i = 1; i <= dInMonth; i++) {
      calendarDays.push(i);
    }
    return { daysInMonth: dInMonth, firstDayOfMonth: fDayOfMonth, days: calendarDays };
  }, [currentMonth, currentYear]);

  const handleMonthChange = (direction: 'prev' | 'next') => {
    setSelectedDate(null);
    setSelectedActivityObject(null);
    setFormStatus('idle');
    setFormData({
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

  const handleDayClick = (day: number | null) => {
    setSelectedDate(null);
    setSelectedActivityObject(null);
    setFormStatus('idle');
    setFormData({
      name: '', email: '', phone: '', message: '', activityDate: '', activityDescription: ''
    });

    if (day) {
      const dateString = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const foundActivity = activities.find(activity => activity.date === dateString);

      setSelectedDate(dateString);
      setSelectedActivityObject(foundActivity || null);

      if (foundActivity) {
        setFormData(prev => ({
          ...prev,
          activityDate: formatDateForDisplay(dateString),
          activityDescription: foundActivity.description.substring(0, 100) + '...'
        }));
      }
    } else {
      setSelectedDate(null);
      setSelectedActivityObject(null);
    }
  };

  const formatDateForDisplay = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
        setFormData({ name: '', email: '', phone: '', message: '', activityDate: '', activityDescription: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  // NEW: Function to check if the selected activity date is in the past
  const isSelectedActivityInPast = useMemo(() => {
    if (!selectedDate) return false;
    const activityDate = new Date(selectedDate);
    // Compare only dates, not time
    return activityDate < today;
  }, [selectedDate, today]);


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
          <button
            onClick={() => handleMonthChange('prev')}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            aria-label="Previous Month"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <h2 className="text-2xl font-semibold text-gray-900">
            {new Date(currentYear, currentMonth - 1).toLocaleString('en-US', { month: 'long', year: 'numeric' })}
          </h2>

          <button
            onClick={() => handleMonthChange('next')}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
            aria-label="Next Month"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-700 mb-4">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            const dateString = day ? `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}` : null;
            const hasActivity = dateString && activities.some(activity => activity.date === dateString);
            const isSelected = selectedDate === dateString;
            const isToday = day && currentMonth === (today.getMonth() + 1) && currentYear === today.getFullYear() && day === today.getDate();

            return (
              <div
                key={index}
                className={`p-2 rounded-lg transition-colors duration-200
                  ${day
                    ? 'cursor-pointer hover:bg-purple-100 text-gray-800'
                    : 'text-gray-400 cursor-default'
                  }
                  ${hasActivity
                    ? 'bg-purple-200 font-bold border border-purple-500'
                    : ''
                  }
                  ${isSelected
                    ? 'bg-purple-500 text-white shadow-md'
                    : ''
                  }
                  ${isToday && !isSelected
                    ? 'border-2 border-purple-700 bg-purple-100 text-purple-800'
                    : ''
                  }
                `}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity Details & Video Display */}
      {selectedActivityObject && (
        <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-3xl mx-auto text-center animate-fadeIn">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Details for {formatDateForDisplay(selectedDate!)}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {selectedActivityObject.description}
          </p>

          {selectedActivityObject.youtubeId && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mx-auto shadow-md mt-4">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedActivityObject.youtubeId}`}
                title={`YouTube video about ${selectedActivityObject.description.substring(0, 30)}...`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Registration Form (Conditional based on requiresRegistration and date) */}
          {selectedActivityObject.requiresRegistration && (
            <div className="mt-8 pt-8 border-t border-white/50 text-left">
              {isSelectedActivityInPast ? (
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative text-center" role="alert">
                  <strong className="font-bold">Registration Closed.</strong>
                  <span className="block sm:inline ml-2">This event has already passed. Please check our calendar for future opportunities!</span>
                </div>
              ) : (
                <>
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
                </>
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