import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'
import { areas } from '../data'

export function Areas() {
  const primary = areas.filter((a) => a.primary)
  const other = areas.filter((a) => !a.primary)

  return (
    <div className="min-h-screen">
      <HeroSmall title="Service Areas" desc="Proudly serving commercial clients throughout Eastern Ontario from our base in Alfred." />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-[#1D0E03] mb-6">Where We Work</h2>
              <p className="text-[#56483E] leading-relaxed mb-8">
                Trade Connect provides commercial maintenance, construction and specialized services throughout Eastern Ontario. Based in Alfred, we serve businesses in surrounding communities and the greater region.
              </p>

              <h3 className="font-heading text-lg font-bold text-[#1D0E03] mb-4">Primary Location</h3>
              <div className="space-y-3 mb-8">
                {primary.map((a) => (
                  <div key={a.name} className="flex items-center gap-3 p-4 rounded-xl bg-[#CA5502]/10 border border-[#CA5502]/20">
                    <MapPin className="w-5 h-5 text-[#CA5502] shrink-0" />
                    <span className="font-heading font-semibold text-[#1D0E03]">{a.name}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-lg font-bold text-[#1D0E03] mb-4">Additional Service Areas</h3>
              <div className="grid grid-cols-2 gap-3">
                {other.map((a) => (
                  <div key={a.name} className="flex items-center gap-2 p-3 rounded-lg bg-white border border-[#00000008] shadow-sm">
                    <CheckCircle className="w-4 h-4 text-[#CA5502] shrink-0" />
                    <span className="text-sm text-[#1D0E03]">{a.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-xl bg-white border border-[#00000008] overflow-hidden shadow-sm">
                <div className="aspect-[4/3] bg-[#F5EDE4] flex flex-col items-center justify-center p-8 text-center">
                  <MapPin className="w-16 h-16 text-[#CA5502]/30 mb-4" />
                  <h3 className="font-heading text-xl font-bold text-[#1D0E03] mb-2">Eastern Ontario</h3>
                  <p className="text-sm text-[#8E8279]">Map placeholder — Add Google Maps embed here</p>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-xl bg-white border border-[#00000008] shadow-sm">
                <h3 className="font-heading text-lg font-bold text-[#1D0E03] mb-3">Don't see your area?</h3>
                <p className="text-sm text-[#56483E] mb-4">Contact us to discuss your project. We may be able to serve your location.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-[#CA5502] text-sm font-heading font-semibold hover:underline">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
