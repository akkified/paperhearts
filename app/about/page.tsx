"use client";

import { Heart, Users, Calendar } from "lucide-react"
import { signIn } from "next-auth/react"
import CountUp from "@/components/CountUp/CountUp";

export default function About() {
  const handleDonateClick = () => {
    signIn("google", { callbackUrl: "/donate" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-8"></div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              About <span className="text-white">Our Mission</span>
            </h1>
            <p className="text-gray-800 text-lg leading-relaxed max-w-3xl">
              Paperhearts is a student-led nonprofit dedicated to spreading comfort, joy and hope to children in foster care and the elderly by creating handmade gifts and meaningful connections through arts and crafts. We raise funds through community events and bring those funds to foster cares and senior citizen homes. There, we set up arts and crafts booths to do alongside them. Our mission is to fight loneliness, trauma and isolation by making people feel seen, connected and loved.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white/40 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <p className="text-gray-800 text-lg leading-relaxed">
            The PaperHearts community recognized that many non-profits only focus on providing essential needs and basic support. However, when we saw an opportunity to bring joy to the elderly and foster care communities, we took our chance to achieve this. We started this nonprofit because all of us love arts and crafts. We realized that art is the thread that stitches hearts together — across generations, languages, and lifetimes. Art brings people together in a way words never did. When people create together, they connect, memory by memory. Our community realized that the world that we are living in felt chaotic, and we were all tired of waiting for someone else to fix it. So PaperHearts, a passionate group of teens, decided to do something about it, one small act at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Elderly Love Section (Image Left, Text Right) */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Image Placeholder - Replace with your actual image */}
            <div className="w-full md:w-1/2">
              <img src="/elderly-help.jpeg" alt="Elderly Love" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <div className="mb-6">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Elderly Love</h2>
              <p className="text-gray-800 leading-relaxed text-lg">
                <span className="count-up-text text-gray-900 text-4xl font-bold inline"> {/* New span wrapper */}
                  <CountUp
                    from={0}
                    to={61}
                    separator=","
                    direction="up"
                    duration={0.5}
                  />% {/* Percentage symbol moved inside the span */}
                </span> of seniors in nursing homes suffer from loneliness due to the lack of visitors and the loss of
                purpose. We want to show them that they are not forgotten, and that we do care about them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Foster Child Welfare Section (Text Left, Image Right) */}
      <div className="bg-white/40 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 text-right">
              <div className="mb-6">
                <Users className="w-12 h-12 text-white ml-auto" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Foster Child Welfare</h2>
              <p className="text-gray-800 leading-relaxed text-lg">
                <span className="count-up-text text-gray-900 text-4xl font-bold inline"> {/* New span wrapper */}
                  <CountUp
                    from={0}
                    to={80}
                    separator=","
                    direction="up"
                    duration={0.5}
                  />% {/* Percentage symbol moved inside the span */}
                </span> of foster children have mental issues resulting from neglect and trauma. Our donations help fund
                resources that we use to communicate with children to help them.
              </p>
            </div>
            {/* Image Placeholder - Replace with your actual image */}
            <div className="w-full md:w-1/2">
              <img src="/path/to/foster-child-image.jpg" alt="Foster Child Welfare" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Meetups Section (Image Left, Text Right) */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Image Placeholder - Replace with your actual image */}
            <div className="w-full md:w-1/2">
              <img src="/path/to/meetups-image.jpg" alt="Monthly Meetups" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <div className="mb-6">
                <Calendar className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Monthly Meetups</h2>
              <p className="text-gray-800 leading-relaxed text-lg">
                Monthly, we will set up a stand in a public area trying to teach the general about these issues through
                fun activities and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Impact Section (Text Left, Image Right) */}
      <div className="bg-white/40 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 text-right">
              <div className="mb-6">
                {/* You can choose a new icon here, or omit if not applicable */}
                <Heart className="w-12 h-12 text-white ml-auto" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-gray-800 leading-relaxed text-lg">
                Since our founding, Paperhearts has touched countless lives. We've hosted numerous craft events,
                bringing smiles and fostering connections in senior care facilities and foster homes. Our community
                outreach events has raised vital awareness and funds, enabling us to expand our reach and continue
                our mission of fighting loneliness and promoting well-being through the power of art.
              </p>
            </div>
            {/* Image Placeholder - Replace with your actual image */}
            <div className="w-full md:w-1/2">
              <img src="meeting.jpeg" alt="Our Impact" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-8"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Make A Difference Today</h2>
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              Your donation helps us continue spreading love and kindness worldwide.
            </p>
            <button
              onClick={handleDonateClick}
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition-colors shadow-lg"
            >
              <Heart className="w-5 h-5 fill-current" />
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}