import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import {
  coldCutSawDescription,
  coldCutSawPath,
  coldCutSawSlug,
  coldCutSawTitle,
  ColdCutSawPage
} from "./ColdCutSawPage";
import {
  verticalTurretMillingDescription,
  verticalTurretMillingPath,
  verticalTurretMillingSlug,
  verticalTurretMillingTitle,
  VerticalTurretMillingMachinePage
} from "./VerticalTurretMillingMachinePage";

const productSlug = "zs-60-tube-tapering-reducing-machine";
const coldCutSawRouteSlug = "jm-lq-355-14-inch-precision-cold-cut-saw";
const productTitle = "ZS-60 Tube Tapering and Reducing Machine";
const productPath = `/en/products/metalworking-equipment/${productSlug}/`;
const metaDescription =
  "Source a ZS-60 tube tapering and reducing machine for steel pipe up to Ø60 x 2 mm, with 420 mm reducing length and custom tooling.";
const imageBase = `/images/products/general-products/${productSlug}`;

const productImages = [
  {
    src: `${imageBase}/${productSlug}-main.webp`,
    alt: "ZS-60 steel tube tapering and reducing machine",
    label: "ZS-60 machine"
  }
];

const summarySpecs = [
  ["Model", "ZS-60"],
  ["Maximum Capacity", "Ø60 x 2 mm"],
  ["Reducing Length", "Up to 420 mm"],
  ["Cycle Time", "5-25 seconds"],
  ["Mold Stroke", "50 mm"],
  ["Main Motor", "5.5 kW"]
];

const confirmedSpecs = [
  ["Model", "ZS-60"],
  ["Machine Type", "Tube tapering and reducing machine"],
  ["Maximum Processing Capacity", "Ø60 x 2 mm, as stated in the supplied document"],
  ["Maximum Reducing Length", "420 mm"],
  ["Cycle Time", "5-25 seconds per cycle"],
  ["Mold Open/Close Stroke", "50 mm"],
  ["Forming Method", "Cold forming / cold forging described in the supplied document"],
  ["Main Motor", "5.5 kW TAIHU Y132M2-6"],
  ["Bed Construction", "Welded steel plate, tempered after welding"],
  ["Main Housing Material", "HT300"],
  ["High-Speed Bearing", "NSK, Japan"],
  ["Oil Pump Motor", "TAIHU, China"],
  ["Relay", "CHINT, China"],
  ["AC Contactor", "CHINT, China"],
  ["Lubrication", "Closed-circuit lubrication system stated in the supplied document"]
];

const applications = [
  "Tapered steel table legs and chair legs",
  "Outdoor furniture tube components",
  "Decorative metal tube and display-frame parts",
  "Lighting poles and lamp components",
  "Fitness-equipment and sporting-goods tubes",
  "Automotive and motorcycle tubular parts",
  "Tube ends prepared for insertion or assembly",
  "Long conical profiles made from thin-wall round tube"
];

const orderingInfo = [
  "Starting tube outside diameter and wall thickness",
  "Tube material grade, hardness and welded or seamless construction",
  "Overall workpiece length",
  "Finished small-end diameter",
  "Taper or reduced-section length",
  "Required straight sections and transition radii",
  "Diameter, roundness and surface tolerances",
  "Drawing and physical samples where available",
  "Required tube sizes and number of mold sets",
  "Target pieces per hour and daily operating time",
  "Site voltage, frequency and phase",
  "Inspection method, destination and packing requirement"
];

const faqs = [
  {
    q: "What is the correct English name for this pipe reducing machine?",
    a: "Tube tapering machine and tube reducing machine are the clearest names for this ZS-60 application. Buyers also search for pipe swaging machine and tube end forming machine. Pipe tap machine is not recommended because it normally suggests thread tapping rather than diameter reduction."
  },
  {
    q: "What tube size can the ZS-60 process?",
    a: "The supplied specification states a maximum processing capacity of Ø60 x 2 mm. This is normally read as outside diameter by wall thickness, but the actual limit depends on material grade, hardness, weld condition, reduction ratio and finished shape."
  },
  {
    q: "How long can the reduced or tapered section be?",
    a: "The supplied document lists a maximum reducing length of 420 mm. The final usable length and profile should be checked against the workpiece drawing and mold design."
  },
  {
    q: "Does one mold work for several tube sizes?",
    a: "The supplied document states that different pipe sizes require different molds. Send every starting size and finished profile so the quotation can list the correct tooling instead of treating the machine alone as a complete solution."
  },
  {
    q: "Can this machine make tapered furniture legs?",
    a: "That is a typical application. It can be evaluated for steel chair legs, table legs and other long tapered tube components, subject to the tube material, dimensions, reduction ratio, surface requirement and an approved sample trial."
  },
  {
    q: "What should I send for a tube tapering machine quotation?",
    a: "Send the original tube size and material, finished drawing, taper length, small-end diameter, tolerances, quantity, target output, required mold sets, site power and destination country."
  }
];

