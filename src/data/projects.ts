import projectHeritage from "@/assets/project-heritage.jpg";
import projectModern from "@/assets/project-modern.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";

export interface ProjectColor {
  name: string;
  brand: string;
  hex: string;
  area: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  suburb: string;
  location: string;
  img: string;
  duration: string;
  scope: string[];
  colors: ProjectColor[];
  challenge: string;
  solution: string;
  beforeAfterDescription: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    id: "woollahra-heritage",
    title: "Heritage Federation Restoration",
    suburb: "Woollahra",
    location: "Woollahra, NSW",
    img: projectHeritage,
    duration: "4 Weeks",
    scope: [
      "Removal of lead-based paint layers from timber windows",
      "Meticulous repair and filling of original lath-and-plaster walls",
      "Period-correct woodwork restoration and profile reproduction",
      "Intricate multi-color decorative scheme application on ornate cornices"
    ],
    colors: [
      { name: "Natural White", brand: "Dulux", hex: "#f3f2eb", area: "Main Walls" },
      { name: "Vivid White", brand: "Dulux", hex: "#ffffff", area: "Cornices & Ceiling Details" },
      { name: "Lexicon Half", brand: "Dulux", hex: "#e7e8e7", area: "Architraves & Skirtings" },
      { name: "Namadji", brand: "Dulux", hex: "#434646", area: "Front Entry Door Accent" }
    ],
    challenge: "The property featured multiple layers of unstable, lead-based paint dating back to the early 1900s. Ornate ceiling cornices had suffered water damage, threatening to lose their historic detail if sanded or scraped improperly. Original timber window sashes were stuck shut and deteriorated due to decades of paint buildup.",
    solution: "We deployed certified lead-abatement methods, chemical stripping, and specialized HEPA containment to strip the woodwork cleanly back to raw timber. Broken cornice plaster was stabilized and restored by hand using custom-cast plaster molds. Timber window sashes were fully removed, planed, serviced with new cords, primed, and coated in high-durability trim enamel.",
    beforeAfterDescription: "The exterior brickwork was fully washed and treated. Internally, the chalky plaster was sealed with specialty binding primers, and painted in a classic neutral palette. The home's heritage woodwork was restored to full operation and finished in high-gloss enamel, restoring its original 1908 grandeur."
  },
  {
    id: "vaucluse-waterfront",
    title: "Waterfront Contemporary Repaint",
    suburb: "Vaucluse",
    location: "Vaucluse, NSW",
    img: projectModern,
    duration: "3 Weeks",
    scope: [
      "High-pressure wash and anti-fungal washing of rendered masonry",
      "Filling and reinforcing structural movement cracks with elastomeric patch",
      "Application of UV-stable, salt-resistant exterior membrane paint",
      "Sanding, priming, and finishing of architectural steel and glass frames"
    ],
    colors: [
      { name: "Lexicon Quarter", brand: "Dulux", hex: "#f0f1f1", area: "Exterior Masonry Render" },
      { name: "Monument", brand: "Dulux", hex: "#414345", area: "Window Frames & Metal Screens" },
      { name: "Black", brand: "Dulux", hex: "#1a1a1a", area: "Structural Steel Supports" }
    ],
    challenge: "Located directly on the harbor, this modern residence was exposed to high salinity, coastal winds, and intense UV rays. The light grey render had begun chalking and developed hairline settlement cracks, which allowed damp air to penetrate. Architectural steel frames were starting to oxidize.",
    solution: "All surfaces were pressure-washed with fresh water and treated. We filled structural render cracks with dynamic elastomeric fillers that flex with thermal movement. To protect against sea spray, we applied two coats of premium Dulux AcraTex elastic membrane. Metal frames were scrubbed back, treated with rust converters, and coated in marine-grade polyurethane paint.",
    beforeAfterDescription: "The exterior finish was restored to a crisp, monolithic contemporary white that resists dirt pickup and water ingress. The structural steel accents now match the high-end window architecture, providing long-term corrosion resistance in a brutal coastal environment."
  },
  {
    id: "marrickville-weatherboard",
    title: "Weatherboard Full Exterior",
    suburb: "Marrickville",
    location: "Marrickville, NSW",
    img: serviceExterior,
    duration: "2 Weeks",
    scope: [
      "Thorough scraping and sanding of weathered weatherboard cladding",
      "Replacing rotten timber boards and structural details",
      "Full prime coat with oil-based undercoat for tannin blocking",
      "Two coats of Dulux Weathershield self-priming acrylic exterior paint"
    ],
    colors: [
      { name: "Whisper White", brand: "Dulux", hex: "#f4f3ed", area: "Weatherboards" },
      { name: "Domino", brand: "Dulux", hex: "#3e3d3c", area: "Gutters & Fascias" },
      { name: "Vivid White", brand: "Dulux", hex: "#ffffff", area: "Eaves & Trims" }
    ],
    challenge: "The weatherboards on the western side of the cottage had suffered extensive sun damage, resulting in deep wood peeling and split boards. Several boards around the base had developed timber rot from ground moisture and leaf buildup.",
    solution: "We replaced the rotted timber weatherboard sections with pre-primed cedar profiles. The weathered boards were extensively sanded with orbital sanders connected to dust extractors. We then applied a high-tannin blocking oil-based primer to prevent wood bleeding, followed by two heavy protective coats of Weathershield paint.",
    beforeAfterDescription: "The exterior went from highly weathered and peeling to a clean, weather-sealed satin finish. Rot issues were eradicated, timber borders were tightly caulked to prevent moisture ingress, and the modern white-on-charcoal palette significantly boosted the home's street appeal."
  }
];
