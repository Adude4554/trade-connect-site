import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'
import { services } from '../data'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const svc = services.find((s) => s.slug === slug)
  if (!svc) return <Navigate to="/services" replace />

  return (
    <div className="min-h-screen">
      <HeroSmall title={svc.title} desc={svc.desc} crumbs={[{ label: 'Services', href: '/services' }, { label: svc.title }]} />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-[#1D0E03] mb-6">Overview</h2>
              <p className="text-[#56483E] leading-relaxed mb-8 text-lg">{svc.full}</p>

              <h3 className="font-heading text-xl font-bold text-[#1D0E03] mb-4">What This Service Includes</h3>
              <ul className="space-y-3 mb-10">
                {svc.apps.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#CA5502] mt-0.5 shrink-0" />
                    <span className="text-[#56483E]">{a}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-heading text-xl font-bold text-[#1D0E03] mb-4">Our Process</h3>
              <ol className="space-y-4">
                {svc.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#CA5502]/10 border border-[#CA5502]/20 flex items-center justify-center shrink-0">
                      <span className="text-sm font-heading font-bold text-[#CA5502]">{i + 1}</span>
                    </div>
                    <span className="text-[#56483E] pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-xl bg-white border border-[#00000008] shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-[#1D0E03] mb-4">Get a Quote</h3>
                  <p className="text-sm text-[#56483E] mb-5">Ready to discuss your project? Request a quote and we'll get back to you promptly.</p>
                  <Link to="/quote" className="block w-full text-center px-5 py-3 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors">Request a Quote</Link>
                </div>
                <div className="p-6 rounded-xl bg-white border border-[#00000008] shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-[#1D0E03] mb-4">Other Services</h3>
                  <ul className="space-y-2">
                    {services.filter((s) => s.id !== svc.id).map((s) => (
                      <li key={s.id}>
                        <Link to={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-[#56483E] hover:text-[#CA5502] transition-colors">
                          <ChevronRight className="w-3 h-3" />{s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5EDE4]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-[#1D0E03] mb-4">Need This Service?</h2>
          <p className="text-[#56483E] mb-6">Contact us to discuss your requirements and get a detailed quote.</p>
          <Link to="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-md shadow-[#CA5502]/20">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
