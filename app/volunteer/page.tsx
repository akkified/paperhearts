"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, UserPlus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// --- Import Activities Data and Interface ---
import { activities, type Activity } from "../data/activities"

export default function VolunteerPage() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1)
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const [selectedActivityObject, setSelectedActivityObject] = useState<Activity | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const { days } = useMemo(() => {
    const dInMonth = new Date(currentYear, currentMonth, 0).getDate()
    const fDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay()

    const calendarDays = []
    for (let i = 0; i < fDayOfMonth; i++) {
      calendarDays.push(null)
    }
    for (let i = 1; i <= dInMonth; i++) {
      calendarDays.push(i)
    }
    return { days: calendarDays }
  }, [currentMonth, currentYear])

  const handleMonthChange = (direction: "prev" | "next") => {
    setSelectedDate(null)
    setSelectedActivityObject(null)
    if (direction === "prev") {
      if (currentMonth === 1) {
        setCurrentMonth(12); setCurrentYear((prev) => prev - 1)
      } else {
        setCurrentMonth((prev) => prev - 1)
      }
    } else {
      if (currentMonth === 12) {
        setCurrentMonth(1); setCurrentYear((prev) => prev + 1)
      } else {
        setCurrentMonth((prev) => prev + 1)
      }
    }
  }

  const handleDayClick = (day: number | null) => {
    if (day) {
      const dateString = `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const foundActivity = activities.find((activity) => activity.date === dateString)
      setSelectedDate(dateString)
      setSelectedActivityObject(foundActivity || null)
    }
  }

  const isSelectedActivityInPast = useMemo(() => {
    if (!selectedDate) return false
    return new Date(selectedDate) < today
  }, [selectedDate, today])

  return (
    <div className="min-h-screen pb-32 px-4 relative overflow-hidden"
        style={{
          backgroundColor: "#eaddf2",
          backgroundImage: `radial-gradient(#d8b4fe 1px, transparent 0)`,
          backgroundSize: "4px 4px"
        }}>
      
      {/* 1. Paper Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-50" />

      {/* 2. Editorial Background Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#fce7f3] blur-[120px] opacity-40" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-[#ede9fe] blur-[150px] opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto pt-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#b36a7a] mb-4 block italic">Join the Movement</span>
          <h1 className="text-6xl md:text-8xl font-black text-[#3a223a] mb-6 tracking-tighter uppercase leading-[0.85]">
            GET<span className="text-white italic drop-shadow-sm">INVOLVED</span>
          </h1>
          <p className="text-[#3a223a] text-xl font-bold max-w-2xl mx-auto italic">
            Select a date below to find upcoming sessions or see the impact of our past activities.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Calendar Section */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-sm border border-purple-100 p-8 shadow-2xl rounded-sm">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-black text-[#3a223a] uppercase tracking-tighter italic">
                {new Date(currentYear, currentMonth - 1).toLocaleString("en-US", { month: "long", year: "numeric" })}
              </h2>
              <div className="flex gap-2">
                <button onClick={() => handleMonthChange("prev")} className="p-2 bg-white border border-purple-100 hover:bg-[#3a223a] hover:text-white transition-all shadow-sm">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => handleMonthChange("next")} className="p-2 bg-white border border-purple-100 hover:bg-[#3a223a] hover:text-white transition-all shadow-sm">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black uppercase tracking-[0.2em] text-[#b36a7a] mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                const dateString = day ? `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}` : null
                const hasActivity = dateString && activities.some(a => a.date === dateString)
                const isSelected = selectedDate === dateString
                
                return (
                  <div
                    key={index}
                    onClick={() => handleDayClick(day)}
                    className={`aspect-square flex items-center justify-center text-sm font-black transition-all duration-300 border relative
                      ${day ? "cursor-pointer" : "opacity-0 pointer-events-none"}
                      ${isSelected ? "bg-[#3a223a] text-white border-[#3a223a] shadow-lg scale-105 z-10" : "bg-white/50 border-purple-50 text-[#3a223a] hover:border-[#b36a7a]"}
                      ${hasActivity && !isSelected ? "ring-2 ring-[#b36a7a] ring-offset-2" : ""}
                    `}
                  >
                    {day}
                    {hasActivity && !isSelected && <div className="absolute bottom-1 w-1.5 h-1.5 bg-[#b36a7a] rounded-full" />}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {selectedActivityObject ? (
                <motion.div 
                  key={selectedDate}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 shadow-2xl relative border border-purple-50 rounded-sm rotate-1"
                >
                  <Pin color="#ec4899" className="-top-3 left-1/2 -translate-x-1/2" />
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b36a7a] mb-3 flex items-center gap-2">
                    <CalendarIcon size={12} /> {selectedDate}
                  </div>
                  <h3 className="text-3xl font-black text-[#3a223a] uppercase tracking-tighter mb-4 leading-none">
                    {selectedActivityObject.description.split('.')[0]}
                  </h3>
                  <div className="h-[2px] w-12 bg-pink-500 mb-6" />
                  <p className="text-[#3a223a] text-sm leading-relaxed italic mb-8 font-medium">
                    {selectedActivityObject.description}
                  </p>

                  {selectedActivityObject.requiresRegistration && (
                    <div>
                      {isSelectedActivityInPast ? (
                        <div className="p-4 bg-gray-50 border border-gray-100 text-[#3a223a]/40 text-[10px] font-black uppercase tracking-widest text-center">
                          Registration Closed
                        </div>
                      ) : (
                        <button 
                          onClick={() => document.getElementById('reg-form')?.scrollIntoView({ behavior: 'smooth' })}
                          className="w-full bg-[#3a223a] text-white py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-black transition-all shadow-lg flex items-center justify-center gap-2 active:translate-y-1"
                        >
                          <UserPlus size={16} /> Register Now
                        </button>
                      )}
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-12 border-4 border-dashed border-white/40 rounded-sm">
                  <MapPin className="text-white mb-4" size={40} />
                  <p className="text-[#3a223a] font-black uppercase tracking-widest text-xs">Select a date to see our impact</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Registration Form */}
        {selectedActivityObject?.requiresRegistration && !isSelectedActivityInPast && (
          <motion.div 
            id="reg-form"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-28 pt-20 border-t-2 border-[#3a223a]/10"
          >
            <div className="text-center mb-10">
              <h3 className="text-5xl font-black text-[#3a223a] uppercase tracking-tighter italic leading-none">Secure Your Spot</h3>
              <p className="text-[#b36a7a] font-black uppercase tracking-widest text-xs mt-4 underline decoration-white decoration-4 underline-offset-4">Event: {selectedDate}</p>
            </div>
            <div className="bg-white p-2 shadow-2xl rounded-sm border border-purple-50 overflow-hidden relative">
               <iframe
                src="https://app.youform.com/forms/urzevrpc"
                width="100%"
                height="700"
                frameBorder="0"
                className="w-full min-h-[700px]"
                title="Volunteer Registration Form"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function Pin({ color, className = "" }: { color: string, className?: string }) {
  return (
    <div className={`absolute z-30 pointer-events-none drop-shadow-md ${className}`}>
      <div 
        className="w-6 h-6 rounded-full shadow-inner relative border border-black/5"
        style={{ 
          backgroundColor: color,
          backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent)' 
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black/10" />
      </div>
    </div>
  )
}