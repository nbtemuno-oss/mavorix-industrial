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

export const counterbalanceValveSlug = "rexroth-r930050353-single-counterbalance-valve";
export const counterbalanceValveTitle = "Rexroth R930050353 A-VBSO Single Counterbalance Valve";
export const counterbalanceValvePath = `/en/products/hydraulic-components/${counterbalanceValveSlug}/`;
export const counterbalanceValveDescription =
  "Source Rexroth R930050353 single counterbalance valve, code 08356265723500B / A-VBSO-SE-CCAP33PSE34SAE. Confirm ports, setting and application.";

const images = [
  {
    src: "/images/products/general-products/rexroth-r930050353-single-counterbalance-valve/rexroth-r930050353-single-counterbalance-valve-main.webp",
    alt: "Rexroth R930050353 A-VBSO single counterbalance valve",
    label: "R930050353 counterbalance valve"
  }
];

const summarySpecs = [
  ["Brand", "Rexroth"],
  ["Material Number", "R930050353"],
  ["Type Code", "08356265723500B"],
  ["Product Code", "A-VBSO-SE-CCAP33PSE34SAE"],
  ["Product Type", "Single counterbalance valve"],
  ["Selection", "Complete-code and application check required"]
];

const confirmedSpecs = [
  ["Brand", "Rexroth"],
  ["Material Number", "R930050353"],
  ["Type Code", "08356265723500B"],
  ["Product Code", "A-VBSO-SE-CCAP33PSE34SAE"],
  ["Product Type", "Single counterbalance valve"],
  ["Product Family", "Bosch Rexroth Oil Control / mobile hydraulics"],
  ["Valve Form", "Compact hydraulic valve block"],
  ["Port Protection", "Protective port fittings supplied"]
];

const applications = [
  "Load-holding hydraulic circuits",
  "Controlled lowering of hydraulic actuators",
  "Mobile equipment hydraulic systems",
  "Lifting and material-handling equipment",
  "Industrial machine hydraulic repair",
  "Exact-code MRO spare-parts sourcing"
];

const requiredInformation = [
  "Clear old-valve label and all-side photos",
  "Rexroth material number and complete type code",
  "Hydraulic schematic or machine parts-list reference",
  "Required pressure setting and operating pressure",
  "Required flow and pilot ratio",
  "Port threads, sizes and connection layout",
  "Machine brand, model and valve function",
  "Required quantity and destination"
];

const faqs = [
  {
    q: "What is Rexroth material number R930050353?",
    a: "The supplied label shows R930050353. Product-code cross-references identify it with type code 08356265723500B and A-VBSO-SE-CCAP33PSE34SAE as a single counterbalance valve."
  },
  {
    q: "Is R930050353 enough information to order the valve?",
    a: "It is the strongest identification reference on the label, but pressure setting, flow, pilot ratio, ports, circuit function and machine application should still be confirmed before ordering."
  },
  {
    q: "Can a similar-looking counterbalance valve replace this model?",
    a: "Not automatically. Similar body shape does not establish the same internal function, settings, pilot ratio, port arrangement or installation interface."
  },
  {
    q: "What pressure, flow and pilot ratio apply to R930050353?",
    a: "These values should be confirmed from controlled technical documentation for the complete code and the required hydraulic circuit before ordering."
  },
  {
    q: "Is MAVORIX an authorized Rexroth distributor?",
    a: "MAVORIX provides independent industrial sourcing and supplier coordination. We do not claim authorized-distributor status unless it is documented for a specific supply channel."
  }
];

