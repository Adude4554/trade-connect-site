import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'

export function NotFound() {
  return (
    <div className="min-h-screen">
      <HeroSmall title="Page Not Found" desc="The page you're looking for doesn't exist or has been moved." crumbs={[{ label: '404' }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <div className="w-20 h-20 rounded-2xl bg-[#CA5502]/10 border border-[#CA5502]/20 flex items-center justify-center mx-auto mb-6">
            <span className="font-heading text-3xl font-bold text-[#CA5502]">404</span>
          </div>
          <h2 className="font-heading text-2xl font-extrabold text-[#1D0E03] mb-4">Page Not Found</h2>
          <p className="text-[#56483E] text-lg mb-8 leading-relaxed">Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-md shadow-[#CA5502]/20 text-sm">
              <Home className="w-5 h-5" /> Back to Home
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#CA5502] border border-[#CA5502]/20 font-heading font-semibold rounded-lg hover:bg-[#CA5502]/5 transition-colors text-sm">
              Our Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
