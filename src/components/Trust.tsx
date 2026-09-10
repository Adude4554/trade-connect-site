import { Building2, ClipboardCheck, Layers, MapPin } from 'lucide-react'

const items = [
  { icon: <Building2 className="w-6 h-6" />, title: 'Commercial Services', text: 'Maintenance, construction and specialized services for commercial properties.' },
  { icon: <ClipboardCheck className="w-6 h-6" />, title: 'Reliable Execution', text: 'Professional planning and project execution from start to finish.' },
  { icon: <Layers className="w-6 h-6" />, title: 'Multiple Services', text: 'Multiple commercial services through one trusted contractor.' },
  { icon: <MapPin className="w-6 h-6" />, title: 'Local Service', text: 'Serving businesses throughout Eastern Ontario.' },
]

export function Trust() {
  return (
    <section className="py-16 lg:py-20 bg-[#F5EDE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group p-6 rounded-xl bg-white border border-[#00000008] hover:border-[#CA5502]/30 transition-all duration-300 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-[#CA5502]/10 border border-[#CA5502]/20 flex items-center justify-center text-[#CA5502] mb-4 group-hover:bg-[#CA5502]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-heading font-semibold text-[#1D0E03] mb-2">{item.title}</h3>
              <p className="text-sm text-[#56483E] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
