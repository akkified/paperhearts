// app/layout.tsx
import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import NavBar from "./NavBar"
import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"
import { SessionProvider } from "next-auth/react"

// --- SEO Metadata for the entire application ---
export const metadata = {
  title: {
    default: "PaperHearts | Handmade Art for Every Heart & Community",
    template: "%s | PaperHearts",
  },
  description:
    "PaperHearts creates unique handmade art and fosters community through engaging activities like origami, rock painting, and more. Join us and make a difference with handmade gifts!",
  keywords: [
    "PaperHearts",
    "handmade art",
    "community art",
    "origami",
    "crafts",
    "art workshops",
    "local community",
    "creative activities",
    "non-profit art",
    "volunteer art",
    "foster care activities",
    "elderly art programs",
    "youth art initiatives",
  ],
  alternates: {
    canonical: "https://paperhearts-azure.vercel.app/",
  },
  openGraph: {
    title: "PaperHearts | Handmade Art for Every Heart & Community",
    description:
      "PaperHearts creates unique handmade art and fosters community through engaging activities like origami, rock painting, and more. Join us and make a difference with handmade gifts!",
    url: "https://paperhearts-azure.vercel.app/",
    siteName: "PaperHearts",
    images: [
      {
        url: "https://placehold.co/1200x630/A0BBE0/FFFFFF?text=Public+Image",
        width: 1200,
        height: 630,
        alt: "PaperHearts Community Art & Connection - Bringing joy through handmade crafts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "PaperHearts", url: "https://paperhearts-azure.vercel.app/" }],
  publisher: "PaperHearts",
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="garden" className="m-0 p-0">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 flex flex-col min-h-screen`}
      >
        <SessionProvider>
          <NavBar />
          <main className="flex-grow m-0 p-0">{children}</main>

          {/* Footer Section */}
          <footer className="bg-transparent text-white py-8 px-6 mt-auto">
            <div className="container mx-auto flex flex-col items-center text-center space-y-4">
              {/* Copyright */}
              <div>
                <p>&copy; {new Date().getFullYear()} PaperHearts. All rights reserved.</p>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link href="/" className="hover:text-purple-300 transition-colors duration-200">
                  Home
                </Link>
                <Link href="/about" className="hover:text-purple-300 transition-colors duration-200">
                  About Us
                </Link>
                <Link href="/team" className="hover:text-purple-300 transition-colors duration-200">
                  Meet the Team
                </Link>
                <Link href="/blog" className="hover:text-purple-300 transition-colors duration-200">
                  Blogs
                </Link>
                <Link href="/volunteer" className="hover:text-purple-300 transition-colors duration-200">
                Volunteer!
                </Link>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/PaperHeartsstudentled/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow PaperHearts on Instagram"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  <Instagram size={24} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/company/PaperHearts-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow PaperHearts on LinkedIn"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  <Linkedin size={24} aria-hidden="true" />
                </a>
                <a
                  href="mailto:paperhearts.studentled@gmail.com"
                  aria-label="Email PaperHearts"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  <Mail size={24} aria-hidden="true" />
                </a>
              </div>
            </div>
          </footer>
        </SessionProvider>
      </body>
    </html>
  )
}
