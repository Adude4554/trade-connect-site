import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Wrench, ChevronRight } from 'lucide-react'
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
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10' : 'bg-transparent'}`}
      role="navigation"
      aria-label="Main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-brand flex items-center justify-center transition-transform group-hover:scale-105">
              <Wrench className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg lg:text-xl text-white leading-tight tracking-tight">Trade Connect</span>
              <span className="text-[10px] lg:text-xs text-muted uppercase tracking-widest hidden sm:block">Commercial Contractors</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const active = loc.pathname === item.href || (item.href !== '/' && loc.pathname.startsWith(item.href))
              return (
                <Link key={item.href} to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active ? 'text-brand bg-brand-light' : 'text-dim hover:text-white hover:bg-white/5'}`}>
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/quote" className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-brand-hover transition-colors shadow-lg shadow-brand/20">
              Request a Quote <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Link to="/quote" className="px-4 py-2 bg-brand text-white text-xs font-semibold rounded-lg">Quote</Link>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-lg text-dim hover:text-white hover:bg-white/10 transition-colors" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-zinc-950/98 backdrop-blur-xl">
          <div className="px-4 py-6 space-y-1">
            {nav.map((item) => {
              const active = loc.pathname === item.href
              return (
                <Link key={item.href} to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${active ? 'text-brand bg-brand-light' : 'text-dim hover:text-white hover:bg-white/5'}`}>
                  {item.label}
                </Link>
              )
            })}
            <div className="pt-4">
              <Link to="/quote" className="block w-full text-center px-5 py-3 bg-brand text-white font-semibold rounded-lg">Request a Quote</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
