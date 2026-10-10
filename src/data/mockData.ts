import { Treatment, Doctor, ClinicLocation, GalleryCase, Testimonial } from '../types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'implants',
    slug: 'dental-implants',
    title: 'Dental Implants & All-on-4 / All-on-6',
    shortDesc: 'Permanent titanium and zirconia tooth replacements with computer-guided surgical precision and lifetime warranty.',
    longDesc: 'At Classic Smiles Mumbai, we specialize in advanced implantology ranging from single tooth replacements to full arch immediate load All-on-4 and All-on-6 restorations. Utilizing 3D CBCT scans, Nobel Biocare & Straumann implants, and digital surgical guides, our procedures minimize discomfort, eliminate guesswork, and restore 100% natural chewing efficiency and smile aesthetics.',
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Lifetime warranty on Swiss & German dental implants',
      'Computer-guided flapless surgery for minimal swelling & fast recovery',
      'Immediate fixed teeth options (Same Day Teeth / All-on-4)',
      'Preserves jawbone density and facial structure',
      'Natural appearance indistinguishable from biological teeth'
    ],
    procedureSteps: [
      'Comprehensive 3D CBCT Bone Density Scan & Digital Virtual Planning',
      'Painless implant fixture placement under gentle local anesthesia or conscious sedation',
      'Healing and osseointegration period (or immediate temporary crown placement)',
      'Customized CAD/CAM Zirconia or E-max ceramic permanent crown fixing'
    ],
    duration: '1 - 3 visits (Immediate loading option available)',
    suitableFor: ['Missing single or multiple teeth', 'Loose painful dentures', 'Severe dental trauma or tooth loss'],
    approxCostInr: '₹28,000 - ₹45,000 per implant fixture',
    approxCostUsd: '$340 - $550 (vs $3,000 - $4,500 in USA/UK)',
    faqs: [
      {
        question: 'Is dental implant surgery painful?',
        answer: 'Not at all. With local computerized anesthesia and minimally invasive guided keyhole surgery, most patients experience less discomfort than a standard tooth extraction.'
      },
      {
        question: 'How long do dental implants last?',
        answer: 'With standard oral hygiene and regular 6-month check-ups, dental implants can last a lifetime. We provide manufacturer warranties on all top-tier implants.'
      },
      {
        question: 'What is the difference between All-on-4 and traditional dentures?',
        answer: 'All-on-4 provides a permanent, non-removable fixed bridge anchored into 4 strategic implants. Unlike dentures, it does not slip, does not cover your palate, and restores 95% of natural chewing force.'
      }
    ]
  },
  {
    id: 'veneers',
    slug: 'cosmetic-dentistry',
    title: 'Porcelain Veneers & Digital Smile Design',
    shortDesc: 'Handcrafted ultra-thin ceramic veneers and 3D digital smile simulation to transform color, shape, and alignment in just days.',
    longDesc: 'Classic Smiles is renowned as Mumbai’s premier aesthetic dental destination. Using Digital Smile Design (DSD), we digitally analyze your facial proportions, lips, and gum line to create a trial preview of your new smile before any treatment begins. Ultra-thin porcelain veneers (E-max / Feldspathic) are then crafted in our in-house milling lab.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Custom designed to match your facial shape and skin tone',
      'Stain-resistant high-translucency lithium disilicate (E.max) ceramics',
      'Minimal or zero tooth reduction options available',
      'Corrects chipped, gapped, discolored, or uneven teeth in 2 visits',
      'Realistic mock-up smile trial before final cementation'
    ],
    procedureSteps: [
      'Digital 3D Intraoral Scanning & High-definition aesthetic photography',
      'Virtual Digital Smile Design & 3D printed trial smile fitting',
      'Micro-preparation of enamel and digital impression',
      'Permanent precision bonding of bespoke porcelain veneers'
    ],
    duration: '3 to 5 days (2 clinic appointments)',
    suitableFor: ['Severely discolored teeth resistant to bleaching', 'Worn edges and chips', 'Gaps between front teeth', 'Slightly misaligned smile'],
    approxCostInr: '₹12,000 - ₹18,000 per veneer',
    approxCostUsd: '$150 - $220 (vs $1,200 - $2,500 in USA/UK)',
    faqs: [
      {
        question: 'Do veneers ruin your natural teeth?',
        answer: 'No. Our conservative aesthetic philosophy requires only 0.3mm to 0.5mm micro-contouring of the outer enamel, preserving the natural strength of the tooth.'
      },
      {
        question: 'Can veneers stain from coffee, wine, or curry?',
        answer: 'High-grade dental porcelain is non-porous and glass-like, making it completely impervious to food and beverage stains.'
      }
    ]
  },
  {
    id: 'invisalign',
    slug: 'orthodontics-invisalign',
    title: 'Invisalign & Clear Invisible Aligners',
    shortDesc: 'Virtually undetectable clear aligners that straighten crooked teeth and correct bites without metal brackets or wires.',
    longDesc: 'Achieve a straight, harmonious smile with discreet Invisalign clear aligners at Classic Smiles. Certified by Align Technology, our orthodontic team uses 3D iTero element scanners to map your entire treatment digitally from day one. You can remove your aligners while eating, brushing, and attending important events.',
    icon: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      '100% transparent and discreet — virtually invisible to others',
      'Removable for eating your favorite meals and easy oral hygiene',
      'No painful metal wires, poking brackets, or mouth ulcers',
      'See your completed 3D smile simulation before you start',
      'Fewer clinic visits needed compared to traditional braces'
    ],
    procedureSteps: [
      'Quick 5-minute 3D iTero digital scan (no goopy impression trays)',
      'ClinCheck 3D personalized tooth movement roadmap created by orthodontist',
      'Custom medical-grade SmartTrack aligner trays manufactured',
      'Switch to a new pair of aligners every 1-2 weeks until perfection'
    ],
    duration: '6 to 14 months (depending on complexity)',
    suitableFor: ['Crowded teeth', 'Open bites and deep overbites', 'Gaps and spacing', 'Adults wanting discreet orthodontic care'],
    approxCostInr: '₹95,000 - ₹2,20,000 complete treatment',
    approxCostUsd: '$1,150 - $2,650 (vs $5,000 - $8,000 in USA/UK)',
    faqs: [
      {
        question: 'How many hours a day do I need to wear aligners?',
        answer: 'For optimal results, aligners should be worn 20 to 22 hours per day, removing them only for meals and dental hygiene.'
      },
      {
        question: 'Am I too old for invisible aligners?',
        answer: 'Orthodontic tooth movement can be safely performed at any age as long as your gums and bone are healthy. A significant percentage of our aligner patients are between 30 and 65 years old.'
      }
    ]
  },
  {
    id: 'whitening',
    slug: 'teeth-whitening',
    title: 'Zoom Laser In-Office Teeth Whitening',
    shortDesc: 'Philips Zoom WhiteSpeed laser technology delivering up to 8 shades lighter teeth in a single 45-minute clinic session.',
    longDesc: 'Dull, yellowed, or tea/coffee-stained teeth can add years to your appearance. Classic Smiles offers authentic Philips Zoom Blue LED light-activated bleaching, clinically proven to brighten your smile up to 8 shades in under an hour while protecting enamel and minimizing post-treatment sensitivity.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Fast 45-minute treatment with instantaneous visible results',
      'Advanced Relief ACP gel formulation for zero to minimal sensitivity',
      'Safe on enamel and certified dental bleaching standards',
      'Includes customized take-home touch-up trays'
    ],
    procedureSteps: [
      'Oral examination and ultrasonic scaling to remove surface plaque',
      'Protective gingival barrier applied over gums and soft tissues',
      'Zoom hydrogen peroxide whitening gel applied to teeth',
      'Three 15-minute cycles under specialized blue wavelength LED light'
    ],
    duration: '45 to 60 minutes in a single visit',
    suitableFor: ['Coffee, tea, red wine, and tobacco stains', 'Age-related enamel yellowing', 'Pre-wedding or pre-event smile boost'],
    approxCostInr: '₹9,500 - ₹14,000 per session',
    approxCostUsd: '$115 - $170 (vs $500 - $800 in USA/UK)',
    faqs: [
      {
        question: 'Does teeth whitening damage the enamel?',
        answer: 'No. When conducted under dental supervision, professional whitening agents only target pigmented organic molecules within the enamel pores without altering the mineral structure.'
      }
    ]
  },
  {
    id: 'rct',
    slug: 'root-canal-treatment',
    title: 'Single-Sitting Painless Root Canal (RCT)',
    shortDesc: 'Microscope-assisted rotary endodontics preserving infected teeth painlessly in under 45 minutes.',
    longDesc: 'Gone are the days of tedious multi-visit painful root canals. At Classic Smiles Mumbai, our Endodontic specialists use state-of-the-art rotary nickel-titanium instruments, digital apex locators, and high-magnification dental loupes to cleanse, disinfect, and seal deep infections in a gentle single appointment.',
    icon: 'Activity',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Completed in a single comfortable 40-50 minute visit',
      'Painless local computerized anesthesia',
      'Apex locators ensure 99% precision canal disinfection',
      'Preserves your natural tooth root instead of extracting'
    ],
    procedureSteps: [
      'Targeted digital radiograph and computerized numbness',
      'Gentle opening and mechanical rotary cleaning of root canals',
      'Laser / ultrasonic antibacterial irrigation',
      'Biocompatible gutta-percha hermetic sealing and post-core buildup'
    ],
    duration: '45 minutes (Single sitting in 90% of cases)',
    suitableFor: ['Severe throbbing toothache', 'Sensitivity to hot and cold', 'Deep dental decay or cracked tooth'],
    approxCostInr: '₹5,500 - ₹8,500 per tooth',
    approxCostUsd: '$70 - $105 (vs $1,200 - $1,800 in USA/UK)',
    faqs: [
      {
        question: 'Do I really need a crown after a root canal?',
        answer: 'Yes, especially for back molars. Once the nerve and blood vessels are removed, the tooth structure becomes brittle. A custom zirconia crown reinforces the tooth and protects it from fractures.'
      }
    ]
  },
  {
    id: 'fullmouth',
    slug: 'full-mouth-rehabilitation',
    title: 'Full Mouth Rehabilitation & Zirconia Crowns',
    shortDesc: 'Complete reconstruction of worn, collapsed, or damaged bites to restore youthful chewing function and facial aesthetics.',
    longDesc: 'When multiple teeth are worn down due to grinding (bruxism), acid erosion, or widespread tooth loss, a coordinated full-mouth reconstruction restores the ideal jaw height, removes TMJ strain, and renews facial contour. Our in-house CAD/CAM lab crafts bio-inert, non-chipping monolithic zirconia crowns for lasting strength.',
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Relieves TMJ jaw pain, tension headaches, and neck stiffness',
      'Restores lost facial vertical height and youthful lower third of face',
      'Custom German Monolithic Zirconia with 15-year warranty',
      'Combined restorative, endodontic, and implant methodology'
    ],
    procedureSteps: [
      'Comprehensive jaw joint analysis, bite recording, and digital 3D scans',
      'Diagnostic wax-up and temporary bite elevation trial',
      'Preparation and CAD/CAM milling of high-strength zirconia restorations',
      'Definitive cementation and balanced occlusion verification'
    ],
    duration: '7 to 10 days',
    suitableFor: ['Severe tooth wear or short flat teeth', 'Multiple missing teeth and broken fillings', 'Chronic jaw soreness and bite collapse'],
    approxCostInr: 'Customized upon full consultation',
    approxCostUsd: 'Significant savings up to 75% compared to western clinics',
    faqs: [
      {
        question: 'What material is used for the crowns?',
        answer: 'We predominantly use CAD/CAM multi-layered monolithic zirconia and IPS e.max lithium disilicate, which provide unmatched fracture resistance and natural life-like light refraction.'
      }
    ]
  },
  {
    id: 'pediatric',
    slug: 'pediatric-dentistry',
    title: 'Pediatric & Kids Gentle Dentistry',
    shortDesc: 'Fear-free, cheerful pediatric dental care focused on preventive cavity care, habit breaking, and painless treatments.',
    longDesc: 'Our friendly pediatric dental team at Classic Smiles ensures children develop a positive relationship with dentistry from their earliest years. With child-adapted operatory suites, nitrous oxide conscious sedation (laughing gas) for anxious kids, and gentle preventive sealants, we safeguard growing smiles.',
    icon: 'Smile',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Child-friendly ambience and caring pediatric specialists',
      'Fluoride varnish & pit/fissure cavity sealants',
      'Painless restorative treatments and gentle extractions',
      'Habit correction for thumb sucking and tongue thrusting'
    ],
    procedureSteps: [
      'Gentle tell-show-do introductory exam',
      'Low-radiation digital imaging if necessary',
      'Painless treatment with kid-friendly terminology and distraction tech',
      'Post-visit reward and oral hygiene guidance'
    ],
    duration: '30 to 45 minutes',
    suitableFor: ['Toddlers, kids, and teens', 'Early childhood caries', 'Dental trauma during sports'],
    approxCostInr: '₹2,000 - ₹5,000',
    approxCostUsd: '$25 - $60',
    faqs: [
      {
        question: 'At what age should my child first visit the dentist?',
        answer: 'The Indian Dental Association and American Academy of Pediatric Dentistry recommend the first dental visit by the child’s first birthday or within 6 months of the first tooth erupting.'
      }
    ]
  },
  {
    id: 'laser',
    slug: 'laser-dentistry-gum-care',
    title: 'Laser Dentistry & Advanced Periodontics',
    shortDesc: 'Needle-free, bloodless soft-tissue diode laser therapies for gummy smiles, deep pocket cleansing, and cold sores.',
    longDesc: 'State-of-the-art biolase dental lasers eliminate the need for traditional scalpels and sutures in periodontal gum therapies. Whether contouring an uneven gummy smile for aesthetic perfection or eradicating deep bacterial colonies in periodontitis, lasers provide instantaneous clotting, no pain, and rapid tissue regeneration.',
    icon: 'Flame',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'No bleeding, scalpels, or uncomfortable sutures required',
      'Instantaneous cosmetic gum sculpting (gingivoplasty)',
      'Sterilizes periodontal pockets and stops gum bleeding',
      'Ultra-fast healing time within 24 to 48 hours'
    ],
    procedureSteps: [
      'Precision laser fiber application to affected gum margins',
      'Painless vaporization of inflamed tissue or excess gum line',
      'Laser bio-stimulation to boost natural collagen regeneration'
    ],
    duration: '20 to 30 minutes',
    suitableFor: ['Excessive gingival display (Gummy Smile)', 'Bleeding gums and pyorrhea', 'Dark pigmented gums needing laser depigmentation'],
    approxCostInr: '₹6,000 - ₹15,000',
    approxCostUsd: '$75 - $180',
    faqs: [
      {
        question: 'Does laser gum treatment cause post-operative pain?',
        answer: 'Because laser light gently seals nerve endings and blood vessels while operating, post-operative swelling and discomfort are virtually non-existent.'
      }
    ]
  }
];

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'bandra',
    name: 'Classic Smiles - Bandra West',
    neighborhood: 'Bandra West (Linking Road)',
    address: '2nd Floor, Landmark Heights, Near Khar Telephone Exchange, Off Linking Road, Bandra West, Mumbai 400050',
    landmark: 'Opposite Shoppers Stop / Khar Telephone Exchange',
    phone: '+91 98765 43210',
    secondaryPhone: '+91 98765 43210',
    email: 'bandra@classicsmiles.in',
    hours: 'Mon - Sat: 10:00 AM - 8:30 PM',
    sundayHours: 'Sunday: 10:30 AM - 2:00 PM (By Appointment)',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    mapsEmbedQuery: 'Classic+Smiles+Bandra+West+Mumbai',
    metroStation: 'Khar Road Railway Station (5 min) / Bandra Metro Line 2B',
    facilities: ['Dedicated VIP Dental Suite', 'iTero 3D Scanner', 'Valet Parking Available', 'Full Laser Operatory']
  },
  {
    id: 'juhu',
    name: 'Classic Smiles - Juhu',
    neighborhood: 'Juhu (JVPD Scheme)',
    address: '101, Sagar Fortune, Plot No. 12, JVPD Scheme, Near Chandan Cinema, Juhu, Mumbai 400049',
    landmark: 'Adjacent to Chandan Cinema & ISKCON Temple turn',
    phone: '+91 98765 43210',
    secondaryPhone: '+91 98765 43210',
    email: 'juhu@classicsmiles.in',
    hours: 'Mon - Sat: 10:00 AM - 8:30 PM',
    sundayHours: 'Sunday: By Prior Appointment',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    mapsEmbedQuery: 'Classic+Smiles+Juhu+Mumbai',
    metroStation: 'DN Nagar Metro Station (10 min) / Vile Parle Station',
    facilities: ['Digital Smile Design Studio', 'CAD/CAM In-House Lab', 'International Patient Lounge', 'Private Recovery Suite']
  },
  {
    id: 'andheri',
    name: 'Classic Smiles - Andheri West',
    neighborhood: 'Andheri West (Lokhandwala)',
    address: '304, Crystal Plaza, New Link Road, Opposite Infinity Mall, Lokhandwala Complex, Andheri West, Mumbai 400053',
    landmark: 'Opposite Infiniti Mall, New Link Road',
    phone: '+91 98765 43210',
    secondaryPhone: '+91 98765 43210',
    email: 'andheri@classicsmiles.in',
    hours: 'Mon - Sat: 10:00 AM - 8:30 PM',
    sundayHours: 'Sunday: 10:00 AM - 1:00 PM',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    mapsEmbedQuery: 'Classic+Smiles+Andheri+West+Mumbai',
    metroStation: 'D.N. Nagar Metro & Lokhandwala Metro Station',
    facilities: ['3D CBCT On-Site Scanner', 'Kids Pediatric Operatory', 'Wheelchair Accessible', 'Emergency Walk-in Bay']
  },
  {
    id: 'borivali',
    name: 'Classic Smiles - Borivali West',
    neighborhood: 'Borivali West (Shimpoli / Link Rd)',
    address: 'Shop 14-16, Sai Krupa Heights, Shimpoli Road, Near Ganjawala Lane, Borivali West, Mumbai 400092',
    landmark: 'Near Don Bosco High School & Shimpoli Signal',
    phone: '+91 98765 43210',
    secondaryPhone: '+91 98765 43210',
    email: 'borivali@classicsmiles.in',
    hours: 'Mon - Sat: 10:00 AM - 8:30 PM',
    sundayHours: 'Sunday: By Appointment',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    mapsEmbedQuery: 'Classic+Smiles+Borivali+West+Mumbai',
    metroStation: 'Borivali West Metro Line 2A & Borivali Railway Station',
    facilities: ['Digital X-Ray (RVG)', 'Specialist Orthodontic Bay', 'Senior Citizen Ground Floor Access']
  },
  {
    id: 'santacruz',
    name: 'Classic Smiles - Santacruz West',
    neighborhood: 'Santacruz West',
    address: 'Flat 102, Silver Arch, Tagore Road, Near Podar International School, Santacruz West, Mumbai 400054',
    landmark: 'Behind Podar International School',
    phone: '+91 98765 43210',
    secondaryPhone: '+91 98765 43210',
    email: 'santacruz@classicsmiles.in',
    hours: 'Mon - Sat: 10:00 AM - 8:30 PM',
    sundayHours: 'Sunday: Closed',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    mapsEmbedQuery: 'Classic+Smiles+Santacruz+West+Mumbai',
    metroStation: 'Santacruz Railway Station (3 min walking)',
    facilities: ['Microscopic Endodontics', 'Painless Injections Wand', 'Sedation Dentistry Bay']
  },
  {
    id: 'powai',
    name: 'Classic Smiles - Powai',
    neighborhood: 'Powai (Hiranandani Gardens)',
    address: 'Galleria Shopping Mall, 2nd Floor Unit 214, Hiranandani Gardens, Powai, Mumbai 400076',
    landmark: 'Galleria Shopping Mall, Central Avenue',
    phone: '+91 98765 43210',
    secondaryPhone: '+91 98765 43210',
    email: 'powai@classicsmiles.in',
    hours: 'Mon - Sat: 10:00 AM - 8:30 PM',
    sundayHours: 'Sunday: 11:00 AM - 3:00 PM',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
    mapsEmbedQuery: 'Classic+Smiles+Powai+Hiranandani+Mumbai',
    metroStation: 'Powai Lake / IIT Bombay Metro Line 6',
    facilities: ['Executive Corporate Dental Packages', 'Corporate Health Desk', 'Express Cleaning & Whitening Bar']
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-rahul-oza',
    name: 'Dr. Rahul Oza',
    role: 'Founder & Chief Dental Implantologist',
    qualification: 'BDS, MDS, Fellow ICOI (USA), Diplomat WCOI (Japan)',
    experience: '16+ Years Experience | Over 12,000 Implants Placed',
    bio: 'Dr. Rahul Oza is recognized as one of India’s foremost authorities in computer-guided implant dentistry and full-mouth aesthetic rehabilitation. Having trained in Germany, Switzerland, and the USA, he established Classic Smiles to bring ethical, world-class dental healthcare to Mumbai. He is a frequent keynote speaker at global implant congresses.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    specialties: ['Immediate Load All-on-4 / All-on-6', 'Computer-Guided Implant Surgery', 'Zygomatic & Complex Bone Grafts'],
    branches: ['Juhu', 'Bandra West']
  },
  {
    id: 'dr-palak-oza',
    name: 'Dr. Palak Oza',
    role: 'Aesthetic Dentistry & Smile Architect',
    qualification: 'BDS, Post-Grad in Aesthetic Dentistry (NYU, USA)',
    experience: '14+ Years Experience | 4,000+ Smile Transformations',
    bio: 'Specializing in Digital Smile Design and ultra-thin ceramic veneers, Dr. Palak combines clinical precision with an artist’s eye for facial harmony. She has crafted smiles for international models, business leaders, and overseas medical tourists.',
    image: 'https://images.unsplash.com/photo-1594824813689-5324b17b6be7?auto=format&fit=crop&w=600&q=80',
    specialties: ['Porcelain Veneers (E-max)', 'Digital Smile Design (DSD)', 'Biomimetic Tooth Restorations'],
    branches: ['Bandra West', 'Powai']
  },
  {
    id: 'dr-smriti-khanna',
    name: 'Dr. Smriti Khanna',
    role: 'Senior Orthodontist & Invisalign Diamond Provider',
    qualification: 'BDS, MDS (Orthodontics & Dentofacial Orthopedics)',
    experience: '11+ Years Experience | Certified Invisalign Specialist',
    bio: 'Dr. Smriti specializes in invisible aligner protocols and complex bite corrections for both adolescent and adult patients. Her digital-first treatment philosophy cuts treatment times significantly.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    specialties: ['Invisalign Clear Aligners', 'Lingual & Ceramic Braces', 'Surgical Orthodontics'],
    branches: ['Bandra West', 'Santacruz West', 'Andheri West']
  },
  {
    id: 'dr-amit-shah',
    name: 'Dr. Amit Shah',
    role: 'Microscopic Endodontist & Root Canal Specialist',
    qualification: 'BDS, MDS (Conservative Dentistry & Endodontics)',
    experience: '12+ Years Experience | 15,000+ Successful RCTs',
    bio: 'A pioneer in single-sitting painless root canals, Dr. Amit utilizes surgical dental operating microscopes to navigate microscopic calcified canals, saving teeth that others deem hopeless.',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    specialties: ['Single-Sitting Micro-Endodontics', 'Painless Rotary RCT', 'Re-treatment of Failed Root Canals'],
    branches: ['Juhu', 'Borivali West']
  }
];

