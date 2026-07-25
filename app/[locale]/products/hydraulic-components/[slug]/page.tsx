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

const productSlug = "rexroth-4we6d6x-ofeg24n9k4-directional-control-valve";
const productTitle = "Rexroth 4WE6D6X/OFEG24N9K4 Directional Control Valve";
const productPath = `/en/products/hydraulic-components/${productSlug}/`;
const aryungSlug = "aryung-atp-216ha-vb-t-rotor-coolant-pump";
const aryungTitle = "ARYUNG ATP-216HA(VB) T-Rotor Coolant Pump";
const aryungPath = `/en/products/hydraulic-components/${aryungSlug}/`;
const daikinSlug = "daikin-v38a3rx-95-piston-pump";
const daikinTitle = "DAIKIN V38A3RX-95 Piston Pump";
const daikinPath = `/en/products/hydraulic-components/${daikinSlug}/`;

const daikinImages = [
  {
    src: "/images/products/hydraulic-components/daikin-v38a3rx-95-piston-pump/daikin-v38a3rx-95-piston-pump-main.webp",
    alt: "DAIKIN V38A3RX-95 piston pump label view",
    label: "Label view"
  }
];

const daikinSummarySpecs = [
  ["Brand", "DAIKIN"],
  ["Model", "V38A3RX-95"],
  ["MFG No.", "YED00-2511-00070"],
  ["Product Type", "Piston Pump"],
  ["Country Marking", "Made in Japan"],
  ["Compatibility", "Manual confirmation required before ordering"]
];

const daikinConfirmedSpecs = [
  ["Brand", "DAIKIN"],
  ["Model", "V38A3RX-95"],
  ["MFG No.", "YED00-2511-00070"],
  ["Product Type", "Piston Pump"],
  ["Manufacturer Marking", "DAIKIN INDUSTRIES, LTD."],
  ["Country Marking", "Made in Japan"],
  ["Visible Handling Note", "Case drain inlet warning label is visible on the pump body"]
];

const daikinKeyFeatures = [
  "DAIKIN manufacturer label visible",
  "V38A3RX-95 model marking visible",
  "Piston pump product marking visible",
  "MFG No. YED00-2511-00070 visible",
  "Made in Japan marking visible",
  "Case drain inlet warning label visible",
  "Suitable for sourcing review based on clear label comparison",
  "Hydraulic performance and mounting data should be confirmed before ordering"
];

const daikinApplications = [
  "Industrial hydraulic systems",
  "Machine tool hydraulic units",
  "Production equipment maintenance",
  "Factory spare parts replacement sourcing",
  "Hydraulic power unit repair",
  "Mixed industrial spare parts consolidation"
];

const daikinOrderingInfo = [
  "Clear full-label photo",
  "Complete pump model",
  "MFG number",
  "Pump photos from multiple angles",
  "Displacement requirement",
  "Pressure rating requirement",
  "Rotation direction",
  "Shaft specification",
  "Port size and orientation",
  "Mounting dimensions",
  "Equipment brand and model",
  "Required quantity",
  "Whether exact replacement or compatible option is required"
];

const daikinSourcingSupport = [
  "Hydraulic pump label identification",
  "Model and MFG number comparison",
  "China-side supplier sourcing",
  "Supplier photo checking",
  "Replacement option review based on buyer-provided data",
  "Consolidation with valves, motors, seals and electrical spare parts",
  "Export packing and shipment coordination"
];

const daikinFaqs = [
  {
    q: "Is V38A3RX-95 enough information for ordering a replacement pump?",
    a: "It is a useful model reference, but buyers should also confirm displacement, pressure rating, rotation direction, shaft specification, port details, mounting dimensions and equipment application before ordering."
  },
  {
    q: "What visible information is confirmed from the current photo?",
    a: "The visible label shows DAIKIN INDUSTRIES, LTD., Piston Pump, model V38A3RX-95, MFG No. YED00-2511-00070 and Made in Japan."
  },
  {
    q: "Can a similar-looking piston pump be used as a replacement?",
    a: "Not automatically. Similar appearance does not confirm hydraulic rating, shaft, ports, mounting, rotation direction or system compatibility."
  },
  {
    q: "What should I send before requesting a quotation?",
    a: "Send the full label, pump photos from multiple angles, old pump application, port details, mounting dimensions, equipment model and required quantity."
  },
  {
    q: "Can MAVORIX consolidate this pump with other spare parts?",
    a: "Yes. MAVORIX can help coordinate sourcing and packing for pumps, valves, motors, seals, sensors and other industrial spare parts in one purchasing workflow."
  }
];

