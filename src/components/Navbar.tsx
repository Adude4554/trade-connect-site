import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Wrench } from 'lucide-react'
import { nav } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()

  useEffect(() => { setOpen(false) }, [loc.pathname])
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-[#FFF8F3]/95 backdrop-blur-sm'}`}
      role="navigation"
      aria-label="Main"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-[#CA5502] to-[#A84502] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#CA5502]/30">
              <Wrench className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg lg:text-xl text-[#1A1A2E] leading-tight">Trade Connect</span>
              <span className="font-heading text-[10px] lg:text-xs text-[#8E8279] uppercase tracking-widest hidden sm:block">Commercial Contractors</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => {
              const active = loc.pathname === item.href || (item.href !== '/' && loc.pathname.startsWith(item.href))
              return (
                <Link key={item.href} to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-heading font-medium transition-all duration-300 ${active ? 'text-[#CA5502] bg-[#CA5502]/10' : 'text-[#4A4A68] hover:text-[#1A1A2E] hover:bg-black/5'}`}>
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/quote" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#CA5502] to-[#A84502] text-white text-sm font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-[#CA5502]/25 transition-all duration-300 btn-shine">
              Request a Quote
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Link to="/quote" className="px-4 py-2 bg-[#CA5502] text-white text-xs font-heading font-semibold rounded-lg shadow-sm shadow-[#CA5502]/20">Quote</Link>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-lg text-[#4A4A68] hover:text-[#1A1A2E] hover:bg-black/5 transition-colors" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#00000008] bg-white shadow-xl animate-fade-in">
          <div className="px-5 py-6 space-y-1">
            {nav.map((item) => {
              const active = loc.pathname === item.href
              return (
                <Link key={item.href} to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-heading font-medium transition-all duration-300 ${active ? 'text-[#CA5502] bg-[#CA5502]/10' : 'text-[#4A4A68] hover:text-[#1A1A2E] hover:bg-black/5'}`}>
                  {item.label}
                </Link>
              )
            })}
            <div className="pt-4">
              <Link to="/quote" className="block w-full text-center px-5 py-3 bg-gradient-to-r from-[#CA5502] to-[#A84502] text-white font-heading font-semibold rounded-lg shadow-md shadow-[#CA5502]/20 btn-shine">Request a Quote</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
