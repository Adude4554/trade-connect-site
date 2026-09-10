import { Building2, MapPin } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'
import { projects } from '../data'

export function Projects() {
  return (
    <div className="min-h-screen">
      <HeroSmall title="Our Work" desc="Showcasing our commercial maintenance, renovation, demolition and construction projects across Eastern Ontario." />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
            <p className="text-sm text-yellow-200"><strong>Note:</strong> The projects below are demo placeholders. Replace with actual project photos and details when available.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((p) => (
                <div key={p.id} className="group rounded-xl bg-zinc-950 border border-border overflow-hidden hover:border-brand/30 transition-all duration-300">
                  <div className="aspect-[16/10] bg-surface relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Building2 className="w-12 h-12 text-muted/30 mb-3" />
                      <span className="text-xs text-muted">Project Image</span>
                      <span className="text-[10px] text-muted/50 mt-1">Replace with actual photo</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-brand text-white text-xs font-semibold">{p.cat}</span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 rounded-md bg-yellow-500/90 text-black text-[10px] font-bold uppercase">Demo</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand transition-colors">{p.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-dim mb-3"><MapPin className="w-3.5 h-3.5" />Eastern Ontario</div>
                    <p className="text-sm text-dim leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