const aryungImages = [
  {
    src: "/images/products/hydraulic-components/aryung-atp-216ha-vb-t-rotor-coolant-pump/aryung-atp-216ha-vb-t-rotor-coolant-pump-main.webp",
    alt: "ARYUNG ATP-216HA(VB) T-rotor coolant pump label view",
    label: "Label view"
  }
];

const aryungSummarySpecs = [
  ["Brand", "ARYUNG"],
  ["Model / Type", "ATP-216HA(VB)"],
  ["MFG No.", "25060186"],
  ["Product Type", "T-Rotor Pump"],
  ["Application Marking", "Coolant"],
  ["Compatibility", "Manual confirmation required before ordering"]
];

const aryungConfirmedSpecs = [
  ["Brand", "ARYUNG"],
  ["Model / Type", "ATP-216HA(VB)"],
  ["MFG No.", "25060186"],
  ["Product Type", "T-Rotor Pump"],
  ["Application Marking", "Coolant"],
  ["Country Marking", "Made in Korea"],
  ["Visible Direction Marking", "Rotation arrow and IN / OUT markings are visible on the pump label"]
];

const aryungKeyFeatures = [
  "T-rotor pump marking visible on the product label",
  "ARYUNG brand label visible",
  "ATP-216HA(VB) type marking visible",
  "MFG No. 25060186 visible",
  "Coolant application marking visible",
  "IN / OUT direction markings visible",
  "Suitable for sourcing review based on clear label comparison",
  "Additional electrical and performance data should be confirmed before ordering"
];

const aryungApplications = [
  "Machine tool coolant circulation",
  "Industrial machinery coolant systems",
  "Factory spare parts replacement sourcing",
  "Metalworking equipment support",
  "Maintenance spare parts purchasing",
  "Mixed industrial spare parts consolidation"
];

const aryungOrderingInfo = [
  "Clear full-label photo",
  "Complete pump model or type",
  "MFG number",
  "Voltage and power rating",
  "Flow rate and pressure requirement",
  "Port size and connection type",
  "Mounting dimensions",
  "Old pump photos from multiple angles",
  "Machine brand and model",
  "Required quantity",
  "Whether exact replacement or compatible option is required"
];

const aryungSourcingSupport = [
  "Pump label identification",
  "Model and MFG number comparison",
  "China-side supplier sourcing",
  "Supplier photo checking",
  "Replacement option review based on buyer-provided data",
  "Consolidation with other machine tool and factory spare parts",
  "Export packing and shipment coordination"
];

const aryungFaqs = [
  {
    q: "Is ATP-216HA(VB) enough information for ordering a replacement pump?",
    a: "It is a useful model reference, but buyers should also confirm voltage, power rating, flow, pressure, port size, mounting dimensions and machine application before ordering."
  },
  {
    q: "What visible information is confirmed from the current photo?",
    a: "The visible label shows ARYUNG, ATP-216HA(VB), MFG No. 25060186, T-Rotor Pump, Coolant, Made in Korea, and IN / OUT direction markings."
  },
  {
    q: "Can a similar-looking coolant pump be used as a replacement?",
    a: "Not automatically. Similar appearance does not confirm electrical rating, mounting, port connection, flow or pressure compatibility."
  },
  {
    q: "What should I send before requesting a quotation?",
    a: "Send the full label, old pump photos, voltage and power markings, port details, mounting dimensions, equipment model and required quantity."
  },
  {
    q: "Can MAVORIX consolidate this pump with other spare parts?",
    a: "Yes. MAVORIX can help coordinate sourcing and packing for pumps, sensors, relays, valves and other industrial spare parts in one purchasing workflow."
  }
];

const productImages = [
  {
    src: "/images/products/hydraulic-components/rexroth-4we6d6x-ofeg24n9k4/rexroth-4we6d6x-ofeg24n9k4-directional-valve-main.webp",
    alt: "Rexroth 4WE6D6X/OFEG24N9K4 hydraulic directional control valves in packaging",
    label: "Main view"
  },
  {
    src: "/images/products/hydraulic-components/rexroth-4we6d6x-ofeg24n9k4/rexroth-r900567512-hydraulic-valves-batch.webp",
    alt: "Batch of Rexroth hydraulic valves prepared for industrial spare parts sourcing",
    label: "Batch photo"
  }
];

