import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/65 bg-[rgba(247,250,255,0.82)] backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
        >
          <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
            <div className="relative h-10 w-28 sm:h-12 sm:w-36">
              <Image
                src="/logo-transparent.png"
                alt="Air & Water Source Group logo"
                fill
                className="object-contain object-left"
                priority
                sizes="144px"
              />
            </div>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-[var(--color-brand)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href={siteConfig.shopifyUrl}
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Shop Online
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <section className="hero-shell">
          <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-[4.5rem] lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-24">
            <div className="space-y-8">
              <p className="eyebrow">Geothermal Wholesale Distribution for the Northeast</p>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  Your trusted source for sustainable energy equipment.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--color-ink-soft)] sm:text-xl">
                  {siteConfig.shortName} helps HVAC contractors source geothermal products,
                  move faster on installs, and stay supported from quote to fulfillment.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={siteConfig.shopifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  Shop Online
                </a>
                <Link href="/#connect" className="button-secondary">
                  Start a Conversation
                </Link>
              </div>
              <dl className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Focus
                  </dt>
                  <dd className="mt-2 text-base text-slate-800">Geothermal and hydronic systems</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Audience
                  </dt>
                  <dd className="mt-2 text-base text-slate-800">Northeast HVAC contractors</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Ordering
                  </dt>
                  <dd className="mt-2 text-base text-slate-800">Online access with real support</dd>
                </div>
              </dl>
            </div>

            <aside className="panel-card overflow-hidden">
              <div className="space-y-5">
                <p className="eyebrow">Built for Better Contractor Workflows</p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  A cleaner path from product sourcing to project delivery.
                </h2>
                <p className="text-base leading-7 text-[var(--color-ink-soft)]">
                  With curated inventory, responsive guidance, and a streamlined online store,
                  we make it easier to find the right equipment and keep projects moving.
                </p>
              </div>
              <div className="mt-8 grid gap-4">
                {[
                  "Wholesale access to geothermal equipment and accessories",
                  "Responsive support for product selection and ordering",
                  "A premium online buying experience anchored to Shopify",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/70 p-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-brand)]" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="who-we-are" className="section-shell border-t border-slate-200/80">
          <div className="section-stack">
            <div className="section-intro">
              <p className="eyebrow">Who We Are</p>
              <h2 className="section-title">
                A relationship-first wholesale partner for geothermal professionals.
              </h2>
              <p className="section-copy">
                Air & Water Source Group, LLC. is a B2B distributor focused on helping
                contractors access sustainable HVAC solutions with more confidence and less
                friction.
              </p>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="section-shell border-y border-slate-200/80">
          <div className="section-stack">
            <div className="section-intro">
              <p className="eyebrow">What We Do</p>
              <h2 className="section-title">
                We connect contractors to the geothermal products and support they need.
              </h2>
              <p className="section-copy">
                Our role is to make sourcing geothermal equipment feel organized, efficient,
                and backed by people who understand contractor timelines.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3 section-content-full">
              {[
                {
                  title: "Source equipment",
                  description:
                    "Provide access to geothermal systems, accessories, and related wholesale products through a streamlined catalog experience.",
                },
                {
                  title: "Support decisions",
                  description:
                    "Help contractors identify fit, compare options, and move through the purchasing process with less uncertainty.",
                },
                {
                  title: "Simplify ordering",
                  description:
                    "Make it easy to shop online while still keeping a direct line to a knowledgeable partner when questions come up.",
                },
              ].map((item) => (
                <article key={item.title} className="content-card h-full">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="who-we-serve" className="section-shell">
          <div className="section-stack">
            <div className="section-intro">
              <p className="eyebrow">Who We Serve</p>
              <h2 className="section-title">
                Built for Northeast HVAC contractors working in sustainable energy.
              </h2>
              <p className="section-copy">
                We support professionals who need dependable product access, quick answers,
                and a supplier relationship that helps projects keep moving.
              </p>
            </div>
            <div className="content-card space-y-6 section-content-single">
              <p>
                We are focused on the needs of HVAC contractors across the Northeast who are
                expanding into geothermal, improving project efficiency, and looking for a
                supplier that understands both urgency and quality.
              </p>
              <ul className="grid gap-3 text-slate-700 sm:grid-cols-2">
                <li className="list-panel">Residential and light commercial installers</li>
                <li className="list-panel">Contractors growing their geothermal offering</li>
                <li className="list-panel">Teams seeking dependable wholesale access</li>
                <li className="list-panel">Professionals who value responsive support</li>
              </ul>
              <div className="flex justify-center">
                <a
                  href={siteConfig.shopifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary inline-flex"
                >
                  Browse the Online Store
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="connect" className="section-shell section-shell-compact border-t border-slate-200/80">
          <div className="section-stack gap-8">
            <div className="section-intro">
              <p className="eyebrow">Connect</p>
              <h2 className="section-title">Tell us what you need and we’ll help you get moving.</h2>
              <p className="text-lg leading-8 text-[var(--color-ink-soft)]">
                Use the inquiry form below for sourcing, project, or account questions. Key
                company details and location information now live in the footer for a cleaner
                browsing experience.
              </p>
            </div>
            <div className="section-content-full">
              <div className="tally-shell">
                <div className="mb-5">
                  <p className="eyebrow">Inquiry Form</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                    Send us a project or sourcing request
                  </h3>
                </div>
                <iframe
                  data-tally-src={siteConfig.tallyEmbedUrl}
                  src={siteConfig.tallyEmbedUrl}
                  title="Air & Water"
                  loading="lazy"
                  width="100%"
                  height="350"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 lg:px-10">
          <div className="footer-contact-panel">
            <div className="footer-detail">
              <p className="eyebrow">Company Location</p>
              <address className="mt-5 not-italic space-y-3 text-base leading-7 text-[var(--color-ink-soft)]">
                <p className="font-semibold text-slate-900">{siteConfig.name}</p>
                {siteConfig.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>
            <div className="footer-detail">
              <p className="eyebrow">Hours of Operation</p>
              <div className="mt-5 space-y-3 text-base leading-7 text-[var(--color-ink-soft)]">
                <p className="font-semibold text-slate-800">{siteConfig.businessHours.days}</p>
                <p className="text-2xl font-semibold text-slate-950">
                  {siteConfig.businessHours.time}
                </p>
                <p className="font-semibold text-slate-800">
                  {siteConfig.businessHours.timezone}
                </p>
              </div>
            </div>
            <div className="footer-map-frame">
              <iframe
                src={siteConfig.googleMapsEmbedUrl}
                title="Map of Air & Water Source Group in Cato, New York"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
            <div className="footer-detail">
              <p className="eyebrow">Contact Us</p>
              <div className="mt-5 space-y-4 text-base leading-7">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block font-semibold text-[var(--color-brand)] transition hover:text-[var(--color-brand-dark)]"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                  className="block font-semibold text-slate-800 transition hover:text-[var(--color-brand-dark)]"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>{`© ${currentYear}, Air & Water Source Group`}</p>
            <div className="flex items-center gap-4">
              <p className="eyebrow">Members of NY-GEO</p>
              <div className="relative h-14 w-24">
                <Image
                  src="/ny-geo-logo-transparent.png"
                  alt="NY-GEO member logo"
                  fill
                  className="object-contain object-right"
                  sizes="96px"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
