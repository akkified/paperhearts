import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import NavBar from "./NavBar"
import { SessionProvider } from "next-auth/react"

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400`}
      >
        <SessionProvider>
          <NavBar />
          <main className="m-0 p-0">{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}
