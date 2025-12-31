"use client";
import React from 'react';
import { Info, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { signIn } from "next-auth/react"
import Image from "next/image" // Added for logos
import RotatingText from '@/components/TextAnimations/RotatingText/RotatingText'
import ImageCarousel from '@/components/ImageCarousel'

export default function Home() {
  const handleDonateClick = () => {
    signIn("google", { callbackUrl: "/donate" })
  }

  const carouselImages = [
    "/elderly-help.jpeg",
    "/painting-seniors.jpeg",
    "/full-team.jpeg",
  ];

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden" 
      style={{
        backgroundColor: "#eaddf2",
        backgroundImage: `radial-gradient(#d8b4fe 1px, transparent 0)`,
        backgroundSize: "4px 4px"
      }}>
      
      {/* Texture Layer */}
      <div className="fixed inset-0 pointer-events-none opacity-20 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-50" />

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#b36a7a] mb-2 block italic">Our Motto?</span>
              <h1 className="text-7xl lg:text-9xl font-black text-[#3a223a] leading-[0.8] tracking-tighter">
                HANDMADE <br/>
                <span className="text-white italic drop-shadow-sm">ART.</span>
              </h1>
              <p className="text-[#3a223a] text-xl font-medium leading-tight max-w-sm pt-6">
                PaperHearts brings people together, one handmade gift at a time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/about"
                className="bg-[#3a223a] text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest flex items-center gap-2 justify-center transition-transform hover:-rotate-2 active:scale-95 shadow-xl"
              >
                Our Story
                <Info className="w-4 h-4" />
              </Link>
              <button 
                onClick={handleDonateClick} 
                className="bg-white text-[#3a223a] border-2 border-[#3a223a] px-10 py-5 rounded-sm font-black uppercase tracking-widest flex items-center gap-2 justify-center transition-transform hover:rotate-2 shadow-xl"
              >
                Support Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Polaroid Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative p-4 bg-white shadow-2xl rotate-3 border border-purple-100 rounded-sm"
          >
            <Pin color="#ec4899" className="-top-5 left-1/2 -translate-x-1/2 scale-125" />
            <div className="bg-[#f8f5ff] p-1">
                <ImageCarousel images={carouselImages} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rotating Text Section */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-8">
          <p className="text-[#b36a7a] text-xs font-black uppercase tracking-[0.4em] mb-4 italic">We do fun things like</p>
          <div className="h-16 md:h-20 overflow-hidden flex items-center justify-center">
            <RotatingText
              texts={['Origami', 'Rock Painting', 'Mehendi', 'Drawing', 'Crafting', 'Bracelets', 'Finger Painting','Games','Seasonal Art']}
              mainClassName="text-3xl md:text-5xl font-black text-[#3a223a] uppercase tracking-tighter inline-flex"
              staggerFrom={"center"}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
              staggerDuration={0.02}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto pt-10">
          <TestimonialCard 
            text="I love the activities you do for the elderly. It makes me feel good to see them happy."
            author="Member Testimony"
            rotation="-2deg"
            pinColor="#a855f7"
          />
          <TestimonialCard 
            text="The activities you do are so fun and engaging. I love how you make everyone feel included."
            author="Volunteer Impact"
            rotation="1deg"
            pinColor="#ec4899"
          />
          <TestimonialCard 
            text="The foster care activities are so much fun! I love how you make everyone feel like family."
            author="Community Love"
            rotation="3deg"
            pinColor="#f472b6"
          />
        </div>
      </div>

      {/* UPDATED PARTNERS SECTION WITH LOGO PLACEHOLDERS */}
      <div className="py-24 bg-white/30 backdrop-blur-md border-y border-[#3a223a]/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#3a223a] uppercase tracking-tighter italic underline decoration-white decoration-8 underline-offset-4">
            Partners & Sponsors
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll opacity-60 grayscale hover:grayscale-0 transition-all duration-1000">
            <LogoScrollItems />
            <LogoScrollItems />
          </div>
        </div>
      </div>
    </div>
  )
}

/* Helper Components */
function Pin({ color, className = "" }: { color: string, className?: string }) {
  return (
    <div className={`absolute z-30 pointer-events-none drop-shadow-md ${className}`}>
      <div className="w-6 h-6 rounded-full shadow-inner relative border border-black/5"
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

function TestimonialCard({ text, author, rotation, pinColor }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, rotate: 0 }}
      style={{ rotate: rotation }}
      className="bg-white p-8 shadow-2xl relative border border-purple-100 rounded-sm"
    >
      <Pin color={pinColor} className="-top-3 left-1/2 -translate-x-1/2" />
      <p className="text-[#3a223a] font-medium italic mb-6 leading-relaxed">"{text}"</p>
      <div className="h-[2px] w-8 bg-[#b36a7a] mb-2" />
      <h3 className="text-[#3a223a] text-xs font-black uppercase tracking-widest">{author}</h3>
    </motion.div>
  )
}

/* Updated for Logo Images */
function LogoScrollItems() {
  // Add your image paths here when you get them
  const logos = [
    { src: "/sponsors/logo1.png", alt: "Partner 1" },
    { src: "/sponsors/logo2.png", alt: "Partner 2" },
    { src: "/sponsors/logo1.png", alt: "Partner 3" },
    { src: "/sponsors/logo1.png", alt: "Partner 4" },
    { src: "/sponsors/logo1.png", alt: "Partner 5" },
  ];

  return (
    <div className="flex items-center space-x-24 min-w-max pr-24">
      {logos.map((logo, index) => (
        <div key={index} className="relative w-32 h-16 flex items-center justify-center group">
          <Image
            src={logo.src}
            alt={logo.alt}
            fill
            className="object-contain"
            // Using placeholder until the real image exists in your public folder
            onLoadingComplete={(img) => { if (img.naturalWidth === 0) img.src = "/placeholder.svg" }}
            onError={(e) => { 
                const target = e.target as HTMLImageElement;
                target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40'%3E%3Crect width='120' height='40' fill='transparent'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='12' fill='%233a223a' opacity='0.4'%3EPARTNER ${index + 1}%3C/text%3E%3C/svg%3E`;
            }}
          />
        </div>
      ))}
    </div>
  )
}