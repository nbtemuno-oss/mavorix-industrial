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

export const coldCutSawSlug = "jm-lq-355-14-inch-precision-cold-cut-saw";
export const coldCutSawTitle = "JM/LQ-355 14-Inch Precision Cold Cut Saw";
export const coldCutSawPath = `/en/products/metalworking-equipment/${coldCutSawSlug}/`;
export const coldCutSawDescription =
  "Source a JM/LQ-355 14-inch precision cold cut saw rated 3500 W at 220 V, with a 355 x 25.4 mm blade. Confirm material and cutting capacity.";

const images = [
  {
    src: `/images/products/metalworking-equipment/${coldCutSawSlug}/${coldCutSawSlug}-main.webp`,
    alt: "JM/LQ-355 14-inch precision cold cut saw on a clean catalog background",
    label: "Machine view"
  }
];

const summarySpecs = [
  ["Model", "JM/LQ-355"],
  ["Rated Power", "3500 W"],
  ["Power Supply", "220 V / 50 Hz"],
  ["Blade Size", "355 x 25.4 mm"],
  ["Net Weight", "54 kg"],
  ["Selection", "Material and profile confirmation required"]
];

const confirmedSpecs = [
  ["Model", "JM/LQ-355"],
  ["Machine Description", "14-inch brushless variable-frequency precision cold cut saw, as stated in the supplied image"],
  ["Rated Power", "3500 W"],
  ["Voltage", "220 V"],
  ["Frequency", "50 Hz"],
  ["Saw Blade Size", "355 x 25.4 mm"],
  ["Installed Blade Marking", "355-66T dedicated cold-cut blade"],
  ["Net Weight", "54 kg"],
  ["Packing Size", "62 x 57 x 47 cm"],
  ["Visible Workholding", "Adjustable vise/clamp and rear fence"],
  ["Visible Angle Setup", "Pivoting table with angle scale"]
];

const applications = [
  "Round steel bar cutting",
  "Square steel tube cutting",
  "Channel steel cutting",
  "Angle steel cutting",
  "Metal fabrication workshops",
  "Maintenance and repair departments",
  "Small-batch profile preparation",
  "Factory spare-parts and fixture work"
];

const orderingInfo = [
  "Material grade and hardness",
  "Profile type: round bar, square tube, channel or angle",
  "Maximum workpiece dimensions",
  "Required 0-degree and 45-degree capacity",
  "Wall thickness for hollow profiles",
  "Required cut finish and burr tolerance",
  "Target pieces per hour and daily duty cycle",
  "Site voltage, frequency, phase and plug requirement",
  "Blade specification and spare-blade quantity",
  "Destination country and conformity-document requirement"
];

const faqs = [
  {
    q: "What blade size does the JM/LQ-355 cold cut saw use?",
    a: "The supplied image lists a 355 x 25.4 mm blade and shows a 355-66T cold-cut blade as the installed blade reference. Confirm the bore, tooth count and blade material for the workpiece before ordering spares."
  },
  {
    q: "What power supply is shown for this precision cold saw?",
    a: "The supplied image states 3500 W, 220 V and 50 Hz. Phase, plug type and suitability for the destination site still require written confirmation."
  },
  {
    q: "Can the JM/LQ-355 cut round bar and structural profiles?",
    a: "The supplier image provides capacities for round steel, square steel, channel and angle profiles. Actual capacity depends on material grade, hardness, wall thickness, blade and cutting angle, so send the exact workpiece details for confirmation."
  },
  {
    q: "Is the machine suitable for 45-degree cuts?",
    a: "The supplied capacity table includes both 0-degree and 45-degree columns, and the machine image shows a pivoting table with an angle scale. Confirm the required profile and dimensions at 45 degrees before purchase."
  },
  {
    q: "What should I send for a cold cut saw quotation?",
    a: "Send the material grade, profile drawing or dimensions, wall thickness, maximum cut size, cutting angles, output target, site power, blade requirements, quantity and destination."
  }
];

export function ColdCutSawPage() {
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("JM/LQ-355 cold cut saw inquiry")}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: "Metalworking Equipment", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: coldCutSawTitle, url: `${site.url}${coldCutSawPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs items={[
            { label: "Home", href: "/en/" },
            { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
            { label: "Metalworking Equipment", href: "/en/industries/industrial-machinery/" },
            { label: coldCutSawTitle, href: coldCutSawPath }
          ]} />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={images} />
          <div className="space-y-7">
            <div>
              <Badge>Precision Metal Cutting Saw</Badge>
              <h1 className="mt-4 break-words text-4xl font-black leading-tight text-navy md:text-5xl">{coldCutSawTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Compact 355 mm cold cut saw for controlled cutting of steel bar, square tube, channel and angle profiles. The supplied image identifies model JM/LQ-355 and lists a 3500 W, 220 V / 50 Hz configuration.
              </p>
            </div>
            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => <SpecTerm key={label} label={label} value={value} />)}
            </dl>
            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2"><Send size={17} aria-hidden="true" /> Send Cutting Details</Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2"><MessageCircle size={17} aria-hidden="true" /> Request a Quote</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-12">
          <Section title="Product Overview">
            <p>
              The JM/LQ-355 is presented as a 14-inch precision cold cut saw with brushless variable-frequency drive. Its enclosed blade guard, adjustable vise, rear fence and angle-marked pivot table support repeatable workshop cutting across several metal profile shapes.
            </p>
            <p>
              Cutting capacity should be checked against the actual material rather than blade diameter alone. Steel grade, hardness, section thickness, tooth geometry, cutting angle and required finish all affect whether a particular job is suitable.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
            <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <tbody>
                  {confirmedSpecs.map(([label, value]) => (
                    <tr key={label} className="border-b border-slate-200 last:border-0">
                      <th className="w-64 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
                      <td className="px-4 py-3 font-semibold text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Section title="Key Features">
            <ul className="grid gap-3 md:grid-cols-2">
              {["355 mm cold-cut blade format", "Enclosed upper blade guard", "Adjustable workpiece vise", "Rear material fence", "Pivoting table with angle scale", "Compact bench/floor-mounted form", "0-degree and 45-degree cutting references", "Model-specific selection support"].map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {applications.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}
            </ul>
          </Section>

          <Section title="Capacity and Selection Notice">
            <p>
              The supplied chart shows reference capacities at 0 and 45 degrees, but those values should not be treated as universal limits for every alloy or section. Send the workpiece specification so the supplier can confirm the machine, blade and clamping arrangement together.
            </p>
            <p>
              Electrical configuration, blade speed range, duty cycle, guarding and destination-market documentation also require written confirmation before ordering.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {orderingInfo.map((item) => <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">{item}</li>)}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX supports China-side supplier communication, machine and blade configuration checks, quotation comparison, inspection-photo follow-up, export packing and consolidation with other industrial equipment and MRO parts.
            </p>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />
      <CTASection title="Need a Cold Saw for a Specific Metal Profile?" text="Send the material, profile dimensions, cutting angle, output target, site power and destination for supplier-side configuration checking." />
      <JsonLd data={[
        breadcrumbSchema(breadcrumbItems),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: coldCutSawTitle,
          model: "JM/LQ-355",
          category: "Precision Cold Cut Saw",
          image: images.map((image) => `${site.url}${image.src}`),
          description: coldCutSawDescription
        },
        faqSchema(faqs)
      ]} />
    </>
  );
}

function SpecTerm({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-xs font-black uppercase text-slate-500">{label}</dt><dd className="mt-1 font-bold text-navy">{value}</dd></div>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div></section>;
}
