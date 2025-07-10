"use client";

import { Heart, Users, Calendar } from "lucide-react"
import { signIn } from "next-auth/react"

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
              Paperheart is a student-led nonprofit dedicated to spreading comfort, hope and joy to children in foster
              care, the elderly and children in hospitals by creating handmade gifts and meaningful connections through
              arts and crafts. We create and deliver gifts to spread smiles, spark joy, and ignite a life of optimism.
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
              Paperhearts was started by me, Eeshasri Alpuri, and my two friends Akhil Akella, and Amira Vanjaria,
              because we saw a world that felt scary and uncertain, especially after hearing news about WW3. We realized
              the people who would be most scared and lonely are the elderly, kids in hospitals, and children in foster
              care. So, we decided to do something about it. We created this arts and crafts nonprofit to bring people
              together and remind them they are part of a community that cares. We set up craft stations at shelters,
              hospitals, and foster homes because art has this amazing power to connect people, spark joy, and heal
              loneliness. Our mission is simple but powerful: to create a space where everyone feels seen, supported,
              and united, because together, we are stronger.
            </p>
          </div>
        </div>
      </div>

      {/* What do we do Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What do we do?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <Heart className="w-12 h-12 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Elderly Love</h3>
              <p className="text-gray-800 leading-relaxed">
                61% of seniors in nursing homes suffer from loneliness due to the lack of visitors and the loss of
                purpose. We want to show them that they are not forgotten, and that we do care about them.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Users className="w-12 h-12 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Foster Child Welfare</h3>
              <p className="text-gray-800 leading-relaxed">
                80% of foster children have mental issues resulting from neglect and trauma. Our donations help fund
                resources that we use to communicate with children to help them.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <Calendar className="w-12 h-12 text-white mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Meetups</h3>
              <p className="text-gray-800 leading-relaxed">
                Monthly, we will setup a stand in a public area trying to teach the general about these issues through
                fun activities and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white/40 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pure Kindness</h3>
              <p className="text-gray-800 leading-relaxed">
                We believe in authentic, no-strings-attached kindness that comes straight from the heart.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Connections</h3>
              <p className="text-gray-800 leading-relaxed">
                Build meaningful relationships with people who genuinely care.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Daily Joy</h3>
              <p className="text-gray-800 leading-relaxed">
                Experience the happiness that comes from giving and receiving love.
              </p>
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
