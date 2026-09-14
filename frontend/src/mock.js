// ============================================================================
// mock.js — ALL WEBSITE CONTENT / DATA IN ONE PLACE (Junctioncraft / JCPL)
// ----------------------------------------------------------------------------
// WHERE TO EDIT WHAT:
//   COMPANY .......... name, email, phone, location, logo, WhatsApp link
//   NAV_LINKS ........ top navigation menu items
//   HERO ............. homepage big heading, description, badge, note
//   STATS ............ the 4 highlight numbers under the hero
//   MARQUEE .......... the moving green ticker strip words
//   ABOUT ............ About page text: heading, paragraphs, expertise, pillars
//   PRODUCTS ......... product cards + product detail pages (specs/features)
//   SERVICES ......... service cards + service detail pages (scope/process)
//   PROJECTS ......... the 8 project cards + project detail pages
//   RENEWABLE ........ solar & wind highlight block
//   TESTIMONIALS ..... client quotes
//   CLIENTS .......... "Proudly served" logos/badges
// NOTE: Changing text here updates it everywhere on the site automatically.
// ============================================================================

export const COMPANY = {
  name: "Junctioncraft",
  legal: "Junctioncraft Pvt. Ltd.",
  short: "JCPL",
  tagline: "Green Energy EPC",
  since: "2021",
  email: "jcpl@junctioncraft.in",
  phone: "+91 74113 07097",
  phoneRaw: "917411307097",
  location: "Vijayapura, Karnataka, India",
  logo: "https://customer-assets-7cd3h4nn.emergentagent.net/job_epc-power-solutions/artifacts/lhlbkh0q_jcpl.webp",
  whatsapp:
    "https://wa.me/917411307097?text=Hello%20Junctioncraft%2C%20I%20would%20like%20to%20discuss%20a%20project.",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
];

export const HERO = {
  badge: "Green Energy EPC · Est. 2021",
  titleLead: "Powering India's",
  titleAccent: "Green Tomorrow.",
  description:
    "Green-energy EPC for transmission lines, substations up to 765kV, solar evacuation and wind erection — engineered, manufactured and delivered by one accountable team.",
  note: "Karnataka Government approved contractor",
};

export const STATS = [
  { value: "765kV", label: "Highest substation class" },
  { value: "220kV", label: "Highest transmission line" },
  { value: "Approved", label: "Karnataka Government approved" },
  { value: "2021", label: "Incorporated, ROC Bangalore" },
];

export const MARQUEE = [
  "Substations",
  "Highway Lighting",
  "Govt. Approved",
  "Transmission Lines",
  "Solar EPC",
  "Wind Erection",
];

export const ABOUT = {
  eyebrow: "Who We Are",
  heading: "A trusted partner in power transmission & distribution.",
  body: "Junctioncraft Private Limited was incorporated on March 12, 2021 and is registered with the Registrar of Companies, Bangalore. We specialize in manufacturing, supplying, and executing electrical infrastructure for power utilities, government departments, and renewable developers.",
  paragraphs: [
    "From day one, our philosophy has been simple — one accountable team owns the project from the first survey to final energisation. This end-to-end EPC model removes the finger-pointing between vendors and gives our clients a single point of responsibility for quality, safety and schedule.",
    "We have executed transmission and distribution works from 11kV up to 220kV, unit substations, solar evacuation corridors, wind turbine erection and highway lighting across Karnataka — for utilities like HESCOM and private developers such as Rays Power Infra, Marg Energy, KVGGN Synergy and Hexa Climate.",
    "As a Karnataka Government-approved electrical contractor, every site we run follows strict national electrical and safety standards, with planned shutdown windows that keep utility downtime to a minimum.",
  ],
  expertise: [
    { title: "Transmission & Distribution", text: "11kV to 220kV overhead lines — new construction, reconductoring and strengthening." },
    { title: "Substations", text: "Turnkey 11kV to 765kV substations, from civil works to protection and energisation." },
    { title: "Renewable Evacuation", text: "Solar pooling substations, evacuation lines and complete wind turbine erection." },
    { title: "Utility & Highway Works", text: "Transformer shifting, Ganga Kalyan works and NHAI-compliant highway lighting." },
  ],
  pillars: [
    {
      icon: "Workflow",
      title: "End-to-End EPC",
      text: "From design and supply to installation and commissioning — one team, one responsibility.",
    },
    {
      icon: "ShieldCheck",
      title: "Compliance & Safety",
      text: "Government-approved discipline with strict adherence to national standards on every site.",
    },
    {
      icon: "Leaf",
      title: "Green Energy Focus",
      text: "Transmission, solar evacuation and wind erection that feed India's clean energy grid.",
    },
  ],
};

