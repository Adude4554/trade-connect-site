import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(200,65,30,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-light border border-brand/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-xs font-medium text-brand uppercase tracking-wider">Eastern Ontario Commercial Contractors</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Commercial Maintenance & Construction{' '}
            <span className="text-brand">Done Right.</span>
          </h1>

          <p className="text-lg lg:text-xl text-dim leading-relaxed mb-10 max-w-2xl">
            Reliable commercial maintenance, renovation, demolition, thermography and construction services for businesses across Eastern Ontario.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quote" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition-all duration-200 shadow-lg shadow-brand/25 hover:shadow-brand/40">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
              View Our Services <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
    </section>
  )
}
