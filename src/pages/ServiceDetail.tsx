import { Link, useParams } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'
import { services } from '../data'

const cardImages = [
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80',
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
]

export function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen">
        <HeroSmall title="Service Not Found" crumbs={[{ label: 'Services', href: '/services' }, { label: 'Not Found' }]} />
        <div className="py-16 text-center">
          <Link to="/services" className="text-[#CA5502] hover:underline">Back to Services</Link>
        </div>
      </div>
    )
  }

  const idx = services.indexOf(service)
  const image = cardImages[idx]

  return (
    <div className="min-h-screen">
      <HeroSmall title={service.title} desc={service.desc} crumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]} />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-md mb-8">
                <img src={image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="font-heading text-xl lg:text-2xl font-bold text-[#1D0E03] mb-4">Overview</h2>
              <p className="text-[#56483E] leading-relaxed mb-6">{service.full}</p>

              <h3 className="font-heading text-lg font-bold text-[#1D0E03] mb-4">Our Approach</h3>
              <div className="space-y-3">
                {service.steps.map((step, j) => (
                  <div key={j} className="flex items-start gap-3 p-4 rounded-lg bg-[#FFF6EF] border border-[#00000008]">
                    <span className="w-7 h-7 rounded-lg bg-[#CA5502] text-white text-xs font-heading font-bold flex items-center justify-center shrink-0">{j + 1}</span>
                    <span className="text-sm text-[#1D0E03] font-medium pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-2">
              <div className="sticky top-24 space-y-5">
                <div className="p-6 rounded-xl bg-[#FFF6EF] border border-[#00000008] shadow-sm">
                  <h3 className="font-heading text-base font-bold text-[#1D0E03] mb-4">Services Included</h3>
                  <ul className="space-y-3">
                    {service.apps.map((app, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#CA5502] mt-0.5 shrink-0" />
                        <span className="text-sm text-[#56483E]">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-[#014B3F] text-white shadow-md">
                  <h3 className="font-heading text-base font-bold mb-2">Need This Service?</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">Contact us for a consultation and detailed quote.</p>
                  <Link to="/quote" className="inline-flex items-center gap-2 px-6 py-3 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-md text-sm w-full justify-center">
                    Request a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <Link to="/services" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-[#00000008] text-sm font-heading font-semibold text-[#1D0E03] hover:border-[#CA5502]/30 transition-colors shadow-sm">
                  <ChevronRight className="w-4 h-4 rotate-180" /> All Services
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#014B3F]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white mb-3">Have Questions About This Service?</h2>
          <p className="text-white/80 mb-6">Our team is ready to discuss your specific requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-lg shadow-black/20 text-sm">
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
