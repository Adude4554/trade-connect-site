export const company = {
  name: 'Trade Connect',
  email: 'contact@trade-connect.ca',
  address: '821 Concession 10, Alfred, Ontario K0B 1A0',
  hours: 'Monday – Friday: 8:00am – 4:00pm',
} as const

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Service Areas', href: '/areas' },
  { label: 'Contact', href: '/contact' },
] as const

export const services = [
  {
    id: 'structural-maintenance',
    title: 'Commercial Structural Maintenance',
    slug: 'structural-maintenance',
    desc: 'Comprehensive maintenance solutions for commercial buildings — repairs, preventative maintenance, structural assessments, and facility upkeep.',
    full: 'Trade Connect provides commercial structural maintenance services for businesses throughout Eastern Ontario. Our team handles building repairs, preventative maintenance programs, structural assessments, and general facility upkeep. We work with property managers and business owners to maintain the value and safety of commercial properties.',
    apps: ['Commercial building repairs', 'Preventative maintenance programs', 'Structural assessments', 'Facility upkeep', 'Emergency repairs'],
    steps: ['Initial site assessment', 'Maintenance plan development', 'Scheduled execution', 'Detailed reporting', 'Ongoing support'],
  },
  {
    id: 'thermography',
    title: 'Thermography / FLIR Inspection',
    slug: 'thermography',
    desc: 'Advanced thermal imaging to identify abnormal heat patterns and potential issues not visible during standard visual inspections.',
    full: 'Trade Connect offers thermography and FLIR inspection services for commercial clients. Thermal imaging technology can identify abnormal heat patterns and potential issues that may not be visible during a standard visual inspection. Applications include electrical inspections, moisture detection, building envelope investigations, and preventative maintenance.',
    apps: ['Electrical fault detection', 'Moisture detection', 'Building envelope investigation', 'Equipment inspection', 'Energy audits'],
    steps: ['Client consultation', 'Thermal imaging survey', 'Data analysis', 'Detailed report', 'Recommendations'],
  },
  {
    id: 'demolition',
    title: 'Demolition, Disposal & Pressure Washing',
    slug: 'demolition',
    desc: 'Safe and efficient commercial demolition, material removal, disposal, site cleanup, and professional pressure washing.',
    full: 'Trade Connect provides commercial demolition, disposal, and pressure washing services. We handle selective demolition, interior strip-outs, material removal, site cleanup, and professional pressure washing. Our team manages waste disposal in compliance with local regulations.',
    apps: ['Commercial demolition', 'Selective demolition & strip-outs', 'Material removal & hauling', 'Site cleanup', 'Pressure washing', 'Waste disposal'],
    steps: ['Site assessment & safety planning', 'Scope definition', 'Execution', 'Material removal', 'Site cleanup'],
  },
  {
    id: 'commercial-cabinetry',
    title: 'Commercial Cabinetry',
    slug: 'commercial-cabinetry',
    desc: 'Custom commercial cabinetry design, fabrication, and installation for front desks, offices, retail spaces, and more.',
    full: 'Trade Connect offers commercial cabinetry services including design consultation, fabrication, and installation. We work with businesses to create custom cabinetry solutions for front desks, reception areas, offices, retail displays, and specialized commercial spaces.',
    apps: ['Front desk & reception cabinetry', 'Office storage & workstations', 'Retail display fixtures', 'Custom commercial millwork', 'Cabinet refinishing'],
    steps: ['Design consultation', 'Material selection', 'Fabrication', 'Installation', 'Final walkthrough'],
  },
] as const

export const processSteps = [
  { n: '01', title: 'Discuss', text: 'We start by understanding your project requirements, timeline, and budget.' },
  { n: '02', title: 'Assess', text: 'Our team reviews the site, scope, and specific requirements.' },
  { n: '03', title: 'Plan', text: 'We develop a detailed approach tailored to your needs.' },
  { n: '04', title: 'Execute', text: 'Our team completes the work professionally and efficiently.' },
  { n: '05', title: 'Complete', text: 'Final review, quality check, and project completion.' },
] as const

export const projects = [
  { id: '1', title: 'Commercial Space Renovation', cat: 'Renovation', desc: 'Complete interior renovation of a commercial office space including structural updates, cabinetry installation, and finishes.', placeholder: true },
  { id: '2', title: 'Building Envelope Thermal Audit', cat: 'Thermography', desc: 'Thermal imaging survey of a commercial building envelope to identify potential moisture intrusion and insulation deficiencies.', placeholder: true },
  { id: '3', title: 'Interior Strip-Out & Demolition', cat: 'Demolition', desc: 'Selective interior demolition and strip-out of a commercial space in preparation for tenant improvements.', placeholder: true },
  { id: '4', title: 'Commercial Exterior Pressure Washing', cat: 'Pressure Washing', desc: 'Professional exterior pressure washing of a commercial building and surrounding surfaces.', placeholder: true },
] as const

export const areas = [
  { name: 'Alfred', primary: true },
  { name: 'Hawkesbury', primary: false },
  { name: 'Rockland', primary: false },
  { name: 'Orleans', primary: false },
  { name: 'Ottawa', primary: false },
  { name: 'Cornwall', primary: false },
  { name: 'Embrun', primary: false },
  { name: 'Limoges', primary: false },
] as const

export const quoteServices = [
  'Commercial Maintenance', 'Structural Maintenance', 'Thermography / FLIR',
  'Demolition', 'Disposal', 'Pressure Washing', 'Commercial Cabinetry', 'Other',
] as const
