import { MessageCircle, Send } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IndustrialImage } from "@/components/ui/IndustrialImage";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";

export const verticalTurretMillingSlug = "hjy-4gt-vertical-turret-milling-machine";
export const verticalTurretMillingTitle = "HJY-4GT Vertical Turret Milling Machine";
export const verticalTurretMillingPath = `/en/products/metalworking-equipment/${verticalTurretMillingSlug}/`;
export const verticalTurretMillingDescription =
  "Source HJY-4GT vertical turret milling machine with 1270 x 254 mm table, 700/380/400 mm travel, 80-5440 rpm spindle and R8/NT30 taper.";

const imageBase = `/images/products/general-products/${verticalTurretMillingSlug}`;

const images = [
  {
    src: `${imageBase}/${verticalTurretMillingSlug}-main-bright.webp`,
    alt: "HJY-4GT vertical turret milling machine on a clean white background",
    label: "Complete HJY-4GT machine"
  }
];

const summarySpecs = [
  ["Model", "HJY-4GT"],
  ["Table", "1270 x 254 mm"],
  ["X / Y / Z Travel", "700 / 380 / 400 mm"],
  ["Spindle Speed", "80-5440 rpm, 16 steps"],
  ["Spindle Taper", "R8 (NT30 reference)"],
  ["Spindle Motor", "2.2 kW"]
];

const confirmedSpecs = [
  ["Model", "HJY-4GT"],
  ["Machine Type", "Vertical turret milling machine / knee-type milling machine"],
  ["Table Size", "1270 x 254 mm"],
  ["Longitudinal Travel (X)", "700 mm"],
  ["Cross Travel (Y)", "380 mm"],
  ["Knee Travel (Z)", "400 mm"],
  ["Maximum Table Load", "300 kg"],
  ["Spindle-to-Table Distance", "480 mm"],
  ["Vertical Spindle Speed", "80-5440 rpm, 16 steps"],
  ["Spindle Taper", "R8 (NT30 option/reference shown)"],
  ["Vertical Spindle Motor", "2.2 kW"],
  ["Head Tilt", "45 degrees left/right and 45 degrees front/back"],
  ["Overall Dimensions", "Approximately 1700 x 1700 x 2100 mm"],
  ["Approximate Weight", "1250 kg"]
];

const features = [
  {
    title: "Precision Ball-Screw Drive",
    description: "Supports smooth axis movement and more controlled manual positioning with reduced transmission clearance."
  },
  {
    title: "Rigid Milling Head",
    description: "A reinforced head and motor mounting structure provide a stable platform for general milling, drilling and boring."
  },
  {
    title: "Integrated Control Panel",
    description: "Machine controls and the digital position display are grouped within easy reach of the operator."
  },
  {
    title: "Automatic Lubrication",
    description: "The electronic lubrication system supplies oil to key sliding and transmission points at set intervals."
  },
  {
    title: "Retractable Front Guard",
    description: "The front table guard helps contain chips while retaining practical access for setup and maintenance."
  },
  {
    title: "Double-Wall Machine Body",
    description: "The reinforced column and base structure are designed to improve rigidity during everyday workshop machining."
  },
  {
    title: "Electric Z-Axis Lift",
    description: "Powered knee elevation reduces manual effort when adjusting the table height for different workpieces and fixtures."
  }
];

const configurationRows = [
  ["Base machine", "Standard", "HJY-4GT knee-type body, turret head, table and manual axis controls"],
  ["Spindle taper", "Selection required", "R8 reference configuration; confirm NT30 availability before ordering"],
  ["Digital readout", "Configured option", "Three-axis DRO upgrade shown in the supplied order list"],
  ["Y-axis power feed", "Configured option", "Powered cross-feed unit for controlled table movement"],
  ["Pneumatic tool change", "Configured option", "Confirm spindle taper, drawbar system and required air pressure"],
  ["Electric Z-axis lift", "Configured option", "Powered knee elevation for easier height adjustment"],
  ["Export packing", "Optional", "Timber export packing according to destination and shipping method"]
];

const applications = [
  "Toolroom milling and maintenance work",
  "Flat-surface and shoulder milling",
  "Slots, keyways and groove machining",
  "Drilling, boring and reaming operations",
  "Fixtures, jigs and repair components",
  "Prototype and one-off metal parts",
  "Small-batch machining in general workshops",
  "Die, mold and machine-component preparation"
];

