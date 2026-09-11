import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'

export function NotFound() {
  return (
    <div className="min-h-screen">
      <HeroSmall title="Page Not Found" />
      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="font-heading text-7xl font-extrabold text-[#CA5502] mb-4">404</h1>
          <p className="text-[#56483E] mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-md shadow-[#CA5502]/20">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
