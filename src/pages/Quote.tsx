import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Send, CheckCircle } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'
import { quoteServices } from '../data'

export function Quote() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', location: '', service: '', description: '', contact: 'Either' })
  const [errs, setErrs] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!form.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.location.trim()) e.location = 'Required'
    if (!form.service) e.service = 'Select a service'
    if (!form.description.trim()) e.description = 'Required'
    return e
  }

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrs(e); return }
    setErrs({})
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setDone(true)
  }

  const set = (k: string, v: string) => {
    setForm((p) => ({ ...p, [k]: v }))
    if (errs[k]) setErrs((p) => { const n = { ...p }; delete n[k]; return n })
  }

  const inp = (id: string, label: string, req: boolean, k: string, type = 'text', ph = '') => (
    <div>
      <label htmlFor={id} className="block text-sm font-heading font-medium text-[#1D0E03] mb-2">{label} {req && <span className="text-[#CA5502]">*</span>}</label>
      <input id={id} type={type} value={(form as any)[k]} onChange={(e) => set(k, e.target.value)}
        className={`w-full px-4 py-3 rounded-lg bg-[#FFF6EF] border text-[#1D0E03] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-colors ${errs[k] ? 'border-red-500' : 'border-[#00000012]'}`} placeholder={ph} />
      {errs[k] && <p className="mt-1 text-xs text-red-500">{errs[k]}</p>}
    </div>
  )

  if (done) {
    return (
      <div className="min-h-screen">
        <HeroSmall title="Request a Quote" desc="Tell us about your project and we'll provide a detailed response." />
        <section className="py-16 lg:py-24">
          <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
            <div className="p-12 rounded-xl bg-white border border-[#00000008] shadow-sm">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="font-heading text-2xl font-bold text-[#1D0E03] mb-3">Quote Request Received</h2>
              <p className="text-[#56483E] mb-8 leading-relaxed">
                Thank you, {form.name}. We've received your request for <strong className="text-[#1D0E03]">{form.service}</strong> in <strong className="text-[#1D0E03]">{form.location}</strong>. We'll respond within 1–2 business days.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/" className="px-6 py-3 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-md shadow-[#CA5502]/20">Back to Home</Link>
                <button onClick={() => { setDone(false); setForm({ name: '', company: '', email: '', phone: '', location: '', service: '', description: '', contact: 'Either' }) }}
                  className="px-6 py-3 bg-[#014B3F] text-white font-heading font-semibold rounded-lg hover:bg-[#013A31] transition-colors shadow-md shadow-[#014B3F]/20">Submit Another</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <HeroSmall title="Request a Quote" desc="Tell us about your project. We'll review your requirements and respond promptly." />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={submit} className="space-y-8">
                <div>
                  <h2 className="font-heading text-xl font-bold text-[#1D0E03] mb-1">Contact Information</h2>
                  <p className="text-sm text-[#56483E]">Your contact details for follow-up.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {inp('q-name', 'Name', true, 'name', 'text', 'Your full name')}
                  {inp('q-company', 'Company', false, 'company', 'text', 'Company name')}
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {inp('q-email', 'Email', true, 'email', 'email', 'your@email.com')}
                  {inp('q-phone', 'Phone', false, 'phone', 'tel', '(123) 456-7890')}
                </div>

                <div className="border-t border-[#00000012] pt-8">
                  <h2 className="font-heading text-xl font-bold text-[#1D0E03] mb-1">Project Information</h2>
                  <p className="text-sm text-[#56483E]">Details about your project.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {inp('q-loc', 'Project Location', true, 'location', 'text', 'City or address')}
                  <div>
                    <label htmlFor="q-svc" className="block text-sm font-heading font-medium text-[#1D0E03] mb-2">Service Required <span className="text-[#CA5502]">*</span></label>
                    <select id="q-svc" value={form.service} onChange={(e) => set('service', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg bg-[#FFF6EF] border text-[#1D0E03] text-sm focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-colors appearance-none ${errs.service ? 'border-red-500' : 'border-[#00000012]'}`}>
                      <option value="">Select a service</option>
                      {quoteServices.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errs.service && <p className="mt-1 text-xs text-red-500">{errs.service}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="q-desc" className="block text-sm font-heading font-medium text-[#1D0E03] mb-2">Project Description <span className="text-[#CA5502]">*</span></label>
                  <textarea id="q-desc" rows={5} value={form.description} onChange={(e) => set('description', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg bg-[#FFF6EF] border text-[#1D0E03] text-sm placeholder-[#8E8279] focus:outline-none focus:ring-2 focus:ring-[#CA5502]/50 focus:border-[#CA5502] transition-colors resize-none ${errs.description ? 'border-red-500' : 'border-[#00000012]'}`}
                    placeholder="Describe your project, including any specific requirements, timeline, or budget considerations..." />
                  {errs.description && <p className="mt-1 text-xs text-red-500">{errs.description}</p>}
                </div>

                <div>
                  <label className="block text-sm font-heading font-medium text-[#1D0E03] mb-3">Preferred Contact Method</label>
                  <div className="flex flex-wrap gap-3">
                    {['Email', 'Phone', 'Either'].map((m) => (
                      <label key={m} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer transition-colors ${form.contact === m ? 'bg-[#CA5502]/10 border-[#CA5502]/40 text-[#CA5502]' : 'bg-white border-[#00000012] text-[#56483E] hover:border-[#CA5502]/20'}`}>
                        <input type="radio" name="contact" value={m} checked={form.contact === m} onChange={(e) => set('contact', e.target.value)} className="sr-only" />
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${form.contact === m ? 'border-[#CA5502]' : 'border-[#8E8279]'}`}>
                          {form.contact === m && <div className="w-2 h-2 rounded-full bg-[#CA5502]" />}
                        </div>
                        <span className="text-sm font-heading font-medium">{m}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#00000012] pt-6">
                  <button type="submit" disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#CA5502]/25">
                    {loading ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Submit Quote Request</>}
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-xl bg-white border border-[#00000008] shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-[#1D0E03] mb-4">What Happens Next?</h3>
                  <ul className="space-y-4">
                    {[{ n: '1', t: 'We review your project requirements' }, { n: '2', t: 'Our team assesses the scope' }, { n: '3', t: 'We respond within 1–2 business days' }, { n: '4', t: 'Schedule a consultation if needed' }].map((item) => (
                      <li key={item.n} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-md bg-[#CA5502]/10 border border-[#CA5502]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-heading font-bold text-[#CA5502]">{item.n}</span>
                        </div>
                        <span className="text-sm text-[#56483E]">{item.t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-white border border-[#00000008] shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-[#1D0E03] mb-3">Prefer to Email?</h3>
                  <p className="text-sm text-[#56483E] mb-4">Send your project details directly via email.</p>
                  <a href="mailto:contact@trade-connect.ca" className="block w-full text-center px-5 py-3 bg-[#014B3F] text-white font-heading font-semibold rounded-lg hover:bg-[#013A31] transition-colors shadow-md text-sm">contact@trade-connect.ca</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
