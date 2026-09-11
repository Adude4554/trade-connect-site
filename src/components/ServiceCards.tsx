import { Link } from 'react-router-dom'

const services = [
  { title: 'Commercial Structural Maintenance', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80' },
  { title: 'Thermography Report (FLIR scanning)', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80' },
  { title: 'Demolition, disposal, pressure washing', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80' },
  { title: 'Commercial Cabinetry for front desks, offices etc.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
]

export function ServiceCards() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D0E03] mb-10">Services</h2>

        <div className="bg-[#F98B0F] rounded-2xl p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Link key={i} to="/services" className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-heading text-sm sm:text-base font-semibold text-[#1D0E03] leading-snug">{s.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-body text-sm text-[#1D0E03]">
              The services you're looking for are not listed here? Chances are, we do it too!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
