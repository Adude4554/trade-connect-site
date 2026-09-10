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

      <section className="py-16 lg:py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-semibold uppercase tracking-wider mb-4">Why Trade Connect</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">Built on Principles That Matter</h2>
              <p className="text-dim leading-relaxed mb-6">
                Trade Connect is a contracting company specializing in commercial scale maintenance, renovations and builds. Our wide variety of trade expertise and business knowledge places us in a unique position to help with the planning and execution of your business visions.
              </p>
              <p className="text-dim leading-relaxed mb-8">
                We stand proud on our company's foundation built on teamwork, integrity, respect, honesty and excellence.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition-colors">
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
                <div key={i} className="p-5 rounded-xl bg-zinc-950 border border-border">
                  <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center mb-3">
                    <Star className="w-4 h-4 text-brand" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{v.t}</h3>
                  <p className="text-xs text-dim">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-dim text-lg mb-8 max-w-2xl mx-auto">Contact us today for a consultation. We'll discuss your requirements and provide a detailed plan.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition-all duration-200 shadow-lg shadow-brand/25">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
