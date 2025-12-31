"use client";
import type React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Link from "next/link";
import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="garden" className="m-0 p-0">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 flex flex-col min-h-screen selection:bg-pink-200 selection:text-[#3a223a]`}
        style={{
          backgroundColor: "#eaddf2",
          /* Macro grid for a blueprint/scrapbook feel */
          backgroundImage: `
            radial-gradient(#d1b3e0 1.5px, transparent 0),
            linear-gradient(to right, rgba(209, 179, 224, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(209, 179, 224, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px, 32px 32px, 32px 32px",
        }}
      >
        <SessionProvider>
          {/* Grainy Film Overlay */}
          <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-50" />
          
          {/* Subtle Corner Vignette */}
          <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(58,34,58,0.05)_100%)] z-0" />

          <NavBar />
          
          <main className="flex-grow m-0 p-0 relative z-10">
            {children}
          </main>

          {/* Asymmetrical "Zine" Style Footer */}
          <footer className="bg-[#3a223a] text-[#ede9fe] pt-24 pb-12 px-8 mt-auto relative overflow-hidden">
            {/* Massive Background Text Decoration */}
            <div className="absolute top-0 right-0 text-[15vw] font-black text-white/[0.03] leading-none select-none pointer-events-none translate-y-[-20%]">
              HEARTS
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
              
              {/* Column 1: Huge Brand Statement */}
              <div className="md:col-span-6 space-y-6">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.8]">
                  PAPER<br/>
                  <span className="text-pink-400 italic">HEARTS</span>
                </h2>
                <p className="max-w-sm text-sm font-medium leading-relaxed opacity-70 italic">
                  A student-led movement weaving community through the tactile beauty of handmade art.
                </p>
              </div>

              {/* Column 2: Navigation (Vertical Stack) */}
              <div className="md:col-span-3 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-400">Directory</span>
                <nav className="flex flex-col space-y-2 text-xl font-bold italic tracking-tight">
                  {['Home', 'About', 'Team', 'Blog', 'Volunteer'].map((item) => (
                    <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="group flex items-center gap-2 hover:text-pink-400 transition-all">
                      {item} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Column 3: Socials & Contact */}
              <div className="md:col-span-3 space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-400 mb-4 block">Connect</span>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/paperheartsstudentled/" className="p-3 bg-white/5 hover:bg-pink-400 hover:text-[#3a223a] transition-all rounded-full"><Instagram size={20} /></a>
                    <a href="https://linkedin.com/company/paperhearts-inc" className="p-3 bg-white/5 hover:bg-pink-400 hover:text-[#3a223a] transition-all rounded-full"><Linkedin size={20} /></a>
                    <a href="mailto:paperhearts.studentled@gmail.com" className="p-3 bg-white/5 hover:bg-pink-400 hover:text-[#3a223a] transition-all rounded-full"><Mail size={20} /></a>
                  </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest leading-loose">
                  paperhearts.studentled@gmail.com <br/>
                  Georgia, USA
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black uppercase tracking-[0.3em] opacity-40">
              <div>© {new Date().getFullYear()} PaperHearts Student-Led Org</div>
              <div>501(c)(3) Pending Status</div>
            </div>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}