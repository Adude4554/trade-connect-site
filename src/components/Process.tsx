import { processSteps } from '../data'

export function Process() {
  return (
    <section className="py-16 lg:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-semibold uppercase tracking-wider mb-4">Our Process</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">How We Work</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {processSteps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand/30 to-brand/10" />
              )}
              <div className="w-16 h-16 rounded-xl bg-surface border border-border flex items-center justify-center mx-auto mb-4 group-hover:border-brand/40 transition-colors">
                <span className="text-xl font-bold text-brand font-mono">{step.n}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-dim leading-relaxed max-w-[200px] mx-auto">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
