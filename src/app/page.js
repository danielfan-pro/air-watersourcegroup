import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import { siteConfig } from "@/config/siteConfig";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SiteHeader />

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
                    Same-Day Shipping
                  </dt>
                  <dd className="mt-2 text-base text-slate-800">
                    In-stock orders placed by 11AM ET ship same day
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Multi-Location Fulfillment
                  </dt>
                  <dd className="mt-2 text-base text-slate-800">
                    Ships from multiple warehouses for fastest delivery
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Heat Load Support
                  </dt>
                  <dd className="mt-2 text-base text-slate-800">
                    Need a calc or design help? We&apos;ve got you
                  </dd>
                </div>
              </dl>
            </div>

            <aside className="photo-placeholder">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-10 w-10 text-[var(--color-brand)]"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <path d="M14.5 4.5 16 7h3.5A2.5 2.5 0 0 1 22 9.5v8A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-8A2.5 2.5 0 0 1 4.5 7H8l1.5-2.5h5Z" />
                <circle cx="12" cy="13.5" r="3.5" />
              </svg>
              <p className="mt-3 text-center text-sm font-semibold text-[var(--color-brand)]">
                Photo Coming Soon
              </p>
            </aside>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />
        <section id="who-we-are" className="section-shell section-bg-white">
          <div className="section-stack">
            <div className="section-intro">
              <p className="eyebrow">Who We Are</p>
              <h2 className="section-title">
                A relationship-first wholesale partner for geothermal professionals.
              </h2>
              <p className="section-copy">
                Air & Water Source Group, LLC. is a B2B wholesale distributor specializing in
                geothermal and hydronic HVAC systems — helping contractors source the right
                equipment, get expert guidance, and move projects forward without the runaround.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {["Our Team", "Our Warehouse", "In the Field"].map((label) => (
                <div key={label} className="photo-card-placeholder">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-9 w-9 text-[var(--color-brand)]"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  >
                    <path d="M14.5 4.5 16 7h3.5A2.5 2.5 0 0 1 22 9.5v8A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-8A2.5 2.5 0 0 1 4.5 7H8l1.5-2.5h5Z" />
                    <circle cx="12" cy="13.5" r="3.5" />
                  </svg>
                  <p className="mt-3 text-center text-sm font-semibold text-[var(--color-brand)]">
                    {label}
                  </p>
                  <p className="mt-1 text-center text-xs font-medium text-slate-500">
                    Photo coming soon
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />
        <section id="what-we-do" className="section-shell section-bg-gray">
          <div className="section-stack">
            <div className="section-intro">
              <p className="eyebrow">What We Do</p>
              <h2 className="section-title">
                We connect contractors to the geothermal products and support they need.
              </h2>
              <p className="section-copy">
                Our role is to make sourcing geothermal equipment straightforward, efficient, and
                backed by people who understand contractor timelines.
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

        <div className="section-divider" aria-hidden="true" />
        <section id="who-we-serve" className="section-shell section-bg-white">
          <div className="section-stack">
            <div className="section-intro">
              <p className="eyebrow">Who We Serve</p>
              <h2 className="section-title">
                We supply the products geothermal contractors rely on.
              </h2>
              <p className="section-copy">
                We support professionals who need dependable product access, quick answers,
                and a supplier relationship that helps projects keep moving.
              </p>
            </div>
            <div className="space-y-6 section-content-single">
              <ul className="grid gap-3 text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Heat Pumps",
                  "Flow Centers",
                  "Hydronics",
                  "Heat Transfer Fluids",
                  "HDPE Items",
                  "Fusion Equipment",
                ].map((category) => (
                  <li key={category} className="list-panel category-card">
                    {category}
                  </li>
                ))}
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

        <div className="section-divider" aria-hidden="true" />
        <section id="connect" className="section-shell section-shell-compact section-bg-gray">
          <div className="section-stack gap-8">
            <div className="section-intro">
              <p className="eyebrow">CONTACT</p>
              <h2 className="section-title">Tell us what you need and we&apos;ll help you get moving.</h2>
              <p className="text-lg leading-8 text-[var(--color-ink-soft)]">
                Use the inquiry form for sourcing, project, or account questions.
              </p>
            </div>
            <div className="contact-section-grid">
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
                  height="620"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="w-full"
                />
              </div>
              <div className="contact-details-card">
                <div className="contact-map-frame">
                  <iframe
                    src={siteConfig.googleMapsEmbedUrl}
                    title="Map of Air & Water Source Group in Cato, New York"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                  />
                </div>
                <div className="contact-detail-group">
                  <p className="eyebrow">COMPANY LOCATION</p>
                  <address className="mt-4 not-italic space-y-2 text-base leading-7 text-[var(--color-ink-soft)]">
                    <p className="font-semibold text-slate-900">{siteConfig.name}</p>
                    {siteConfig.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </address>
                </div>
                <div className="contact-detail-group">
                  <p className="eyebrow">HOURS OF OPERATION</p>
                  <div className="mt-4 space-y-2 text-base leading-7 text-[var(--color-ink-soft)]">
                    <p className="font-semibold text-slate-800">{siteConfig.businessHours.days}</p>
                    <p className="font-semibold text-slate-950">
                      {siteConfig.businessHours.time} {siteConfig.businessHours.timezone}
                    </p>
                  </div>
                </div>
                <div className="contact-detail-group">
                  <p className="eyebrow">CONTACT US</p>
                  <div className="mt-4 space-y-3 text-base leading-7">
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
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 lg:px-10">
          <div className="flex flex-col items-center gap-4 border-t border-slate-200 pt-6 text-center text-sm text-slate-600 md:flex-row md:justify-between md:text-left">
            <div className="flex flex-col items-center gap-3">
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
            <p className="md:text-right">{`© ${currentYear}, Air & Water Source Group`}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
