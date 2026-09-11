import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../data'

const cardImages = [
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
  'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&q=80',
  'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80',
]

export function ServiceCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#CA5502]/10 text-[#CA5502] text-xs font-heading font-semibold uppercase tracking-wider mb-4">What We Do</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E]">Our Services</h2>
        </div>

        <div className="bg-gradient-to-br from-[#F98B0F] to-[#CA5502] rounded-2xl p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Link key={i} to={`/services/${s.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover">
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img
                    src={cardImages[i]}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-sm font-bold text-[#1A1A2E] leading-snug mb-2 group-hover:text-[#CA5502] transition-colors">{s.title}</h3>
                  <p className="text-xs text-[#4A4A68] leading-relaxed mb-3 line-clamp-2">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#CA5502] text-xs font-heading font-semibold group-hover:gap-2 transition-all duration-300">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-body text-sm text-[#1A1A2E]">
              The services you're looking for are not listed here? Chances are, we do it too!{' '}
              <a href="mailto:contact@trade-connect.ca" className="font-heading font-semibold hover:underline text-white">Contact us</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
