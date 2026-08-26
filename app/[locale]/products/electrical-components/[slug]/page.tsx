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

const productSlug = "i-autoc-ksi480d80-l-068-80a-solid-state-relay";
const productTitle = "i-Autoc KSI480D80-L(068) 80A Solid State Relay";
const productPath = `/en/products/electrical-components/${productSlug}/`;

const productImages = [
  {
    src: "/images/products/electrical-components/i-autoc-ksi480d80-l-068/i-autoc-ksi480d80-l-068-80a-solid-state-relay-product-view.webp",
    alt: "i-Autoc KSI480D80-L(068) 80A solid state relay",
    label: "Product view"
  },
  {
    src: "/images/products/electrical-components/i-autoc-ksi480d80-l-068/i-autoc-ksi480d80-l-068-80a-solid-state-relay-packaging.webp",
    alt: "i-Autoc KSI480D80-L(068) solid state relay packaging",
    label: "Packaging"
  }
];

const summarySpecs = [
  ["Product Type", "Solid State Relay"],
  ["Brand", "i-Autoc"],
  ["Model", "KSI480D80-L(068)"],
  ["Rated Current Marking", "80A"],
  ["Load Voltage Marking", "480VAC"],
  ["Control Input", "4-32VDC"],
  ["Condition", "New"]
];

const confirmedSpecs = [
  ["Brand", "i-Autoc"],
  ["Model", "KSI480D80-L(068)"],
  ["Rated Current Marking", "80A"],
  ["Load Voltage Marking", "480VAC"],
  ["Control Input", "4-32VDC"],
  ["Product Type", "Solid State Relay"],
  ["Terminal Marking", "1 / 2 LOAD, 3+ / 4- INPUT"],
  ["Label Marks", "cRUus, CE, CCC and RoHS marks are printed on the product label."],
  ["Condition", "New"]
];

const keyFeatures = [
  "80A rated-current marking",
  "480VAC load-side marking",
  "4-32VDC control input",
  "Solid-state contactless switching",
  "LED operating indicator",
  "Screw-terminal connection",
  "Compact panel-mount design",
  "Intended for industrial AC load control applications"
];

const applications = [
  "Industrial heating systems",
  "Temperature control systems",
  "Heater control circuits",
  "Plastic processing machinery",
  "Injection molding auxiliary equipment",
  "Packaging machinery",
  "Industrial ovens",
  "Automation control panels"
];

const orderingInfo = [
  "Clear front photo",
  "Clear label photo",
  "Brand and complete model",
  "Rated current",
  "Control input voltage",
  "Load voltage",
  "AC or DC load",
  "Terminal arrangement",
  "Equipment application",
  "Load type",
  "Actual operating current",
  "Existing heat sink photo or dimensions",
  "Required quantity"
];

const faqs = [
  {
    q: "Is an 80A solid state relay suitable for a continuous 80A load?",
    a: "Not necessarily. The usable continuous current depends on load type, ambient temperature, heat dissipation, heat sink selection, switching frequency and manufacturer derating requirements."
  },
  {
    q: "What control input voltage should be confirmed?",
    a: "This model is visibly marked with a 4-32VDC control input. Buyers should verify that the controller output signal matches this input range."
  },
  {
    q: "Do solid state relays require a heat sink?",
    a: "High-current solid state relays commonly require appropriate heat dissipation. The heat sink and installation method should be selected according to operating current, switching frequency, cabinet temperature and manufacturer requirements."
  },
  {
    q: "Can MAVORIX identify the relay from a product label photo?",
    a: "MAVORIX can assist with preliminary identification and China-side supplier verification based on clear label, terminal and installation photos. Final compatibility should be confirmed before ordering."
  },
  {
    q: "Can other electrical components be consolidated in one shipment?",
    a: "Yes. Depending on the purchasing list, MAVORIX can coordinate sourcing and consolidation of relays, temperature controllers, sensors, contactors, terminal blocks and other industrial electrical components."
  }
];

