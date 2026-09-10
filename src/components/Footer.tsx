import { Link } from 'react-router-dom'
import { Wrench, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { company, nav, services } from '../data'

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-semibold text-lg text-white">Trade Connect</span>
            </Link>
            <p className="text-sm text-dim leading-relaxed mb-5">
              Commercial maintenance, renovation, demolition, thermography and construction services for businesses across Eastern Ontario.
            </p>
            <Link to="/quote" className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-brand-hover transition-colors">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}><Link to={item.href} className="text-sm text-dim hover:text-brand transition-colors">{item.label}</Link></li>
              ))}
              <li><Link to="/quote" className="text-sm text-dim hover:text-brand transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}><Link to={`/services/${s.slug}`} className="text-sm text-dim hover:text-brand transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${company.email}`} className="flex items-start gap-3 text-sm text-dim hover:text-brand transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />{company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-dim">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />{company.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-dim">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />{company.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-muted hover:text-brand transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-muted hover:text-brand transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
