"use client"

import { motion } from "framer-motion"

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">

      {/* Decorative bubbles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-pink-300/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-96 right-20 w-56 h-56 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl animate-pulse" />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-28 relative z-10"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Meet the Team ✨
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            The hearts, minds, and creativity behind{" "}
            <span className="font-semibold">PaperHearts</span>.
          </p>
        </div>
      </motion.section>

      {/* Leadership */}
      <Section title="Leadership" subtitle="Vision & direction">
        <Grid cols="md:grid-cols-3">
          <Card name="Eeshasri Alpuri" role="President" img="/headshot/eeshasri.png" />
          <Card name="Amira Vanjaria" role="Vice President" img="/headshot/amira.jpeg" />
          <Card name="Akhil Akella" role="Software Manager" img="/headshot/akhil.png" />
        </Grid>
      </Section>

      {/* Operations */}
      <Section title="Operations" subtitle="Keeping everything running smoothly">
        <Grid cols="md:grid-cols-2 lg:grid-cols-4">
          <Card name="Sahasra Madhu" role="Secretary" img="/headshot/sahasra.png" />
          <Card name="Yagnasri Korada" role="Treasurer" img="/headshot/yagna.jpeg" />
          <Card name="Rithikha Naresh" role="Program Director" img="/headshot/rithikha.png" />
          <Card name="Yashasri Korada" role="Volunteer Coordinator" img="/headshot/yash.jpeg" />
        </Grid>
      </Section>

      {/* Outreach & Media */}
      <Section title="Outreach & Media" subtitle="Community, events, and growth">
        <Grid cols="md:grid-cols-2 lg:grid-cols-4">
          <Card name="SaiAnish Alpuri" role="PR Officer" img="/headshot/anish.png" />
          <Card name="Akshaj Nandanavanam" role="Partnership Officer" img="/headshot/akshaj.jpeg" />
          <Card name="DhanaSugani Sundar" role="Social Media Manager" img="/headshot/dhana.png" />
          <Card name="Sahasyaa Shanmugapandian" role="Marketing & Design Officer" img="/headshot/saha.png" />
          <Card name="Asha Annae" role="Community & Outreach Officer" img="/headshot/asha.png" />
          <Card name="Thrina Maniyendra" role="Event Planner" img="/headshot/thrina.png" />
        </Grid>
      </Section>

    </div>
  )
}

/* ---------- Components ---------- */

function Section({ title, subtitle, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-20 relative z-10"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        {children}
      </div>
    </motion.section>
  )
}

function Grid({ cols, children }) {
  return (
    <div className={`grid gap-10 ${cols} max-w-7xl mx-auto`}>
      {children}
    </div>
  )
}

function Card({ name, role, img }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      className="group bg-white/70 backdrop-blur-lg rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-pink-200 group-hover:ring-purple-300 transition">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-sm font-medium text-purple-600">{role}</p>
    </motion.div>
  )
}
