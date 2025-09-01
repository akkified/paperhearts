"use client";
import React from 'react'; // Import React
import { Target, ArrowRight, Info, Heart, DollarSign, Gift } from "lucide-react"
import Link from "next/link"
import { signIn } from "next-auth/react"
import RotatingText from '@/components/TextAnimations/RotatingText/RotatingText' // Assuming this path is correct
import ImageCarousel from '@/components/ImageCarousel'

export default function Home() {
  const handleDonateClick = () => {
      signIn("google", { callbackUrl: "/donate" })
    }

  // Define your array of image URLs for the carousel
  const carouselImages = [
    "/elderly-help.jpeg",
    "/painting-seniors.jpeg",
    "/full-team.jpeg",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-purple-700 text-sm font-medium">Our Motto?</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Handmade Art <span className="text-white">For Every Heart</span>
              </h1>
              <p className="text-gray-800 text-lg leading-relaxed max-w-md">
                PaperHeart's mission is to bring people together, one handmade gift at a time.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg flex items-center gap-2 justify-center transition-colors shadow-md"
              >
                Our Story
                <Info className="w-4 h-4" />
              </Link>
              <button onClick={handleDonateClick} className="border border-white/50 text-gray-800 hover:bg-white/20 px-6 py-3 rounded-lg flex items-center gap-2 justify-center bg-transparent transition-colors">
                Support Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image Carousel Section */}
          <div className="relative">
            {/* Pass the images array to the ImageCarousel component */}
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-purple-700 text-sm font-medium mb-2">We do fun things like</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
             <RotatingText
                  texts={['Origami', 'Rock Painting', 'Mehendi', 'Drawing', 'Crafting', 'Making Bracelets', 'Finger Painting','Games','Seasonal Activities']}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-opacity-0 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            We do this with all our friends in the community, and we love it!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-gray-900 font-semibold mb-2">Testimony #1</h3>
              <p className="text-gray-700 text-sm italic">
                I love the activities you do for the elderly. It makes me feel good to see them happy.
              </p>
            </div>
          </div>
          <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-gray-900 font-semibold mb-2">Testimony #2</h3>
              <p className="text-gray-700 text-sm italic">
                The activities you do are so fun and engaging. I love how you make everyone feel included.
              </p>
            </div>
          </div>
          <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-gray-900 font-semibold mb-2">Testimony #3</h3>
              <p className="text-gray-700 text-sm italic">The foster care activities are so much fun! I love how you make everyone feel like they're part of a big family.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="py-16 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proud Partners and Sponsors</h2>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">

            <div className="flex items-center space-x-12 min-w-max pr-12">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">LO</span>
              </div>
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-sm">Sponsor</span>
              </div>
              <div className="w-24 h-16 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">sponsor</span>
              </div>
              <div className="w-20 h-20 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">Sponsor</span>
              </div>
              <div className="w-24 h-16 bg-yellow-300 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-black font-bold text-sm">sponsor</span>
              </div>
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center border-4 border-red-500 flex-shrink-0">
                <span className="text-white font-bold text-lg">VOLO</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}