const orderingInfo = [
  "Workpiece material and hardness",
  "Maximum workpiece dimensions and weight",
  "Required milling, drilling and boring operations",
  "Critical tolerances and surface-finish requirements",
  "Preferred R8 or NT30 spindle configuration",
  "Required tooling, collets, holders and vise",
  "Digital readout and power-feed requirements",
  "Pneumatic tool-change and air-supply requirements",
  "Site voltage, frequency and phase",
  "Guarding and conformity-document requirements",
  "Installation, commissioning and training scope",
  "Destination and unloading conditions"
];

const faqs = [
  {
    q: "What type of milling machine is the HJY-4GT?",
    a: "The HJY-4GT is a vertical turret, knee-type milling machine for manual toolroom, repair and small-batch machining. Its movable table, knee and tilting head support a broad range of milling, drilling and boring work."
  },
  {
    q: "What is the HJY-4GT table size and travel?",
    a: "The supplied specification lists a 1270 x 254 mm table, 700 mm X-axis travel, 380 mm Y-axis travel and 400 mm Z-axis knee travel. Maximum table load is listed as 300 kg."
  },
  {
    q: "What spindle does the HJY-4GT use?",
    a: "The supplied configuration lists an R8 spindle with an NT30 option or reference, a 2.2 kW motor and 16 spindle speeds from 80 to 5440 rpm. Confirm the required taper and destination frequency in the quotation."
  },
  {
    q: "Can the milling head machine angled surfaces?",
    a: "The specification lists 45-degree head movement left and right and 45 degrees front and back. The workpiece setup, cutter clearance and required angle should still be reviewed before purchase."
  },
  {
    q: "Which options are included in this HJY-4GT configuration?",
    a: "The supplied order list includes Y-axis power feed, pneumatic tool change, electric Z-axis lift and an upgrade from two-axis to three-axis digital readout. Final brands and accessory scope should be written into the quotation."
  },
  {
    q: "What should I send for a vertical turret milling machine quotation?",
    a: "Send the workpiece drawings, material, operations, tolerances, maximum size and weight, spindle preference, tooling list, site power, conformity requirements, destination and unloading plan."
  }
];