export const GALLERY_CASES: GalleryCase[] = [
  {
    id: 'case-1',
    title: 'Full Arch All-on-4 Immediate Restoration',
    category: 'implants',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=700&q=80',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=700&q=80',
    description: 'Patient presented with severe generalized bone loss, failing mobile bridge, and inability to chew solid food. 4 Nobel Biocare implants placed with fixed hybrid prosthesis in 72 hours.',
    duration: '3 Days',
    ageGroup: '58 years, Male (NRI from London)'
  },
  {
    id: 'case-2',
    title: '10 Upper E.max Porcelain Veneers Makeover',
    category: 'veneers',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80',
    afterImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80',
    description: 'Correction of heavy tetracycline antibiotic staining, uneven midline, and chipped incisal edges. Digital Smile Design protocol followed by custom hand-layered porcelain veneers.',
    duration: '4 Days',
    ageGroup: '32 years, Female (Mumbai)'
  },
  {
    id: 'case-3',
    title: 'Comprehensive Invisalign Deep Bite & Crowding',
    category: 'aligners',
    beforeImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=80',
    afterImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80',
    description: 'Severe anterior mandibular crowding and 75% deep overbite corrected completely with 24 clear aligner stages. Non-extraction orthodontic protocol.',
    duration: '9 Months',
    ageGroup: '26 years, Male (Corporate Executive)'
  },
  {
    id: 'case-4',
    title: 'Zoom WhiteSpeed Laser In-Office Bleaching',
    category: 'whitening',
    beforeImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=700&q=80',
    afterImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80',
    description: 'Heavy smoker & coffee drinker wanting instant smile brightness for upcoming wedding. Upgraded from shade A3.5 to B1 in a single 45-minute clinic visit.',
    duration: '45 Minutes',
    ageGroup: '29 years, Female'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'David & Karen Mitchell',
    location: 'Manchester, United Kingdom',
    treatment: 'Full Mouth All-on-6 Implants & Zirconia Bridges',
    quote: 'In the UK, I was quoted £28,000 for full mouth implants. At Classic Smiles in Juhu, Dr. Rahul Oza delivered extraordinary German-grade work for less than £7,500! Their concierge booked our stay, arranged airport pick-up, and treated us like royalty.',
    rating: 5,
    date: 'February 2026',
    flag: '🇬🇧'
  },
  {
    id: 't-2',
    patientName: 'Priya Narang',
    location: 'Bandra West, Mumbai',
    treatment: 'Digital Smile Design & 8 E-Max Veneers',
    quote: 'I used to hide my smile behind my hand in photos because of chipped front teeth. Dr. Palak showed me a 3D simulation of my smile on the screen before touching a tooth. The final veneers are so natural that even my closest friends just thought I was glowing!',
    rating: 5,
    date: 'January 2026',
    flag: '🇮🇳'
  },
  {
    id: 't-3',
    patientName: 'Rohan Deshmukh',
    location: 'Dubai, UAE (NRI)',
    treatment: 'Invisalign Clear Aligners & Whitening',
    quote: 'Classic Smiles made my treatment seamless. I visited their Andheri clinic during my 2-week vacation to Mumbai, received all my aligner trays, and checked in with Dr. Smriti via virtual monitoring. Truly world-class digital dentistry.',
    rating: 5,
    date: 'March 2026',
    flag: '🇦🇪'
  },
  {
    id: 't-4',
    patientName: 'Susan Becker',
    location: 'California, USA',
    treatment: 'Single-Sitting RCT & Zirconia Crowns',
    quote: 'Cleanliness is my top priority. Walking into Classic Smiles Bandra was like walking into a luxury Beverly Hills clinic. 100% sterile, zero pain during the root canal, and my crown was ready in 24 hours thanks to their in-house lab.',
    rating: 5,
    date: 'November 2025',
    flag: '🇺🇸'
  }
];

