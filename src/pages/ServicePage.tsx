import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { serviceDetails } from "@/data/services";
import { projectDetails } from "@/data/projects";
import { ArrowLeft, CheckCircle2, ShieldCheck, ShieldAlert, Sparkles, Paintbrush, FileText } from "lucide-react";

export function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceDetails.find((s) => s.id === serviceId);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[color:var(--brand-darker)]">Service not found</h2>
        <p className="mt-4 text-[color:var(--muted-foreground)]">The service page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-green)] px-6 py-3 font-semibold text-white transition hover:brightness-110"
        >
          <ArrowLeft className="h-5 w-5" /> Back to Home
        </Link>
      </div>
    );
  }

  // Find the related project if specified
  const relatedProject = projectDetails.find((p) => p.id === service.relatedProjectId);

  return (
    <div className="min-h-screen bg-[color:var(--brand-cream)] text-[color:var(--brand-darker)]">
      {/* Hero Header */}
      <section className="relative h-[35vh] min-h-[260px] w-full bg-[color:var(--brand-darker)] lg:h-[45vh]">
        <img
          src={service.img}
          alt={service.title}
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-cream)] via-[color:var(--brand-darker)]/40 to-[color:var(--brand-darker)]/70" />

        {/* Back Link */}
        <div className="absolute top-6 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--brand-gold)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-darker)]">
              Services
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[color:var(--brand-darker)] sm:text-5xl font-display lg:text-6xl">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Left Column */}
          <main className="space-y-10 lg:col-span-8">
            {/* Intro */}
            <section className="rounded-3xl bg-white p-8 shadow-sm border border-[color:var(--brand-green)]/10">
              <h2 className="text-xl font-extrabold font-display text-[color:var(--brand-green-deep)]">
                Expert Finish & Execution
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--brand-darker)]/80">
                {service.intro}
              </p>
            </section>

            {/* Our Process steps */}
            <section className="space-y-4">
              <h2 className="text-xl font-extrabold font-display text-[color:var(--brand-green-deep)]">
                Our Painting Method
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {service.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-3xl bg-white p-6 shadow-sm border border-[color:var(--brand-green)]/5"
                  >
                    <div className="font-display text-4xl font-black text-[color:var(--brand-gold)]">
                      {`0${idx + 1}`}
                    </div>
                    <h3 className="mt-4 text-base font-bold">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted-foreground)]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section className="rounded-3xl bg-white p-8 shadow-sm border border-[color:var(--brand-green)]/10 space-y-4">
              <h2 className="text-xl font-extrabold font-display text-[color:var(--brand-green-deep)]">
                Why Aus Painting Group?
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--brand-green)]" />
                    <span className="text-sm text-[color:var(--brand-darker)]/85 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Project Showcase */}
            {relatedProject && (
              <section className="rounded-3xl bg-white p-8 shadow-sm border border-[color:var(--brand-green)]/10 space-y-6">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[color:var(--brand-gold)]" />
                  <h2 className="text-xl font-extrabold font-display text-[color:var(--brand-green-deep)]">
                    Proof in Action
                  </h2>
                </div>
                <div className="flex flex-col overflow-hidden rounded-2xl border border-[color:var(--brand-green)]/10 sm:flex-row bg-[color:var(--brand-cream)]/30">
                  <img
                    src={relatedProject.img}
                    alt={relatedProject.title}
                    className="h-48 w-full object-cover sm:w-64"
                  />
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-gold)]">
                        {relatedProject.suburb} Case Study
                      </span>
                      <h3 className="mt-2 text-lg font-bold">{relatedProject.title}</h3>
                      <p className="mt-2 text-xs text-[color:var(--muted-foreground)] leading-relaxed">
                        Read a detailed walkthrough of this project, including colors used, finishes, and step-by-step resolution.
                      </p>
                    </div>
                    <Link
                      to={`/project/${relatedProject.id}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--brand-green)] hover:underline"
                    >
                      View Project Page →
                    </Link>
                  </div>
                </div>
              </section>
            )}
          </main>

          {/* Right Column */}
          <aside className="space-y-8 lg:col-span-4">
            {/* Paints & Brands */}
            <section className="rounded-3xl bg-white p-6 shadow-sm border border-[color:var(--brand-green)]/10 space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-extrabold tracking-tight font-display text-[color:var(--brand-green-deep)]">
                <Paintbrush className="h-5 w-5 text-[color:var(--brand-gold)]" /> Premium Coatings
              </h3>
              <p className="text-xs text-[color:var(--muted-foreground)] leading-relaxed">
                We use premium, high-durability coatings designed to stand up to heat, humidity, and wear.
              </p>
              <div className="space-y-2">
                {service.coatingsUsed.map((coating, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl bg-[color:var(--brand-cream)]/20 px-3.5 py-2.5 border border-[color:var(--brand-green)]/5 text-sm font-semibold"
                  >
                    <span className="h-2 w-2 rounded-full bg-[color:var(--brand-gold)]" />
                    {coating}
                  </div>
                ))}
              </div>
            </section>

            {/* Quality Standard */}
            <section className="rounded-3xl bg-[color:var(--brand-green)] p-6 text-[color:var(--brand-gold-soft)] shadow-sm space-y-4">
              <ShieldCheck className="h-8 w-8 text-white" />
              <h3 className="text-base font-bold text-white font-display">Craftsmanship Standard</h3>
              <p className="text-xs leading-relaxed text-white/90">
                All our painters are licensed tradespeople. We support every contract with a full written satisfaction guarantee. We do not use third-party subcontractors.
              </p>
            </section>

            {/* CTA card */}
            <section className="rounded-3xl bg-white p-6 text-center shadow-sm border border-[color:var(--brand-green)]/10 space-y-4">
              <h4 className="text-base font-extrabold font-display">Need a fixed quote?</h4>
              <p className="text-xs text-[color:var(--muted-foreground)] leading-relaxed">
                Schedule a complimentary on-site appraisal with Adam. Detailed scope and flat pricing within 48 hours.
              </p>
              <Link
                to="/#contact"
                className="block w-full rounded-full bg-[color:var(--brand-gold)] py-3 text-center text-sm font-semibold text-[color:var(--brand-darker)] shadow-[var(--shadow-gold)] transition hover:brightness-105"
              >
                Book My Free Quote
              </Link>
            </section>
          </aside>

        </div>
      </div>
    </div>
  );
}
