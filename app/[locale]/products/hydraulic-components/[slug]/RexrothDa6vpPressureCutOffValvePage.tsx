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

export const rexrothDa6vpSlug = "rexroth-da6vp2a50-350fsm-pressure-cut-off-valve";
export const rexrothDa6vpTitle = "Rexroth DA6VP2A50/350FSM Pressure Cut-Off Valve";
export const rexrothDa6vpPath = `/en/products/hydraulic-components/${rexrothDa6vpSlug}/`;
export const rexrothDa6vpDescription =
  "Rexroth DA6VP2A50/350FSM pressure cut-off valve, Material Number R901224247, for model- and circuit-based industrial hydraulic replacement sourcing.";

const images = [
  {
    src: "/images/products/general-products/rexroth-da6vp2a50-350fsm-pressure-cut-off-valve/rexroth-da6vp2a50-350fsm-pressure-cut-off-valve-main.webp",
    alt: "Rexroth DA6VP2A50/350FSM pressure cut-off valve identification plate",
    label: "Model and material number"
  },
  {
    src: "/images/products/general-products/rexroth-da6vp2a50-350fsm-pressure-cut-off-valve/rexroth-da6vp2a50-350fsm-pressure-cut-off-valve-gallery-02.webp",
    alt: "Rexroth DA6VP2A50/350FSM hydraulic pressure cut-off valves",
    label: "Hydraulic valve assembly"
  }
];

const summarySpecs = [
  ["Brand", "Rexroth"],
  ["Material Number", "R901224247"],
  ["Model", "DA6VP2A50/350FSM"],
  ["Product Type", "Pressure cut-off valve"],
  ["Selection", "Complete circuit and interface check required"]
];

const confirmedSpecs = [
  ["Brand", "Rexroth"],
  ["Material Number", "R901224247"],
  ["Model", "DA6VP2A50/350FSM"],
  ["Product Type", "Pressure cut-off valve"],
  ["Factory Date Code", "FD: 25W22"],
  ["Country Marking", "Made in Romania"]
];

const faqs = [
  {
    q: "What is Rexroth R901224247?",
    a: "R901224247 is the material number associated with Rexroth model DA6VP2A50/350FSM. Bosch Rexroth lists the material number as a pressure cut-off valve."
  },
  {
    q: "Can a similar pressure valve replace DA6VP2A50/350FSM?",
    a: "Not automatically. The hydraulic schematic, setting, port arrangement, mounting, flow requirement and machine application must be checked before a replacement is selected."
  },
  {
    q: "Does the 350 code confirm the setting for my system?",
    a: "No. Confirm the complete code and the required setting against controlled technical documentation and the actual hydraulic circuit before ordering."
  },
  {
    q: "What should I send for a quotation?",
    a: "Send the complete old-valve label, hydraulic schematic, port and mounting details, machine model, required quantity and destination."
  },
  {
    q: "Is MAVORIX an authorized Rexroth distributor?",
    a: "MAVORIX provides independent industrial sourcing and supplier coordination. We do not claim authorized-distributor status unless it is documented for a specific supply channel."
  }
];

export function RexrothDa6vpPressureCutOffValvePage() {
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("Rexroth DA6VP2A50/350FSM pressure cut-off valve inquiry")}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: rexrothDa6vpTitle, url: `${site.url}${rexrothDa6vpPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs items={[
            { label: "Home", href: "/en/" },
            { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
            { label: rexrothDa6vpTitle, href: rexrothDa6vpPath }
          ]} />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={images} />
          <div className="space-y-7">
            <div>
              <Badge>Hydraulic Pressure Cut-Off Valve</Badge>
              <h1 className="mt-4 break-words [overflow-wrap:anywhere] text-4xl font-black leading-tight text-navy md:text-5xl">
                {rexrothDa6vpTitle}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Rexroth DA6VP2A50/350FSM is a pressure cut-off valve identified by Material Number R901224247. The complete model,
                hydraulic circuit, setting and interfaces should be checked together before a replacement order is placed.
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
              Rexroth DA6VP2A50/350FSM is a model-specific hydraulic pressure cut-off valve used where the original valve's
              pressure-control function, ports and circuit arrangement must be retained. Material Number R901224247 is a useful
              reference when comparing quotations and supplier documentation.
            </p>
            <p>
              Pressure-control components should be selected from the complete valve code and the actual hydraulic schematic, not
              from body size or a partial marking. The required setting, flow, port layout, mounting interface and machine duty all
              need to match the original application.
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

          <Section title="Selection and Compatibility">
            <p>
              Keep R901224247 and DA6VP2A50/350FSM together during replacement sourcing. A similar-looking hydraulic valve, a
              shortened code or a nominal pressure reference alone does not establish interchangeability.
            </p>
            <p>
              Confirm the hydraulic schematic, required pressure setting, ports, mounting, flow and equipment application. Any
              proposed successor or alternative should be supported by controlled technical information and reviewed by qualified
              hydraulic personnel.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {[
                "Clear old-valve label and all-side photos",
                "Rexroth material number and complete model code",
                "Hydraulic schematic or machine parts-list reference",
                "Required pressure setting and operating conditions",
                "Port threads, sizes and connection layout",
                "Machine brand, model and valve function",
                "Required quantity and destination"
              ].map((item) => <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">{item}</li>)}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX is an independent China-side sourcing and supplier coordination partner, not the valve manufacturer. Support
              can include model-code checking, supplier comparison, document follow-up, product and packing photos, and consolidation
              with pumps, seals, sensors and other industrial spare parts.
            </p>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Need Help Checking Rexroth DA6VP2A50/350FSM?"
        text="Send the complete old-valve label, hydraulic schematic, port details, machine model, quantity and destination for sourcing support."
      />
      <JsonLd data={[
        breadcrumbSchema(breadcrumbItems),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: rexrothDa6vpTitle,
          brand: { "@type": "Brand", name: "Rexroth" },
          model: "DA6VP2A50/350FSM",
          mpn: "R901224247",
          category: "Pressure Cut-Off Valve",
          image: images.map((image) => `${site.url}${image.src}`),
          description: rexrothDa6vpDescription
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
