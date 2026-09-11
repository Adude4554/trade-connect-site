import { processSteps } from '../data'

export function Process() {
  return (
    <section className="py-16 lg:py-24 bg-[#FFF6EF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#CA5502]/10 text-[#CA5502] text-xs font-heading font-semibold uppercase tracking-wider mb-4">Our Process</span>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold text-[#1D0E03]">How We Work</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3">
          {processSteps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[55%] w-[90%] h-px bg-gradient-to-r from-[#CA5502]/30 to-[#CA5502]/10" />
              )}
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#CA5502]/15 flex items-center justify-center mx-auto mb-4 group-hover:border-[#CA5502]/40 group-hover:shadow-md transition-all duration-300">
                <span className="text-xl font-heading font-bold text-[#CA5502]">{step.n}</span>
              </div>
              <h3 className="text-base font-heading font-bold text-[#1D0E03] mb-2">{step.title}</h3>
              <p className="text-sm text-[#56483E] leading-relaxed max-w-[200px] mx-auto">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
