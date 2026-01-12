"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function Team() {
  return (
    <div className="min-h-screen pb-40 relative overflow-hidden" 
      style={{
        backgroundColor: "#eaddf2",
        backgroundImage: `radial-gradient(#d8b4fe 1px, transparent 0)`,
        backgroundSize: "4px 4px"
      }}>
      
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#fbcfe8] blur-[140px] opacity-30" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[700px] h-[700px] rounded-full bg-[#c084fc] blur-[160px] opacity-20" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-32 relative z-10">
        
        {/* Leadership - Large Cards */}
        <Grid cols="md:grid-cols-3">
          <TeamCard name="Eeshasri Alpuri" role="President" img="/headshot/eeshasri.png" pinColor="#ec4899" rotation="-2deg" />
          <TeamCard name="Amira Vanjaria" role="Vice President" img="/headshot/amira.jpeg" pinColor="#a855f7" rotation="1deg" />
          <TeamCard name="Akhil Akella" role="Software Manager" img="/headshot/akhil.png" pinColor="#ec4899" rotation="2deg" />
        </Grid>

        {/* Team - Small Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
            <TeamCard name="Sahasra Madhu" role="Secretary" img="/headshot/sahasra.png" isSmall pinColor="#a855f7" rotation="-1deg" />
            <TeamCard name="Yagnasri Korada" role="Treasurer" img="/headshot/yagna.jpeg" isSmall pinColor="#ec4899" rotation="3deg" />
            <TeamCard name="Rithikha Naresh" role="Program" img="/headshot/rithikha.png" isSmall pinColor="#a855f7" rotation="-2deg" />
            <TeamCard name="Yashasri Korada" role="Volunteer" img="/headshot/yash.jpeg" isSmall pinColor="#ec4899" rotation="1deg" />
            <TeamCard name="SaiAnish Alpuri" role="PR Officer" img="/headshot/anish.png" isSmall pinColor="#a855f7" rotation="2deg" />
            <TeamCard name="Akshaj N." role="Partnership" img="/headshot/akshaj.jpeg" isSmall pinColor="#ec4899" rotation="-3deg" />
            <TeamCard name="DhanaSugani" role="Social Media" img="/headshot/dhana.png" isSmall pinColor="#a855f7" rotation="2deg" />
            <TeamCard name="Sahashyaa S." role="Marketing" img="/headshot/saha.png" isSmall pinColor="#ec4899" rotation="-1deg" />
            <TeamCard name="Asha Annae" role="Outreach" img="/headshot/asha.png" isSmall pinColor="#a855f7" rotation="1deg" />
            <TeamCard name="Thrina M." role="Events" img="/headshot/thrina.png" isSmall pinColor="#ec4899" rotation="-2deg" />
        </div>

        {/* --- FULL TEAM PHOTO SECTION --- */}
        <div className="pt-20">
          <FullTeamPhoto img="headshot/full-team.jpeg" />
        </div>

      </main>
    </div>
  )
}

function FullTeamPhoto({ img }: { img: string }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-black text-[#2d1b2d] uppercase tracking-widest mb-12">The Whole Crew</h2>
      
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 1.8, // Start large (coming at the camera)
          filter: "blur(10px)" 
        }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          filter: "blur(0px)" 
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20, // Lower damping = more "thud" impact
          mass: 1.5 // Adds weight to the animation
        }}
        className="relative p-3 bg-white shadow-2xl border-b-8 border-r-8 border-black/10 max-w-5xl"
      >
        {/* Decorative pins for the large photo */}
        <div className="absolute -top-4 left-10 z-20 w-8 h-8 bg-[#ec4899] rounded-full shadow-lg" />
        <div className="absolute -top-4 right-10 z-20 w-8 h-8 bg-[#a855f7] rounded-full shadow-lg" />
        
        <img 
          src={img} 
          alt="Our full team" 
          className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" 
        />
        
        <div className="mt-4 text-center">
          <p className="font-serif italic text-xl text-[#b36a7a]">Est. 2025 — Building Together</p>
        </div>
      </motion.div>
    </div>
  )
}

function TeamCard({ name, role, img, isSmall, pinColor, rotation }: { name: string, role: string, img: string, isSmall?: boolean, pinColor: string, rotation: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      style={{ rotate: rotation }}
      className="relative group"
    >
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        <div className="absolute top-6 left-2 w-4 h-4 bg-black/20 blur-sm rounded-full" />
        <div 
          className="w-6 h-6 rounded-full shadow-inner relative"
          style={{ 
            backgroundColor: pinColor,
            backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)' 
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/10" />
        </div>
      </div>

      <div className={`bg-[#fdfaff] border-b-4 border-r-4 border-black/10 shadow-2xl transition-all duration-300 group-hover:shadow-purple-400/20 
        ${isSmall ? 'p-2 pb-4 rounded-sm' : 'p-4 pb-10 rounded-sm'}`}
      >
        <div className={`relative overflow-hidden ${isSmall ? 'aspect-square' : 'aspect-[4/5]'} mb-3`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/30 to-[#ec4899]/20 z-10 mix-blend-soft-light group-hover:opacity-0 transition-opacity duration-500" />
          <img 
            src={img} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
        </div>

        <div className="px-1 text-center">
          <h3 className={`${isSmall ? 'text-xs font-bold' : 'text-lg font-black'} text-[#2d1b2d] leading-tight uppercase tracking-tighter`}>
            {name}
          </h3>
          <p className={`${isSmall ? 'text-[8px] mt-0.5' : 'text-[11px] mt-1'} font-black uppercase tracking-[0.2em] text-[#b36a7a]`}>
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function Grid({ cols, children }: { cols: string, children: ReactNode }) {
  return <div className={`grid gap-16 ${cols}`}>{children}</div>
}