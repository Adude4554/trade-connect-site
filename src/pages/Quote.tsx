import { useState } from 'react'
import { CheckCircle, Send } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'
import { services } from '../data'

export function Quote() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', timeline: '', budget: '', description: '' })
  const [done, setDone] = useState(false)
  const [errs, setErrs] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.description.trim()) e.description = 'Required'
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
      <HeroSmall title="Request a Quote" desc="Tell us about your project and we'll provide a detailed proposal." crumbs={[{ label: 'Request a Quote' }]} />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="p-6 lg:p-8 rounded-xl bg-white border border-[#00000006] shadow-sm">
                <h2 className="font-heading text-xl font-bold text-[#1A1A2E] mb-6">Project Details</h2>
                {done ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-bold text-[#1A1A2E] mb-2">Quote Request Received</h3>
                    <p className="text-[#4A4A68] mb-6">Thank you! We'll review your project details and get back to you within 24 hours.</p>
                    <button onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', company: '', service: '', timeline: '', budget: '', description: '' }) }} className="text-[#CA5502] text-sm font-heading font-semibold hover:underline">Submit another</button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="q-name" className="block text-sm font-heading font-medium text-[#1A1A2E] mb-2">Full Name <span className="text-[#CA5502]">*</span></label>
                        <input id="q-name" value={form.name} onChange={(e) => set('name', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg bg-[#FFF8F3] border text-[#1A1A2E] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-all ${errs.name ? 'border-red-500' : 'border-[#00000008]'}`} placeholder="John Smith" />
                        {errs.name && <p className="mt-1 text-xs text-red-500">{errs.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="q-email" className="block text-sm font-heading font-medium text-[#1A1A2E] mb-2">Email <span className="text-[#CA5502]">*</span></label>
                        <input id="q-email" type="email" value={form.email} onChange={(e) => set('email', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg bg-[#FFF8F3] border text-[#1A1A2E] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-all ${errs.email ? 'border-red-500' : 'border-[#00000008]'}`} placeholder="your@email.com" />
                        {errs.email && <p className="mt-1 text-xs text-red-500">{errs.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="q-phone" className="block text-sm font-heading font-medium text-[#1A1A2E] mb-2">Phone</label>
                        <input id="q-phone" type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-[#FFF8F3] border border-[#00000008] text-[#1A1A2E] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-all" placeholder="(123) 456-7890" />
                      </div>
                      <div>
                        <label htmlFor="q-company" className="block text-sm font-heading font-medium text-[#1A1A2E] mb-2">Company</label>
                        <input id="q-company" value={form.company} onChange={(e) => set('company', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-[#FFF8F3] border border-[#00000008] text-[#1A1A2E] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-all" placeholder="Company name" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="q-service" className="block text-sm font-heading font-medium text-[#1A1A2E] mb-2">Service Needed</label>
                        <select id="q-service" value={form.service} onChange={(e) => set('service', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-[#FFF8F3] border border-[#00000008] text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-all">
                          <option value="">Select a service</option>
                          {services.map((s) => <option key={s.id} value={s.slug}>{s.title}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="q-timeline" className="block text-sm font-heading font-medium text-[#1A1A2E] mb-2">Timeline</label>
                        <select id="q-timeline" value={form.timeline} onChange={(e) => set('timeline', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-[#FFF8F3] border border-[#00000008] text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-all">
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (ASAP)</option>
                          <option value="1month">Within 1 month</option>
                          <option value="3months">Within 3 months</option>
                          <option value="6months">Within 6 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="q-desc" className="block text-sm font-heading font-medium text-[#1A1A2E] mb-2">Project Description <span className="text-[#CA5502]">*</span></label>
                      <textarea id="q-desc" rows={5} value={form.description} onChange={(e) => set('description', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg bg-[#FFF8F3] border text-[#1A1A2E] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-all resize-none ${errs.description ? 'border-red-500' : 'border-[#00000008]'}`} placeholder="Tell us about your project..." />
                      {errs.description && <p className="mt-1 text-xs text-red-500">{errs.description}</p>}
                    </div>
                    <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#CA5502] to-[#A84502] text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-[#CA5502]/25 transition-all duration-300 shadow-md text-sm btn-shine">
                      <Send className="w-4 h-4" /> Submit Request
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-5">
                <div className="p-6 rounded-xl bg-[#014B3F] text-white shadow-lg">
                  <h3 className="font-heading text-base font-bold mb-3">What to Expect</h3>
                  <ul className="space-y-3 text-sm text-white/80">
                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#F98B0F] mt-0.5 shrink-0" />Response within 24 hours</li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#F98B0F] mt-0.5 shrink-0" />Detailed project proposal</li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#F98B0F] mt-0.5 shrink-0" />Transparent pricing</li>
                    <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-[#F98B0F] mt-0.5 shrink-0" />No obligation consultation</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-[#FFF8F3] border border-[#00000006] text-center shadow-sm">
                  <p className="text-sm text-[#4A4A68] mb-2">Prefer to call?</p>
                  <a href="mailto:contact@trade-connect.ca" className="text-[#CA5502] font-heading font-bold text-base hover:underline">contact@trade-connect.ca</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