export function RexrothCounterbalanceValvePage() {
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Rexroth R930050353 counterbalance valve inquiry")}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: counterbalanceValveTitle, url: `${site.url}${counterbalanceValvePath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs items={[
            { label: "Home", href: "/en/" },
            { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
            { label: counterbalanceValveTitle, href: counterbalanceValvePath }
          ]} />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={images} />
          <div className="space-y-7">
            <div>
              <Badge>Hydraulic Counterbalance Valve</Badge>
              <h1 className="mt-4 break-words [overflow-wrap:anywhere] text-4xl font-black leading-tight text-navy md:text-5xl">
                {counterbalanceValveTitle}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Rexroth single counterbalance valve identified by Material Number R930050353 and cross-referenced with code
                08356265723500B / A-VBSO-SE-CCAP33PSE34SAE. Pressure setting, flow, pilot ratio and interfaces must be checked for
                the actual hydraulic circuit before replacement ordering.
              </p>
            </div>
            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => <SpecTerm key={label} label={label} value={value} />)}
            </dl>
            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2"><Send size={17} aria-hidden="true" /> Send Your Valve Details</Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2"><MessageCircle size={17} aria-hidden="true" /> Request a Quote</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-12">
          <Section title="Product Overview">
            <p>
              Rexroth Material Number R930050353 corresponds to type code 08356265723500B / A-VBSO-SE-CCAP33PSE34SAE, a compact
              single counterbalance valve for compatible mobile and industrial hydraulic circuits.
            </p>
            <p>
              A counterbalance valve is generally used in a load-holding circuit to help prevent an actuator from running ahead of
              the supplied flow and to support controlled movement under load. That is the product family's general function; the
              exact behavior of this code depends on its internal configuration, setting and circuit connection.
            </p>
            <p>
              Replacement selection should keep the material number and complete type code together. Pressure setting, flow, pilot
              ratio, ports and circuit function must match the original valve and hydraulic schematic.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Identification</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm"><tbody>
                {confirmedSpecs.map(([label, value]) => (
                  <tr key={label} className="border-b border-slate-200 last:border-0">
                    <th className="w-44 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
                    <td className="break-words px-4 py-3 font-semibold text-slate-700 [overflow-wrap:anywhere]">{value}</td>
                  </tr>
                ))}
              </tbody></table>
            </div>
          </section>

          <Section title="Typical Sourcing Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {applications.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}
            </ul>
            <p>These are application categories, not a compatibility claim for any particular machine or hydraulic circuit.</p>
          </Section>

          <Section title="Compatibility and Selection Notice">
            <p>
              Keep R930050353, 08356265723500B and A-VBSO-SE-CCAP33PSE34SAE together during quotation review. A shortened A-VBSO
              description or a similar-looking valve body is not enough to establish interchangeability.
            </p>
            <p>
              Confirm the hydraulic schematic, pressure setting, flow, pilot ratio, ports, dimensions and equipment application.
              Any proposed successor or alternative should be supported by written technical information and reviewed by qualified
              hydraulic personnel.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {requiredInformation.map((item) => <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">{item}</li>)}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX is an independent China-side sourcing and supplier coordination partner, not the valve manufacturer. Support
              can include full-code checking, supplier comparison, document follow-up, product and packing photos, and consolidation
              with pumps, seals, sensors and other industrial spare parts.
            </p>
            <p>
              Related support is available through our <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText>,{" "}
              <LinkText href="/en/services/quality-inspection/">quality inspection</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> pages.
            </p>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Need Help Checking Rexroth R930050353?"
        text="Send the complete old-valve label, hydraulic schematic, port details, machine model, quantity and destination for sourcing support."
      />
      <JsonLd data={[
        breadcrumbSchema(breadcrumbItems),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: counterbalanceValveTitle,
          brand: { "@type": "Brand", name: "Rexroth" },
          model: "A-VBSO-SE-CCAP33PSE34SAE",
          mpn: "R930050353",
          category: "Single Counterbalance Valve",
          image: images.map((image) => `${site.url}${image.src}`),
          description: counterbalanceValveDescription
        },
        faqSchema(faqs)
      ]} />
    </>
  );
}

function SpecTerm({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-xs font-black uppercase text-slate-500">{label}</dt><dd className="mt-1 break-words font-bold text-navy [overflow-wrap:anywhere]">{value}</dd></div>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div></section>;
}

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="font-bold text-signal hover:text-orange-700">{children}</a>;
}
