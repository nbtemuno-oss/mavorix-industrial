import { MessageCircle, Send } from "lucide-react";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";

export const traySealerSlug = "semi-automatic-tray-sealing-machine-2-4-cavity";
export const traySealerTitle = "Semi-Automatic Tray Sealing Machine with 2- and 4-Cavity Molds";
export const traySealerPath = `/en/products/packaging-equipment/${traySealerSlug}/`;
export const traySealerMetaDescription =
  "Source a semi-automatic tray sealing machine with 2- or 4-cavity tooling. Compare single- and double-station output for plastic tray packaging.";

export const traySealerImages = [
  {
    src: "/images/products/general-products/semi-automatic-tray-sealing-machine-2-4-cavity/semi-automatic-tray-sealing-machine-2-4-cavity-main.webp",
    alt: "Free-standing semi-automatic tray sealing machine with twin loading positions, touch screen and roll-film holder",
    label: "Machine view"
  }
];

const summarySpecs = [
  ["Machine Type", "Semi-automatic tray sealer"],
  ["Tooling", "2-cavity or 4-cavity mold"],
  ["Work Layout", "Single or double station"],
  ["Film Feed", "Roll-fed lidding film"],
  ["Operation", "Operator-loaded trays"],
  ["Control", "Touch screen and temperature displays"]
];

const outputConfigurations = [
  ["Double station", "2 large trays", "Approx. 1,000 trays/hour", "2 operators"],
  ["Double station", "4 small trays", "Approx. 2,000 trays/hour", "2 operators"],
  ["Single station", "2 large trays", "Approx. 700 trays/hour", "1 operator"],
  ["Single station", "4 small trays", "Approx. 1,000 trays/hour", "1 operator"]
];

const visibleFeatures = [
  "Two-position worktable shown on the supplied machine",
  "Replaceable mold format for the selected tray geometry",
  "Roll-film holder and guided lidding-film path",
  "Touch-screen operating interface",
  "Separate visible temperature displays",
  "Emergency-stop and start controls",
  "2-cavity tooling demonstrated for larger rectangular trays",
  "4-cavity tooling demonstrated for smaller trays"
];

const selectionDetails = [
  "Tray outside length, width and depth",
  "Sealing-flange width, shape and drawing tolerances",
  "Tray material and sealing-layer specification",
  "Lidding-film structure, roll width and roll-core size",
  "Product being packed and filling temperature",
  "Required seal strength, peel behavior and leak test",
  "2-cavity or 4-cavity format and expected changeovers",
  "Single- or double-station production layout",
  "Target trays per hour and available operators",
  "Site voltage, frequency, phase and utilities",
  "Required food-contact and destination-market documents",
  "Spare molds, heaters, cutters and wear parts"
];

const faqs = [
  {
    q: "What is the difference between the 2-cavity and 4-cavity tray sealing molds?",
    a: "The 2-cavity mold seals two larger trays in one loading cycle, while the 4-cavity mold seals four smaller trays. The correct tool depends on the exact tray drawing, flange geometry and film, not only the nominal tray capacity."
  },
  {
    q: "What output can this semi-automatic tray sealing machine achieve?",
    a: "The supplied quotation estimates about 700 trays per hour for a single-station 2-cavity setup, 1,000 for single-station 4-cavity, 1,000 for double-station 2-cavity and 2,000 for double-station 4-cavity. These are configuration estimates; actual output depends on loading, product handling, sealing settings and operator rhythm."
  },
  {
    q: "Can one machine seal different tray sizes?",
    a: "Different tray formats normally require matching mold tooling and a confirmed film setup. Send drawings or physical samples for every tray size so the supplier can check tool changes, film width and sealing compatibility."
  },
  {
    q: "Is this an automatic food tray sealing machine?",
    a: "It is semi-automatic: operators place and remove the trays while the machine controls the sealing cycle and film movement. Suitability for a food product depends on the tray, lidding film, hygiene requirement and documentation specified for the project."
  },
  {
    q: "Does the machine support MAP or vacuum packaging?",
    a: "MAP, vacuum and skin-pack functions are not confirmed in the supplied files. This page describes heat sealing with roll-fed lidding film only. Any gas-flush or vacuum requirement must be stated separately and verified with the supplier."
  },
  {
    q: "What should I send for a tray sealer quotation?",
    a: "Send tray drawings or samples, tray and film materials, the packed product, target output, cavity count, station layout, site power, seal acceptance requirement, destination country and quantity."
  }
];

