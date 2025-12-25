"use client";

import { Heart, Users, Calendar } from "lucide-react"
import { signIn } from "next-auth/react"
import { motion } from "framer-motion"
import CountUp from "@/components/CountUp/CountUp";

export default function About() {
  const handleDonateClick = () => {
    signIn("google", { callbackUrl: "/donate" })
  }

  return (
    <div className="min-h-screen pb-24 relative overflow-hidden" 
      style={{
        backgroundColor: "#eaddf2",
        backgroundImage: `radial-gradient(#d8b4fe 1px, transparent 0)`,
        backgroundSize: "4px 4px"
      }}>
      
      {/* Texture Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-20 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-24 relative z-10"
      >
        <div className="container mx-auto px-6 text-center">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#b36a7a]">Our Philosophy</span>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 text-[#3a223a] tracking-tighter">
              PAPER<span className="text-white italic">HEARTS</span>
            </h1>
            <p className="text-[#3a223a] text-xl leading-relaxed max-w-3xl mx-auto font-medium">
              We are a student-led nonprofit dedicated to fighting loneliness, trauma, and isolation through the simple, tactile power of arts and crafts.
            </p>
        </div>
      </motion.div>

      {/* Our Story Section - "Pinned Paper" Style */}
      <div className="container mx-auto px-6 mb-32">
        <motion.div 
          whileHover={{ rotate: 0 }}
          className="max-w-4xl mx-auto bg-[#fdfaff] p-12 shadow-2xl relative border border-purple-100 -rotate-1"
        >
          {/* 3D Push Pins */}
          <Pin color="#ec4899" className="top-4 left-4" />
          <Pin color="#a855f7" className="top-4 right-4" />
          
          <h2 className="text-4xl font-black text-[#3a223a] mb-8 uppercase tracking-tight">Our Story</h2>
          <p className="text-[#3a223a] text-lg leading-relaxed italic">
            "Art is the thread that stitches hearts together — across generations, languages, and lifetimes." We started this because the world felt chaotic, and we were tired of waiting for someone else to fix it. We chose paper and glue as our tools to mend the gap between the youth, the elderly, and those in foster care.
          </p>
        </motion.div>
      </div>

      {/* Stats & Impact Sections */}
      <div className="container mx-auto px-6 space-y-40">
        
        {/* Elderly Love Section */}
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 relative group">
            <Pin color="#ec4899" className="top-2 left-1/2 -translate-x-1/2 z-20" />
            <div className="bg-white p-3 shadow-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500">
               <img src="/elderly-help.jpeg" alt="Elderly Love" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <Heart className="w-12 h-12 text-white mb-6" />
            <h2 className="text-5xl font-black text-[#3a223a] mb-6 tracking-tighter italic">Elderly Love</h2>
            <div className="text-[#3a223a] leading-relaxed text-xl">
              <span className="text-[#b36a7a] text-6xl font-black block mb-2">
                <CountUp from={0} to={61} duration={1} />%
              </span>
              of seniors in nursing homes suffer from chronic loneliness. We use craft booths to ensure they are seen, connected, and never forgotten.
            </div>
          </div>
        </div>

        {/* Foster Child Welfare */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 relative group">
            <Pin color="#a855f7" className="top-2 left-1/2 -translate-x-1/2 z-20" />
            <div className="bg-white p-3 shadow-xl rotate-2 group-hover:rotate-0 transition-transform duration-500">
               <img src="/path/to/foster-child-image.jpg" alt="Foster Welfare" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all" />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-right">
            <Users className="w-12 h-12 text-white mb-6 ml-auto" />
            <h2 className="text-5xl font-black text-[#3a223a] mb-6 tracking-tighter italic">Foster Welfare</h2>
            <div className="text-[#3a223a] leading-relaxed text-xl">
              <span className="text-purple-500 text-6xl font-black block mb-2">
                <CountUp from={0} to={80} duration={1} />%
              </span>
              of foster children face neglect-related trauma. Our sessions provide a safe creative outlet to process emotions and build self-worth.
            </div>
          </div>
        </div>

        {/* Monthly Meetups */}
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 relative group">
            <Pin color="#f472b6" className="top-2 left-1/2 -translate-x-1/2 z-20" />
            <div className="bg-[#fdfaff] p-8 shadow-2xl -rotate-1">

               <img src="meeting.jpeg" alt="Monthly Meetups" className="mt-6 rounded-sm w-full h-auto" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <Calendar className="w-12 h-12 text-white mb-6" />
            <h2 className="text-5xl font-black text-[#3a223a] mb-6 tracking-tighter uppercase">Meetups</h2>
            <p className="text-[#3a223a] text-xl font-medium">
              Every month, we hit the streets. We set up stands in public areas to bridge the gap between our mission and the community.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-40 text-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="inline-block relative p-12 bg-white shadow-2xl rotate-1 border border-purple-50"
        >
          <Pin color="#ec4899" className="-top-4 left-1/2 -translate-x-1/2" />
          <h2 className="text-5xl font-black text-[#3a223a] mb-6 tracking-tighter uppercase">Make A Difference</h2>
          <p className="text-[#b36a7a] text-lg mb-8 font-bold">Your donation funds the art supplies that mend hearts.</p>
          <button
            onClick={handleDonateClick}
            className="bg-[#3a223a] hover:bg-black text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest flex items-center gap-2 mx-auto transition-all shadow-lg active:translate-y-1"
          >
            <Heart className="w-5 h-5 fill-current" />
            Donate Now
          </button>
        </motion.div>
      </div>
    </div>
  )
}

/* Helper Component for the 3D Push Pin */
function Pin({ color, className = "" }: { color: string, className?: string }) {
  return (
    <div className={`absolute z-30 pointer-events-none ${className}`}>
      <div className="absolute top-6 left-2 w-4 h-4 bg-black/20 blur-sm rounded-full" />
      <div 
        className="w-6 h-6 rounded-full shadow-inner relative border border-black/5"
        style={{ 
          backgroundColor: color,
          backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)' 
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black/10" />
      </div>
    </div>
  )
}