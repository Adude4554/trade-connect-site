import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Shield, Users, Target } from 'lucide-react'
import { HeroSmall } from '../components/HeroSmall'

export function About() {
  return (
    <div className="min-h-screen">
      <HeroSmall title="About Trade Connect" desc="A commercial contracting company built on teamwork, integrity, respect, honesty and excellence." />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1D0E03] mb-6">Who We Are</h2>
              <p className="text-[#56483E] leading-relaxed mb-6 text-lg">
                Trade Connect is a contracting company specializing in commercial scale maintenance, renovations and builds. Our wide variety of trade expertise and business knowledge places us in a unique position to help with the planning and execution of your business visions.
              </p>
              <p className="text-[#56483E] leading-relaxed mb-6">
                We stand proud on our company's foundation built on teamwork, integrity, respect, honesty and excellence. It is with great optimism that we participate in shaping the future outlook of our cities' landscape and are humbled to see your businesses grow in the spaces we build.
              </p>
              <p className="text-[#56483E] leading-relaxed">
                Based in Alfred, Ontario, we serve commercial clients throughout Eastern Ontario. Our team is committed to delivering professional results on every project, regardless of size or complexity.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Building2 className="w-6 h-6" />, title: 'Commercial Focus', text: 'We specialize exclusively in commercial projects. Our experience covers a wide range of commercial building needs.' },
                { icon: <Shield className="w-6 h-6" />, title: 'Our Foundation', text: 'Built on teamwork, integrity, respect, honesty and excellence. These principles guide every project we undertake.' },
                { icon: <Target className="w-6 h-6" />, title: 'Our Approach', text: 'From initial consultation to project completion, we focus on understanding your needs and delivering results that exceed expectations.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-white border border-[#00000008] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#CA5502]/10 border border-[#CA5502]/20 flex items-center justify-center text-[#CA5502] shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#1D0E03] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#56483E] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5EDE4]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1D0E03] mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, t: 'Teamwork', d: 'Collaborative approach to every project' },
              { icon: <Shield className="w-6 h-6" />, t: 'Integrity', d: 'Honest and transparent business practices' },
              { icon: <Target className="w-6 h-6" />, t: 'Respect', d: 'Valuing our clients and their properties' },
              { icon: <Building2 className="w-6 h-6" />, t: 'Excellence', d: 'Delivering the highest quality results' },
            ].map((v, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-white border border-[#00000008] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#CA5502]/10 border border-[#CA5502]/20 flex items-center justify-center text-[#CA5502] mx-auto mb-4">{v.icon}</div>
                <h3 className="font-heading text-lg font-bold text-[#1D0E03] mb-2">{v.t}</h3>
                <p className="text-sm text-[#56483E]">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-extrabold text-[#1D0E03] mb-4">Let's Work Together</h2>
          <p className="text-[#56483E] text-lg mb-8">Ready to discuss your commercial project? Contact us today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quote" className="inline-flex items-center gap-2 px-8 py-4 bg-[#CA5502] text-white font-heading font-semibold rounded-lg hover:bg-[#A84502] transition-colors shadow-lg shadow-[#CA5502]/25">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#014B3F] text-white font-heading font-semibold rounded-lg hover:bg-[#013A31] transition-colors shadow-lg shadow-[#014B3F]/25">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
