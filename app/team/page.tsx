"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export default function Team() {
  return (
    <div className="min-h-screen pb-40 relative overflow-hidden" 
      style={{
        // A "Lavender Corkboard" texture created with CSS
        backgroundColor: "#eaddf2",
        backgroundImage: `radial-gradient(#d8b4fe 1px, transparent 0)`,
        backgroundSize: "4px 4px"
      }}>
      
      {/* Soft background glows to keep the pink/purple theme alive */}
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
            <TeamCard name="Sahasyaa S." role="Marketing" img="/headshot/saha.png" isSmall pinColor="#ec4899" rotation="-1deg" />
            <TeamCard name="Asha Annae" role="Outreach" img="/headshot/asha.png" isSmall pinColor="#a855f7" rotation="1deg" />
            <TeamCard name="Thrina M." role="Events" img="/headshot/thrina.png" isSmall pinColor="#ec4899" rotation="-2deg" />
        </div>

      </main>
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
      {/* 3D Push Pin */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
        {/* Pin Shadow */}
        <div className="absolute top-6 left-2 w-4 h-4 bg-black/20 blur-sm rounded-full" />
        {/* Pin Head */}
        <div 
          className="w-6 h-6 rounded-full shadow-inner relative"
          style={{ 
            backgroundColor: pinColor,
            backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)' 
          }}
        >
          {/* Pin Body (the little neck) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black/10" />
        </div>
      </div>

      {/* Card Content */}
      <div className={`bg-[#fdfaff] border-b-4 border-r-4 border-black/10 shadow-2xl transition-all duration-300 group-hover:shadow-purple-400/20 
        ${isSmall ? 'p-2 pb-4 rounded-sm' : 'p-4 pb-10 rounded-sm'}`}
      >
        <div className={`relative overflow-hidden ${isSmall ? 'aspect-square' : 'aspect-[4/5]'} mb-3`}>
          
          {/* Purplish-Pink Tint Overlay */}
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