import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'
import { company } from '../data'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [done, setDone] = useState(false)
  const [errs, setErrs] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrs(e); return }
    setErrs({})
    setDone(true)
  }

  const set = (k: string, v: string) => {
    setForm((p) => ({ ...p, [k]: v }))
    if (errs[k]) setErrs((p) => { const n = { ...p }; delete n[k]; return n })
  }

  return (
    <div className="min-h-screen">
      <HeroSmall title="Contact Us" desc="Get in touch with our team. We're here to help with your commercial projects." />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white mb-6">Get in Touch</h2>

              <a href={`mailto:${company.email}`} className="flex items-start gap-4 p-5 rounded-xl bg-surface border border-border hover:border-brand/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-brand-light border border-brand/20 flex items-center justify-center text-brand shrink-0 group-hover:bg-brand/20 transition-colors"><Mail className="w-5 h-5" /></div>
                <div><h3 className="text-sm font-bold text-white mb-1">Email</h3><p className="text-sm text-brand">{company.email}</p></div>
              </a>

              <div className="p-5 rounded-xl bg-surface border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-light border border-brand/20 flex items-center justify-center text-brand shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div><h3 className="text-sm font-bold text-white mb-1">Location</h3><p className="text-sm text-dim">{company.address}</p></div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-surface border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-light border border-brand/20 flex items-center justify-center text-brand shrink-0"><Clock className="w-5 h-5" /></div>
                  <div><h3 className="text-sm font-bold text-white mb-1">Office Hours</h3><p className="text-sm text-dim">{company.hours}</p><p className="text-sm text-dim">Closed weekends</p></div>
                </div>
              </div>

              <Link to="/quote" className="block w-full text-center px-5 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition-colors">Request a Quote</Link>
            </div>

            <div className="lg:col-span-2">
              <div className="p-6 lg:p-8 rounded-xl bg-surface border border-border">
                <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
                {done ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                    <p className="text-dim mb-6">Thank you for contacting us. We'll respond promptly.</p>
                    <button onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }} className="text-brand text-sm font-semibold hover:underline">Send another</button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-name" className="block text-sm font-medium text-white mb-2">Name <span className="text-brand">*</span></label>
                        <input id="c-name" value={form.name} onChange={(e) => set('name', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg bg-zinc-950 border text-white text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors ${errs.name ? 'border-red-500' : 'border-border'}`} placeholder="Your name" />
                        {errs.name && <p className="mt-1 text-xs text-red-400">{errs.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="c-email" className="block text-sm font-medium text-white mb-2">Email <span className="text-brand">*</span></label>
                        <input id="c-email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg bg-zinc-950 border text-white text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors ${errs.email ? 'border-red-500' : 'border-border'}`} placeholder="your@email.com" />
                        {errs.email && <p className="mt-1 text-xs text-red-400">{errs.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-phone" className="block text-sm font-medium text-white mb-2">Phone</label>
                        <input id="c-phone" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-border text-white text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors" placeholder="(123) 456-7890" />
                      </div>
                      <div>
                        <label htmlFor="c-subject" className="block text-sm font-medium text-white mb-2">Subject</label>
                        <input id="c-subject" value={form.subject} onChange={(e) => set('subject', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-border text-white text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors" placeholder="How can we help?" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-msg" className="block text-sm font-medium text-white mb-2">Message <span className="text-brand">*</span></label>
                      <textarea id="c-msg" rows={5} value={form.message} onChange={(e) => set('message', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg bg-zinc-950 border text-white text-sm placeholder-muted focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors resize-none ${errs.message ? 'border-red-500' : 'border-border'}`} placeholder="Tell us about your project..." />
                      {errs.message && <p className="mt-1 text-xs text-red-400">{errs.message}</p>}
                    </div>
                    <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition-colors">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