export function TraySealingMachinePage() {
  const inquirySubject = encodeURIComponent("Semi-automatic tray sealing machine quotation");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Packaging Industry", url: `${site.url}/en/industries/packaging-industry/` },
    { name: "Packaging Equipment", url: `${site.url}/en/industries/packaging-industry/` },
    { name: traySealerTitle, url: `${site.url}${traySealerPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Packaging Industry", href: "/en/industries/packaging-industry/" },
              { label: "Packaging Equipment", href: "/en/industries/packaging-industry/" },
              { label: traySealerTitle, href: traySealerPath }
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={traySealerImages} />

          <div className="space-y-7">
            <div>
              <Badge>Semi-Automatic Packaging Equipment</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-5xl">{traySealerTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A free-standing semi-automatic tray sealer for pre-formed trays and roll-fed lidding film. Available project
                configurations include 2-cavity tooling for larger trays and 4-cavity tooling for smaller trays, with single- or
                double-station operation selected around output and staffing.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Tray Details
              </Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2">
                <MessageCircle size={17} aria-hidden="true" /> Request a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-12">
          <Section title="Product Overview">
            <p>
              This machine sits between a manual tabletop sealer and a fully automatic in-line tray sealer. Operators load the trays,
              while the machine manages the heated sealing cycle and advances roll film over the mold. The arrangement is practical
              for small and medium production runs where tray presentation is still handled by people but repeatable sealing and
              higher output are needed.
            </p>
            <p>
              The mold is the heart of the project. A 2-cavity tool handles two larger containers at a time; a 4-cavity tool handles
              four smaller containers. Neither description defines a universal tray size. The actual tool must be made or selected
              from the tray drawing, sealing lip and film combination supplied by the buyer.
            </p>
            <p>
              MAVORIX helps overseas buyers compare China-side tray sealer suppliers, clarify tooling, arrange machine tests and
              coordinate export packing. MAVORIX is the sourcing and coordination partner, not the stated manufacturer of this
              machine.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Available Output Configurations</h2>
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-slate-50 text-navy">
                  <tr>
                    <th className="px-4 py-3 font-black">Station Layout</th>
                    <th className="px-4 py-3 font-black">Mold Capacity</th>
                    <th className="px-4 py-3 font-black">Supplied Estimate</th>
                    <th className="px-4 py-3 font-black">Operators</th>
                  </tr>
                </thead>
                <tbody>
                  {outputConfigurations.map(([station, mold, output, operators]) => (
                    <tr key={`${station}-${mold}`} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-semibold text-slate-700">{station}</td>
                      <td className="px-4 py-3 text-slate-600">{mold}</td>
                      <td className="px-4 py-3 text-slate-600">{output}</td>
                      <td className="px-4 py-3 text-slate-600">{operators}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              These figures are estimates from the supplied quotation, not guaranteed acceptance rates. Product filling, tray
              placement, sealing dwell time, film behavior and operator rhythm all affect actual output.
            </p>
          </section>

          <Section title="Real Machine Test Videos">
            <p>
              The two vertical videos below were supplied with the project files. They show the two-tray and four-tray tool formats in
              actual workshop operation, including loading access, film movement and the sealed packs after the cycle.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <TestVideo
                src="/videos/products/packaging-equipment/semi-automatic-tray-sealer-2-cavity-test.mp4"
                title="2-cavity tray sealing test"
                description="Two larger rectangular trays are positioned in the mold for each loading cycle."
              />
              <TestVideo
                src="/videos/products/packaging-equipment/semi-automatic-tray-sealer-4-cavity-test.mp4"
                title="4-cavity tray sealing test"
                description="Four smaller trays are sealed in one tool cycle to increase tray output."
              />
            </div>
          </Section>

          <Section title="Visible Machine Features">
            <ul className="grid gap-3 md:grid-cols-2">
              {visibleFeatures.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="How to Specify the Right Tray Sealer">
            <p>
              Start with the physical pack. The tray lip has to sit correctly in the mold, the lidding film must seal to the tray
              material, and the cutting contour has to match the pack. A supplier cannot responsibly confirm the tooling from a tray
              volume such as 500 ml alone. A dimensioned drawing is better, and physical tray and film samples are best for a test.
            </p>
            <p>
              Next, match output to labor. A double-station machine allows one side to be loaded while the other side is cycling, but
              it also assumes two operators in the supplied estimate. A single-station arrangement uses less labor and may be enough
              for shorter runs. Compare finished trays per hour under the same product and seal settings rather than comparing only
              the fastest headline number.
            </p>
            <p>
              This supplied configuration is presented as a heat-sealing machine. MAP, vacuum, skin packaging, automatic filling and
              conveyor integration are separate functions and are not confirmed here. If any of them are required, they should be
              written into the RFQ and tested as part of the agreed machine scope.
            </p>
          </Section>

          <Section title="Information Required for a Quotation">
            <ul className="grid gap-3 md:grid-cols-2">
              {selectionDetails.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="A Machine Type We Have Already Sourced">
            <p>
              The machine photo and both operating videos on this page came from a tray sealer project coordinated for an overseas
              buyer. The work included comparing the required cavity layout, reviewing the available machine, collecting workshop
              test evidence and following the order from the supplier side.
            </p>
            <p>
              For a new order, we repeat that process around the buyer&apos;s own trays and film rather than treating this machine as a
              one-size-fits-all item. MAVORIX can coordinate supplier comparison, sample trials, agreed inspection points, packing
              photos and export preparation through our{" "}
              <LinkText href="/en/industries/packaging-industry/">packaging industry sourcing</LinkText>,{" "}
              <LinkText href="/en/services/quality-inspection/">quality inspection</LinkText> and{" "}
              <LinkText href="/en/services/export-support/">export support</LinkText> workflows.
            </p>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Need a Tray Sealer for Your Container and Film?"
        text="Send tray drawings or samples, film details, packed product, target output, cavity count, station layout, site power, destination and quantity for supplier evaluation."
      />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), traySealerProductSchema(), faqSchema(faqs)]} />
    </>
  );
}

function SpecTerm({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-black uppercase text-slate-500">{label}</dt>
      <dd className="mt-1 font-bold text-navy">{value}</dd>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-3xl font-black text-navy">{title}</h2>
      <div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div>
    </section>
  );
}

function TestVideo({ src, title, description }: { src: string; title: string; description: string }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <video className="aspect-[9/16] max-h-[680px] w-full bg-black object-contain" controls playsInline preload="metadata">
        <source src={src} type="video/mp4" />
        Your browser does not support embedded MP4 video.
      </video>
      <figcaption className="p-4">
        <h3 className="font-black text-navy">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </figcaption>
    </figure>
  );
}

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="font-bold text-signal hover:text-orange-700">
      {children}
    </a>
  );
}

function traySealerProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: traySealerTitle,
    category: "Semi-Automatic Tray Sealing Machine",
    image: traySealerImages.map((image) => `${site.url}${image.src}`),
    description: traySealerMetaDescription
  };
}
