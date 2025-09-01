"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Script from "next/script"

// --- Import Activities Data and Interface ---
import { activities, type Activity } from "../data/activities"

declare global {
  interface Window {
    tf: {
      load: () => void
      reload: () => void
    }
  }
}

export default function VolunteerPage() {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1)
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const [selectedActivityObject, setSelectedActivityObject] = useState<Activity | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    activityDate: "",
    activityDescription: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkdgvan"

  const { daysInMonth, firstDayOfMonth, days } = useMemo(() => {
    const dInMonth = new Date(currentYear, currentMonth, 0).getDate()
    const fDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay()

    const calendarDays = []
    for (let i = 0; i < fDayOfMonth; i++) {
      calendarDays.push(null)
    }
    for (let i = 1; i <= dInMonth; i++) {
      calendarDays.push(i)
    }
    return { daysInMonth: dInMonth, firstDayOfMonth: fDayOfMonth, days: calendarDays }
  }, [currentMonth, currentYear])

  const handleMonthChange = (direction: "prev" | "next") => {
    setSelectedDate(null)
    setSelectedActivityObject(null)
    setFormStatus("idle")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      activityDate: "",
      activityDescription: "",
    })

    if (direction === "prev") {
      if (currentMonth === 1) {
        setCurrentMonth(12)
        setCurrentYear((prevYear) => prevYear - 1)
      } else {
        setCurrentMonth((prevMonth) => prevMonth - 1)
      }
    } else {
      if (currentMonth === 12) {
        setCurrentMonth(1)
        setCurrentYear((prevYear) => prevYear + 1)
      } else {
        setCurrentMonth((prevMonth) => prevMonth + 1)
      }
    }
  }

  const handleDayClick = (day: number | null) => {
    setSelectedDate(null)
    setSelectedActivityObject(null)
    setFormStatus("idle")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      activityDate: "",
      activityDescription: "",
    })

    if (day) {
      const dateString = `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const foundActivity = activities.find((activity) => activity.date === dateString)

      setSelectedDate(dateString)
      setSelectedActivityObject(foundActivity || null)

      if (foundActivity) {
        setFormData((prev) => ({
          ...prev,
          activityDate: formatDateForDisplay(dateString),
          activityDescription: foundActivity.description.substring(0, 100) + "...",
        }))
      }
    } else {
      setSelectedDate(null)
      setSelectedActivityObject(null)
    }
  }

  const formatDateForDisplay = (dateStr: string) => {
    if (!dateStr) return ""
    const [year, month, day] = dateStr.split("-")
    const date = new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day))
    return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormStatus("success")
        setFormData({ name: "", email: "", phone: "", message: "", activityDate: "", activityDescription: "" })
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")
    }
  }

  const isSelectedActivityInPast = useMemo(() => {
    if (!selectedDate) return false
    const activityDate = new Date(selectedDate)
    return activityDate < today
  }, [selectedDate, today])

  useEffect(() => {
    if (selectedActivityObject?.requiresRegistration && !isSelectedActivityInPast) {
      // Reinitialize Typeform embed when the modal opens
      if (window.tf && window.tf.load) {
        window.tf.load()
      }
    }
  }, [selectedActivityObject, isSelectedActivityInPast])

  return (
    <>
      <Script
        src="//embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("[v0] Typeform script loaded")
          // Initialize Typeform after script loads
          if (window.tf && window.tf.load) {
            window.tf.load()
          }
        }}
      />

      <div className="min-h-screen container mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">Volunteer With Us!</h1>
          <p className="text-gray-800 text-lg leading-relaxed max-w-2xl mx-auto">
            Join the PaperHearts community and help us spread joy through handmade art. Select a date on the calendar to
            see past activities, upcoming opportunities, and watch videos of our fun!
          </p>
        </div>

        <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-xl p-8 max-w-3xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => handleMonthChange("prev")}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
              aria-label="Previous Month"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <h2 className="text-2xl font-semibold text-gray-900">
              {new Date(currentYear, currentMonth - 1).toLocaleString("en-US", { month: "long", year: "numeric" })}
            </h2>

            <button
              onClick={() => handleMonthChange("next")}
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
              const dateString = day
                ? `${currentYear}-${String(currentMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                : null
              const hasActivity = dateString && activities.some((activity) => activity.date === dateString)
              const isSelected = selectedDate === dateString
              const isToday =
                day &&
                currentMonth === today.getMonth() + 1 &&
                currentYear === today.getFullYear() &&
                day === today.getDate()

              return (
                <div
                  key={index}
                  className={`p-2 rounded-lg transition-colors duration-200
                    ${day ? "cursor-pointer hover:bg-purple-100 text-gray-800" : "text-gray-400 cursor-default"}
                    ${hasActivity ? "bg-purple-200 font-bold border border-purple-500" : ""}
                    ${isSelected ? "bg-purple-500 text-white shadow-md" : ""}
                    ${isToday && !isSelected ? "border-2 border-purple-700 bg-purple-100 text-purple-800" : ""}
                  `}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </div>
              )
            })}
          </div>
        </div>

        {selectedActivityObject && (
          <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-3xl mx-auto text-center animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Details for {formatDateForDisplay(selectedDate!)}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">{selectedActivityObject.description}</p>

            {selectedActivityObject.requiresRegistration && (
              <div className="mt-8 pt-8 border-t border-white/50 text-left">
                {isSelectedActivityInPast ? (
                  <div
                    className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative text-center"
                    role="alert"
                  >
                    <strong className="font-bold">Registration Closed.</strong>
                    <span className="block sm:inline ml-2">
                      This event has already passed. Please check our calendar for future opportunities!
                    </span>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                      Register for this Activity
                    </h3>

                    <div className="w-full min-h-[600px] max-h-[80vh] rounded-lg overflow-auto bg-white border border-gray-200">
                      <div
                        data-tf-live="01K3HRJ9Z9YWR38BEF77QCYKT6"
                        data-tf-opacity="100"
                        data-tf-hide-headers
                        data-tf-hide-footer
                        style={{ width: "100%", minHeight: "600px" }}
                      ></div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {!selectedActivityObject && selectedDate && (
          <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-3xl mx-auto text-center animate-fadeIn">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">No Activity Found</h3>
            <p className="text-gray-700 leading-relaxed">
              No activities scheduled for {formatDateForDisplay(selectedDate)}. Please check another date or come back
              later for new updates!
            </p>
          </div>
        )}
      </div>
    </>
  )
}
