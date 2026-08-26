import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Menu,
  X,
  Monitor,
  Database,
  Users,
  Clock,
  Wrench,
  Brain,
} from "lucide-react";
import portraitUrl from "@/assets/sibusiso-portrait.jpg";

const portrait = { url: portraitUrl };
const cv = { url: `${import.meta.env.BASE_URL}Sibusiso_Chili_CV.pdf` };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sibusiso Innocent Chili — Administrative & IT Support" },
      {
        name: "description",
        content:
          "Portfolio of Sibusiso Innocent Chili, administrative assistant and IT support specialist in Johannesburg with SA-SAMS, data management and technical support experience.",
      },
      { property: "og:title", content: "Sibusiso Innocent Chili — Administrative & IT Support" },
      {
        property: "og:description",
        content:
          "Administrative assistant and IT support specialist in Johannesburg. SA-SAMS data management, technical support and office operations.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const NAV = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Contact", "contact"],
] as const;

const EMAIL = "sinnocent506@gmail.com";
const PHONE = "061 410 4312";
const LINKEDIN = "https://linkedin.com/in/sibusisochili93";
const GITHUB = "https://github.com/";

const techSkills = [
  { icon: Database, title: "SA-SAMS Data Management", body: "Learner record capturing, academic data updates and compliance reporting." },
  { icon: Monitor, title: "Microsoft Office Suite", body: "Advanced Word, Excel and PowerPoint for reports, registers and presentations." },
  { icon: Wrench, title: "IT Troubleshooting", body: "Hardware and software diagnostics, printer operation, laptop and driver maintenance." },
  { icon: Monitor, title: "Hardware Installation", body: "Installing, configuring and upgrading desktops, laptops and peripherals." },
];

const softSkills = [
  { icon: Users, title: "Communication", body: "Clear stakeholder engagement with staff, parents and management." },
  { icon: Clock, title: "Time Management", body: "Multitasking across admin deadlines and urgent technical requests." },
  { icon: Brain, title: "Problem Solving", body: "Critical thinking applied to special-needs education environments." },
];

const projects = [
  {
    title: "School-Wide SA-SAMS Record Migration",
    body: "Captured and reconciled learner academic records for a full primary school on SA-SAMS, cleaning duplicate entries and aligning term marks so departmental reporting deadlines were met without corrections.",
    tech: ["SA-SAMS", "Excel", "Data validation", "Reporting"],
  },
  {
    title: "Teacher Laptop & Printer Support Programme",
    body: "Set up a rolling maintenance routine for staff laptops and printers — driver and software updates, cartridge and network fixes, and fault logging — which cut classroom downtime and kept teaching tools reliable.",
    tech: ["Windows", "Drivers", "Printer networking", "Preventive maintenance"],
  },
  {
    title: "Staff Digital Literacy Training",
    body: "Ran hands-on sessions teaching educators everyday computer skills: Word documents, Excel mark sheets, email and safe file handling, reducing repeat support requests from the same staff members.",
    tech: ["MS Office", "Training", "User support", "Documentation"],
  },
  {
    title: "Client Hardware Deployment at NEBSOL IT",
    body: "Consulted with clients to scope their needs, then installed and configured hardware and software, performed upgrades and handled after-sales technical support and repairs.",
    tech: ["Hardware installation", "Software configuration", "Client service"],
  },
];

const experience = [
  {
    role: "Administrative Assistant",
    org: "Thulisa Primary School, Gauteng",
    period: "June 2025 – Present",
    points: [
      "Operate printers and maintain teacher laptops with updated software and drivers, minimising downtime.",
      "Update SA-SAMS data and capture learner academic records accurately for compliant reporting.",
      "Provide technical support and train staff on computer use.",
      "Address office needs and troubleshoot IT equipment.",
    ],
  },
  {
    role: "Administrative Assistant",
    org: "Thokoza Primary School, Gauteng",
    period: "February 2023 – August 2024",
    points: [
      "Managed printer operations and teacher laptop updates.",
      "Captured and updated learner records on SA-SAMS, improving administrative efficiency.",
      "Performed maintenance and repairs on technological equipment.",
      "Handled troubleshooting and office requests, streamlining school workflows.",
    ],
  },
  {
    role: "Computer Technician / Client Service Consultant",
    org: "NEBSOL IT Solutions, Gauteng",
    period: "February 2020 – May 2021",
    points: [
      "Engaged clients to identify needs and build productive relationships.",
      "Installed and configured hardware and software, and performed upgrades.",
      "Maintained and repaired equipment, reducing operational disruptions.",
    ],
  },
  {
    role: "First Job Cost Accountant",
    org: "First National Bank, Gauteng",
    period: "July 2018 – June 2019",
    points: [
      "Developed and maintained cost models, managing allocations and analysing variances.",
      "Produced monthly reports and ad-hoc analyses supporting strategic operations.",
    ],
  },
];