export const PRODUCTS = [
  {
    slug: "lattice-towers",
    name: "Lattice Towers",
    desc: "Precision-engineered lattice towers for high-voltage transmission and telecommunication networks.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    long: "Our lattice towers are hot-dip galvanised steel structures engineered for high-voltage transmission and telecom networks. Each tower is designed to withstand extreme wind and ice loads while keeping conductor clearances well within statutory limits — ready for decades of dependable service.",
    long2: "We manufacture and supply suspension, tension, angle and dead-end tower types with body and leg extensions to suit uneven terrain, river crossings and hilly stretches. Every batch is proof-load tested and galvanised to IS 2629, then delivered in bolted modular sections for fast, safe erection on site.",
    features: [
      "Hot-dip galvanised for 25+ year service life",
      "Type-tested designs for 66kV to 220kV",
      "Bolted modular assembly for fast erection",
      "Custom heights and body extensions",
    ],
    benefits: [
      "Lower lifecycle cost through corrosion-free galvanising",
      "Faster erection reduces line-outage windows",
      "Terrain-adaptive designs for hills and crossings",
    ],
    specs: [
      { k: "Voltage range", v: "66kV – 220kV" },
      { k: "Material", v: "Galvanised MS angle / steel" },
      { k: "Tower types", v: "Suspension, tension, angle, dead-end" },
      { k: "Finish", v: "Hot-dip galvanised (IS 2629)" },
    ],
    applications: ["HV transmission lines", "Telecom towers", "River / valley crossings"],
  },
  {
    slug: "insulators",
    name: "Insulators",
    desc: "Disc, pin and polymer insulators engineered for 11kV to 110kV networks.",
    image:
      "https://images.pexels.com/photos/236089/pexels-photo-236089.jpeg?auto=compress&cs=tinysrgb&w=1200",
    long: "We supply disc, pin and polymer insulators rated for 11kV to 110kV networks. Each unit is tested for electrical and mechanical strength to ensure reliable insulation under pollution, humidity and temperature stress.",
    long2: "Our porcelain and silicone-rubber polymer insulators feature anti-fog and anti-pollution profiles that maintain flashover performance in coastal, industrial and dusty environments. Mechanical and puncture tests are carried out batch-wise to IS 731 and IEC 60383 before dispatch.",
    features: [
      "Porcelain and polymer variants",
      "High mechanical and electrical strength",
      "Anti-fog / anti-pollution profiles",
      "Batch-tested to IS / IEC standards",
    ],
    benefits: [
      "Fewer outages from pollution flashover",
      "Lightweight polymer options cut handling time",
      "Consistent quality with batch test certificates",
    ],
    specs: [
      { k: "Voltage", v: "11kV – 110kV" },
      { k: "Types", v: "Disc, pin, polymer, post" },
      { k: "Standard", v: "IS 731 / IEC 60383" },
    ],
    applications: ["Overhead lines", "Substation bus support", "Distribution networks"],
  },
  {
    slug: "conductors-cables",
    name: "Conductors & Cables",
    desc: "ACSR, AAAC and AAC conductors with LT/HT power and control cabling.",
    image:
      "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?auto=format&fit=crop&w=2000&q=80",
    long: "ACSR, AAAC and AAC conductors along with LT/HT power and control cables for every stage of the grid. Sourced from reputed mills and tested for conductivity and tensile strength before dispatch.",
    long2: "From bare overhead conductors for transmission stringing to XLPE-insulated power cables and multi-core control cables for substations, we supply the full cabling stack. Conductor sizes are matched to your span, sag and current requirements, and every drum is supplied with test certificates.",
    features: [
      "ACSR / AAAC / AAC conductors",
      "LT and HT XLPE power cables",
      "Control and instrumentation cables",
      "Conductivity and tensile tested",
    ],
    benefits: [
      "Right conductor sizing for optimal losses",
      "Single-source supply for line and substation",
      "Mill test certificates with every drum",
    ],
    specs: [
      { k: "Conductor", v: "ACSR, AAAC, AAC" },
      { k: "Cable", v: "LT/HT XLPE, control" },
      { k: "Voltage", v: "Up to 33kV cable" },
    ],
    applications: ["Transmission stringing", "Distribution feeders", "Substation cabling"],
  },
  {
    slug: "transformers",
    name: "Transformers",
    desc: "Distribution and power transformers supplied, installed and commissioned.",
    image:
      "https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1200",
    long: "Distribution and power transformers supplied, installed and commissioned by our team — from 25 kVA distribution units to power transformers for utility substations, complete with on-site testing.",
    long2: "We handle unloading, positioning, oil filtration, bushing and cooling assembly, and pre-charge testing including insulation resistance and turns-ratio checks. Both oil-immersed and dry-type units are supplied to IS 1180 and IS 2026 with full commissioning support.",
    features: [
      "Distribution and power transformers",
      "Supply, install and commission",
      "Oil-immersed and dry-type options",
      "On-site pre-charge testing",
    ],
    benefits: [
      "Turnkey supply-and-commission scope",
      "On-site testing avoids costly re-visits",
      "Ratings matched to feeder and load profile",
    ],
    specs: [
      { k: "Rating", v: "25 kVA – large power" },
      { k: "Type", v: "Oil-immersed / dry-type" },
      { k: "Standard", v: "IS 1180 / IS 2026" },
    ],
    applications: ["Substations", "Industrial feeders", "Solar pooling stations"],
  },
  {
    slug: "poles",
    name: "Poles",
    desc: "PCC, PSC and steel tubular poles for distribution and lighting networks.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    long: "PCC, PSC and steel tubular poles for distribution and lighting networks — cast and finished to utility standards for long, maintenance-free service life.",
    long2: "Pre-stressed (PSC) and reinforced (PCC) concrete poles offer excellent load capacity for LT/HT distribution, while galvanised steel tubular poles suit street and highway lighting. All poles are supplied to IS 1678 / IS 785 with the working loads your network requires.",
    features: [
      "PCC, PSC and steel tubular",
      "High load-bearing capacity",
      "Corrosion-resistant finish",
      "Standard and custom lengths",
    ],
    benefits: [
      "Long maintenance-free service life",
      "Load-rated for LT/HT and lighting",
      "Available in standard and custom lengths",
    ],
    specs: [
      { k: "Types", v: "PCC, PSC, steel tubular" },
      { k: "Use", v: "LT/HT distribution, lighting" },
      { k: "Standard", v: "IS 1678 / IS 785" },
    ],
    applications: ["Distribution lines", "Street & highway lighting", "Rural electrification"],
  },
  {
    slug: "accessories-hardware",
    name: "Accessories & Hardware",
    desc: "Line hardware, clamps, connectors, earthing and protection accessories.",
    image:
      "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200",
    long: "A complete range of line hardware — clamps, connectors, earthing sets and protection accessories — engineered and galvanised to keep networks safe and reliable in every environment.",
    long2: "Suspension and tension clamps, mid-span joints, PG clamps, earthing sets, guy assemblies and surge protection — all supplied hot-dip galvanised to IS 2486 so your line hardware outlasts the conductor it carries.",
    features: [
      "Clamps and connectors",
      "Earthing and grounding sets",
      "Protection accessories",
      "Hot-dip galvanised hardware",
    ],
    benefits: [
      "One-stop line hardware supply",
      "Galvanised for maximum field life",
      "Safe, standards-compliant earthing",
    ],
    specs: [
      { k: "Range", v: "Clamps, connectors, earthing" },
      { k: "Finish", v: "Hot-dip galvanised" },
      { k: "Standard", v: "IS 2486" },
    ],
    applications: ["Line hardware", "Substation earthing", "Fault protection"],
  },
];