export const TOURISM_SAVINGS_DATA = [
  {
    procedure: 'Single Dental Implant + Abutment & Crown',
    costUSA: '$3,500 - $4,800',
    costUK: '£2,400 - £3,200',
    costAus: 'A$4,500 - A$6,000',
    costClassicSmiles: '$450 - $650 (₹38,000 - ₹55,000)',
    savings: '82% - 87%'
  },
  {
    procedure: 'All-on-4 / Full Arch Fixed Implants (Per Jaw)',
    costUSA: '$24,000 - $32,000',
    costUK: '£15,000 - £20,000',
    costAus: 'A$28,000 - A$38,000',
    costClassicSmiles: '$4,200 - $5,500 (₹3,50,000 - ₹4,50,000)',
    savings: '78% - 84%'
  },
  {
    procedure: 'Porcelain Veneer (E-max / Zirconia per tooth)',
    costUSA: '$1,500 - $2,500',
    costUK: '£950 - £1,500',
    costAus: 'A$1,800 - A$2,400',
    costClassicSmiles: '$160 - $220 (₹13,500 - ₹18,000)',
    savings: '85% - 90%'
  },
  {
    procedure: 'Single Sitting Root Canal + Zirconia Crown',
    costUSA: '$1,800 - $2,600',
    costUK: '£1,100 - £1,600',
    costAus: 'A$2,200 - A$3,000',
    costClassicSmiles: '$140 - $200 (₹11,500 - ₹16,500)',
    savings: '88% - 92%'
  },
  {
    procedure: 'Zoom WhiteSpeed Laser In-Clinic Whitening',
    costUSA: '$600 - $900',
    costUK: '£450 - £700',
    costAus: 'A$750 - A$1,100',
    costClassicSmiles: '$120 - $160 (₹10,000 - ₹13,500)',
    savings: '75% - 82%'
  }
];

export const CLINIC_FAQS = [
  {
    category: 'General',
    question: 'How do I schedule an appointment at Classic Smiles?',
    answer: 'You can book online directly through our website, call our centralized helpline at +91 98765 43210, or WhatsApp our team. We coordinate your slot at whichever of our 6 Mumbai centers is closest to you.'
  },
  {
    category: 'General',
    question: 'Are Classic Smiles clinics ISO certified?',
    answer: 'Yes! All 6 Classic Smiles clinics in Mumbai adhere strictly to ISO 9001:2015 quality standards, utilizing hospital-grade Class-B autoclave vacuum sterilization, single-use disposables, and negative air filtration.'
  },
  {
    category: 'Treatments',
    question: 'Can I get dental implants if I have diabetes or osteoporosis?',
    answer: 'In the vast majority of cases, yes! As long as blood sugar levels are controlled (HbA1c monitoring), our computer-guided keyhole surgery protocol allows safe, predictable implant integration.'
  },
  {
    category: 'Treatments',
    question: 'How long do I need to stay in Mumbai for a full smile makeover or implants?',
    answer: 'For porcelain veneers or crowns, 4 to 5 days is sufficient. For immediate loading All-on-4 implants, a stay of 5 to 7 days enables surgical placement and temporary fixed teeth attachment.'
  },
  {
    category: 'Payment & Insurance',
    question: 'Do you offer 0% interest EMI payment plans and insurance support?',
    answer: 'Yes. We partner with leading healthcare finance providers (Bajaj Finserv, EarlySalary, CareHealth) to provide zero-interest monthly installment options. We also provide full documentation for overseas and domestic dental insurance reimbursement.'
  },
  {
    category: 'Dental Tourism',
    question: 'What assistance do you provide for international / NRI patients?',
    answer: 'Our dedicated International Patient Concierge arranges complimentary airport pickups, recommends vetted hotels adjacent to our Juhu/Bandra clinics, assists with medical visas, and coordinates sightseeing around Mumbai between visits.'
  }
];