function Section({
  id,
  eyebrow,
  title,
  children,
  tinted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  tinted?: boolean;
}) {
  return (
    <section id={id} className={tinted ? "section-pad bg-secondary/60" : "section-pad"}>
      <div className="mx-auto w-full max-w-5xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
          <a href="#top" className="min-w-0 truncate font-display text-lg font-bold">
            Sibusiso <span className="text-accent">Chili</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
            <a
              href={cv.url}
              download
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" /> CV
            </a>
          </nav>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-md border border-border p-2 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
            <ul className="space-y-3">
              {NAV.map(([label, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="block text-sm font-medium text-muted-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href={cv.url} download className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="section-pad">
          <div className="mx-auto grid w-full max-w-5xl items-center gap-10 px-5 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Johannesburg, Gauteng
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
                Sibusiso Innocent Chili
              </h1>
              <p className="mt-3 text-lg font-semibold text-primary">
                Administrative Assistant &amp; IT Support Specialist
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Over 3 years keeping school offices running — accurate SA-SAMS learner records,
                dependable technical support and organised day-to-day operations that let
                educators focus on teaching.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={cv.url}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="h-4 w-4" /> Download CV
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Get in touch
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xs md:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] bg-accent/15" aria-hidden />
              <img
                src={portrait.url}
                alt="Portrait of Sibusiso Innocent Chili"
                className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-top shadow-xl"
              />
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About me" title="Reliable support behind the scenes" tinted>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              I am a dedicated administrative assistant with more than three years of experience in
              school environments, specialising in SA-SAMS data management, technical support and
              office operations. My work centres on keeping learner records accurate, resolving IT
              issues quickly and giving teaching staff the tools and confidence they need.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              My background combines IT technician work, client service and cost accounting, which
              means I bring both technical fluency and an eye for detail. I am a fast learner and
              adapt quickly to any administrative system a company uses, and I am committed to
              improving efficiency wherever I am placed.
            </p>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["3+ yrs", "School administration"],
              ["4", "Organisations supported"],
              ["100%", "SA-SAMS record accuracy focus"],
            ].map(([k, v]) => (
              <div key={v} className="rounded-xl border border-border bg-card p-5">
                <dt className="font-display text-2xl font-bold text-accent">{k}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="skills" eyebrow="Capabilities" title="Technical & soft skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {techSkills.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex min-w-0 items-start gap-3">
                  <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="mt-10 text-lg font-semibold">Soft skills</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {softSkills.map((s) => (
              <div key={s.title} className="rounded-xl bg-secondary p-5">
                <s.icon className="h-5 w-5 text-primary" />
                <h4 className="mt-3 text-base font-semibold">{s.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Selected work" title="Projects & initiatives" tinted>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="flex flex-col rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Career" title="Work experience">
          <ol className="relative space-y-8 border-l border-border pl-6">
            {experience.map((e) => (
              <li key={e.role + e.period} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-accent" aria-hidden />
                <div className="grid gap-1 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline">
                  <h3 className="text-lg font-semibold">{e.role}</h3>
                  <span className="text-sm text-muted-foreground">{e.period}</span>
                </div>
                <p className="text-sm font-medium text-primary">{e.org}</p>
                <ul className="mt-3 space-y-1.5">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" eyebrow="Background" title="Education & certifications" tinted>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">Mechanical Engineering N4</h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Ekurhuleni West College, Gauteng · November 2017
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                N5 completed (awaiting certification); N6 pending two modules. Modules: Mathematics
                N4, Engineering Science N4, Mechanotechnics N4, Mechanical Draughting N4.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">National Senior Certificate (Matric)</h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Fumana Comprehensive School, Gauteng · December 2011
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Mathematics, Physical Sciences, English, IsiZulu, Life Orientation, Mechanical
                Technology, Engineering Graphics and Design.
              </p>
            </div>
          </div>
          <h3 className="mt-10 text-lg font-semibold">Certifications</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            <li className="rounded-xl bg-card p-5 ring-1 ring-border">
              <p className="font-semibold">N5 Mechanical Engineering</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Completed — certification pending issue from Ekurhuleni West College.
              </p>
            </li>
            <li className="rounded-xl bg-card p-5 ring-1 ring-border">
              <p className="font-semibold">SA-SAMS Practitioner (in practice)</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Three years of hands-on SA-SAMS data capturing and reporting in Gauteng schools.
              </p>
            </li>
          </ul>
        </Section>

        <Section id="contact" eyebrow="Get in touch" title="Let's work together">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              {[
                { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
                { icon: Phone, label: PHONE, href: "tel:+27614104312" },
                { icon: Linkedin, label: "linkedin.com/in/sibusisochili93", href: LINKEDIN },
                { icon: Github, label: "GitHub profile", href: GITHUB },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent"
                >
                  <c.icon className="h-5 w-5 shrink-0 text-accent" />
                  <span className="truncate text-sm font-medium">{c.label}</span>
                </a>
              ))}
              <div className="flex items-center gap-3 rounded-xl bg-secondary p-4">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm">Johannesburg, Gauteng, 1431</span>
              </div>
            </div>
            <div className="rounded-2xl bg-primary p-7 text-primary-foreground">
              <h3 className="text-2xl font-bold">Need my full CV?</h3>
              <p className="mt-2 text-sm opacity-90">
                Download the complete document with detailed experience, education and contactable
                references.
              </p>
              <a
                href={cv.url}
                download
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" /> Download CV (PDF)
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sibusiso Innocent Chili</p>
          <a href={`mailto:${EMAIL}`} className="hover:text-accent">
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