export const SERVICES = [
  {
    no: "01",
    slug: "substations",
    icon: "Building2",
    title: "Substations",
    desc: "Design, installation and commissioning of 11kV to 765kV substations.",
    long: "Turnkey design, installation and commissioning of 11kV to 765kV substations. From civil foundations and structure erection to equipment installation, protection systems and final energisation — handled by a single accountable team.",
    long2: "Our substation scope covers structure fabrication, gantry erection, installation of transformers, circuit breakers, isolators, CTs/PTs and control & relay panels, along with complete earthing, illumination and cabling. We conduct pre-commissioning tests and coordinate with the utility for charging and takeover.",
    scope: [
      "11kV to 765kV substations",
      "Transformer, breaker and isolator installation",
      "Protection, control & relay panels",
      "Bus-bar, gantry and structure erection",
      "Earthing, illumination and cabling",
      "Pre-commissioning tests & energisation",
    ],
    process: ["Survey & design", "Civil & structural works", "Equipment erection", "Testing & energisation"],
    deliverables: [
      "Fully commissioned substation",
      "Test reports & as-built drawings",
      "Protection setting & relay coordination",
      "Utility compliance sign-off",
    ],
    benefits: [
      "Single point of responsibility end-to-end",
      "Utility-grade protection & earthing",
      "Clean documentation for audits and takeover",
    ],
    image:
      "https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    no: "02",
    slug: "electrical-line-works",
    icon: "Cable",
    title: "Electrical Line Works",
    desc: "Installation, strengthening and upgradation of 11kV and 33kV overhead lines.",
    long: "Installation, strengthening and upgradation of 11kV and 33kV overhead lines — including reconductoring, pole and tower erection, and conductor stringing executed within planned shutdown windows to minimise downtime.",
    long2: "We build new feeders and strengthen existing networks with reconductoring, pole/tower replacement and re-stringing. Works are sequenced around utility shutdown windows and executed with tension-stringing discipline so sag, clearances and tower loading stay within specification.",
    scope: [
      "New 11kV and 33kV overhead lines",
      "Reconductoring and strengthening",
      "Pole and tower erection / replacement",
      "Conductor stringing, sagging & clamping",
      "Cross-arm, insulator & hardware fitting",
      "Line testing and charging",
    ],
    process: ["Route survey", "Foundation & erection", "Stringing & sagging", "Testing & charging"],
    deliverables: [
      "Charged and load-tested line",
      "As-built route drawings",
      "Sag/tension & clearance records",
      "Shutdown compliance report",
    ],
    benefits: [
      "Minimal outage through planned shutdowns",
      "Improved reliability and reduced losses",
      "Precise sag/clearance control",
    ],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    no: "03",
    slug: "solar-epc",
    icon: "Sun",
    title: "Solar EPC & Evacuation",
    desc: "Solar plant electrical works and 33kV/11kV grid evacuation infrastructure.",
    long: "Solar plant electrical balance-of-plant and 33kV/11kV grid evacuation infrastructure — pooling substations, evacuation lines and switching equipment for safe, reliable integration of solar energy into the grid.",
    long2: "From inverter-to-pooling-station cabling and internal MV networks to the external evacuation line and metering, we deliver the electrical backbone that gets solar power onto the grid. Our team coordinates the synchronisation and utility approvals required for commercial operation.",
    scope: [
      "Solar plant electrical BOP",
      "33kV / 11kV evacuation lines",
      "Pooling / step-up substations",
      "MV internal cabling & termination",
      "Switching, protection & metering",
      "Grid synchronisation support",
    ],
    process: ["Design & engineering", "Supply & erection", "Cabling & termination", "Grid synchronisation"],
    deliverables: [
      "Evacuation line & substation",
      "Grid synchronisation sign-off",
      "Metering & protection commissioning",
      "Test & commissioning reports",
    ],
    benefits: [
      "Faster grid synchronisation & COD",
      "Reliable, code-compliant evacuation",
      "Single team for BOP and evacuation",
    ],
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    no: "04",
    slug: "wind-power-erection",
    icon: "Wind",
    title: "Wind Power Erection",
    desc: "Complete windmill assembly, erection and electrical cabling services.",
    long: "Complete windmill assembly, erection and electrical cabling. We handle tower erection, nacelle and blade assembly, and the electrical works that connect turbines to the grid — safely and on schedule.",
    long2: "Our crews manage crane planning, tower section stacking, nacelle lifting, hub and blade assembly, torqueing and alignment, followed by internal power and control cabling, pad-mounted transformer connection and grid tie-in — all under strict height-safety protocols.",
    scope: [
      "Windmill tower erection",
      "Nacelle, hub and blade assembly",
      "Bolt torqueing & alignment",
      "Internal power & control cabling",
      "Pad transformer connection",
      "Grid connection & commissioning",
    ],
    process: ["Foundation readiness", "Crane erection", "Assembly & alignment", "Electrical commissioning"],
    deliverables: [
      "Erected & aligned turbine",
      "Electrical connection to grid",
      "Torque & alignment records",
      "Commissioning report",
    ],
    benefits: [
      "Experienced crews for safe high-lift work",
      "Coordinated mechanical + electrical scope",
      "On-schedule commissioning",
    ],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    no: "05",
    slug: "transformer-shifting",
    icon: "Truck",
    title: "Transformer Shifting & Relocation",
    desc: "Safe, cost-effective relocation of transformers and electrical utilities.",
    long: "Safe, cost-effective relocation of transformers and electrical utilities — including de-installation, transport, re-installation and re-commissioning with minimal downtime for the network.",
    long2: "Whether it is a distribution transformer that needs repositioning or a substation asset moving to a new bay, we plan the de-energisation, safe lifting, transport and re-installation to keep the network up. Oil filtration and pre-charge testing are done before re-energisation.",
    scope: [
      "Site survey & shifting plan",
      "Safe de-energisation & de-installation",
      "Transport & handling",
      "Re-installation & alignment",
      "Oil filtration & testing",
      "Re-commissioning",
    ],
    process: ["Site assessment", "De-energisation", "Shifting & mounting", "Testing & re-energisation"],
    deliverables: [
      "Relocated & re-energised asset",
      "Minimal network downtime",
      "Pre-charge test certificate",
    ],
    benefits: [
      "Downtime minimised with careful planning",
      "Damage-free lifting and transport",
      "Ready-to-charge after re-installation",
    ],
    image:
      "https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    no: "06",
    slug: "highway-lighting",
    icon: "Lightbulb",
    title: "Highway Lighting Works",
    desc: "Highway lighting installation and relocation aligned with NHAI standards.",
    long: "Highway lighting installation and relocation aligned with NHAI standards — pole foundations, luminaire installation, cabling and line shifting for road-widening projects, delivered to utility-grade compliance.",
    long2: "We install high-mast and pole-mounted LED lighting on national and state highways, including foundations, feeder pillars, underground/overhead cabling and controls. For road-widening projects we relocate existing poles and overhead lines with ACSR/AAAC conductors while maintaining supply.",
    scope: [
      "Highway & high-mast LED lighting",
      "Pole foundations and erection",
      "Feeder pillars & control gear",
      "Underground / overhead cabling",
      "Line shifting for road widening",
      "Testing & handover",
    ],
    process: ["Survey & design", "Foundation & poles", "Cabling & fitting", "Testing & handover"],
    deliverables: [
      "Illuminated highway corridor",
      "NHAI-standard compliance",
      "Cable & earthing test records",
      "Handover documentation",
    ],
    benefits: [
      "Safer, well-lit corridors",
      "NHAI-compliant execution",
      "Uninterrupted supply during shifting",
    ],
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80",
  },
];

