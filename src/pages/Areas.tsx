import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'
import { areas } from '../data'

export function Areas() {
  return (
    <div className="min-h-screen">
      <HeroSmall title="Service Areas" desc="Proudly serving businesses throughout Eastern Ontario from our home base in Alfred." crumbs={[{ label: 'Service Areas' }]} />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-xl lg:text-2xl font-extrabold text-[#1D0E03] mb-4">Where We Work</h2>
            <p className="text-[#56483E] text-lg max-w-2xl mx-auto">Based in Alfred, Ontario, we provide commercial services to businesses across the region.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((a) => (
                <div key={a.name} className="group p-5 rounded-xl bg-white border border-[#00000008] text-center hover:border-[#CA5502]/30 hover:shadow-md transition-all duration-300 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#CA5502]/10 border border-[#CA5502]/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#CA5502]/15 transition-colors">
                    <MapPin className="w-5 h-5 text-[#CA5502]" />
                  </div>
                  <h3 className="text-sm font-heading font-bold text-[#1D0E03]">{a.name}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5EDE4]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1D0E03] mb-4">Don't See Your Area?</h2>
          <p className="text-[#56483E] text-lg mb-8">We may still be able to help. Contact us to discuss your location and project requirements.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-md shadow-[#CA5502]/20 text-sm">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#CA5502] border border-[#CA5502]/20 font-heading font-semibold rounded-lg hover:bg-[#CA5502]/5 transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