export function generateStaticParams() {
  return [{ locale: "en", slug: productSlug }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) return {};

  return {
    title: "i-Autoc KSI480D80-L(068) 80A Solid State Relay | MAVORIX",
    description:
      "Source the i-Autoc KSI480D80-L(068) 80A solid state relay with 4-32VDC control input and 480VAC load marking. Model verification and industrial component sourcing support.",
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
        "Source the i-Autoc KSI480D80-L(068) 80A solid state relay with 4-32VDC control input and 480VAC load marking.",
      url: `${site.url}${productPath}`,
      siteName: site.name,
      locale: "en",
      type: "website",
      images: [
        {
          url: productImages[0].src,
          width: 1400,
          height: 944,
          alt: productImages[0].alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description:
        "Source the i-Autoc KSI480D80-L(068) 80A solid state relay with 4-32VDC control input and 480VAC load marking.",
      images: [productImages[0].src]
    }
  };
}

export default async function SolidStateRelayPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== productSlug) notFound();

  const inquirySubject = encodeURIComponent("i-Autoc KSI480D80-L(068) solid state relay inquiry");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Electrical and Mechanical Parts", url: `${site.url}/en/industries/electrical-mechanical-parts/` },
    { name: "Solid State Relays", url: `${site.url}${productPath}` },
    { name: productTitle, url: `${site.url}${productPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Electrical and Mechanical Parts", href: "/en/industries/electrical-mechanical-parts/" },
              { label: "Solid State Relays", href: productPath },
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
              <Badge>Industrial Solid State Relay</Badge>
              <h1 className="mt-4 text-4xl font-black leading-tight text-navy md:text-5xl">{productTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                80A solid state relay with a 4-32VDC control input and 480VAC load-side marking for industrial heating,
                temperature control and automation applications. Selection should be verified according to the load type, actual
                operating current and heat dissipation conditions.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Relay Label Photo
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
              The i-Autoc KSI480D80-L(068) is an 80A solid state relay with a 4-32VDC control input and a 480VAC load-side
              marking. It is commonly used for contactless switching of AC electrical loads in industrial heating, temperature
              control, plastic processing machinery and automation control systems.
            </p>
            <p>
              Unlike conventional electromechanical relays, a solid state relay switches without mechanical contacts. This supports
              frequent switching applications, quieter operation and reduced mechanical contact wear. Actual performance depends on
              the load type, operating current, ambient temperature, switching frequency and heat dissipation.
            </p>
            <p>
              Before replacing an existing SSR, buyers should verify the complete model number, control signal, load voltage, AC or
              DC output type, terminal arrangement, installation dimensions and heat sink requirements. The same current rating or
              similar appearance does not guarantee direct compatibility.
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
              Exact operating suitability depends on the load type, actual operating current, switching frequency, ambient
              temperature, heat sink and installation conditions.
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
              These are typical application categories only. Final selection should be based on the control signal, load voltage, load
              type, operating current and installation environment.
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

          <Section title="Solid State Relay Selection Notice">
            <p>
              The 80A value is a rated-current marking and does not mean the relay can carry 80A continuously in every installation.
              Usable current depends on load type, ambient temperature, heat sink selection, switching frequency and installation
              conditions.
            </p>
            <p>
              High-current SSR applications commonly require appropriate heat dissipation according to manufacturer requirements.
              Replacing an old relay should not be based on appearance and current rating alone.
            </p>
            <p>
              Buyers should also compare the control input, load voltage, AC or DC output, terminal arrangement, mounting dimensions
              and switching type before ordering. This page does not provide wiring instructions; technical selection and installation
              should be confirmed by qualified personnel according to equipment and manufacturer documentation.
            </p>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX supports overseas buyers with industrial electrical component sourcing, model checking and China-side supplier
              coordination. Related requirements can also be handled through our{" "}
              <LinkText href="/en/industries/electrical-mechanical-parts/">electrical and mechanical parts sourcing</LinkText>,{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> workflows.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {[
                "Label and model verification",
                "Product photo comparison",
                "China supplier sourcing",
                "Original or compatible option checking",
                "Heat sink and accessory sourcing",
                "Consolidation with temperature controllers, sensors, contactors and other electrical parts",
                "Pre-shipment photo verification",
                "Export packing and international shipment coordination"
              ].map((item) => (
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
        title="Need Help Identifying a Solid State Relay?"
        text="Send clear photos of the relay label, control input, load voltage, equipment application and required quantity for verification."
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
      name: "i-Autoc"
    },
    model: "KSI480D80-L(068)",
    category: "Solid State Relay",
    image: productImages.map((image) => `${site.url}${image.src}`),
    description:
      "i-Autoc KSI480D80-L(068) 80A solid state relay with 4-32VDC control input and 480VAC load-side marking for industrial electrical control applications."
  };
}
