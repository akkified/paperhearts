"use client";
import { Target, ArrowRight, Info, Heart, DollarSign, Gift } from "lucide-react"
import Link from "next/link"
import { signIn } from "next-auth/react"

export default function Home() {
  const handleDonateClick = () => {
      signIn("google", { callbackUrl: "/donate" })
    }

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
                Our mission is to bring people together, one handmade gift at a time.
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

          {/* Updated Illustration Area - Donation to Elderly */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/30 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              {/* Donation to elderly illustration */}
              <div className="flex justify-center items-center h-64">
                <div className="relative">
                  {/* Elderly person sitting */}
                  <div className="flex items-end justify-center space-x-8">
                    {/* Elderly person */}
                    <div className="relative">
                      {/* Head with gray hair */}
                      <div className="w-10 h-10 bg-pink-200 rounded-full mb-2 relative">
                        <div className="absolute top-0 left-1 right-1 h-3 bg-gray-300 rounded-t-full"></div>
                      </div>
                      {/* Body */}
                      <div className="w-14 h-20 bg-blue-400 rounded-lg relative">
                        {/* Arms */}
                        <div className="absolute -left-2 top-2 w-4 h-12 bg-pink-200 rounded-full"></div>
                        <div className="absolute -right-2 top-2 w-4 h-12 bg-pink-200 rounded-full"></div>
                      </div>
                      {/* Walking cane */}
                      <div className="absolute -right-6 top-8 w-1 h-16 bg-amber-600 rounded-full"></div>
                      <div className="absolute -right-8 top-6 w-4 h-2 bg-amber-600 rounded-full"></div>
                      {/* Chair */}
                      <div className="absolute -bottom-4 -left-2 w-18 h-8 bg-amber-700 rounded"></div>
                      <div className="absolute -bottom-12 -left-2 w-2 h-8 bg-amber-700"></div>
                      <div className="absolute -bottom-12 right-0 w-2 h-8 bg-amber-700"></div>
                    </div>

                    {/* Donation hand with money */}
                    <div className="relative">
                      {/* Hand giving money */}
                      <div className="w-8 h-12 bg-pink-300 rounded-lg transform -rotate-12"></div>
                      {/* Money/bills */}
                      <div className="absolute -top-2 -right-2 w-6 h-4 bg-green-400 rounded border-2 border-green-600"></div>
                      <div className="absolute -top-1 -right-1 w-6 h-4 bg-green-500 rounded border-2 border-green-700"></div>
                      {/* Dollar signs floating */}
                      <div className="absolute -top-6 left-2 text-green-600 text-lg font-bold">$</div>
                      <div className="absolute -top-4 -left-2 text-green-600 text-sm font-bold">$</div>
                    </div>
                  </div>

                  {/* Heart between them showing care */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-red-400 rounded-full relative">
                      <Heart className="w-4 h-4 text-white absolute top-1 left-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating donation-themed icons */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <div className="absolute top-8 right-8 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-8 left-8 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <Gift className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-purple-700 text-sm font-medium mb-2">Our goal is to support</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">EVERYONE!</h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            We take donations and supply them to centers that need it across Georgia
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-gray-900 font-semibold mb-2">Classic Heart</h3>
              <p className="text-gray-700 text-sm">Handcrafted with recycled paper, perfect for any occasion.</p>
            </div>
          </div>
          <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-gray-900 font-semibold mb-2">Personalized Heart</h3>
              <p className="text-gray-700 text-sm">Custom messages and designs for your special someone.</p>
            </div>
          </div>
          <div className="bg-white/40 border border-white/30 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
              <h3 className="text-gray-900 font-semibold mb-2">Gift Set</h3>
              <p className="text-gray-700 text-sm">Collection of hearts perfect for gifting.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Sponsors Section */}
      {/*<div className="py-16 overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proud Sponsors</h2>
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
      */}
    </div>
  )
}