// The 8 real projects provided by the client
export const PROJECTS = [
  {
    id: "rays-honnati-110kv",
    client: "Rays Power Infra Limited",
    work: "110kV Transmission Line",
    scope: "3.8 km",
    voltage: "110kV",
    location: "Honnati, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Execution of a 3.8 km 110kV transmission line at Honnati for Rays Power Infra Limited — including foundation, tower erection, stringing and testing to utility standards.",
    challenge:
      "The corridor required precise tower spotting and clearances over mixed agricultural terrain while keeping the schedule tight for evacuation readiness.",
    outcome:
      "The 110kV line was erected, strung and tested within the target window and handed over ready for charging, supporting the client's power evacuation plans.",
    highlights: [
      "110kV type-tested lattice towers",
      "Tension stringing with controlled sag",
      "Full pre-charge testing & handover",
    ],
  },
  {
    id: "marg-bijjaragi-33kv",
    client: "Marg Energy Pvt Ltd",
    work: "33kV Transmission Line",
    scope: "12 km",
    voltage: "33kV",
    location: "Bijjaragi, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A 12 km 33kV transmission line at Bijjaragi for Marg Energy Pvt Ltd, delivering reliable power evacuation with complete pole erection, stringing and commissioning.",
    challenge:
      "A 12 km route crossing roads and field boundaries needed careful way-leave coordination and consistent clearances.",
    outcome:
      "The full 12 km 33kV line was commissioned to specification, providing a dependable evacuation path for the client.",
    highlights: [
      "12 km route executed end-to-end",
      "Road and boundary crossings managed",
      "Commissioned to 33kV standards",
    ],
  },
  {
    id: "ravi-vijayapura-11kv",
    client: "Ravi Infra Projects Limited",
    work: "11kV Overhead Line",
    scope: "28 km",
    voltage: "11kV",
    location: "Vijayapura, Karnataka",
    category: "Distribution",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Construction of a 28 km 11kV overhead distribution line at Vijayapura for Ravi Infra Projects Limited, strengthening the local distribution network.",
    challenge:
      "Extending 28 km of 11kV line across dispersed loads required efficient logistics and steady daily progress.",
    outcome:
      "The 28 km distribution line was completed and charged, improving supply reach and reliability in the area.",
    highlights: [
      "28 km 11kV distribution network",
      "Efficient pole & stringing logistics",
      "Improved rural supply reliability",
    ],
  },
  {
    id: "rays-yellaburga-110kv",
    client: "Rays Power Infra Limited",
    work: "110kV Transmission Line",
    scope: "1 km",
    voltage: "110kV",
    location: "Yellaburga, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A focused 1 km 110kV transmission line at Yellaburga for Rays Power Infra Limited — precise, high-voltage line works with full testing and energisation.",
    challenge:
      "A short but critical 110kV interconnection demanded exacting tower and clearance work with zero margin for error.",
    outcome:
      "The 1 km 110kV segment was erected and tested to standard, completing a key link for the client.",
    highlights: [
      "Critical 110kV interconnection",
      "Precise tower & clearance execution",
      "Tested and energisation-ready",
    ],
  },
  {
    id: "kvggn-aland-66kv",
    client: "KVGGN Synergy Pvt Ltd",
    work: "66kV MC Transmission Line",
    scope: "4.8 km",
    voltage: "66kV",
    location: "Aland, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "A 4.8 km 66kV multi-circuit transmission line at Aland for KVGGN Synergy Pvt Ltd, executed with type-tested towers and disciplined stringing.",
    challenge:
      "A multi-circuit 66kV configuration required careful phase management and heavier tower loading design.",
    outcome:
      "The 4.8 km multi-circuit line was strung and commissioned, adding transmission capacity for the client.",
    highlights: [
      "66kV multi-circuit configuration",
      "Type-tested towers for higher loading",
      "Disciplined multi-phase stringing",
    ],
  },
  {
    id: "kvggn-vijayapura-uss",
    client: "KVGGN Synergy Pvt Ltd",
    work: "USS Works — 10 Locations",
    scope: "10 sites",
    voltage: "Substation",
    location: "Vijayapura, Karnataka",
    category: "Substation",
    image:
      "https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1200",
    summary:
      "Unit substation (USS) works across 10 locations in Vijayapura for KVGGN Synergy Pvt Ltd — equipment installation, cabling and commissioning at every site.",
    challenge:
      "Delivering consistent quality across 10 dispersed sites required tight scheduling and repeatable installation standards.",
    outcome:
      "All 10 unit substations were installed, cabled and commissioned, giving the client a reliable, uniform network.",
    highlights: [
      "10 unit substations delivered",
      "Standardised install across sites",
      "Cabling & commissioning at each site",
    ],
  },
  {
    id: "hescom-link-line",
    client: "HESCOM (Govt. of Karnataka)",
    work: "11kV Link Line & Ganga Kalyan Works (38 Nos)",
    scope: "121 km",
    voltage: "11kV",
    location: "Vijayapura, Basavan Bagewadi, Talikoti, Tikota — Karnataka",
    category: "Distribution",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    summary:
      "For HESCOM, a 121 km 11kV link line spanning Vijayapura, Basavan Bagewadi, Talikoti and Tikota, plus 38 Ganga Kalyan works — improving rural power reliability across the region.",
    challenge:
      "A 121 km programme across four taluks with 38 Ganga Kalyan connections demanded large-scale coordination with the utility and multiple villages.",
    outcome:
      "The link line and all 38 Ganga Kalyan works were completed, strengthening rural feeders and enabling irrigation power for farmers.",
    highlights: [
      "121 km 11kV link line",
      "38 Ganga Kalyan connections",
      "Executed across four taluks for HESCOM",
    ],
  },
  {
    id: "risitha-gadag-220kv",
    client: "Risitha Construction & Electricals (Hexa Climate)",
    work: "220kV Transmission Line",
    scope: "17.6 km",
    voltage: "220kV",
    location: "Gadag, Karnataka",
    category: "Transmission",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Our highest-voltage line to date — a 17.6 km 220kV transmission line at Gadag for Risitha Construction & Electricals (Hexa Climate), engineered for utility-grade reliability.",
    challenge:
      "A 17.6 km 220kV line called for heavy foundations, tall towers and rigorous stringing quality over a long corridor.",
    outcome:
      "The 220kV line was erected and tested to standard — Junctioncraft's highest-voltage execution, ready for reliable bulk power transfer.",
    highlights: [
      "220kV — highest voltage executed",
      "17.6 km corridor with heavy towers",
      "Rigorous stringing & testing quality",
    ],
  },
];