export function generateStaticParams() {
  return [
    { locale: "en", slug: productSlug },
    { locale: "en", slug: coldCutSawRouteSlug },
    { locale: "en", slug: verticalTurretMillingSlug }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale === "en" && slug === coldCutSawRouteSlug) {
    const image = `/images/products/metalworking-equipment/${coldCutSawSlug}/${coldCutSawSlug}-main.webp`;
    return {
      title: "JM/LQ-355 14-Inch Precision Cold Cut Saw | MAVORIX",
      description: coldCutSawDescription,
      alternates: { canonical: `${site.url}${coldCutSawPath}` },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true }
      },
      openGraph: {
        title: coldCutSawTitle,
        description: coldCutSawDescription,
        url: `${site.url}${coldCutSawPath}`,
        siteName: site.name,
        locale: "en",
        type: "website",
        images: [{ url: image, width: 1400, height: 1400, alt: "JM/LQ-355 precision cold cut saw" }]
      },
      twitter: {
        card: "summary_large_image",
        title: coldCutSawTitle,
        description: coldCutSawDescription,
        images: [image]
      }
    };
  }
  if (locale === "en" && slug === verticalTurretMillingSlug) {
    const image = `/images/products/general-products/${verticalTurretMillingSlug}/${verticalTurretMillingSlug}-main-bright.webp`;
    return {
      title: "HJY-4GT Vertical Turret Milling Machine | MAVORIX",
      description: verticalTurretMillingDescription,
      alternates: { canonical: `${site.url}${verticalTurretMillingPath}` },
      robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
      openGraph: {
        title: verticalTurretMillingTitle,
        description: verticalTurretMillingDescription,
        url: `${site.url}${verticalTurretMillingPath}`,
        siteName: site.name,
        locale: "en",
        type: "website",
        images: [{ url: image, alt: "HJY-4GT vertical turret milling machine" }]
      },
      twitter: { card: "summary_large_image", title: verticalTurretMillingTitle, description: verticalTurretMillingDescription, images: [image] }
    };
  }
  if (locale !== "en" || slug !== productSlug) return {};

  return {
    title: "ZS-60 Tube Tapering Machine for Steel Pipe | MAVORIX",
    description: metaDescription,
    alternates: { canonical: `${site.url}${productPath}` },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true }
    },
    openGraph: {
      title: productTitle,
      description: metaDescription,
      url: `${site.url}${productPath}`,
      siteName: site.name,
      locale: "en",
      type: "website",
      images: [{ url: productImages[0].src, width: 1062, height: 1252, alt: productImages[0].alt }]
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description: metaDescription,
      images: [productImages[0].src]
    }
  };
}

