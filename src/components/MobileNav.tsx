import { Sheet, SheetContent } from "@/components/ui/sheet";

const NAV_LINKS = ["services", "projects", "reviews", "faq", "contact"] as const;

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeSection: string;
}

export function MobileNav({ open, onOpenChange, activeSection }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex w-full max-w-xs flex-col gap-8 pt-8">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-lg tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
          onClick={() => onOpenChange(false)}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[color:var(--brand-green)] text-[color:var(--brand-gold)]">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 21h16" />
              <path d="M6 21V9l6-5 6 5v12" />
              <path d="M10 21v-6h4v6" />
            </svg>
          </span>
          <span className="font-black uppercase tracking-[0.02em]">
            Aus Painting<span className="text-[color:var(--brand-gold)]"> Group</span>
          </span>
        </a>

        {/* Nav links */}
        <nav className="flex flex-col gap-4">
          {NAV_LINKS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => onOpenChange(false)}
              className={`text-base font-medium uppercase tracking-widest transition hover:text-[color:var(--brand-green)] ${
                activeSection === section
                  ? "text-[color:var(--brand-green)] font-semibold"
                  : "text-[color:var(--brand-darker)]/70"
              }`}
            >
              {section}
            </a>
          ))}
        </nav>

        {/* Call CTA */}
        <a
          href="tel:PHONE_NUMBER"
          className="mt-auto rounded-full bg-[color:var(--brand-green)] px-5 py-3 text-center text-sm font-semibold text-[color:var(--brand-gold-soft)] shadow-[var(--shadow-gold)] transition hover:brightness-110"
        >
          Call [PHONE_NUMBER]
        </a>
      </SheetContent>
    </Sheet>
  );
}
