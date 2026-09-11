import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'
import { services } from '../data'

const cardImages = [
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
  'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80',
  'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
]

export function Services() {
  return (
    <div className="min-h-screen">
      <HeroSmall
        title="Our Services"
        desc="From structural maintenance to demolition, thermography to custom cabinetry — we deliver comprehensive commercial solutions."
        crumbs={[{ label: 'Our Services' }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
          {services.map((s, i) => (
            <div key={s.id} className="grid lg:grid-cols-2 gap-10 items-center">
              <div className={`overflow-hidden rounded-xl shadow-lg ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[16/10] bg-[#F5EDE4]">
                  <img src={cardImages[i]} alt={s.title} className="w-full h-full object-cover img-zoom" />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1A1A2E] mb-4">{s.title}</h2>
                <p className="text-[#4A4A68] leading-relaxed mb-5 text-base">{s.full}</p>
                <div className="space-y-3 mb-6">
                  {s.apps.slice(0, 4).map((a, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#CA5502] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#4A4A68]">{a}</span>
                    </div>
                  ))}
                </div>
                <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#CA5502] to-[#A84502] text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-[#CA5502]/25 transition-all duration-300 shadow-md text-sm btn-shine">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#F5EDE4]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1A1A2E] mb-4">Don't See What You Need?</h2>
          <p className="text-[#4A4A68] text-lg mb-8">We handle many types of commercial projects. Contact us to discuss your specific requirements.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#CA5502] to-[#A84502] text-white font-heading font-semibold rounded-lg hover:shadow-lg hover:shadow-[#CA5502]/25 transition-all duration-300 shadow-md text-sm btn-shine">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#CA5502] border border-[#CA5502]/20 font-heading font-semibold rounded-lg hover:bg-[#CA5502]/5 transition-all duration-300 text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
