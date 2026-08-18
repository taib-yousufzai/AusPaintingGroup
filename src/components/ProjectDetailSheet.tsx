import { Calendar, Clock, MapPin, Wrench } from "lucide-react";
import { ProjectDetail } from "@/data/projects";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectDetailSheetProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailSheet({
  project,
  isOpen,
  onClose,
}: ProjectDetailSheetProps) {
  if (!project) return null;

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        side="right"
        className="w-full p-0 sm:max-w-2xl border-l border-[color:var(--brand-green)]/20 bg-[color:var(--brand-cream)] text-[color:var(--brand-darker)]"
      >
        <ScrollArea className="h-full">
          {/* Hero Banner Image */}
          <div className="relative h-64 w-full sm:h-80">
            <img
              src={project.img}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-darker)]/80 via-[color:var(--brand-darker)]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--brand-darker)]">
                <MapPin className="h-3 w-3" /> {project.suburb}
              </span>
              <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl font-display text-white">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-4 shadow-sm border border-[color:var(--brand-green)]/10">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[color:var(--muted-foreground)]">Duration</div>
                  <div className="text-sm font-bold">{project.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--brand-green)]/10 text-[color:var(--brand-green)]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[color:var(--muted-foreground)]">Location</div>
                  <div className="text-sm font-bold">{project.suburb}, Sydney</div>
                </div>
              </div>
            </div>

            {/* Scope of Work */}
            <section className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-extrabold tracking-tight font-display text-[color:var(--brand-green-deep)]">
                <Wrench className="h-5 w-5 text-[color:var(--brand-gold)]" /> Project Scope
              </h3>
              <ul className="grid gap-3">
                {project.scope.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 rounded-xl bg-white p-4 text-sm leading-relaxed shadow-sm border border-[color:var(--brand-green)]/5"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--brand-green)] text-xs font-bold text-[color:var(--brand-gold-soft)]">
                      {idx + 1}
                    </span>
                    <span className="text-[color:var(--brand-darker)]/90">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Case Study Section */}
            <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm border border-[color:var(--brand-green)]/5">
              <h3 className="text-lg font-extrabold tracking-tight font-display text-[color:var(--brand-green-deep)]">
                The Challenge
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {project.challenge}
              </p>

              <div className="my-4 border-t border-[color:var(--brand-green)]/10" />

              <h3 className="text-lg font-extrabold tracking-tight font-display text-[color:var(--brand-green-deep)]">
                Our Solution
              </h3>
              <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                {project.solution}
              </p>
            </section>

            {/* Color Palette */}
            <section className="space-y-4">
              <h3 className="text-lg font-extrabold tracking-tight font-display text-[color:var(--brand-green-deep)]">
                Color Palette Used
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 rounded-xl bg-white p-4 shadow-sm border border-[color:var(--brand-green)]/5"
                  >
                    <div
                      className="h-12 w-12 shrink-0 rounded-lg shadow-inner border border-black/10"
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

            {/* Finish Summary */}
            <section className="rounded-2xl bg-[color:var(--brand-green)] p-6 text-[color:var(--brand-gold-soft)] shadow-[var(--shadow-elegant)]">
              <h4 className="text-base font-bold text-white">The Outcome</h4>
              <p className="mt-2 text-xs leading-relaxed text-white/85">
                {project.beforeAfterDescription}
              </p>
            </section>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => {
                  onClose();
                  // Short delay to allow sheet closing animation before scrolling
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--brand-gold)] py-4 text-center font-bold text-[color:var(--brand-darker)] shadow-[var(--shadow-gold)] transition hover:brightness-105"
              >
                Get a Quote for a Similar Project →
              </a>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
