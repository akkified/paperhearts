"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import classnames from "classnames"
import LoginForm from "@/components/LoginForm"
import Logout from "@/components/Logout"
import { useState, useRef, useEffect } from "react"
import { useSession } from "next-auth/react"
import Image from "next/image"

const NavBar = () => {
  const currentPath = usePathname()
  const { data: session, status } = useSession()
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const links = [
    { label: "Home", href: "/", id: "home" },
    { label: "About Us", href: "/about", id: "about" },
    { label: "Meet the Team", href: "/team", id: "team" },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen)
  }

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/20">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
          <Image 
            src="/logo.png" 
            alt="PaperHearts Logo" 
            width={100} 
            height={100} 
            className="w-8 h-8 object-cover rounded-sm" 
          />
        </div>
        <span className="text-gray-900 font-semibold text-lg">PaperHearts</span>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center space-x-8">
        {links.map((link) => (
          <li key={link.id}>
            <Link
              className={classnames({
                "text-gray-900 font-medium": link.href === currentPath,
                "text-gray-700": link.href !== currentPath,
                "hover:text-gray-900 transition-colors": true,
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
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        ) : session?.user ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none"
            >
              <Image
                src={session.user.image || "/placeholder.svg?height=32&width=32"}
                alt={session.user.name || "User"}
                width={32}
                height={32}
                className="rounded-full border-2 border-white/20"
              />
              <span className="text-gray-900 text-sm font-medium">{session.user.name}</span>
              <svg
                className={`w-4 h-4 text-gray-600 transition-transform ${isProfileDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Profile Dropdown */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-sm border border-white/30 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <Link
                    href="/donate"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-white/50 transition-colors"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  >
                    Donate
                  </Link>
                  <div className="border-t border-white/30 my-1"></div>
                  <div className="px-4 py-2">
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
      <button className="md:hidden text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-white/20 md:hidden z-40">
          <div className="px-6 py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.id}
                className={classnames({
                  "block text-gray-900 font-medium": link.href === currentPath,
                  "block text-gray-700": link.href !== currentPath,
                  "hover:text-gray-900 transition-colors": true,
                })}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/20">
              {status === "loading" ? (
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              ) : session?.user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Image
                      src={session.user.image || "/placeholder.svg?height=32&width=32"}
                      alt={session.user.name || "User"}
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white/20"
                    />
                    <span className="text-gray-900 font-medium">{session.user.name}</span>
                  </div>
                  <Link
                    href="/donate"
                    className="block text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Donate
                  </Link>
                  <div className="pt-1">
                    <Logout />
                  </div>
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
