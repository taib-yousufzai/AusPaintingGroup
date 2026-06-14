import { createFileRoute } from "@tanstack/react-router";
import heroHouse from "@/assets/hero-house.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import projectHeritage from "@/assets/project-heritage.jpg";
import projectModern from "@/assets/project-modern.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrushWorks — Sydney House Painters | Free Quote" },
      { name: "description", content: "Expert Sydney painters. Interior, exterior, heritage and commercial painting. Free on-site quote within 48 hours." },
      { property: "og:title", content: "BrushWorks — Sydney House Painters" },
      { property: "og:description", content: "Expert painters. Flexible pricing. Any size job, big or small." },
    ],
  }),
  component: Index,
});

const services = [
  { img: serviceInterior, title: "Interior Painting", desc: "Walls, ceilings, trims and cabinetry — meticulous prep and clean lines for a finish that lasts." },
  { img: serviceExterior, title: "Exterior Painting", desc: "Weatherboard, render and brick. UV-stable, weather-tough coatings built for Australian conditions." },
  { img: serviceCommercial, title: "Commercial & Strata", desc: "Offices, retail, body-corporate and shared properties — scheduled around your operations." },
  { img: projectHeritage, title: "Heritage Restoration", desc: "Period-correct techniques for Federation, Victorian and Edwardian homes across Sydney." },
  { img: projectModern, title: "Pre-Sale & Rental Repaints", desc: "Fast turnarounds that maximise sale appeal and tenant-ready condition." },
  { img: serviceExterior, title: "Anti-Mould Treatments", desc: "Cleaning, treating and protective coatings that inhibit regrowth in damp Sydney homes." },
];

const reviews = [
  { name: "James R.", suburb: "City of Sydney", text: "Nick repainted our entire home — ceilings, walls, trims and front brick. Prep work was meticulous, colours came out exactly as we chose, and the crew left the place spotless every single day. Finished three days early." },
  { name: "Priya S.", suburb: "Vaucluse", text: "We needed a full exterior repaint before listing. BrushWorks turned it around in two weeks, beautifully. The home sold the following weekend." },
  { name: "Daniel M.", suburb: "Marrickville", text: "Honest pricing, no surprises, and the finish on our heritage trims is the best we’ve ever had. Couldn’t recommend Nick more." },
];

