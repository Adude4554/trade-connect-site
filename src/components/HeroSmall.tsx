import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export function HeroSmall({ title, desc, crumbs }: { title: string; desc?: string; crumbs?: { label: string; href?: string }[] }) {
  return (
    <section className="relative py-16 lg:py-24 bg-surface/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(200,65,30,0.06)_0%,transparent_60%)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-muted mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand transition-colors">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                {c.href ? <Link to={c.href} className="hover:text-brand transition-colors">{c.label}</Link> : <span className="text-dim">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">{title}</h1>
        {desc && <p className="text-lg text-dim max-w-2xl leading-relaxed">{desc}</p>}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
    </section>
  )
}