export const RENEWABLE = {
  eyebrow: "Renewable Focus",
  heading: "Solar & Wind, erected to last.",
  body: "From utility-scale solar evacuation corridors to complete windmill assembly and cabling, we execute renewable projects with the same engineering rigour that powers the national grid.",
  image:
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
};

export const TESTIMONIALS = [
  {
    quote:
      "Junctioncraft executed our 33kV line strengthening with remarkable discipline. Shutdown windows were planned to the hour, and the quality of stringing work exceeded utility expectations.",
    name: "Executive Engineer",
    org: "Karnataka Power Utility",
  },
  {
    quote:
      "Their team completed our solar evacuation corridor — 35 km of 33kV line — ahead of schedule, which directly accelerated our plant's grid synchronization.",
    name: "Project Head",
    org: "Renewable Energy Developer",
  },
  {
    quote:
      "During highway widening, Junctioncraft relocated poles and lines without a single prolonged outage. Professional, safe and fully compliant with NHAI requirements.",
    name: "Site In-charge",
    org: "Highway Concessionaire",
  },
];

export const CLIENTS = [
  {
    name: "Rays Power Infra",
    type: "image",
    logo: "https://customer-assets-7cd3h4nn.emergentagent.net/job_epc-power-solutions/artifacts/jzdltxxv_image.png",
  },
  {
    name: "Ravi Infrabuild Projects",
    type: "image",
    logo: "https://customer-assets-7cd3h4nn.emergentagent.net/job_epc-power-solutions/artifacts/2f9nx211_image.png",
  },
  {
    name: "KVGGN Synergy",
    type: "image",
    logo: "https://customer-assets-7cd3h4nn.emergentagent.net/job_epc-power-solutions/artifacts/w1u4t2qu_image.png",
  },
  { name: "Marg Energy", sub: "Pvt Ltd", type: "text" },
  { name: "HESCOM", sub: "Govt. of Karnataka", type: "text" },
  { name: "Hexa Climate", sub: "Risitha Construction", type: "text" },
];
