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
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-5">
              <h2 className="font-heading text-2xl font-extrabold text-[#1D0E03] mb-6">Get in Touch</h2>

              <a href={`mailto:${company.email}`} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-[#00000008] hover:border-[#CA5502]/30 transition-colors group shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#CA5502]/10 border border-[#CA5502]/20 flex items-center justify-center text-[#CA5502] shrink-0 group-hover:bg-[#CA5502]/20 transition-colors"><Mail className="w-5 h-5" /></div>
                <div><h3 className="text-sm font-heading font-bold text-[#1D0E03] mb-1">Email</h3><p className="text-sm text-[#CA5502] font-medium">{company.email}</p></div>
              </a>

              <div className="p-5 rounded-xl bg-white border border-[#00000008] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#CA5502]/10 border border-[#CA5502]/20 flex items-center justify-center text-[#CA5502] shrink-0"><MapPin className="w-5 h-5" /></div>
                  <div><h3 className="text-sm font-heading font-bold text-[#1D0E03] mb-1">Location</h3><p className="text-sm text-[#56483E]">{company.address}</p></div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#00000008] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#CA5502]/10 border border-[#CA5502]/20 flex items-center justify-center text-[#CA5502] shrink-0"><Clock className="w-5 h-5" /></div>
                  <div><h3 className="text-sm font-heading font-bold text-[#1D0E03] mb-1">Office Hours</h3><p className="text-sm text-[#56483E]">{company.hours}</p><p className="text-sm text-[#56483E]">Closed weekends</p></div>
                </div>
              </div>

              <Link to="/quote" className="block w-full text-center px-5 py-3 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-md shadow-[#CA5502]/20 text-sm">Request a Quote</Link>
            </div>

            <div className="lg:col-span-2">
              <div className="p-6 lg:p-8 rounded-xl bg-white border border-[#00000008] shadow-sm">
                <h2 className="font-heading text-xl font-bold text-[#1D0E03] mb-6">Send a Message</h2>
                {done ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-bold text-[#1D0E03] mb-2">Message Sent</h3>
                    <p className="text-[#56483E] mb-6">Thank you for contacting us. We'll respond promptly.</p>
                    <button onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }} className="text-[#CA5502] text-sm font-heading font-semibold hover:underline">Send another</button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-name" className="block text-sm font-heading font-medium text-[#1D0E03] mb-2">Name <span className="text-[#CA5502]">*</span></label>
                        <input id="c-name" value={form.name} onChange={(e) => set('name', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg bg-[#FFF6EF] border text-[#1D0E03] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-colors ${errs.name ? 'border-red-500' : 'border-[#00000012]'}`} placeholder="Your name" />
                        {errs.name && <p className="mt-1 text-xs text-red-500">{errs.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="c-email" className="block text-sm font-heading font-medium text-[#1D0E03] mb-2">Email <span className="text-[#CA5502]">*</span></label>
                        <input id="c-email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg bg-[#FFF6EF] border text-[#1D0E03] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-colors ${errs.email ? 'border-red-500' : 'border-[#00000012]'}`} placeholder="your@email.com" />
                        {errs.email && <p className="mt-1 text-xs text-red-500">{errs.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="c-phone" className="block text-sm font-heading font-medium text-[#1D0E03] mb-2">Phone</label>
                        <input id="c-phone" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-[#FFF6EF] border border-[#00000012] text-[#1D0E03] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-colors" placeholder="(123) 456-7890" />
                      </div>
                      <div>
                        <label htmlFor="c-subject" className="block text-sm font-heading font-medium text-[#1D0E03] mb-2">Subject</label>
                        <input id="c-subject" value={form.subject} onChange={(e) => set('subject', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-[#FFF6EF] border border-[#00000012] text-[#1D0E03] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-colors" placeholder="How can we help?" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="c-msg" className="block text-sm font-heading font-medium text-[#1D0E03] mb-2">Message <span className="text-[#CA5502]">*</span></label>
                      <textarea id="c-msg" rows={5} value={form.message} onChange={(e) => set('message', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg bg-[#FFF6EF] border text-[#1D0E03] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-colors resize-none ${errs.message ? 'border-red-500' : 'border-[#00000012]'}`} placeholder="Tell us about your project..." />
                      {errs.message && <p className="mt-1 text-xs text-red-500">{errs.message}</p>}
                    </div>
                    <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-md shadow-[#CA5502]/20 text-sm">
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
