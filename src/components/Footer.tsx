import { Link } from 'react-router-dom'
import { Mail, MapPin, Clock, Send } from 'lucide-react'
import { company, nav, services } from '../data'
import { useState } from 'react'

export function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setSubmitted(true)
  }

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1920&q=80"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#CA5502] flex items-center justify-center">
                  <span className="font-heading font-bold text-white text-sm">TC</span>
                </div>
                <span className="font-heading font-bold text-lg text-white">Trade Connect</span>
              </Link>
              <p className="text-sm text-white/70 leading-relaxed mb-5">
                Commercial maintenance, renovation, demolition, thermography and construction services for businesses across Eastern Ontario.
              </p>
              <div className="space-y-2.5">
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-sm text-white/70 hover:text-[#CA5502] transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />{company.email}
                </a>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="w-4 h-4 shrink-0" />{company.address}
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Clock className="w-4 h-4 shrink-0" />{company.hours}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-5">Navigation</h4>
              <ul className="space-y-3">
                {nav.map((item) => (
                  <li key={item.href}><Link to={item.href} className="text-sm text-white/70 hover:text-[#CA5502] transition-colors">{item.label}</Link></li>
                ))}
                <li><Link to="/quote" className="text-sm text-white/70 hover:text-[#CA5502] transition-colors">Request a Quote</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-5">Services</h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.id}><Link to={`/services/${s.slug}`} className="text-sm text-white/70 hover:text-[#CA5502] transition-colors">{s.title}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-5">Send a Message</h4>
              {submitted ? (
                <div className="bg-white/10 rounded-xl p-6 text-center border border-white/10">
                  <p className="text-white font-heading font-semibold mb-2">Thanks for submitting!</p>
                  <p className="text-white/60 text-sm mb-3">We'll get back to you soon.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }} className="text-[#CA5502] text-sm font-heading font-semibold hover:underline">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#CA5502] focus:border-transparent transition-colors"
                    placeholder="Your name"
                    required
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#CA5502] focus:border-transparent transition-colors"
                    placeholder="Your email"
                    required
                  />
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#CA5502] focus:border-transparent transition-colors resize-none"
                    placeholder="Your message"
                    required
                  />
                  <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#CA5502] text-white text-sm font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors">
                    <Send className="w-3.5 h-3.5" /> Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-xs text-white/50 hover:text-white/70 transition-colors">Home</Link>
              <Link to="/about" className="text-xs text-white/50 hover:text-white/70 transition-colors">About</Link>
              <Link to="/contact" className="text-xs text-white/50 hover:text-white/70 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
