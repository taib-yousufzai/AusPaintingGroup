import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import heroHouse from "@/assets/hero-house.jpg";
import serviceInterior from "@/assets/service-interior.jpg";
import serviceExterior from "@/assets/service-exterior.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import projectHeritage from "@/assets/project-heritage.jpg";
import projectModern from "@/assets/project-modern.jpg";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MobileNav } from "@/components/MobileNav";
import { QuoteForm } from "@/components/QuoteForm";
import { BackToTop } from "@/components/BackToTop";
import { Toaster } from "@/components/ui/sonner";

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
  { name: "Priya S.", suburb: "Vaucluse", text: "We needed a full exterior repaint before listing. Aus Painting Group turned it around in two weeks, beautifully. The home sold the following weekend." },
  { name: "Daniel M.", suburb: "Marrickville", text: "Honest pricing, no surprises, and the finish on our heritage trims is the best we've ever had. Couldn't recommend Nick more." },
];

const faqs = [
  { q: "What's the typical investment for painting a home in Sydney?", a: "Projects typically range from $5,000 to $80,000+ depending on size, finishes and scope. We provide detailed fixed-price quotes after an in-home consultation." },
  { q: "Can we stay in our home during the project?", a: "Yes. We work room-by-room with sealed work zones and low-odour materials, and coordinate around your routine, school runs and work-from-home." },
  { q: "How quickly can you start?", a: "Most projects start within 7–10 days. Standard homes take 3–4 weeks; express service can complete in 14 days." },
  { q: "Are you insured?", a: "Yes — $20M public liability and full workers compensation. Every job is fully covered, with documented protection of your furnishings." },
  { q: "Do you offer colour consultations?", a: "Every interior project includes a complimentary in-home colour consultation with a certified specialist, plus optional sample-room painting before full commitment." },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // ── Refs for entrance animations ──────────────────────────────────────────
  // Single-element refs
  const heroRef = useRef<HTMLElement>(null);
  const trustBarRef = useRef<HTMLElement>(null);
  const servicesHeadingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  // Array refs — populated by child components via callback refs
  const serviceCardRefs = useRef<(HTMLElement | null)[]>([]);
  const processStepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projectCardRefs = useRef<(HTMLElement | null)[]>([]);
  const reviewCardRefs = useRef<(HTMLElement | null)[]>([]);
  const faqItemRefs = useRef<(HTMLDetailsElement | null)[]>([]);

  // A single stable ref whose .current is a getter function.
  // The hook calls this inside useEffect (after mount) so all callback refs are populated.
  const getAnimateElements = useRef<() => (Element | null)[]>(() => [
    heroRef.current,
    trustBarRef.current,
    servicesHeadingRef.current,
    ...serviceCardRefs.current,
    ...processStepRefs.current,
    ...projectCardRefs.current,
    ...reviewCardRefs.current,
    ...faqItemRefs.current,
    ctaRef.current,
  ]);

  const activeSection = useScrollAnimation(
    getAnimateElements,
    ["services", "projects", "reviews", "faq", "contact"],
  );

  return (
    <div className="min-h-screen bg-[color:var(--brand-cream)] text-foreground">
      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} activeSection={activeSection} />
      <Header activeSection={activeSection} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Hero heroRef={heroRef} />
      <TrustBar trustBarRef={trustBarRef} />
      <Services
        servicesHeadingRef={servicesHeadingRef}
        serviceCardRefs={serviceCardRefs}
      />
      <Process processStepRefs={processStepRefs} />
      <Projects projectCardRefs={projectCardRefs} />
      <Reviews reviewCardRefs={reviewCardRefs} />
      <FAQ faqItemRefs={faqItemRefs} />
      <CTA ctaRef={ctaRef} />
      <Footer />
      <BackToTop />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}

// ── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 text-lg tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--brand-green)] text-[color:var(--brand-gold)]">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 21h16"/><path d="M6 21V9l6-5 6 5v12"/><path d="M10 21v-6h4v6"/>
        </svg>
      </span>
      <span className="font-black uppercase tracking-[0.02em]">
        Aus Painting<span className="text-[color:var(--brand-gold)]"> Group</span>
      </span>
    </a>
  );
}