const summarySpecs = [
  ["Brand", "Rexroth"],
  ["Model", "4WE6D6X/OFEG24N9K4"],
  ["Material Number", "R900567512"],
  ["Product Type", "Hydraulic Directional Control Valve"],
  ["Maximum Pressure Marking", "350 bar"],
  ["Compatibility", "Complete model and electrical configuration verification required"]
];

const confirmedSpecs = [
  ["Brand", "Rexroth"],
  ["Model", "4WE6D6X/OFEG24N9K4"],
  ["Material Number", "R900567512"],
  ["Product Type", "Solenoid-operated directional spool valve"],
  ["Maximum Pressure Marking", "350 bar"],
  ["Visible Valve Symbol", "Hydraulic directional valve symbol visible on the label"],
  ["Country Marking", "Made in China"]
];

const keyFeatures = [
  "Solenoid-operated hydraulic directional control",
  "Complete Rexroth model identification",
  "Material No. R900567512",
  "350 bar maximum-pressure marking",
  "Hydraulic flow-direction control",
  "Manual override components visible",
  "Suitable for replacement sourcing based on full-code comparison",
  "Designed for industrial hydraulic control applications"
];

const applications = [
  "Hydraulic power units",
  "Industrial machinery",
  "Machine tools",
  "Plastic processing machinery",
  "Injection molding equipment",
  "Presses and forming equipment",
  "Automated production systems",
  "Factory hydraulic maintenance"
];

const orderingInfo = [
  "Clear full-label photo",
  "Complete valve model",
  "Material Number / MNR",
  "Hydraulic symbol photo",
  "Coil voltage marking",
  "Electrical connector photo",
  "Front and rear valve photos",
  "Equipment brand and model",
  "Hydraulic circuit or old valve application",
  "Required quantity",
  "Existing valve fault description",
  "Whether an exact original code or compatible option is required"
];

const sourcingSupport = [
  "Hydraulic valve label identification",
  "Complete model-code verification",
  "Material-number comparison",
  "China supplier sourcing",
  "Product and packaging photo verification",
  "Original-code or compatible-option checking",
  "Consolidation with hydraulic pumps, coils, sensors, seals and electrical parts",
  "Export packing and international shipment coordination"
];

const faqs = [
  {
    q: "Is the Rexroth 4WE6D6X/OFEG24N9K4 interchangeable with every 4WE6 valve?",
    a: "No. The complete model code, spool configuration, coil voltage, electrical connector, material number and installation requirements must be checked before ordering a replacement."
  },
  {
    q: "What information should I provide before ordering?",
    a: "Provide a clear label photo, complete model, MNR, valve symbol, coil voltage, connector photo, equipment details and required quantity."
  },
  {
    q: "What does MNR R900567512 mean?",
    a: "It is the visible Rexroth material number used to identify the specific product configuration. Buyers should verify both the complete model and material number."
  },
  {
    q: "Is the coil voltage confirmed from the current photos?",
    a: "The coil voltage should be verified from the actual coil label or manufacturer documentation. It is not shown as a confirmed specification on this page."
  },
  {
    q: "Can MAVORIX source several Rexroth valve models in one shipment?",
    a: "MAVORIX can coordinate sourcing and consolidation of multiple hydraulic valves and other industrial spare parts, subject to model and supplier verification."
  },
  {
    q: "Can a similar-looking directional valve be used as a replacement?",
    a: "Not automatically. Similar appearance does not confirm hydraulic or electrical compatibility."
  }
];

