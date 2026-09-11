import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="City skyline"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/25 to-black/55" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-16">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-[56rem] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-14 flex flex-col justify-center border-l-4 border-[#CA5502]">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1D0E03] leading-[1.15] tracking-tight mb-5">
                Connecting you to your trade
              </h1>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-all duration-200 shadow-lg shadow-[#CA5502]/25 w-fit text-sm"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-7 sm:p-10 lg:p-14 flex items-center bg-[#F5EDE4]/40">
              <p className="font-body text-sm sm:text-[0.95rem] text-[#56483E] leading-relaxed">
                Trade Connect is a contracting company specializing in commercial scale maintenance, renovations and builds. Our wide variety of trade expertise and business knowledge places us in a unique position to help with the planning and execution of your business visions. We stand proud on our company's foundation built on teamwork, integrity, respect, honesty and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
