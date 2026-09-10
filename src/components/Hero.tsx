export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-4xl mx-auto p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1D0E03] leading-tight">
                "Connecting you to your trade"
              </h1>
            </div>
            <div>
              <p className="font-body text-base lg:text-lg text-[#56483E] leading-relaxed text-justify">
                Trade Connect is a contracting company specializing in commercial scale maintenance, renovations and builds. Our wide variety of trade expertise and business knowledge places us in a unique position to help with the planing and execution of your business visions. We stand-proud on our company's foundation built on teamwork, integrity, respect, honesty and excellence. It is with great optimism that we participate in shaping the future outlook of our cities' landscape and are humbled to see your businesses grow in the spaces we built.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
