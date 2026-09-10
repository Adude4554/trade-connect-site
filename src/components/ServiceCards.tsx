import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Zap, Trash2, Hammer } from 'lucide-react'
import { services } from '../data'

const icons: Record<string, React.ReactNode> = {
  'structural-maintenance': <Building2 className="w-7 h-7" />,
  thermography: <Zap className="w-7 h-7" />,
  demolition: <Trash2 className="w-7 h-7" />,
  'commercial-cabinetry': <Hammer className="w-7 h-7" />,
}

export function ServiceCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-semibold uppercase tracking-wider mb-4">What We Do</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Our Services</h2>
          </div>
          <Link to="/services" className="mt-4 lg:mt-0 inline-flex items-center gap-2 text-brand text-sm font-semibold hover:underline">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link key={s.id} to={`/services/${s.slug}`} className="group block p-6 lg:p-8 rounded-xl bg-zinc-950 border border-border hover:border-brand/40 transition-all duration-300 hover:shadow-lg hover:shadow-brand/5">
              <div className="w-14 h-14 rounded-xl bg-brand-light border border-brand/20 flex items-center justify-center text-brand mb-5 group-hover:bg-brand/20 group-hover:scale-105 transition-all duration-300">
                {icons[s.id] || <Building2 className="w-7 h-7" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">{s.title}</h3>
              <p className="text-sm text-dim leading-relaxed mb-5">{s.desc}</p>
              <div className="flex items-center gap-2 text-brand text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
