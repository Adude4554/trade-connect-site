export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="City skyline"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-16">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-5xl mx-auto p-6 sm:p-10 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div>
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-[#1D0E03] leading-tight tracking-tight">
                Connecting you to your trade
              </h1>
            </div>
            <div>
              <p className="font-body text-sm sm:text-base text-[#56483E] leading-relaxed">
                Trade Connect is a contracting company specializing in commercial scale maintenance, renovations and builds. Our wide variety of trade expertise and business knowledge places us in a unique position to help with the planning and execution of your business visions. We stand proud on our company's foundation built on teamwork, integrity, respect, honesty and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
