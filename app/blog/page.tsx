"use client"

import { useState } from "react"
import { blogArticles, type BlogArticle } from "@/app/data/blog-articles"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Script from "next/script"

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...Array.from(new Set(blogArticles.map((article) => article.category)))]

  const filteredArticles =
    selectedCategory === "All" ? blogArticles : blogArticles.filter((article) => article.category === selectedCategory)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <>
      <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />

      {/* Main Container - Updated with Radial Dots */}
      <div className="min-h-screen pb-32 px-4 relative overflow-hidden"
        style={{
          backgroundColor: "#eaddf2",
          backgroundImage: `radial-gradient(#d8b4fe 1px, transparent 0)`,
          backgroundSize: "4px 4px"
        }}>
        
        {/* 1. The Paper Texture Overlay (Consistent across all pages) */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] z-50" />

        {/* 2. Editorial Background Glows (Layered over the dots) */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#fce7f3] blur-[120px] opacity-40" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-[#ede9fe] blur-[150px] opacity-50" />
        </div>

        <div className="max-w-6xl mx-auto pt-24 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#b36a7a] mb-4 block">The Journal</span>
            <h1 className="text-6xl md:text-8xl font-black text-[#3a223a] mb-6 tracking-tighter uppercase leading-[0.85]">
              PAPER<span className="text-white italic drop-shadow-sm">HEARTS</span> BLOG
            </h1>
            <p className="text-[#3a223a] text-lg font-bold max-w-xl mx-auto italic">
              Stories, tutorials, and updates from our community of makers.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  selectedCategory === category
                    ? "bg-[#3a223a] text-white border-[#3a223a] shadow-xl"
                    : "bg-white/60 backdrop-blur-sm text-[#3a223a] border-purple-200 hover:border-[#3a223a]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredArticles.map((article) => (
              <motion.article
                layout
                key={article.id}
                className="group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Image Container as Pinned Art */}
                {article.imageUrl && (
                  <div className="aspect-[4/5] overflow-hidden mb-6 bg-white p-3 shadow-lg group-hover:shadow-2xl transition-all duration-500 -rotate-1 group-hover:rotate-0">
                    <img
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border border-purple-50"
                    />
                  </div>
                )}

                <div className="space-y-3 px-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#b36a7a]">
                    {article.category}
                  </span>
                  <h2 className="text-xl font-black text-[#3a223a] tracking-tight leading-tight group-hover:text-pink-600 transition-colors uppercase">
                    {article.title}
                  </h2>
                  <div className="h-[2px] w-8 bg-[#3a223a] group-hover:w-full transition-all duration-500" />
                  <p className="text-[#3a223a]/60 text-[10px] font-black uppercase tracking-widest">
                    {formatDate(article.date)} — {article.readTime} min read
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Modal - The Content "Sheet" */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#3a223a]/80 backdrop-blur-md flex items-center justify-center p-4 z-[100]"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-sm relative"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 z-50 p-2 bg-white rounded-full text-[#3a223a] shadow-lg hover:scale-110 transition-transform border border-purple-100"
              >
                <X size={20} />
              </button>

              <div className="overflow-auto max-h-[90vh]">
                <div className="p-8 md:p-16">
                  <header className="mb-12">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#b36a7a] mb-4">
                      {selectedArticle.category} • Written by {selectedArticle.author}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-[#3a223a] mb-6 tracking-tighter uppercase leading-none italic">
                      {selectedArticle.title}
                    </h1>
                    <div className="h-1 w-20 bg-pink-500" />
                  </header>
                  
                  <div
                    className="prose prose-pink max-w-none text-[#3a223a] leading-relaxed font-medium text-lg"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}