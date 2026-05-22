"use client"
import { useState } from "react"
import Link from "next/link"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] })

export default function ContactPage() {
  

  return (
    
    <div
      className={`${inter.className} min-h-screen bg-[#080b10] flex flex-col items-center justify-start px-5 py-10 relative`}
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,210,190,0.08) 0%, transparent 60%),
          repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,210,190,0.03) 39px, rgba(0,210,190,0.03) 40px),
          repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,210,190,0.03) 39px, rgba(0,210,190,0.03) 40px)
        `,
      }}
    >

      {/* Internship notice */}
      <div className="bg-secondary border border-cyan-900 py-2 px-4 rounded-xl">
            <h1 className="text-3xl text-cyan-400">Currently looking for internships.</h1>
            <h1 className="text-lg text-white">Internship Period: August - December</h1>
      </div>

      

      <div className="w-full max-w-xl mt-10">

        {/* Header */}
        <div className="mb-12">
          <p className="flex items-center gap-2.5 text-[10px] tracking-[0.2em] uppercase text-cyan-500 font-mono mb-3.5">
            <span className="block w-7 h-px bg-cyan-500" />
            Get in touch
          </p>
          <h1 className="font-mono text-5xl font-bold text-[#e8f0f0] tracking-tight leading-tight">
            Let&apos;s <span className="text-cyan-400">talk.</span>
          </h1>
          <p className="mt-3.5 text-sm font-light text-white/30 leading-relaxed">
            Have a project in mind, a question, or just want to say hi?<br />
            Send me a message and I&apos;ll get back to you.
          </p>
        </div>

        {/* Form */}
        

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent my-10" />

        {/* Alt contact links */}
        <div className="flex gap-7 flex-wrap ">
          {[
            { label: "Email",    value: "sithunaing2005myonyunt@gmail.com",            href: "mailto:sithunaing2005myonyunt@gmail.com" },
            { label: "LinkedIn", value: "linkedin.com/in/si-thu-naing-0326042b0", href: "https://linkedin.com/in/si-thu-naing-0326042b0" },
            { label: "GitHub",   value: "github.com/Si-Thu41",      href: "https://github.com/Si-Thu41" },
            { label: "Phone",   value: "06 53407260",      href: "tel:0653407260" },
            { label: "Facebook",   value: "www.facebook.com/sithunaingmaxwell",      href: "https://www.facebook.com/sithunaingmaxwell/" },
          ].map(({ label, value, href }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-[9px] tracking-[0.18em] uppercase font-mono text-cyan-500/40">{label}</span>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[13px] text-white/40 hover:text-cyan-400 transition-colors duration-200"
              >
                {value}
              </a>
            </div>
          ))}
        </div>
          
      </div>
    </div>
  )
}