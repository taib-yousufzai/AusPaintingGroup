import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, Route, Routes } from "react-router-dom";

import { MobileNav } from "@/components/MobileNav";
import { BackToTop } from "@/components/BackToTop";
import { Toaster } from "@/components/ui/sonner";
import { HomePage } from "@/pages/HomePage";
import { ProjectPage } from "@/pages/ProjectPage";
import { ServicePage } from "@/pages/ServicePage";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="min-h-screen bg-[color:var(--brand-cream)] text-foreground">
      {/* Announcement Bar / Price Guarantee */}
      <div className="bg-[color:var(--brand-green)] text-[color:var(--brand-gold-soft)] py-2 text-center text-xs font-semibold tracking-wider px-4">
        ★ Best Price Guarantee: We will beat any written painting quote! ★
      </div>
      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} activeSection={activeSection} />
      <Header activeSection={activeSection} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      
      <Routes>
        <Route path="/" element={<HomePage onActiveSectionChange={setActiveSection} />} />
        <Route path="/project/:projectId" element={<ProjectPage />} />
        <Route path="/service/:serviceId" element={<ServicePage />} />
      </Routes>

      <Footer />
      <BackToTop />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}

// ── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 text-lg tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--brand-green)] text-[color:var(--brand-gold)]">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 21h16"/><path d="M6 21V9l6-5 6 5v12"/><path d="M10 21v-6h4v6"/>
        </svg>
      </span>
      <span className="font-black uppercase tracking-[0.02em]">
        Aus Painting<span className="text-[color:var(--brand-gold)]"> Group</span>
      </span>
    </Link>
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
              href={`/#${s}`}
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
          <a href="tel:+61431632348" className="hidden rounded-full bg-[color:var(--brand-green)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-gold-soft)] shadow-[var(--shadow-gold)] transition hover:brightness-110 sm:inline-flex">
            Call 0431 632 348
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
            <li><a href="/#services" className="hover:text-white">Interior Painting</a></li>
            <li><a href="/#services" className="hover:text-white">Exterior Painting</a></li>
            <li><a href="/#services" className="hover:text-white">Heritage Restoration</a></li>
            <li><a href="/#services" className="hover:text-white">Commercial &amp; Strata</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-2">
            <li><a href="tel:+61431632348" className="hover:text-white">0431 632 348</a></li>
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