export default async function TubeTaperingMachinePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale === "en" && slug === coldCutSawRouteSlug) return <ColdCutSawPage />;
  if (locale === "en" && slug === verticalTurretMillingSlug) return <VerticalTurretMillingMachinePage />;
  if (locale !== "en" || slug !== productSlug) notFound();

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("ZS-60 tube tapering machine quotation")}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: "Metalworking Equipment", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: productTitle, url: `${site.url}${productPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
              { label: "Metalworking Equipment", href: "/en/industries/industrial-machinery/" },
              { label: productTitle, href: productPath }
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={productImages} />
          <div className="space-y-7">
            <div>
              <Badge>Metal Tube Forming Equipment</Badge>
              <h1 className="mt-4 break-words text-4xl font-black leading-tight text-navy md:text-5xl">{productTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Cold-forming machine for reducing round tube diameter and producing long tapered profiles. The ZS-60 is suited to
                parts such as steel table legs, chair legs and other tubular components that need a smooth transition from a larger
                diameter to a smaller end.
              </p>
            </div>
            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => <SpecTerm key={label} label={label} value={value} />)}
            </dl>
            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2"><Send size={17} aria-hidden="true" /> Send Tube Drawing</Button>
              <Button href={site.whatsappUrl} variant="secondary" className="gap-2"><MessageCircle size={17} aria-hidden="true" /> Request a Quote</Button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14">
        <article className="space-y-12">
          <Section title="Product Overview">
            <p>
              The ZS-60 changes the outside profile of a round tube without cutting away the wall. The supplied document describes a
              cold-forging process in which matching tooling works the tube into a thinner, elongated cylinder or cone. This is why
              overseas buyers may describe the same equipment as a <strong>tube tapering machine</strong>, <strong>pipe reducing
              machine</strong> or <strong>pipe swaging machine</strong>.
            </p>
            <p>
              For furniture production, the process can turn a straight steel tube into a tapered chair or table leg. It is also used
              where one tube end needs a smaller diameter for insertion, assembly or a cleaner decorative profile. The finished shape
              comes from the mold, so the machine and tooling must be quoted together.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed ZS-60 Specifications</h2>
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
            <p className="mt-4 leading-8 text-slate-600">
              These values are translated from the supplied ZS-60 document. Site power, material limits, finished tolerances,
              guarding, machine dimensions and destination compliance documents still need written confirmation.
            </p>
          </section>

          <Section title="How the Tube Tapering Process Works">
            <p>
              The operator feeds the round tube into the forming opening until the required section is inside the mold. During the
              cycle, the tooling progressively reduces the tube around its circumference. Material flows along the formed section,
              creating a long taper or reduced cylindrical profile rather than a sharp machined step.
            </p>
            <p>
              The supplied document lists a closed-circuit lubrication system for continuous operation and states that correctly
              matched tooling can leave the workpiece surface bright and smooth. The actual result depends on the tube grade, weld
              seam, wall thickness, reduction ratio, tooling condition and process setup, so a sample trial should be part of the
              purchase approval.
            </p>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {applications.map((item) => <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">{item}</li>)}
            </ul>
          </Section>

          <Section title="Tooling and Part Drawing Requirements">
            <p>
              A model number alone is not enough for this project. The ZS-60 document states that each different tube size needs its
              own mold. If the buyer has four starting sizes or four finished profiles, the quotation should identify the tooling for
              all four instead of listing only the base machine.
            </p>
            <p>
              The drawing should show the original diameter and wall thickness, final small-end diameter, taper length, straight
              sections, transition radii and tolerances. Tube material and hardness matter as much as size: a capacity stated for one
              mild-steel tube should not be treated as a guarantee for every stainless steel or high-strength alloy tube.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {orderingInfo.map((item) => <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">{item}</li>)}
            </ul>
          </Section>

          <Section title="Real Sourcing and Machine Test Reference">
            <p>
              MAVORIX has coordinated a ZS-60 tube tapering machine order for an overseas furniture-related application. The buyer
              supplied a tapered steel-tube drawing, and the machine was run with a sample tube before wooden-case packing and
              container loading. The video below records the workshop trial on the actual machine type.
            </p>
            <figure className="mx-auto max-w-[520px] overflow-hidden rounded-lg border border-slate-200 bg-white">
              <video className="aspect-[9/16] w-full bg-slate-950 object-contain" controls playsInline preload="metadata">
                <source src="/videos/blog/zs-60-tube-tapering-machine-test-romania.mp4" type="video/mp4" />
                Your browser does not support embedded MP4 video.
              </video>
              <figcaption className="p-4 text-center text-sm leading-6 text-slate-600">
                Workshop test showing a steel tube being formed in the ZS-60 machine.
              </figcaption>
            </figure>
            <p>
              Read the full <LinkText href="/en/blog/tube-tapering-machine-sourcing-romania/">Romania tube tapering machine sourcing case</LinkText> for the drawing, packing and container-loading record. MAVORIX supports supplier comparison, drawing clarification, test coordination and export preparation; it does not present itself as the machine manufacturer.
            </p>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Need a Tube Tapering Machine for a Specific Part?"
        text="Send the starting tube, material, finished drawing, tolerances, mold list, output target, site power and destination for supplier evaluation."
      />
      <JsonLd data={[
        breadcrumbSchema(breadcrumbItems),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: productTitle,
          model: "ZS-60",
          category: "Tube Tapering and Reducing Machine",
          image: productImages.map((image) => `${site.url}${image.src}`),
          description: metaDescription
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

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="font-bold text-signal hover:text-orange-700">{children}</a>;
}
