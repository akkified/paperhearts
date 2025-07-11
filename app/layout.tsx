import type React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { SessionProvider } from "next-auth/react";
import { Instagram, Linkedin, Mail } from "lucide-react"; // Import Mail icon

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 flex flex-col min-h-screen`}
      >
        <SessionProvider>
          <NavBar />
          <main className="flex-grow m-0 p-0">{children}</main> {/* flex-grow makes main take available space */}

          {/* Footer Section */}
          <footer className="bg-transparent text-white py-8 px-6 mt-auto">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              {/* Copyright */}
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p>&copy; {new Date().getFullYear()} Paperhearts. All rights reserved.</p>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-4 md:mb-0">
                <a href="/" className="hover:text-purple-300 transition-colors duration-200">Home</a>
                <a href="/about" className="hover:text-purple-300 transition-colors duration-200">About Us</a>
                <a href="/team" className="hover:text-purple-300 transition-colors duration-200">Meet the Team</a>
                {/*<a href="/privacy" className="hover:text-purple-300 transition-colors duration-200">Privacy Policy</a>*/}
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/paperheartsstudentled/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/paperhearts-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                {/* Email Button */}
                <a
                  href="mailto:akki.akella@gmail.com"
                  target="_blank"
                  aria-label="Email Us"
                  className="hover:text-purple-300 transition-colors duration-200"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
}