// ── Header ───────────────────────────────────────────────────────────────────
interface HeaderProps {
  activeSection: string;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

function Header({ activeSection, mobileOpen, setMobileOpen }: HeaderProps) {
  return (
    <header id="top" className="sticky top-0 z-40 border-b border-[color:var(--brand-green)]/10 bg-[color:var(--brand-cream)]/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-widest md:flex">
          {["services", "projects", "reviews", "faq", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`transition hover:text-[color:var(--brand-green)] ${
                activeSection === s
                  ? "text-[color:var(--brand-green)] font-semibold"
                  : "text-[color:var(--brand-darker)]/70"
              }`}
            >
              {s}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:PHONE_NUMBER" className="hidden rounded-full bg-[color:var(--brand-green)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-gold-soft)] shadow-[var(--shadow-gold)] transition hover:brightness-110 sm:inline-flex">
            Call [PHONE_NUMBER]
          </a>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            className="grid h-10 w-10 place-items-center rounded-md text-[color:var(--brand-darker)] transition hover:bg-[color:var(--brand-green)]/10 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
interface HeroProps {
  heroRef: React.RefObject<HTMLElement | null>;
}

function Hero({ heroRef }: HeroProps) {
  return (
    <section
      ref={heroRef}
      className="animate-on-scroll mx-auto max-w-7xl px-4 pt-8 pb-12 sm:px-6 lg:px-8 lg:pt-12"
    >
      <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-5">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--brand-green)] p-8 text-[color:var(--brand-gold-soft)] shadow-[var(--shadow-elegant)] sm:p-10 lg:col-span-8 lg:row-span-1 lg:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[color:var(--brand-gold)]/15 blur-3xl" />
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-gold)]/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-gold)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)]" /> Sydney&apos;s Master Painters
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-[64px]">
            Painted with the<br/>care of a craftsman.<br/>
            <span className="text-[color:var(--brand-gold)]">Priced for the real world.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
            A free, no-pressure quote with owner Nick — usually within 48 hours, anywhere across Sydney metro.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-gold)] px-6 py-3 font-semibold text-[color:var(--brand-darker)] shadow-[var(--shadow-gold)] transition hover:brightness-105">
              Get a Free Quote →
            </a>
            <a href="tel:PHONE_NUMBER" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-gold)]/40 px-6 py-3 font-semibold text-[color:var(--brand-gold-soft)] transition hover:bg-white/5">
              Call Nick · [PHONE_NUMBER]
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)] lg:col-span-4 lg:row-span-2">
          <img src={heroHouse} alt="Freshly painted Sydney home" width={1280} height={1920} className="h-72 w-full object-cover lg:h-full" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--brand-darker)]/85 to-transparent p-6">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-gold)]">Featured project</div>
            <div className="mt-1 font-semibold text-white">Heritage repaint · Woollahra</div>
          </div>
        </div>

        {[
          { k: "12+", l: "Years painting Sydney" },
          { k: "$20M", l: "Public liability cover" },
          { k: "48h", l: "Average quote turnaround" },
          { k: "5.0★", l: "Google verified average" },
        ].map((s) => (
          <div key={s.l} className="rounded-3xl border border-[color:var(--brand-green)]/10 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="text-3xl font-extrabold text-[color:var(--brand-green)] sm:text-4xl">{s.k}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--muted-foreground)]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── TrustBar ─────────────────────────────────────────────────────────────────
interface TrustBarProps {
  trustBarRef: React.RefObject<HTMLElement | null>;
}

function TrustBar({ trustBarRef }: TrustBarProps) {
  const items = ["Dulux Accredited", "Taubmans Approved", "$20M Insured", "Licensed NSW", "Google 5★ Verified"];
  return (
    <section
      ref={trustBarRef}
      className="animate-on-scroll border-y border-[color:var(--brand-green)]/10 bg-[color:var(--brand-cream)]"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-green)]/70 sm:text-xs">
        {items.map((i) => <span key={i} className="flex items-center gap-3">{i}<span className="hidden h-1 w-1 rounded-full bg-[color:var(--brand-gold)] sm:inline-block last:hidden" /></span>)}
      </div>
    </section>
  );
}

// ── Services ─────────────────────────────────────────────────────────────────
interface ServicesProps {
  servicesHeadingRef: React.RefObject<HTMLDivElement | null>;
  serviceCardRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

function Services({ servicesHeadingRef, serviceCardRefs }: ServicesProps) {
  const spans = [
    "lg:col-span-4 lg:row-span-2",
    "lg:col-span-2",
    "lg:col-span-2",
    "lg:col-span-3",
    "lg:col-span-3",
    "lg:col-span-6",
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div
        ref={servicesHeadingRef}
        className="animate-on-scroll flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">— Our Services</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Done properly,<br/>whatever the scale.</h2>
        </div>
        <p className="max-w-sm text-[color:var(--muted-foreground)]">More than paint. Proper prep, clean lines and a finish built to last — using premium coatings from Dulux, Taubmans, Wattyl and Solver.</p>
      </div>

      <div className="mt-12 grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => {
          const big = i === 0;
          const wide = i === 5;
          return (
            <article
              key={s.title}
              ref={(el) => { serviceCardRefs.current[i] = el; }}
              className={`animate-on-scroll group relative overflow-hidden rounded-3xl border border-[color:var(--brand-green)]/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] ${spans[i]}`}
              style={{ "--stagger-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${big || wide ? "opacity-90" : "opacity-30 group-hover:opacity-60"}`}
              />
              <div className={`absolute inset-0 ${big || wide ? "bg-gradient-to-t from-[color:var(--brand-darker)]/85 via-[color:var(--brand-darker)]/30 to-transparent" : "bg-gradient-to-t from-white via-white/85 to-white/40"}`} />
              <div className="relative flex h-full flex-col justify-end p-6">
                <h3 className={`text-xl font-bold ${big || wide ? "text-white" : "text-[color:var(--brand-darker)]"} ${big ? "sm:text-3xl" : ""}`}>{s.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${big || wide ? "text-white/80" : "text-[color:var(--muted-foreground)]"}`}>{s.desc}</p>
                <a href="#contact" className={`mt-4 inline-flex text-sm font-semibold ${big || wide ? "text-[color:var(--brand-gold)]" : "text-[color:var(--brand-green)]"}`}>
                  Get a free quote →
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

// ── Process ──────────────────────────────────────────────────────────────────
interface ProcessProps {
  processStepRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

function Process({ processStepRefs }: ProcessProps) {
  const steps = [
    { n: "01", t: "Free On-Site Quote", d: "We meet you, scope the job, and provide a clear written fixed price within 48 hours." },
    { n: "02", t: "Prep & Protect", d: "Floors, furniture and fixtures masked off. Surfaces sanded, filled, primed and ready." },
    { n: "03", t: "Paint & Finish", d: "Two coats of premium paint, clean lines, careful cut-ins — by tradespeople who care." },
    { n: "04", t: "Walk-Through", d: "Final inspection together. We don't leave until you're 100% happy with every wall." },
  ];
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-darker)] py-20 text-white">
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[color:var(--brand-green)]/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[color:var(--brand-gold)]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">— How We Work</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">A process built on prep, not shortcuts.</h2>
          </div>
          <p className="text-white/70">Every project follows the same four-step rhythm. No surprises, no missed details, no leaving until you&apos;re happy.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              ref={(el) => { processStepRefs.current[i] = el; }}
              className="animate-on-scroll group relative bg-[color:var(--brand-darker)] p-8 transition hover:bg-[color:var(--brand-green)]/40"
              style={{ "--stagger-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="font-display text-5xl font-black text-[color:var(--brand-gold)]">{s.n}</div>
              <h3 className="mt-6 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Projects ─────────────────────────────────────────────────────────────────
interface ProjectsProps {
  projectCardRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

function Projects({ projectCardRefs }: ProjectsProps) {
  const items = [
    { img: projectHeritage, t: "Heritage Federation Restoration", l: "Woollahra", span: "lg:col-span-7 lg:row-span-2" },
    { img: projectModern, t: "Waterfront Contemporary Repaint", l: "Vaucluse", span: "lg:col-span-5" },
    { img: serviceExterior, t: "Weatherboard Full Exterior", l: "Marrickville", span: "lg:col-span-5" },
  ];
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">— Recent Work</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">Sydney homes,<br/>transformed this year.</h2>
        </div>
        <a href="#contact" className="hidden rounded-full border border-[color:var(--brand-green)]/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-green)] hover:bg-[color:var(--brand-green)] hover:text-white sm:inline-flex">Start a consultation →</a>
      </div>
      <div className="mt-10 grid auto-rows-[minmax(260px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {items.map((p, i) => (
          <figure
            key={p.t}
            ref={(el) => { projectCardRefs.current[i] = el; }}
            className={`animate-on-scroll group relative overflow-hidden rounded-3xl shadow-sm ${p.span}`}
            style={{ "--stagger-delay": `${i * 80}ms` } as React.CSSProperties}
          >
            <img src={p.img} alt={p.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-darker)]/85 via-[color:var(--brand-darker)]/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">{p.l}, NSW</div>
              <div className="mt-1 text-lg font-bold sm:text-xl">{p.t}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

// ── Reviews ──────────────────────────────────────────────────────────────────
interface ReviewsProps {
  reviewCardRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

function Reviews({ reviewCardRefs }: ReviewsProps) {
  return (
    <section id="reviews" className="bg-[color:var(--brand-cream)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">— Reviews</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">What Sydney<br/>homeowners say.</h2>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <blockquote
              key={r.name}
              ref={(el) => { reviewCardRefs.current[i] = el; }}
              className={`animate-on-scroll rounded-3xl border border-[color:var(--brand-green)]/10 bg-white p-8 shadow-sm ${i === 1 ? "lg:translate-y-6 bg-[color:var(--brand-green)] text-white border-transparent" : ""}`}
              style={{ "--stagger-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="text-[color:var(--brand-gold)]">★★★★★</div>
              <p className={`mt-4 text-base leading-relaxed ${i === 1 ? "text-white/90" : "text-[color:var(--brand-darker)]/85"}`}>&ldquo;{r.text}&rdquo;</p>
              <footer className={`mt-6 text-sm font-semibold ${i === 1 ? "text-white" : "text-[color:var(--brand-darker)]"}`}>
                {r.name}
                <span className={`block font-normal ${i === 1 ? "text-white/60" : "text-[color:var(--muted-foreground)]"}`}>{r.suburb} · Google Verified ✓</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────────
interface FAQProps {
  faqItemRefs: React.MutableRefObject<(HTMLDetailsElement | null)[]>;
}

function FAQ({ faqItemRefs }: FAQProps) {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">— FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Your painting questions, answered.</h2>
          <p className="mt-4 text-[color:var(--muted-foreground)]">Can&apos;t find what you&apos;re after? Call Nick directly — happy to help.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              ref={(el) => { faqItemRefs.current[i] = el; }}
              className="animate-on-scroll group rounded-2xl border border-[color:var(--brand-green)]/10 bg-white p-6 shadow-sm open:shadow-md"
              style={{ "--stagger-delay": `${i * 60}ms` } as React.CSSProperties}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[color:var(--brand-darker)]">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color:var(--brand-green)] text-[color:var(--brand-gold-soft)] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted-foreground)]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ──────────────────────────────────────────────────────────────────────
interface CTAProps {
  ctaRef: React.RefObject<HTMLElement | null>;
}

function CTA({ ctaRef }: CTAProps) {
  return (
    <section
      id="contact"
      ref={ctaRef}
      className="animate-on-scroll mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--brand-green)] p-10 text-[color:var(--brand-gold-soft)] shadow-[var(--shadow-elegant)] sm:p-16">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[color:var(--brand-gold)]/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[color:var(--brand-gold)]/10 blur-3xl" />
        <div className="relative">
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-gold)]">— Free Painting Quote</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Let&apos;s talk about<br/>your project.</h2>
            <p className="mt-4 max-w-xl text-white/75">Free on-site assessment with owner Nick, usually within 48 hours. No pressure — just an honest fixed price.</p>
          </div>
          {/* Quote form above the call/email buttons */}
          <div className="mb-8 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <QuoteForm />
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:PHONE_NUMBER" className="rounded-full bg-[color:var(--brand-gold)] px-6 py-3 font-semibold text-[color:var(--brand-darker)] shadow-[var(--shadow-gold)] transition hover:brightness-105">Call [PHONE_NUMBER]</a>
            <a href="mailto:EMAIL_ADDRESS" className="rounded-full border border-[color:var(--brand-gold)]/40 px-6 py-3 font-semibold text-[color:var(--brand-gold-soft)] transition hover:bg-white/10">Email us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[color:var(--brand-darker)] py-14 text-sm text-white/70">
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
            <li><a href="tel:PHONE_NUMBER" className="hover:text-white">[PHONE_NUMBER]</a></li>
            <li>Servicing all Sydney metro</li>
            <li>Mon–Sat, 7am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-xs text-white/40 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Aus Painting Group. All rights reserved.
      </div>
    </footer>
  );
}