export function VerticalTurretMillingMachinePage() {
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("HJY-4GT vertical turret milling machine inquiry")}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: "Metalworking Equipment", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: verticalTurretMillingTitle, url: `${site.url}${verticalTurretMillingPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs items={[
            { label: "Home", href: "/en/" },
            { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
            { label: "Metalworking Equipment", href: "/en/industries/industrial-machinery/" },
            { label: verticalTurretMillingTitle, href: verticalTurretMillingPath }
          ]} />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <IndustrialImage
            src={images[0].src}
            alt={images[0].alt}
            className="aspect-[2/3] w-full border border-slate-200 bg-white"
            sizes="(min-width: 1024px) 50vw, 100vw"
            fit="contain"
            priority
          />
          <div className="space-y-7">
            <div>
              <Badge>Vertical Turret Milling Machine</Badge>
              <h1 className="mt-4 break-words text-4xl font-black leading-tight text-navy md:text-5xl">{verticalTurretMillingTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Knee-type vertical turret mill for toolrooms, repair workshops and small-batch metal machining. The HJY-4GT combines
                a 1270 x 254 mm table, tilting milling head, 80-5440 rpm spindle and three-axis digital readout in a versatile manual machine.
              </p>
            </div>
            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => <SpecTerm key={label} label={label} value={value} />)}
            </dl>
            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2"><Send size={17} aria-hidden="true" /> Send Workpiece Drawing</Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2"><MessageCircle size={17} aria-hidden="true" /> Request a Quote</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14"><article className="space-y-12">
        <Section title="Product Overview">
          <p>
            The HJY-4GT is a manual vertical turret milling machine built around a vertically adjustable knee, cross-moving saddle
            and long T-slot table. This layout gives machinists direct control over X, Y and Z positioning for general milling,
            drilling, boring and repair work without the setup overhead of a CNC machining center.
          </p>
          <p>
            A swiveling and tilting turret head allows the spindle to approach angled surfaces and awkward features. The 16-step
            speed range supports different cutter diameters and materials, while the configured three-axis DRO helps the operator
            track table and knee position during manual machining.
          </p>
          <p>
            This configuration is intended for workshops that need flexibility across prototypes, fixtures, maintenance parts and
            short production runs. Final machine selection should be based on workpiece size, material, tolerances, tooling, site
            power and the exact accessory scope written into the quotation.
          </p>
        </Section>

        <section>
          <h2 className="text-3xl font-black text-navy">HJY-4GT Technical Specifications</h2>
          <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white"><table className="w-full min-w-[680px] text-left text-sm"><tbody>
            {confirmedSpecs.map(([label, value]) => <tr key={label} className="border-b border-slate-200 last:border-0">
              <th className="w-64 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
              <td className="px-4 py-3 font-semibold text-slate-700">{value}</td>
            </tr>)}
          </tbody></table></div>
        </section>

        <Section title="Seven Product Advantages"><AdvantageGrid items={features} /></Section>
        <section>
          <h2 className="text-3xl font-black text-navy">Standard and Optional Configuration</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            The following table separates the base machine from the options recorded for this HJY-4GT configuration. The final
            supply scope should always be confirmed in the signed quotation.
          </p>
          <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-navy text-white"><tr>
                <th className="px-4 py-3 font-black">Item</th>
                <th className="px-4 py-3 font-black">Supply Status</th>
                <th className="px-4 py-3 font-black">Details</th>
              </tr></thead>
              <tbody>{configurationRows.map(([item, status, details]) => <tr key={item} className="border-b border-slate-200 last:border-0">
                <th className="px-4 py-3 font-black text-navy">{item}</th>
                <td className="px-4 py-3 font-bold text-signal">{status}</td>
                <td className="px-4 py-3 font-semibold text-slate-700">{details}</td>
              </tr>)}</tbody>
            </table>
          </div>
        </section>
        <Section title="Typical Applications">
          <FeatureGrid items={applications} />
          <p>Actual machining capability depends on material, cutter, setup rigidity, feed, depth of cut and required tolerance.</p>
        </Section>
        <Section title="Configuration and Selection Notes">
          <p>
            Confirm whether the quotation is for an R8 spindle or NT30 configuration. Tool holders, collets and pneumatic drawbar
            components must match the selected spindle system; they should not be treated as interchangeable accessories.
          </p>
          <p>
            The listed 80-5440 rpm range should be checked against destination frequency and motor configuration. Voltage, phase,
            electrical components, DRO brand, power-feed brand, guarding and conformity documents should all be confirmed in writing.
          </p>
          <p>
            Published travel and table-load figures describe machine capacity, not guaranteed finished-part accuracy. Buyers with
            close tolerances should define an acceptance method, measuring equipment and sample machining requirement before shipment.
          </p>
        </Section>
        <Section title="Information Required Before Ordering"><FeatureGrid items={orderingInfo} muted /></Section>
        <Section title="MAVORIX Sourcing Support">
          <p>
            MAVORIX coordinates China-side machine-tool sourcing, configuration comparison, supplier communication, inspection scope,
            accessory checking and export packing. We do not claim to manufacture the HJY-4GT; the buyer approves the final supplier,
            machine specification and acceptance criteria.
          </p>
          <p>
            Related support is available through our <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
            <LinkText href="/en/industries/industrial-machinery/">industrial machinery</LinkText>,{" "}
            <LinkText href="/en/services/quality-inspection/">quality inspection</LinkText> and{" "}
            <LinkText href="/en/contact/">contact</LinkText> pages.
          </p>
        </Section>
      </article></Container>

      <FAQSection faqs={faqs} />
      <CTASection title="Need an HJY-4GT Milling Machine Quotation?" text="Send the workpiece drawing, material, machining operations, tolerances, tooling, site power, destination and required accessory list." />
      <JsonLd data={[
        breadcrumbSchema(breadcrumbItems),
        { "@context": "https://schema.org", "@type": "Product", name: verticalTurretMillingTitle, model: "HJY-4GT", mpn: "HJY-4GT", category: "Vertical Turret Milling Machine", image: images.map((image) => `${site.url}${image.src}`), description: verticalTurretMillingDescription },
        faqSchema(faqs)
      ]} />
    </>
  );
}

function SpecTerm({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-xs font-black uppercase text-slate-500">{label}</dt><dd className="mt-1 break-words font-bold text-navy">{value}</dd></div>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section><h2 className="text-3xl font-black text-navy">{title}</h2><div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div></section>;
}

function FeatureGrid({ items, muted = false }: { items: string[]; muted?: boolean }) {
  return <ul className="grid gap-3 md:grid-cols-2">{items.map((item) => <li key={item} className={`${muted ? "bg-slate-50 ring-1 ring-slate-200" : "border border-slate-200 bg-white"} rounded-md p-4 text-sm font-semibold text-slate-700`}>{item}</li>)}</ul>;
}

function AdvantageGrid({ items }: { items: Array<{ title: string; description: string }> }) {
  return <div className="grid gap-4 md:grid-cols-2">{items.map((item, index) => <div key={item.title} className="border-l-4 border-signal bg-slate-50 p-5">
    <p className="text-xs font-black uppercase text-signal">Advantage {index + 1}</p>
    <h3 className="mt-2 text-lg font-black text-navy">{item.title}</h3>
    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
  </div>)}</div>;
}

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="font-bold text-signal hover:text-orange-700">{children}</a>;
}
