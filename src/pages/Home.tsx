import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { Hero } from '../components/Hero'
import { Trust } from '../components/Trust'
import { ServiceCards } from '../components/ServiceCards'
import { Process } from '../components/Process'

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Trust />
      <ServiceCards />
      <Process />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#CA5502]/10 text-[#CA5502] text-xs font-heading font-semibold uppercase tracking-wider mb-4">Why Trade Connect</span>
              <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#1D0E03] mb-6 leading-tight">Built on Principles That Matter</h2>
              <p className="text-[#56483E] leading-relaxed mb-5 text-base">
                Trade Connect is a contracting company specializing in commercial scale maintenance, renovations and builds. Our wide variety of trade expertise and business knowledge places us in a unique position to help with the planning and execution of your business visions.
              </p>
              <p className="text-[#56483E] leading-relaxed mb-8 text-base">
                We stand proud on our company's foundation built on teamwork, integrity, respect, honesty and excellence.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-md shadow-[#CA5502]/20 text-sm">
                Learn About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { t: 'Teamwork', d: 'Collaborative approach to every project' },
                { t: 'Integrity', d: 'Honest and transparent practices' },
                { t: 'Respect', d: 'Valuing clients and their properties' },
                { t: 'Excellence', d: 'Delivering the highest quality results' },
              ].map((v, i) => (
                <div key={i} className="p-5 rounded-xl bg-[#FFF6EF] border border-[#00000008] hover:border-[#CA5502]/20 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#CA5502]/10 flex items-center justify-center mb-3">
                    <Star className="w-5 h-5 text-[#CA5502]" />
                  </div>
                  <h3 className="text-sm font-heading font-bold text-[#1D0E03] mb-1.5">{v.t}</h3>
                  <p className="text-xs text-[#56483E] leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#014B3F]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-white mb-5">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">Contact us today for a consultation. We'll discuss your requirements and provide a detailed plan.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-all duration-200 shadow-lg shadow-black/20 text-sm">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-heading font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
