import { Link } from "react-router-dom";
import { serviceDetails } from "@/data/services";
import { projectDetails } from "@/data/projects";

export function SitemapPage() {
  return (
    <div className="py-16 bg-[color:var(--brand-cream)] text-foreground">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[color:var(--brand-darker)] mb-4">
          HTML Sitemap &amp; Services Directory
        </h1>
        <p className="text-base text-[color:var(--brand-darker)]/70 mb-10">
          Complete directory of painting services, residential and commercial projects across Sydney metro.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Navigation */}
          <div className="rounded-xl border border-[color:var(--brand-green)]/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[color:var(--brand-green)] mb-4 border-b pb-2">
              Main Pages
            </h2>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link to="/" className="hover:text-[color:var(--brand-gold)] transition">Home Page</Link></li>
              <li><a href="/#services" className="hover:text-[color:var(--brand-gold)] transition">Painting Services</a></li>
              <li><a href="/#projects" className="hover:text-[color:var(--brand-gold)] transition">Recent Projects</a></li>
              <li><a href="/#reviews" className="hover:text-[color:var(--brand-gold)] transition">Customer Reviews</a></li>
              <li><a href="/#faq" className="hover:text-[color:var(--brand-gold)] transition">Frequently Asked Questions</a></li>
              <li><a href="/#contact" className="hover:text-[color:var(--brand-gold)] transition">Contact &amp; Free Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="rounded-xl border border-[color:var(--brand-green)]/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[color:var(--brand-green)] mb-4 border-b pb-2">
              Painting Services
            </h2>
            <ul className="space-y-2 text-sm font-medium">
              {serviceDetails.map((service) => (
                <li key={service.id}>
                  <Link to={`/service/${service.id}`} className="hover:text-[color:var(--brand-gold)] transition">
                    {service.title} — Sydney
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies & Projects */}
          <div className="rounded-xl border border-[color:var(--brand-green)]/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[color:var(--brand-green)] mb-4 border-b pb-2">
              Sydney Case Studies &amp; Projects
            </h2>
            <ul className="space-y-2 text-sm font-medium">
              {projectDetails.map((project) => (
                <li key={project.id}>
                  <Link to={`/project/${project.id}`} className="hover:text-[color:var(--brand-gold)] transition">
                    {project.title} ({project.suburb})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
