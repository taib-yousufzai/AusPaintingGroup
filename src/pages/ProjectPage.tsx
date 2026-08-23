import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projectDetails } from "@/data/projects";
import { Calendar, Clock, MapPin, Wrench, ArrowLeft, Paintbrush } from "lucide-react";

export function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectDetails.find((p) => p.id === projectId);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[color:var(--brand-darker)]">Project not found</h2>
        <p className="mt-4 text-[color:var(--muted-foreground)]">The project you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-green)] px-6 py-3 font-semibold text-white transition hover:brightness-110"
        >
          <ArrowLeft className="h-5 w-5" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[color:var(--brand-cream)] text-[color:var(--brand-darker)]">
      {/* Visual Hero Header */}
      <section className="relative h-[40vh] min-h-[300px] w-full bg-[color:var(--brand-darker)] lg:h-[50vh]">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-cream)] via-[color:var(--brand-darker)]/40 to-[color:var(--brand-darker)]/70" />
        
        {/* Navigation Breadcrumb inside Hero */}
        <div className="absolute top-6 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Link>
          </div>
        </div>

        {/* Title Block */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-gold)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[color:var(--brand-darker)]">
              <MapPin className="h-3.5 w-3.5" /> {project.location}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[color:var(--brand-darker)] sm:text-5xl font-display lg:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Page Layout */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Left Column: Case Study Narratives */}
          <main className="space-y-10 lg:col-span-8">
            {/* Project Specs */}
            <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-6 shadow-sm border border-[color:var(--brand-green)]/10">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[color:var(--muted-foreground)]">Project Duration</div>
                  <div className="text-base font-bold">{project.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[color:var(--muted-foreground)]">Completed</div>
                  <div className="text-base font-bold">Recent Project</div>
                </div>
              </div>
            </div>

            {/* Narrated Study */}
            <section className="rounded-3xl bg-white p-8 shadow-sm border border-[color:var(--brand-green)]/10 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight font-display text-[color:var(--brand-green-deep)]">
                  The Challenge
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[color:var(--brand-darker)]/80">
                  {project.challenge}
                </p>
              </div>

              <div className="border-t border-[color:var(--brand-green)]/10 my-8" />

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight font-display text-[color:var(--brand-green-deep)]">
                  Our Approach & Solution
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[color:var(--brand-darker)]/80">
                  {project.solution}
                </p>
              </div>
            </section>

            {/* Outcome Display Panel */}
            <section className="rounded-3xl bg-[color:var(--brand-green)] p-8 text-[color:var(--brand-gold-soft)] shadow-[var(--shadow-elegant)]">
              <h2 className="text-xl font-bold text-white font-display">The Finished Result</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/95">
                {project.beforeAfterDescription}
              </p>
            </section>
          </main>

          {/* Right Column: Spec Sidebar & CTA */}
          <aside className="space-y-8 lg:col-span-4">
            {/* Scope Box */}
            <section className="rounded-3xl bg-white p-6 shadow-sm border border-[color:var(--brand-green)]/10 space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-extrabold tracking-tight font-display text-[color:var(--brand-green-deep)]">
                <Wrench className="h-5 w-5 text-[color:var(--brand-gold)]" /> Scope of Work
              </h3>
              <ul className="space-y-3">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--brand-green)]/10 text-xs font-semibold text-[color:var(--brand-green)]">
                      ✓
                    </span>
                    <span className="text-[color:var(--brand-darker)]/85">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Colors Used */}
            <section className="rounded-3xl bg-white p-6 shadow-sm border border-[color:var(--brand-green)]/10 space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-extrabold tracking-tight font-display text-[color:var(--brand-green-deep)]">
                <Paintbrush className="h-5 w-5 text-[color:var(--brand-gold)]" /> Paint Specification
              </h3>
              <div className="space-y-3.5">
                {project.colors.map((color, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 shrink-0 rounded-lg shadow-inner border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-bold text-[color:var(--brand-darker)]">
                        {color.name}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-[color:var(--muted-foreground)]">
                        {color.brand} · {color.area}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Action CTA Panel */}
            <section className="rounded-3xl bg-white p-6 text-center shadow-sm border border-[color:var(--brand-green)]/10 space-y-4">
              <h4 className="text-base font-extrabold font-display">Need a similar finish?</h4>
              <p className="text-xs text-[color:var(--muted-foreground)] leading-relaxed">
                Get a transparent, fixed-price quote from owner Adam for your interior or exterior project.
              </p>
              <Link
                to="/#contact"
                className="block w-full rounded-full bg-[color:var(--brand-gold)] py-3 text-center text-sm font-semibold text-[color:var(--brand-darker)] shadow-[var(--shadow-gold)] transition hover:brightness-105"
              >
                Request a Free Quote
              </Link>
            </section>
          </aside>

        </div>
      </div>
    </div>
  );
}
