import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileUp } from "lucide-react";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { FAQSection } from "@/components/sections/FAQSection";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { precisionShaftGuidePath, precisionShaftImage, precisionShaftPath } from "@/data/precision-shafts";
import { inquiryRequestHref } from "@/data/procurement-paths";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, JsonLd, serviceSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

const title = "Custom Precision Shafts Made to Drawing";
const description = "Source custom precision shafts from China. Send your drawing for a quote on stepped, keyed or splined shafts with specified fits, grinding and inspection.";
const cncPath = "/en/products/precision-machining/custom-cnc-machined-parts/";
const quoteHref = inquiryRequestHref("drawing");

const images = [
  { ...precisionShaftImage, label: "Stepped shafts" },
  {
    src: "/images/products/precision-machining/custom-precision-shafts/shaft-end-features.webp",
    alt: "Machined shaft batch with longitudinal teeth at the ends",
    label: "Toothed shaft ends"
  }
];

const shaftTypes = [
  { name: "Stepped shafts", detail: "For rollers, spindles and other assemblies that locate bearings or seals on different diameters. Include the journal fits, shoulder spacing and any corner clearance needed for assembly." },
  { name: "Keyed and threaded shafts", detail: "For drives that carry a pulley, gear or coupling. Specify the keyway dimensions and location, as well as the thread callout and usable thread length if a nut retains the assembly." },
  { name: "Splined shafts", detail: "For shafts that engage a matching drive hub. Include the spline standard or tooth profile, the fit and the engaged length. A mating hub drawing is useful when the spline callout is incomplete." }
];

const faqs = [
  {
    q: "Can I request a quote for a sample and a production batch?",
    a: "Yes. Send both quantities and let us know how you plan to approve the sample. We can ask suppliers to quote the sample and the batch separately so you can compare tooling, machining and inspection costs."
  },
  {
    q: "Can you source shafts with ground journals or heat treatment?",
    a: "We can review both with machining partners. Specify which surfaces need grinding, the final size and roughness limits, and any hardness or case-depth requirements. The supplier can then confirm the proposed sequence and inspection scope."
  },
  {
    q: "Can you work from a worn shaft if there is no drawing?",
    a: "Send photos, dimensions and details of the mating components to start the discussion. A worn surface may not reflect the original fit, so the final dimensions and acceptance requirements need to be agreed before manufacture."
  }
];

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};
  return seo({
    title: "Custom Precision Shafts Made to Drawing | MAVORIX",
    description,
    path: precisionShaftPath,
    image: precisionShaftImage
  });
}

export default async function PrecisionShaftPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  const breadcrumbs = [
    { label: "Home", href: "/en/" },
    { label: "Precision Machining", href: cncPath },
    { label: "Custom Precision Shafts", href: precisionShaftPath }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container><Breadcrumbs items={breadcrumbs} /></Container>
      </section>
      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <div className="space-y-6 lg:order-2">
            <div>
              <Badge>Precision Machining</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-5xl">{title}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We source stepped, keyed and splined shafts for machinery and automation. Send us your drawing and quantities. We review the part with machining suppliers in China and coordinate quotations, samples and the checks you need before shipment.
              </p>
            </div>
            <dl className="divide-y divide-slate-200 border-y border-slate-200 text-sm">
              <Spec label="Order basis">Your drawing and approved revision</Spec>
              <Spec label="Machining">Turning, with milling, spline machining or grinding as required</Spec>
              <Spec label="Order quantities">Samples and production batches, quoted to your requirements</Spec>
            </dl>
            <Button href={quoteHref} className="gap-2"><FileUp size={17} aria-hidden="true" /> Request a Shaft Quote</Button>
          </div>
          <ProductImageGallery images={images} />
        </Container>
      </section>

      <Container className="space-y-12 py-12">
        <section className="max-w-3xl">
          <h2 className="text-3xl font-black text-navy">Shafts for Machinery and Automation</h2>
          <dl className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
            {shaftTypes.map(({ name, detail }) => <Spec key={name} label={name}>{detail}</Spec>)}
          </dl>
        </section>
        <section className="max-w-3xl space-y-4 leading-8 text-slate-600">
          <h2 className="text-3xl font-black text-navy">Bearing Fits, Machining and Finish</h2>
          <p>On a roller shaft supported by two bearings, both journals can be within their diameter limits and still fail a specified runout check. A bearing ring can also stop short of its shoulder if the corner radius is too large for the ring to clear. If these features govern assembly, mark the bearing seats and shoulders on the drawing and tell us which datum the supplier should use for inspection.</p>
          <p>For carbon steel, alloy steel or stainless steel, send the exact grade and any material documentation you need. If the drawing calls for hardened and ground journals, ask for the quote in that finished condition. A price for a turned blank will not tell you what the complete shaft costs. We can check whether machining, heat treatment, grinding, finish and inspection are included, and bring any proposed substitutions back to you for approval.</p>
        </section>
        <section className="max-w-3xl space-y-4 leading-8 text-slate-600">
          <h2 className="text-3xl font-black text-navy">From Sample Approval to Repeat Orders</h2>
          <p>If you need a first article, let us know what you will check before releasing the batch. For a shaft with a close bearing fit, that might mean measured journal diameters and runout on the finished part, alongside your own trial assembly. When the drawing specifies roughness, hardness or case depth, agree on the checks and records the supplier will provide before placing the order.</p>
          <p>For repeat batches, we can coordinate checks against the approved drawing revision, keep the inspection records tied to the order and confirm packing for the finished parts. Ground journals and threads can be separated or protected in packing where the order requires it.</p>
        </section>
        <section className="max-w-3xl space-y-4 leading-8 text-slate-600">
          <h2 className="text-3xl font-black text-navy">What to Send for a Shaft Quote</h2>
          <p>Start with the latest 2D drawing and the sample and batch quantities. A STEP file is helpful, but the drawing should state the material, critical fits, tolerances and finish. If a bearing, seal or hub controls the fit, send its part number or mating dimensions. Include the delivery destination, target date and any reports you need with the order.</p>
          <Link href={precisionShaftGuidePath} className="inline-flex items-center gap-2 font-bold text-signal hover:underline">
            Read the precision shaft buying guide <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </section>
      </Container>

      <FAQSection faqs={faqs} />
      <section className="border-t border-slate-200 bg-white py-12">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-navy">Have a shaft drawing ready?</h2>
            <p className="mt-2 text-slate-600">Send it with your quantities and the features that matter most to the assembly.</p>
          </div>
          <Button href={quoteHref}>Send Your Drawing</Button>
        </Container>
      </section>
      <JsonLd data={[
        breadcrumbSchema(breadcrumbs.map(({ label, href }) => ({ name: label, url: `${site.url}${href}` }))),
        serviceSchema(title, description, `${site.url}${precisionShaftPath}`),
        faqSchema(faqs)
      ]} />
    </>
  );
}

function Spec({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 py-3 leading-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-4">
      <dt className="font-bold text-navy">{label}</dt>
      <dd className="text-slate-600">{children}</dd>
    </div>
  );
}
