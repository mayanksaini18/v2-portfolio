import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
// // import { Onest } from "next/font/google"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"

// // Initialize fonts
// const geistSans = GeistSans({ variable: "--font-geist-sans" }) // Geist Sans for primary text
// const geistMono = GeistMono({ variable: "--font-geist-mono" }) // Geist Mono for monospaced text

// // Initialize Onest font with weights 500 and 700
// const onest = Onest({
//   subsets: ["latin"],
//   weight: ["500", "700"],
//   variable: "--font-onest",
// })

export const metadata: Metadata = {
  title: "Mayank Saini  Full-Stack Web Developer | Portfolio",
  description:
    "Creative and innovative web developer specializing in building user-centric web applications. Expertise in React, Next.js, Node.js, and modern web technologies.",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ fontSize: "12px" }}>
      <body>{children}</body>
    </html>
  )
}
