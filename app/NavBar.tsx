"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import classnames from "classnames"
import LoginForm from "@/components/LoginForm"
import Logout from "@/components/Logout"
import { useState, useRef, useEffect } from "react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { ChevronDown, Menu, X, Heart } from "lucide-react"

const NavBar = () => {
  const currentPath = usePathname()
  const { data: session, status } = useSession()
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const links = [
    { label: "Home", href: "/", id: "home" },
    { label: "About", href: "/about", id: "about" },
    { label: "Team", href: "/team", id: "team" },
    { label: "Blog", href: "/blog", id: "blog" },
    { label: "Volunteer!", href: "/volunteer", id: "volunteer" },
  ]

  return (
    <nav className="sticky top-0 w-full z-[100] bg-[#f8f5ff]/90 backdrop-blur-md border-b border-purple-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO SECTION - No Background Box */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 transition-transform group-hover:scale-110 group-hover:-rotate-3">
            <Image
              src="/logo.png"
              alt="PaperHearts Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-[#3a223a] font-black text-xl uppercase tracking-tighter italic">
            Paper<span className="text-pink-500">Hearts</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                className={classnames({
                  "text-[#3a223a] font-black underline decoration-pink-500 decoration-2 underline-offset-4": link.href === currentPath,
                  "text-[#3a223a]/60 font-bold hover:text-[#3a223a]": link.href !== currentPath,
                  "text-[11px] uppercase tracking-[0.2em] transition-all": true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Profile/Login Section */}
        <div className="hidden md:flex items-center">
          {status === "loading" ? (
            <div className="w-8 h-8 bg-purple-100 rounded-full animate-pulse" />
          ) : session?.user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-white transition-all border border-transparent hover:border-purple-100 focus:outline-none"
              >
                <div className="relative w-8 h-8">
                  <Image
                    src={session.user.image || "/placeholder.svg"}
                    alt="User"
                    fill
                    className="rounded-full border-2 border-pink-500 object-cover"
                  />
                </div>
                <span className="text-[#3a223a] text-xs font-black uppercase tracking-widest">
                  {session.user.name?.split(' ')[0]}
                </span>
                <ChevronDown size={14} className={classnames("transition-transform text-gray-400", {"rotate-180": isProfileDropdownOpen})} />
              </button>

              {/* Profile Dropdown - Highest Z-index layer */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white border-2 border-[#3a223a] shadow-[8px_8px_0px_0px_rgba(58,34,58,0.1)] z-[120] rounded-sm overflow-hidden">
                  <div className="py-1">
                    <Link
                      href="/donate"
                      className="flex items-center justify-between px-4 py-3 text-[10px] font-black uppercase tracking-widest text-[#3a223a] hover:bg-pink-50 transition-colors"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      Make a Donation
                      <Heart size={14} className="text-pink-500 fill-pink-500" />
                    </Link>
                    <div className="border-t border-purple-100" />
                    <div className="px-4 py-3 hover:bg-gray-50 transition-colors">
                      <Logout />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <LoginForm />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#3a223a]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[73px] bg-white border-b-4 border-[#3a223a] md:hidden z-[100] p-8 shadow-2xl">
          <div className="flex flex-col space-y-6">
            {links.map((link) => (
              <Link
                key={link.id}
                className={classnames({
                  "text-[#3a223a] font-black text-2xl italic": link.href === currentPath,
                  "text-[#3a223a]/40 font-black text-2xl italic": link.href !== currentPath,
                  "uppercase tracking-tighter": true,
                })}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 border-t border-purple-100">
              {session?.user ? (
                <div className="flex flex-col gap-6">
                   <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                      <Image
                        src={session.user.image || "/placeholder.svg"}
                        alt="User"
                        fill
                        className="rounded-full border-2 border-pink-500 object-cover"
                      />
                    </div>
                    <span className="text-[#3a223a] font-black uppercase tracking-widest text-sm">{session.user.name}</span>
                  </div>
                  <Link href="/donate" className="flex items-center gap-2 text-pink-500 font-black uppercase tracking-widest text-sm" onClick={() => setIsMobileMenuOpen(false)}>
                    <Heart size={16} className="fill-pink-500" /> Donate
                  </Link>
                  <Logout />
                </div>
              ) : (
                <LoginForm />
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar