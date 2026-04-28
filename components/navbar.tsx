"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],  // pick the weights you need
})
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"]

    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.5 } // 50% of section must be visible
      )

      observer.observe(el)
      return observer
    })

    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  const links = [
    { href: "#home",     label: "Home",     id: "home"     },
    { href: "#about",    label: "About Me", id: "about"    },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact",  label: "Contact",  id: "contact"  },
  ]

  return (
    <nav className="bg-secondary py-4 pl-30 sticky top-0 z-50">
      <div className="w-7/10 grid grid-cols-4 gap-3  text-xl font-inter">
        {links.map(({ href, label, id }) => (
          <Link
            key={id}
            href={href}
            className={`transition-colors duration-200 ${inter.className} ${
              activeSection === id ? "text-text  text-shadow-md text-shadow-cyan-400" : "text-cyan-600 hover:text-cyan-400"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}