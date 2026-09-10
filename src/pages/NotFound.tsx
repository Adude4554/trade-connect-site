import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'

export function NotFound() {
  return (
    <div className="min-h-screen">
      <HeroSmall title="Page Not Found" />
      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-7xl font-extrabold text-brand mb-4">404</h1>
          <p className="text-dim mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition-colors">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
