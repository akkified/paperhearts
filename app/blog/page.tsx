"use client"

import { useState } from "react"
import { blogArticles, type BlogArticle } from "@/app/data/blog-articles"
import { Calendar, Clock, User, X } from "lucide-react"
import Script from "next/script"

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(blogArticles.map((article) => article.category)))]

  // Filter articles by category
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

      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">PaperHearts Blog</h1>
            <p className="text-lg text-black/90 max-w-2xl mx-auto text-pretty">
              Stories, tutorials, and updates from our community of makers and volunteers
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-white text-purple-600 shadow-lg"
                    : "bg-white/20 text-black hover:bg-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Article Image */}
                {article.imageUrl && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                    {article.category}
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-200 text-balance">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed text-pretty">{article.excerpt}</p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{formatDate(article.date)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Article Modal */}
          {selectedArticle && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">
                      {selectedArticle.category}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{selectedArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{formatDate(selectedArticle.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{selectedArticle.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="overflow-auto max-h-[calc(90vh-120px)]">
                  {/* Article Image */}
                  {selectedArticle.imageUrl && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={selectedArticle.imageUrl || "/placeholder.svg"}
                        alt={selectedArticle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Article Title */}
                    <h1 className="text-3xl font-bold text-gray-800 mb-4 text-balance">{selectedArticle.title}</h1>

                    {/* Article Content */}
                    <div
                      className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
