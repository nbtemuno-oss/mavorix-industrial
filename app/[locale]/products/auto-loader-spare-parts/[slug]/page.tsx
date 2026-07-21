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

const productSlug = "taisheng-apc-400x1-auto-loader-controller-board";
const productTitle = "TAISHENG APC-400X1 Auto Loader Controller Board";
const productPath = `/en/products/auto-loader-spare-parts/${productSlug}/`;

const productImages = [
  {
    src: "/images/products/auto-loader-spare-parts/taisheng-apc-400x1/taisheng-apc-400x1-controller-board-front.webp",
    alt: "TAISHENG APC-400X1 auto loader controller board front view",
    label: "Front view"
  },
  {
    src: "/images/products/auto-loader-spare-parts/taisheng-apc-400x1/taisheng-apc-400x1-controller-board-rear.webp",
    alt: "TAISHENG APC-400X1 controller board rear view",
    label: "Rear view"
  },
  {
    src: "/images/products/auto-loader-spare-parts/taisheng-apc-400x1/taisheng-apc-400x1-controller-board-packaging.webp",
    alt: "TAISHENG APC-400X1 controller board packaging",
    label: "Packaging"
  }
];

const summarySpecs = [
  ["Product Type", "Auto Loader Controller Board"],
  ["Brand", "TAISHENG"],
  ["Model", "APC-400X1"],
  ["Item No.", "91012559"],
  ["Input", "230VAC"],
  ["Equipment Category", "Plastic Auxiliary Equipment"],
  ["Condition", "New"]
];

const confirmedSpecs = [
  ["Brand", "TAISHENG"],
  ["Model", "APC-400X1"],
  ["Item No.", "91012559"],
  ["Input", "230VAC"],
  ["Maximum Current Marking", "0.1A MAX"],
  ["Product Type", "Auto Loader Controller Board / Control Panel / PCB Board"],
  ["Equipment Category", "Plastic Auxiliary Equipment"],
  ["Condition", "New"],
  ["Compatibility", "Model and connection verification required before ordering"]
];

const keyFeatures = [
  "Digital status display",
  "Multiple operating status indicator lights",
  "Integrated control buttons",
  "Front-panel operation interface",
  "PCB-based auto loader control",
  "230VAC input marking",
  "Designed for specific plastic material loading systems",
  "Suitable for replacement sourcing based on old-board comparison"
];

const applications = [
  "Plastic material auto loaders",
  "Vacuum loaders",
  "Hopper loaders",
  "Injection molding auxiliary equipment",
  "Plastic material conveying systems",
  "Plastic processing production lines"
];

const orderingInfo = [
  "Clear front photo of the old board",
  "Clear rear photo of the old board",
  "Full label photo",
  "Machine brand and model",
  "Controller model and item number",
  "Input voltage",
  "Connector and terminal photos",
  "Existing wiring photos",
  "Mounting dimensions",
  "Fault description",
  "Required quantity"
];

const sourcingSupport = [
  "Old-board photo identification",
  "Model and label verification",
  "China supplier sourcing",
  "Product photo comparison",
  "Original or compatible option checking",
  "Pre-shipment photo verification",
  "Consolidation with sensors, motors, filters and other loader parts",
  "Export packing and shipment coordination"
];

const faqs = [
  {
    q: "Is the APC-400X1 compatible with every auto loader?",
    a: "No. Compatibility depends on the machine model, controller version, voltage, connectors, wiring and operating logic."
  },
  {
    q: "What information should I send before ordering?",
    a: "Send clear front and rear photos, the complete label, machine model, voltage, connectors, wiring and mounting dimensions."
  },
  {
    q: "Can MAVORIX identify the controller board from photos?",
    a: "MAVORIX can assist with preliminary identification and China-side supplier verification based on clear photos and equipment information."
  },
  {
    q: "Can you supply other auto loader spare parts together?",
    a: "Depending on the purchasing list, MAVORIX can coordinate sourcing of filters, motors, sensors, hoses, switches and other plastic auxiliary machine spare parts."
  },
  {
    q: "Does the same model number guarantee direct replacement?",
    a: "Not always. Buyers should also verify the voltage, connectors, wiring, board layout and equipment configuration."
  }
];