const faqs = [
  { q: "What’s the typical investment for painting a home in Sydney?", a: "Projects typically range from $5,000 to $80,000+ depending on size, finishes and scope. We provide detailed fixed-price quotes after an in-home consultation." },
  { q: "Can we stay in our home during the project?", a: "Yes. We work room-by-room with sealed work zones and low-odour materials, and coordinate around your routine, school runs and work-from-home." },
  { q: "How quickly can you start?", a: "Most projects start within 7–10 days. Standard homes take 3–4 weeks; express service can complete in 14 days." },
  { q: "Are you insured?", a: "Yes — $20M public liability and full workers compensation. Every job is fully covered, with documented protection of your furnishings." },
  { q: "Do you offer colour consultations?", a: "Every interior project includes a complimentary in-home colour consultation with a certified specialist, plus optional sample-room painting before full commitment." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Projects />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 font-bold text-lg tracking-tight">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--brand-dark)] text-[color:var(--brand-green)]">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21h16"/><path d="M6 21V9l6-5 6 5v12"/><path d="M10 21v-6h4v6"/></svg>
      </span>
      <span>
        Brush<span className="text-[color:var(--brand-green-deep)]">Works</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header id="top" className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#services" className="hover:text-[color:var(--brand-green-deep)]">Services</a>
          <a href="#projects" className="hover:text-[color:var(--brand-green-deep)]">Projects</a>
          <a href="#reviews" className="hover:text-[color:var(--brand-green-deep)]">Reviews</a>
          <a href="#faq" className="hover:text-[color:var(--brand-green-deep)]">FAQ</a>
          <a href="#contact" className="hover:text-[color:var(--brand-green-deep)]">Contact</a>
        </nav>
        <a href="tel:0401533408" className="hidden rounded-md bg-[color:var(--brand-green)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-dark)] shadow-sm transition hover:brightness-95 sm:inline-flex">
          Call 0401 533 408
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={heroHouse} alt="Freshly painted Sydney home" width={1920} height={1280} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[color:var(--brand-darker)]/90 via-[color:var(--brand-dark)]/75 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
        <div className="max-w-2xl text-white">
          <span className="inline-block rounded-full bg-[color:var(--brand-green)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-green)]">
            Sydney&apos;s Trusted House Painters
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Expert Painters. <span className="text-[color:var(--brand-green)]">Flexible Pricing.</span> Any Size Job, Big or Small.
          </h1>
          <p className="mt-5 text-base text-white/85 sm:text-lg">
            Free quote with owner Nick, master painter. On-site or video consultation, anywhere across Sydney metro — usually within 48 hours.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
            {["One room or full repaint", "Prices to suit all budgets", "$20M public liability cover", "Dulux & Taubmans premium paints"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--brand-green)] text-[color:var(--brand-dark)]">
                  <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor"><path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5A1 1 0 014.7 8.1l3.2 3.2 6.7-6.7a1 1 0 011.4 0z"/></svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-[color:var(--brand-green)] px-5 py-3 font-semibold text-[color:var(--brand-dark)] shadow-lg transition hover:brightness-95">
              Get a Free Painting Quote
            </a>
            <a href="tel:0401533408" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
              Call Nick &middot; 0401 533 408
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = ["Dulux Accredited", "Taubmans Approved", "$20M Insured", "Licensed NSW", "Google 5★ Verified"];
  return (
    <section className="border-y border-border bg-[color:var(--brand-darker)] text-white/80">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-xs font-semibold uppercase tracking-widest sm:text-sm">
        {items.map((i) => <span key={i}>{i}</span>)}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-green-deep)]">Our Services</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Sydney Painting Services, Done Properly — Whatever the Scale</h2>
        <p className="mt-4 text-muted-foreground">More than paint. Proper prep, clean lines and a finish that lasts. Premium coatings from Dulux, Taubmans, Wattyl and Solver.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-flex text-sm font-semibold text-[color:var(--brand-green-deep)] hover:underline">Get a free quote →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Free On-Site Quote", d: "We meet you, scope the job, and provide a clear written fixed price within 48 hours." },
    { n: "02", t: "Prep & Protect", d: "Floors, furniture and fixtures masked off. Surfaces sanded, filled, primed and ready." },
    { n: "03", t: "Paint & Finish", d: "Two coats of premium paint, clean lines, careful cut-ins — by tradespeople who care." },
    { n: "04", t: "Walk-Through", d: "Final inspection together. We don’t leave until you’re 100% happy with every wall." },
  ];
  return (
    <section className="bg-[color:var(--brand-dark)] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-green)]">How We Work</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">A Process Built On Prep, Not Shortcuts</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-3xl font-bold text-[color:var(--brand-green)]">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-white/75">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const items = [
    { img: projectHeritage, t: "Heritage Federation Restoration", l: "Woollahra" },
    { img: projectModern, t: "Waterfront Contemporary Repaint", l: "Vaucluse" },
    { img: serviceExterior, t: "Weatherboard Full Exterior", l: "Marrickville" },
  ];
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-green-deep)]">Recent Work</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Sydney Homes Transformed This Year</h2>
        </div>
        <a href="#contact" className="hidden text-sm font-semibold text-[color:var(--brand-green-deep)] hover:underline sm:inline">Start a colour consultation →</a>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((p) => (
          <figure key={p.t} className="group overflow-hidden rounded-xl">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={p.img} alt={p.t} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <figcaption className="mt-3">
              <div className="font-semibold">{p.t}</div>
              <div className="text-sm text-muted-foreground">{p.l}, NSW</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-green-deep)]">Reviews</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">What Sydney Homeowners Say</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.name} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="text-[color:var(--brand-green-deep)]">★★★★★</div>
              <p className="mt-3 text-sm leading-relaxed">“{r.text}”</p>
              <footer className="mt-4 text-sm font-semibold">
                {r.name} <span className="font-normal text-muted-foreground">— {r.suburb} · Google Verified ✓</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-green-deep)]">FAQ</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Your Painting Questions, Answered</h2>
      </div>
      <div className="mt-10 divide-y divide-border rounded-xl border border-border bg-card">
        {faqs.map((f) => (
          <details key={f.q} className="group p-6">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
              {f.q}
              <span className="text-[color:var(--brand-green-deep)] transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-[color:var(--brand-green)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-[color:var(--brand-dark)] sm:text-4xl">Get a Free Painting Quote Today</h2>
          <p className="mt-3 text-[color:var(--brand-dark)]/80">Free on-site assessment with owner Nick, usually within 48 hours. No pressure, just an honest fixed price.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="tel:0401533408" className="rounded-md bg-[color:var(--brand-dark)] px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110">Call 0401 533 408</a>
          <a href="mailto:nick@brushworks.example" className="rounded-md border-2 border-[color:var(--brand-dark)] px-6 py-3 font-semibold text-[color:var(--brand-dark)] transition hover:bg-[color:var(--brand-dark)] hover:text-white">Email Nick</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[color:var(--brand-darker)] py-12 text-sm text-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-white/60">Painting &amp; maintenance services across Sydney metro. Family-run, fully insured, and obsessed with the details.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Services</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="#services" className="hover:text-white">Interior Painting</a></li>
            <li><a href="#services" className="hover:text-white">Exterior Painting</a></li>
            <li><a href="#services" className="hover:text-white">Heritage Restoration</a></li>
            <li><a href="#services" className="hover:text-white">Commercial &amp; Strata</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="tel:0401533408" className="hover:text-white">0401 533 408</a></li>
            <li>Servicing all Sydney metro</li>
            <li>Mon–Sat, 7am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-xs text-white/40 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} BrushWorks Painting &amp; Maintenance. All rights reserved.
      </div>
    </footer>
  );
}
