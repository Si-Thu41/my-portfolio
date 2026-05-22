"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  useEffect(() => {
    // If not on the home page, clear active section
    if (pathname !== "/") {
      setActiveSection("")
      return
    }

    const sections = ["home", "about", "projects", "certificates"]

    // On returning to "/", check hash or default to "home"
    const hash = window.location.hash.replace("#", "")
    if (hash && sections.includes(hash)) {
      setActiveSection(hash)
      // Scroll to the section in case the browser didn't
      document.getElementById(hash)?.scrollIntoView()
    } else {
      setActiveSection("home")
    }

    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.5 }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach((obs) => obs?.disconnect())
  }, [pathname]) // 👈 re-run when pathname changes

  const links = [
    { href: "/#home",         label: "Home",         id: "home"         },
    { href: "/#about",        label: "About Me",     id: "about"        },
    { href: "/#projects",     label: "Projects",     id: "projects"     },
    { href: "/#certificates", label: "Certificates", id: "certificates" },
  ]

  return (
    <nav className="bg-secondary py-4 pl-30 sticky top-0 z-50 flex items-center">
      <div className="w-7/10 grid grid-cols-4 gap-3 text-xl font-inter">
        {links.map(({ href, label, id }) => (
          <Link
            key={id}
            href={href}
            className={`transition-colors duration-200 ${inter.className} ${
              activeSection === id
                ? "text-text text-shadow-md text-shadow-cyan-400"
                : "text-cyan-600 hover:text-cyan-400"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        className={`transition-colors duration-200 ${inter.className} text-white bg-green-700 py-1 px-2 rounded-xl absolute right-30 `}
      >
        Contact Me
      </Link>
    </nav>
  )
}