export function generateStaticParams() {
  return [{ locale: "en", slug: productSlug }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) return {};

  return {
    title: "TAISHENG APC-400X1 Auto Loader Controller Board | MAVORIX",
    description:
      "Source the TAISHENG APC-400X1 auto loader controller board, Item No. 91012559, 230VAC. Send old board photos, connectors and machine details for compatibility verification.",
    alternates: {
      canonical: `${site.url}${productPath}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      title: productTitle,
      description:
        "Source the TAISHENG APC-400X1 auto loader controller board, Item No. 91012559, 230VAC, for replacement sourcing support.",
      url: `${site.url}${productPath}`,
      siteName: site.name,
      locale: "en",
      type: "website",
      images: [
        {
          url: productImages[0].src,
          width: 1400,
          height: 1400,
          alt: productImages[0].alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description:
        "Source the TAISHENG APC-400X1 auto loader controller board, Item No. 91012559, 230VAC, for replacement sourcing support.",
      images: [productImages[0].src]
    }
  };
}

export default async function AutoLoaderControllerBoardPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) notFound();

  const inquirySubject = encodeURIComponent("TAISHENG APC-400X1 controller board inquiry");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Spare Parts", url: `${site.url}/en/services/industrial-spare-parts-sourcing/` },
    { name: "Plastic Auxiliary Machine Spare Parts", url: `${site.url}/en/industries/plastic-industry/` },
    { name: productTitle, url: `${site.url}${productPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Industrial Spare Parts", href: "/en/services/industrial-spare-parts-sourcing/" },
              { label: "Plastic Auxiliary Machine Spare Parts", href: "/en/industries/plastic-industry/" },
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
              <Badge>Auto Loader Spare Part</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-5xl">{productTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                TAISHENG APC-400X1 controller board for plastic material auto loader and vacuum loader applications. Buyers should
                verify the old board model, input voltage, connectors, wiring and mounting arrangement before ordering a replacement.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Old Board Photos
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
              The TAISHENG APC-400X1 is a controller board used in certain plastic material auto loader, vacuum loader and hopper
              loading systems. The board integrates operating buttons, status indicators and a digital display for controlling and
              monitoring material conveying functions.
            </p>
            <p>
              For replacement sourcing, the controller model alone may not be sufficient. Buyers should compare the original board
              label, input voltage, front and rear layout, connectors, terminal arrangement and mounting dimensions. Boards with
              similar appearance may use different wiring or internal control logic.
            </p>
            <p>
              MAVORIX supports photo-based spare part identification, model verification, China-side supplier sourcing and
              consolidation with other plastic auxiliary machine spare parts. Final compatibility should be confirmed before shipment
              and installation.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  {confirmedSpecs.map(([label, value]) => (
                    <tr key={label} className="border-b border-slate-200 last:border-0">
                      <th className="w-44 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th>
                      <td className="px-4 py-3 font-semibold text-slate-700">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <Section title="Key Features">
            <ul className="grid gap-3 md:grid-cols-2">
              {keyFeatures.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Exact compatibility depends on the original controller model, wiring, connectors, operating logic and equipment
              configuration.
            </p>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {applications.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
            <p>
              These are typical application categories only. The complete controller model, voltage, connectors, wiring and mounting
              details should be checked before ordering.
            </p>
          </Section>

          <Section title="Controller Board Replacement Notice">
            <p>
              A similar front panel or PCB layout does not mean an auto loader controller board can be replaced directly. Even when
              the same model number is visible, buyers should still confirm the input voltage, connector type, terminal arrangement
              and mounting pattern.
            </p>
            <p>
              Replacement checks should include front photos, rear photos, terminal photos, wiring photos and mounting-hole
              measurements. Some boards may also differ by program version or equipment configuration, especially when used across
              different loader models or production batches.
            </p>
            <p>
              Installation and wiring should be completed by qualified technical personnel. This page does not provide wiring
              instructions, and final compatibility should be confirmed according to the actual machine and old controller board.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {orderingInfo.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX helps overseas buyers source plastic auxiliary machine spare parts through old-board comparison, supplier
              communication and shipment coordination. Related requirements can also be handled through our{" "}
              <LinkText href="/en/services/industrial-spare-parts-sourcing/">industrial spare parts sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/plastic-industry/">plastic industry sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText>,{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> workflows.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {sourcingSupport.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={faqs} />
      <CTASection
        title="Need Help Identifying an Auto Loader Controller Board?"
        text="Send clear front and rear photos, labels, connector details, voltage, wiring photos and machine model for replacement sourcing support."
      />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), productSchema(), faqSchema(faqs)]} />
    </>
  );
}

function SpecTerm({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
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

function LinkText({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="font-bold text-signal hover:text-orange-700">
      {children}
    </a>
  );
}

function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productTitle,
    brand: {
      "@type": "Brand",
      name: "TAISHENG"
    },
    model: "APC-400X1",
    category: "Auto Loader Controller Board",
    image: productImages.map((image) => `${site.url}${image.src}`),
    description:
      "TAISHENG APC-400X1 auto loader controller board, Item No. 91012559, with 230VAC input marking for plastic auxiliary machine replacement sourcing."
  };
}
