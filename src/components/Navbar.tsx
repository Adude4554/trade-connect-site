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
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-md' : 'bg-[#FFF6EF]'}`}
      role="navigation"
      aria-label="Main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-[#CA5502] flex items-center justify-center transition-transform group-hover:scale-105">
              <Wrench className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg lg:text-xl text-[#1D0E03] leading-tight">Trade Connect</span>
              <span className="font-heading text-[10px] lg:text-xs text-[#8E8279] uppercase tracking-widest hidden sm:block">Commercial Contractors</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active = loc.pathname === item.href || (item.href !== '/' && loc.pathname.startsWith(item.href))
              return (
                <Link key={item.href} to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-heading font-medium transition-colors ${active ? 'text-[#CA5502] bg-[#CA5502]/10' : 'text-[#56483E] hover:text-[#1D0E03] hover:bg-black/5'}`}>
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/quote" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#CA5502] text-white text-sm font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-md shadow-[#CA5502]/20">
              Request a Quote
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Link to="/quote" className="px-4 py-2 bg-[#CA5502] text-white text-xs font-heading font-semibold rounded-lg">Quote</Link>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-lg text-[#56483E] hover:text-[#1D0E03] hover:bg-black/5 transition-colors" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#00000010] bg-white shadow-lg">
          <div className="px-4 py-6 space-y-1">
            {nav.map((item) => {
              const active = loc.pathname === item.href
              return (
                <Link key={item.href} to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-heading font-medium transition-colors ${active ? 'text-[#CA5502] bg-[#CA5502]/10' : 'text-[#56483E] hover:text-[#1D0E03] hover:bg-black/5'}`}>
                  {item.label}
                </Link>
              )
            })}
            <div className="pt-4">
              <Link to="/quote" className="block w-full text-center px-5 py-3 bg-[#CA5502] text-white font-heading font-semibold rounded-lg">Request a Quote</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