export function generateStaticParams() {
  return [
    { locale: "en", slug: productSlug },
    { locale: "en", slug: aryungSlug },
    { locale: "en", slug: daikinSlug }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale === "en" && slug === aryungSlug) {
    return {
      title: "ARYUNG ATP-216HA(VB) T-Rotor Coolant Pump | MAVORIX",
      description:
        "Source ARYUNG ATP-216HA(VB) T-rotor coolant pump, MFG No. 25060186. Confirm voltage, flow, pressure, ports and mounting before ordering.",
      alternates: {
        canonical: `${site.url}${aryungPath}`
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
        title: aryungTitle,
        description:
          "ARYUNG ATP-216HA(VB) T-rotor coolant pump sourcing support based on visible label information.",
        url: `${site.url}${aryungPath}`,
        siteName: site.name,
        locale: "en",
        type: "website",
        images: [
          {
            url: aryungImages[0].src,
            width: 1400,
            height: 590,
            alt: aryungImages[0].alt
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: aryungTitle,
        description:
          "ARYUNG ATP-216HA(VB) T-rotor coolant pump sourcing support based on visible label information.",
        images: [aryungImages[0].src]
      }
    };
  }
  if (locale === "en" && slug === daikinSlug) {
    return {
      title: "DAIKIN V38A3RX-95 Piston Pump | MAVORIX",
      description:
        "Source DAIKIN V38A3RX-95 piston pump, MFG No. YED00-2511-00070. Confirm displacement, pressure, ports and mounting before ordering.",
      alternates: {
        canonical: `${site.url}${daikinPath}`
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
        title: daikinTitle,
        description:
          "DAIKIN V38A3RX-95 piston pump sourcing support based on visible label information.",
        url: `${site.url}${daikinPath}`,
        siteName: site.name,
        locale: "en",
        type: "website",
        images: [
          {
            url: daikinImages[0].src,
            width: 1050,
            height: 1400,
            alt: daikinImages[0].alt
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title: daikinTitle,
        description:
          "DAIKIN V38A3RX-95 piston pump sourcing support based on visible label information.",
        images: [daikinImages[0].src]
      }
    };
  }
  if (locale !== "en" || slug !== productSlug) return {};

  return {
    title: "Rexroth 4WE6D6X/OFEG24N9K4 Directional Valve | MAVORIX",
    description:
      "Source the Rexroth 4WE6D6X/OFEG24N9K4 hydraulic directional control valve, MNR R900567512, with 350 bar pressure marking. Send the old valve label and coil details for verification.",
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
        "Source the Rexroth 4WE6D6X/OFEG24N9K4 directional valve, MNR R900567512, with model-code verification support.",
      url: `${site.url}${productPath}`,
      siteName: site.name,
      locale: "en",
      type: "website",
      images: [
        {
          url: productImages[0].src,
          width: 1400,
          height: 737,
          alt: productImages[0].alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description:
        "Source the Rexroth 4WE6D6X/OFEG24N9K4 directional valve, MNR R900567512, with model-code verification support.",
      images: [productImages[0].src]
    }
  };
}

export default async function RexrothDirectionalValvePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (locale === "en" && slug === aryungSlug) return <AryungCoolantPumpPage />;
  if (locale === "en" && slug === daikinSlug) return <DaikinPistonPumpPage />;
  if (locale !== "en" || slug !== productSlug) notFound();

  const inquirySubject = encodeURIComponent("Rexroth 4WE6D6X/OFEG24N9K4 directional valve inquiry");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
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
              <Badge>Hydraulic Directional Valve</Badge>
              <h1 className="mt-4 break-words [overflow-wrap:anywhere] text-4xl font-black leading-tight text-navy md:text-5xl">
                {productTitle}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Rexroth 4WE6D6X/OFEG24N9K4 solenoid-operated hydraulic directional control valve, Material No. R900567512, with a
                visible maximum pressure marking of 350 bar. Buyers should verify the complete valve code, coil voltage, hydraulic
                symbol, connector and installation requirements before ordering a replacement.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {summarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} className={label === "Compatibility" ? "md:col-span-2" : ""} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Your Old Valve Label
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
              The Rexroth 4WE6D6X/OFEG24N9K4 is a solenoid-operated directional spool valve used for controlling the start, stop
              and direction of hydraulic fluid flow in industrial hydraulic systems. The visible product label identifies Material
              No. R900567512 and a maximum pressure marking of 350 bar.
            </p>
            <p>
              Directional control valves of this type are commonly used in hydraulic power units, industrial machinery, machine
              tools, plastic processing equipment and automated production systems. The valve is electrically actuated, while the
              internal spool controls the hydraulic flow paths according to the selected valve configuration.
            </p>
            <p>
              When sourcing a replacement valve, the complete model code should be checked rather than relying only on appearance or
              the basic 4WE6 series designation. Different versions may vary in spool symbol, coil voltage, electrical connector,
              manual override, seal material and other configuration details.
            </p>
            <p>
              MAVORIX can assist with label identification, model comparison, China-side supplier sourcing, pre-shipment photo
              verification and consolidation with other hydraulic, electrical and MRO spare parts.
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
              Exact compatibility depends on the complete model code, spool configuration, coil voltage, electrical connector,
              hydraulic interface and equipment requirements.
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
              These are typical application categories only. Final valve selection must be based on the hydraulic circuit, complete
              valve code and electrical configuration.
            </p>
          </Section>

          <Section title="Hydraulic Valve Replacement Notice">
            <p>
              Checking only the 4WE6 series name is not enough for replacement sourcing. The complete valve model must match the old
              unit or be technically confirmed against the hydraulic circuit and equipment requirements.
            </p>
            <p>
              Buyers should compare the spool function symbol, coil voltage, electrical plug, Material Number, mounting interface
              and installation dimensions. Similar appearance does not prove hydraulic or electrical compatibility.
            </p>
            <p>
              Installation should be completed by qualified hydraulic technical personnel. This page does not provide hydraulic
              piping, wiring or circuit modification instructions.
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
              MAVORIX supports industrial buyers with hydraulic valve sourcing, model verification and China-side supplier
              coordination. Related requirements can also be handled through our{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText>,{" "}
              <LinkText href="/en/industries/industrial-machinery/">industrial machinery</LinkText> and{" "}
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
        title="Need Help Verifying a Hydraulic Directional Valve?"
        text="Send the complete valve label, MNR, hydraulic symbol, coil label, connector photo, equipment details and required quantity for sourcing support."
      />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), productSchema(), faqSchema(faqs)]} />
    </>
  );
}

function AryungCoolantPumpPage() {
  const inquirySubject = encodeURIComponent("ARYUNG ATP-216HA(VB) coolant pump inquiry");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: aryungTitle, url: `${site.url}${aryungPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
              { label: aryungTitle, href: aryungPath }
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={aryungImages} />

          <div className="space-y-7">
            <div>
              <Badge>T-Rotor Coolant Pump</Badge>
              <h1 className="mt-4 break-words [overflow-wrap:anywhere] text-4xl font-black leading-tight text-navy md:text-5xl">
                {aryungTitle}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                ARYUNG ATP-216HA(VB) T-rotor coolant pump with visible MFG No. 25060186 and coolant application marking. Buyers
                should confirm voltage, power, flow, pressure, port size and mounting details before ordering a replacement.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {aryungSummarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} className={label === "Compatibility" ? "md:col-span-2" : ""} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Pump Label Photo
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
              The ARYUNG ATP-216HA(VB) is shown on the product label as a T-rotor pump for coolant use. The visible label also
              shows MFG No. 25060186, IN / OUT markings and a country marking of Made in Korea.
            </p>
            <p>
              For machine-tool and industrial machinery maintenance, coolant pump replacement should be checked using the complete
              pump label and installation details. A similar pump body or series name is not enough to confirm interchangeability.
            </p>
            <p>
              MAVORIX can help overseas buyers organize label checking, supplier communication, photo confirmation and spare-parts
              consolidation for pumps and related industrial components.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  {aryungConfirmedSpecs.map(([label, value]) => (
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
              {aryungKeyFeatures.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {aryungApplications.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Compatibility / Selection Notice">
            <p>
              Final replacement selection should be confirmed against the old pump label, electrical rating, coolant system
              requirements, mounting position, port connection and machine model.
            </p>
            <p>
              Voltage, power, flow rate, pressure range, port size and mounting dimensions are not confirmed from the current
              single photo.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {aryungOrderingInfo.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX supports industrial buyers with pump model checking, supplier sourcing and China-side spare-parts
              coordination. Related requests can also connect with our{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText>,{" "}
              <LinkText href="/en/industries/industrial-machinery/">industrial machinery</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> workflows.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {aryungSourcingSupport.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={aryungFaqs} />
      <CTASection
        title="Need Help Checking a Coolant Pump Replacement?"
        text="Send the pump label, voltage and power markings, port details, mounting dimensions, machine model and required quantity for sourcing support."
      />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), aryungProductSchema(), faqSchema(aryungFaqs)]} />
    </>
  );
}

function aryungProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: aryungTitle,
    brand: {
      "@type": "Brand",
      name: "ARYUNG"
    },
    model: "ATP-216HA(VB)",
    mpn: "25060186",
    category: "T-Rotor Coolant Pump",
    image: aryungImages.map((image) => `${site.url}${image.src}`),
    description:
      "ARYUNG ATP-216HA(VB) T-rotor coolant pump with visible MFG No. 25060186 and coolant application marking."
  };
}

function DaikinPistonPumpPage() {
  const inquirySubject = encodeURIComponent("DAIKIN V38A3RX-95 piston pump inquiry");
  const mailtoHref = `mailto:${site.email}?subject=${inquirySubject}`;
  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/en/` },
    { name: "Industrial Machinery", url: `${site.url}/en/industries/industrial-machinery/` },
    { name: daikinTitle, url: `${site.url}${daikinPath}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/en/" },
              { label: "Industrial Machinery", href: "/en/industries/industrial-machinery/" },
              { label: daikinTitle, href: daikinPath }
            ]}
          />
        </Container>
      </section>

      <section className="bg-white py-12">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
          <ProductImageGallery images={daikinImages} />

          <div className="space-y-7">
            <div>
              <Badge>Hydraulic Piston Pump</Badge>
              <h1 className="mt-4 break-words [overflow-wrap:anywhere] text-4xl font-black leading-tight text-navy md:text-5xl">
                {daikinTitle}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                DAIKIN V38A3RX-95 piston pump with visible DAIKIN INDUSTRIES, LTD. label, MFG No. YED00-2511-00070 and Made in
                Japan marking. Buyers should confirm displacement, pressure rating, shaft, ports, mounting and hydraulic system
                requirements before ordering a replacement.
              </p>
            </div>

            <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">
              {daikinSummarySpecs.map(([label, value]) => (
                <SpecTerm key={label} label={label} value={value} className={label === "Compatibility" ? "md:col-span-2" : ""} />
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <Button href={mailtoHref} className="gap-2">
                <Send size={17} aria-hidden="true" /> Send Pump Label Photo
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
              The DAIKIN V38A3RX-95 is identified on the visible product label as a piston pump. The label also shows DAIKIN
              INDUSTRIES, LTD., MFG No. YED00-2511-00070 and a Made in Japan marking.
            </p>
            <p>
              Hydraulic piston pump replacement should be checked using the complete model label and system details. A similar pump
              body or partial model code is not enough to confirm interchangeability.
            </p>
            <p>
              MAVORIX can help overseas buyers organize label checking, supplier communication, photo confirmation and spare-parts
              consolidation for hydraulic pumps and related industrial components.
            </p>
          </Section>

          <section>
            <h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <tbody>
                  {daikinConfirmedSpecs.map(([label, value]) => (
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
              {daikinKeyFeatures.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Typical Applications">
            <ul className="grid gap-3 md:grid-cols-2">
              {daikinApplications.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Compatibility / Selection Notice">
            <p>
              Final replacement selection should be confirmed against the old pump label, displacement, pressure rating, shaft
              specification, port arrangement, mounting position, rotation direction and machine hydraulic circuit.
            </p>
            <p>
              Displacement, pressure rating, rotation direction, shaft specification, port size and mounting dimensions are not
              confirmed from the current single photo.
            </p>
          </Section>

          <Section title="Information Required Before Ordering">
            <ul className="grid gap-3 md:grid-cols-2">
              {daikinOrderingInfo.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="MAVORIX Sourcing Support">
            <p>
              MAVORIX supports industrial buyers with hydraulic pump model checking, supplier sourcing and China-side spare-parts
              coordination. Related requests can also connect with our{" "}
              <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>,{" "}
              <LinkText href="/en/industries/factory-spare-parts/">factory spare parts</LinkText>,{" "}
              <LinkText href="/en/industries/industrial-machinery/">industrial machinery</LinkText> and{" "}
              <LinkText href="/en/contact/">contact</LinkText> workflows.
            </p>
            <ul className="grid gap-3 md:grid-cols-2">
              {daikinSourcingSupport.map((item) => (
                <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </Container>

      <FAQSection faqs={daikinFaqs} />
      <CTASection
        title="Need Help Checking a Hydraulic Pump Replacement?"
        text="Send the pump label, old pump photos, port details, mounting dimensions, machine model and required quantity for sourcing support."
      />
      <JsonLd data={[breadcrumbSchema(breadcrumbItems), daikinProductSchema(), faqSchema(daikinFaqs)]} />
    </>
  );
}

function daikinProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: daikinTitle,
    brand: {
      "@type": "Brand",
      name: "DAIKIN"
    },
    model: "V38A3RX-95",
    mpn: "YED00-2511-00070",
    category: "Hydraulic Piston Pump",
    image: daikinImages.map((image) => `${site.url}${image.src}`),
    description:
      "DAIKIN V38A3RX-95 hydraulic piston pump with visible MFG No. YED00-2511-00070 and Made in Japan marking."
  };
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
      name: "Rexroth"
    },
    model: "4WE6D6X/OFEG24N9K4",
    mpn: "R900567512",
    category: "Hydraulic Directional Control Valve",
    image: productImages.map((image) => `${site.url}${image.src}`),
    description:
      "Rexroth 4WE6D6X/OFEG24N9K4 hydraulic directional control valve with MNR R900567512 and 350 bar maximum pressure marking."
  };
}
