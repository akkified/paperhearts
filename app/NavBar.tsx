'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BsEnvelopePaperHeartFill } from 'react-icons/bs'
import classnames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname()

  const links = [
    { label: "Home", href: "/", id: "home" },
    { label: "About Us", href: "/about", id: "about" },
    { label: "Meet the Team", href: "/team", id: "team" },
    { label: "Login", href: "/auth", id: "login" },
  ]

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BsEnvelopePaperHeartFill />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.id}
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar