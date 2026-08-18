import serviceInterior from "@/assets/service-interior.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import projectHeritage from "@/assets/project-heritage.jpg";
import projectModern from "@/assets/project-modern.jpg";

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  summary: string;
  img: string;
  intro: string;
  process: ServiceStep[];
  highlights: string[];
  coatingsUsed: string[];
  relatedProjectId?: string; // Links to case studies
}

export const serviceDetails: ServiceDetail[] = [
  {
    id: "interior-painting",
    title: "Interior Painting",
    summary: "Walls, ceilings, trims and cabinetry — meticulous prep and clean lines for a finish that lasts.",
    img: serviceInterior,
    intro: "Transforming the interior of your home requires an absolute obsession with detail. We treat your home like our own, ensuring all furniture is completely protected and surfaces are perfectly prepared before we open a single paint can. From crisp ceiling cuts to ultra-smooth woodwork enamel finishes, we deliver a beautiful, long-lasting finish.",
    process: [
      { title: "Protect & Mask", desc: "We cover all flooring with drop sheets and wrap furniture in protective plastic. High-tack painters tape is applied along trims to guarantee razor-sharp lines." },
      { title: "Prep & Repair", desc: "Plaster gaps, dents, and cracks are filled with high-grade fillers. We sand all surfaces flat to ensure maximum adhesion and a smooth finish." },
      { title: "Premium Finish", desc: "We apply a sealing base coat followed by two coats of premium low-odor washable wash-and-wear paint on walls, and hard-wearing enamel on high-traffic trims." }
    ],
    highlights: [
      "Low-VOC, low-odor paints suitable for asthma and allergy sufferers",
      "Complimentary in-home color consultation with certified consultants",
      "Woodwork repairs, trim sanding, and skirting board restoration",
      "Flawless clean-up — your home is left spotless at the end of each day"
    ],
    coatingsUsed: ["Dulux Wash&Wear", "Dulux Aquanamel", "Taubmans Easycoat"],
    relatedProjectId: "woollahra-heritage"
  },
  {
    id: "exterior-painting",
    title: "Exterior Painting",
    summary: "Weatherboard, render and brick. UV-stable, weather-tough coatings built for Australian conditions.",
    img: serviceExterior,
    intro: "Australian weather is notoriously harsh. Intense UV rays, torrential storms, and coastal sea spray can quickly degrade external paint layers, leading to structural rotting, peeling, and dampness. Our exterior painting service is designed to shield your home from the elements while providing stunning curb appeal.",
    process: [
      { title: "Power Wash & Clean", desc: "We pressure wash all walls to remove dirt, mold, salt residue, and peeling paint, ensuring a completely clean foundation." },
      { title: "Sanding & Patching", desc: "All loose timber fiber is sanded smooth, rotted sections are replaced, and masonry cracks are reinforced with flexible elastomeric compounds." },
      { title: "Weatherproof Coating", desc: "Application of premium self-priming acrylic external paint, engineered to flex under thermal movement and resist cracking and fading." }
    ],
    highlights: [
      "Elastomeric coatings that flex to prevent masonry cracks from reappearing",
      "Full scaffold setup and safe high-access painting work",
      "High tannin blocking base coats on weathered weatherboards",
      "UV-stable formulations designed specifically for the Sydney sun"
    ],
    coatingsUsed: ["Dulux Weathershield", "Taubmans All Weather", "Wattyl Solagard"],
    relatedProjectId: "marrickville-weatherboard"
  },
  {
    id: "commercial-strata",
    title: "Commercial & Strata",
    summary: "Offices, retail, body-corporate and shared properties — scheduled around your operations.",
    img: serviceCommercial,
    intro: "We understand that commercial and body-corporate painting projects require careful planning, clear communication, and minimum disruption. Whether it's an office fit-out, retail shopfront, or strata building repaint, we coordinate around your business hours and body-corporate requirements.",
    process: [
      { title: "Detailed Planning", desc: "We coordinate with strata managers or operations staff to create a phase-by-phase schedule that avoids business interruptions." },
      { title: "Safety & Compliance", desc: "Full risk assessment, clear signage, barricades, and scaffold setup adhering to NSW work safety standards." },
      { title: "Efficient Execution", desc: "Large, professional crews deployed to execute high-quality painting fast and within project budgets." }
    ],
    highlights: [
      "Out-of-hours painting (nights/weekends) to minimize disruption",
      "Full public liability insurance cover ($20 Million)",
      "Adherence to strict body-corporate guidelines and building regulations",
      "Durable, scuff-resistant paint coatings for high-foot-traffic zones"
    ],
    coatingsUsed: ["Dulux Professional", "Taubmans Professional", "Solver Master"],
    relatedProjectId: "vaucluse-waterfront"
  },
  {
    id: "heritage-restoration",
    title: "Heritage Restoration",
    summary: "Period-correct techniques for Federation, Victorian and Edwardian homes across Sydney.",
    img: projectHeritage,
    intro: "Restoring a period property requires deep historical appreciation and specialized tradesmanship. We respect the character of Sydney's heritage architecture, using classic techniques to preserve original features while applying modern protective coatings that stand the test of time.",
    process: [
      { title: "Lead Paint Management", desc: "Safe, chemical stripping and negative-pressure HEPA sanding to remove historical lead layers without dust dispersion." },
      { title: "Carpentry Restoration", desc: "Repairing or replacing rotted timber fretwork, fascia trim moldings, and double-hung sash windows using period-correct shapes." },
      { title: "Authentic Paint Schemes", desc: "Consulting historical color charts to map color schemes matching the exact architectural period of the home." }
    ],
    highlights: [
      "Certified lead paint removal and containment specialists",
      "Hand restoration of ornate ceiling plaster, roses, and cornices",
      "Full window sash cord and weight replacement",
      "Traditional oil and modern water-based enamel trim paint applications"
    ],
    coatingsUsed: ["Dulux Weathershield Gloss", "Dulux Aquanamel Semigloss", "Traditional Linseed Primers"],
    relatedProjectId: "woollahra-heritage"
  },
  {
    id: "pre-sale-rental",
    title: "Pre-Sale & Rental Repaints",
    summary: "Fast turnarounds that maximise sale appeal and tenant-ready condition.",
    img: projectModern,
    intro: "First impressions are crucial in the competitive Sydney property market. A fresh, modern, light-filled repaint is the highest-return investment a homeowner or landlord can make prior to listing. We prioritize speed, efficiency, and styling palettes to maximize your sale value.",
    process: [
      { title: "Strategic Color Choice", desc: "We select neutral, bright color palettes (like Lexicon Quarter) that visually expand space and appeal to the widest buyer demographic." },
      { title: "Express Preparation", desc: "Sanding back only what's necessary to create a clean surface, and patching up visible cosmetic flaws on walls and doors fast." },
      { title: "Rapid Two-Coat Application", desc: "Coordinating multiple painters on-site to finish a standard 3-bedroom home inside 3–4 days." }
    ],
    highlights: [
      "Express booking priority to match tight real estate campaigns",
      "Palette styling to match staging furniture themes",
      "Affordable pricing tier balancing speed, cost, and cosmetic finish",
      "Full window, door, and ceiling touch-ups to eliminate dark spots"
    ],
    coatingsUsed: ["Dulux Wash&Wear Matte", "Taubmans Professional", "Solver Master Matt"],
    relatedProjectId: "vaucluse-waterfront"
  },
  {
    id: "anti-mould-treatment",
    title: "Anti-Mould Treatments",
    summary: "Cleaning, treating and protective coatings that inhibit regrowth in damp Sydney homes.",
    img: serviceExterior,
    intro: "Mold is a major health hazard and looks unsightly. It thrives in high-humidity areas, subfloors, and shaded external brickwork across Sydney. Simply painting over mold does not fix the problem; it will feed on the paint and reappear. Our specialized service treats the root cause and encapsulates the surface to stop mold forever.",
    process: [
      { title: "Sterilization Wash", desc: "We spray and scrub walls with commercial-grade mold-killing chemicals that destroy spores inside the plaster structure." },
      { title: "Sanitary Sealing", desc: "Application of a mold-resistant, vapor-barrier primer that seals in old stains and blocks damp bleeding." },
      { title: "Anti-Microbial Paint", desc: "Finished with premium topcoats formulated with active fungicides that resist damp environments." }
    ],
    highlights: [
      "Eradicates dangerous black mold spores, improving indoor air safety",
      "Ideal for damp basements, bathrooms, kitchens, and south-facing brick walls",
      "Stain-blocking sealers that cover ugly water spots and mold stains",
      "Long-term written guarantee against mold re-emergence in treated areas"
    ],
    coatingsUsed: ["Dulux Precision Stain Blocker", "Dulux Wash&Wear + Plus Anti-Mould", "Zinsser Perma-White"],
    relatedProjectId: "marrickville-weatherboard"
  }
];
