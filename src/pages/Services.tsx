import { HeroSmall } from '../components/HeroSmall'
import { ServiceCards } from '../components/ServiceCards'
import { Process } from '../components/Process'

export function Services() {
  return (
    <div className="min-h-screen">
      <HeroSmall title="Our Services" desc="Comprehensive commercial maintenance, construction and specialized services for businesses across Eastern Ontario." />
      <ServiceCards />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-surface border border-border">
            <span className="text-dim">Looking for a service not listed here? We likely provide it.</span>
            <a href="mailto:contact@trade-connect.ca" className="text-brand font-semibold text-sm hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
      <Process />
    </div>
  )
}
