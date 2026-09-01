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

type BearingProduct = {
  localOnly?: boolean;
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  badge: string;
  brand: string;
  model: string;
  category: string;
  summary: string;
  images: { src: string; alt: string; label: string }[];
  summarySpecs: string[][];
  confirmedSpecs: string[][];
  overview: string[];
  features: string[];
  applications: string[];
  selection: string[];
  ordering: string[];
  faqs: { q: string; a: string }[];
};

const products: BearingProduct[] = [
  {
    slug: "skf-51226-single-direction-thrust-ball-bearing",
    title: "SKF 51226 Single-Direction Thrust Ball Bearing",
    seoTitle: "SKF 51226 Thrust Ball Bearing 130x190x45 | MAVORIX",
    description: "Source SKF 51226 single-direction thrust ball bearing, 130 x 190 x 45 mm, for axial-load machinery and MRO replacement requirements.",
    badge: "Single-Direction Thrust Ball Bearing",
    brand: "SKF",
    model: "51226",
    category: "Industrial thrust ball bearing",
    summary: "SKF 51226 is a separable single-direction thrust ball bearing with 130 mm bore, 190 mm outside diameter and 45 mm overall height. It is designed to carry axial load in one direction and should not be used as a radial locating bearing.",
    images: [
      { src: "/images/products/general-products/skf-51226-single-direction-thrust-ball-bearing/skf-51226-single-direction-thrust-ball-bearing-gallery-02.webp", alt: "SKF 51226 thrust ball bearing with shaft washer, housing washer and ball cage assembly", label: "Complete SKF 51226 bearing components" },
      { src: "/images/products/general-products/skf-51226-single-direction-thrust-ball-bearing/skf-51226-single-direction-thrust-ball-bearing-gallery-03.webp", alt: "SKF 51226 thrust ball bearing ball and cage assembly detail", label: "Ball and cage assembly detail" },
      { src: "/images/products/general-products/skf-51226-single-direction-thrust-ball-bearing/skf-51226-single-direction-thrust-ball-bearing-main.webp", alt: "SKF 51226 thrust ball bearing boxes arranged in a wooden export case", label: "SKF 51226 packed order" }
    ],
    summarySpecs: [["Brand", "SKF"], ["Model", "51226"], ["Type", "Single-direction thrust ball bearing"], ["Dimensions", "130 x 190 x 45 mm"], ["Dynamic Rating", "186 kN"], ["Static Rating", "585 kN"]],
    confirmedSpecs: [["Brand", "SKF"], ["Designation", "51226"], ["Bearing Design", "Single-direction thrust ball bearing"], ["Bore Diameter (d)", "130 mm"], ["Outside Diameter (D)", "190 mm"], ["Overall Height (H)", "45 mm"], ["Basic Dynamic Load Rating (C)", "186 kN"], ["Basic Static Load Rating (C0)", "585 kN"], ["Reference Speed", "1,400 r/min"], ["Limiting Speed", "2,000 r/min"], ["Catalog Mass", "Approximately 4 kg"]],
    overview: [
      "The SKF 51226 consists of a shaft washer, a housing washer and a ball-and-cage assembly. The separable construction allows the three parts to be mounted independently, which is useful when the shaft and housing seats must be assembled from opposite sides.",
      "This bearing supports axial force in one direction. A suitable minimum axial load is required in service to keep the rolling elements correctly engaged, particularly where speed, acceleration or load variation could allow the assembly to unload.",
      "For replacement work, confirm the 51226 designation and all three principal dimensions. Seat geometry, alignment, lubrication, speed and the direction of axial force must also suit a thrust-ball-bearing arrangement."
    ],
    features: ["Separable three-part construction", "Carries axial load in one direction", "130 mm metric bore", "190 mm outside diameter", "45 mm overall height", "Steel ball-and-cage assembly", "Designed for axial rather than radial location", "Suitable for exact-model MRO replacement"],
    applications: ["Vertical shaft arrangements", "Industrial gear and drive assemblies", "Machine-tool and press mechanisms", "Pumps and rotating equipment with one-direction axial force", "General machinery maintenance", "Bearing replacement and MRO consolidation"],
    selection: ["SKF 51226 cannot carry radial load and does not locate a shaft against axial movement in both directions. If the assembly reverses thrust direction, the complete bearing arrangement needs a second bearing or another suitable locating design.", "Confirm shaft and housing washer orientation, minimum load, permissible speed, seating surfaces and lubrication from the current engineering specification before ordering."],
    ordering: ["Complete designation: SKF 51226", "Old bearing and package markings", "Bore, outside diameter and height", "Axial load magnitude and direction", "Operating speed and duty cycle", "Lubrication method and temperature", "Shaft and housing seat details", "Quantity and destination"],
    faqs: [
      { q: "What are the dimensions of SKF 51226?", a: "The principal dimensions are 130 mm bore, 190 mm outside diameter and 45 mm overall height." },
      { q: "Can SKF 51226 carry radial load?", a: "No. It is a thrust ball bearing for axial load in one direction. Radial load must be supported by another bearing arrangement." },
      { q: "Is SKF 51226 separable?", a: "Yes. The shaft washer, housing washer and ball-and-cage assembly can be mounted separately." },
      { q: "What should be checked before ordering a 51226 bearing?", a: "Confirm the full designation, dimensions, load direction, speed, minimum axial load, seats, lubrication, quantity and destination." }
    ]
  },
  {
    slug: "skf-7307-becbp-angular-contact-ball-bearing",
    title: "SKF 7307 BECBP Single-Row Angular Contact Ball Bearing",
    seoTitle: "SKF 7307 BECBP Angular Contact Bearing | MAVORIX",
    description: "Source SKF 7307 BECBP single-row angular contact ball bearing, 35 x 80 x 21 mm, for combined radial and axial load applications.",
    badge: "Single-Row Angular Contact Ball Bearing",
    brand: "SKF",
    model: "7307 BECBP",
    category: "Industrial angular contact ball bearing",
    summary: "SKF 7307 BECBP is a 35 x 80 x 21 mm single-row angular contact ball bearing with a 40-degree contact angle and non-metallic cage. The BECBP suffix matters: arrangement, clearance and pairing requirements must be checked before replacement.",
    images: [{ src: "/images/products/general-products/skf-7307-becbp-angular-contact-ball-bearing/skf-7307-becbp-angular-contact-ball-bearing-main.webp", alt: "SKF Explorer 7307 BECBP angular contact ball bearing with complete model labels", label: "SKF 7307 BECBP bearing and labels" }],
    summarySpecs: [["Brand", "SKF"], ["Model", "7307 BECBP"], ["Type", "Single-row angular contact"], ["Dimensions", "35 x 80 x 21 mm"], ["Contact Angle", "40 degrees"], ["Cage", "Non-metallic"]],
    confirmedSpecs: [["Brand", "SKF Explorer"], ["Designation", "7307 BECBP"], ["Bearing Design", "Single-row angular contact ball bearing"], ["Bore Diameter", "35 mm"], ["Outside Diameter", "80 mm"], ["Width", "21 mm"], ["Nominal Contact Angle", "40 degrees"], ["Cage Design", "Non-metallic"], ["Sealing", "Open"], ["Catalog Mass", "Approximately 0.444 kg"], ["Matched-Condition Clearance", "Medium clearance designation"]],
    overview: ["The SKF 7307 BECBP uses offset raceways to carry radial load together with axial load in one direction. Its 40-degree contact angle provides higher axial-load capability than a lower-angle design, while the open construction allows lubrication to be selected for the machine arrangement.", "A single 7307 BECBP takes thrust in one direction. Where a shaft must be located axially in both directions, bearings are commonly arranged as a pair. The mounting orientation and the required clearance or preload are therefore part of the bearing selection, not installation details to decide later.", "The complete BECBP suffix should be matched. A 7307 bearing with another cage, matching class or internal arrangement is not automatically interchangeable."],
    features: ["Single-row angular contact geometry", "40-degree nominal contact angle", "35 mm metric bore", "80 mm outside diameter", "21 mm width", "Open bearing design", "Non-metallic cage", "Suitable for paired arrangements when correctly selected"],
    applications: ["Industrial pumps", "Gearboxes and speed reducers", "Machine-tool and spindle arrangements", "Compressors", "Electric motors with combined loads", "General machinery MRO replacement"],
    selection: ["Confirm whether the old bearing works alone or in a back-to-back, face-to-face or tandem arrangement. The wrong orientation or matched condition can change shaft location, stiffness and operating temperature.", "Check the complete suffix, load direction, speed, lubrication, required clearance or preload, shaft and housing fits and adjacent bearing before approving a replacement."],
    ordering: ["Complete designation: SKF 7307 BECBP", "Old bearing marking and arrangement photos", "Single bearing or matched-set requirement", "Radial and axial load directions", "Speed and operating temperature", "Clearance or preload requirement", "Lubrication and mounting fits", "Quantity and destination"],
    faqs: [{ q: "What are the SKF 7307 BECBP dimensions?", a: "The bearing measures 35 mm bore, 80 mm outside diameter and 21 mm width." }, { q: "What does the 40-degree contact angle mean?", a: "It gives the bearing useful axial-load capacity in one direction while it also carries radial load." }, { q: "Can one 7307 BECBP carry axial load in both directions?", a: "A single bearing carries axial load in one direction. Two bearings may be arranged to locate a shaft in both directions." }, { q: "Can another 7307 suffix replace BECBP?", a: "Not automatically. Cage, accuracy, matching and internal-condition details must be compared using the complete designation." }]
  },
  {
    slug: "skf-nu-306-ecm-cylindrical-roller-bearing",
    title: "SKF NU 306 ECM Single-Row Cylindrical Roller Bearing",
    seoTitle: "SKF NU 306 ECM Cylindrical Roller Bearing | MAVORIX",
    description: "Source SKF NU 306 ECM single-row cylindrical roller bearing, 30 x 72 x 19 mm, for high radial-load machinery and MRO replacement.",
    badge: "Single-Row Cylindrical Roller Bearing",
    brand: "SKF",
    model: "NU 306 ECM",
    category: "Industrial cylindrical roller bearing",
    summary: "SKF NU 306 ECM is a 30 x 72 x 19 mm single-row cylindrical roller bearing with an NU ring configuration and machined brass cage. It is intended primarily for radial load and can accommodate axial displacement between shaft and housing within the bearing.",
    images: [{ src: "/images/products/general-products/skf-nu-306-ecm-cylindrical-roller-bearing/skf-nu-306-ecm-cylindrical-roller-bearing-main.webp", alt: "SKF Explorer NU 306 ECM cylindrical roller bearing with machined brass cage and model boxes", label: "SKF NU 306 ECM bearing and model labels" }],
    summarySpecs: [["Brand", "SKF"], ["Model", "NU 306 ECM"], ["Type", "Single-row cylindrical roller"], ["Dimensions", "30 x 72 x 19 mm"], ["Dynamic Rating", "58.5 kN"], ["Cage", "Machined brass"]],
    confirmedSpecs: [["Brand", "SKF Explorer"], ["Designation", "NU 306 ECM"], ["Bearing Design", "Single-row cylindrical roller bearing, NU design"], ["Bore Diameter", "30 mm"], ["Outside Diameter", "72 mm"], ["Width", "19 mm"], ["Basic Dynamic Load Rating", "58.5 kN"], ["Basic Static Load Rating", "48 kN"], ["Cage", "Machined brass"], ["Sealing", "Open"]],
    overview: ["The SKF NU 306 ECM uses cylindrical rollers and line contact between the rollers and raceways, giving it higher radial-load capacity than a similarly sized ball bearing. The machined brass cage is designed for strength and controlled roller guidance.", "In the NU design, the outer ring has two integral flanges while the inner ring has no flanges. This allows axial displacement of the shaft relative to the housing in both directions within the bearing, making it useful as the non-locating bearing in an arrangement.", "NU 306 ECM is not an axial locating bearing. The complete machine layout must include another bearing or locating feature where shaft position has to be controlled."],
    features: ["High radial-load capacity", "NU non-locating ring design", "Allows axial displacement in both directions", "30 mm metric bore", "72 mm outside diameter", "19 mm width", "Machined brass cage", "Separable inner ring for easier assembly"],
    applications: ["Industrial electric motors", "Gearboxes and transmission equipment", "Pumps and compressors", "Machine tools", "Process machinery", "High-radial-load MRO replacement"],
    selection: ["Confirm that the machine needs an NU non-locating bearing. NU, NJ, NUP and N designs have different flange arrangements and cannot be treated as the same locating solution.", "Check the complete ECM suffix, radial clearance, accuracy class, load, speed, shaft and housing fits, axial displacement range and lubrication before ordering."],
    ordering: ["Complete designation: SKF NU 306 ECM", "Old bearing marking", "30 x 72 x 19 mm dimensional confirmation", "Locating or non-locating bearing position", "Radial load and speed", "Required internal clearance", "Lubrication and operating temperature", "Quantity and destination"],
    faqs: [{ q: "What are the SKF NU 306 ECM dimensions?", a: "The bearing has a 30 mm bore, 72 mm outside diameter and 19 mm width." }, { q: "What load is NU 306 ECM designed to carry?", a: "It is primarily a radial-load bearing. The NU design is not used to locate the shaft axially." }, { q: "Can NU 306 ECM accommodate shaft expansion?", a: "Yes. Its ring design permits axial displacement between shaft and housing in both directions within the bearing." }, { q: "Can NU 306 ECM replace NJ 306 or NUP 306?", a: "Not without an engineering check. Their flange arrangements and axial-locating functions are different." }]
  },
  {
    slug: "ief-bcb-3572-2r-su-cp-precision-bearing-set",
    title: "IEF BCB-3572-2R-SU-CP Precision Bearing Set",
    seoTitle: "IEF BCB-3572-2R-SU-CP Precision Bearing | MAVORIX",
    description: "Source IEF BCB-3572-2R-SU-CP precision bearing set by complete model. Confirm dimensions, arrangement and preload before replacement ordering.",
    badge: "Exact-Model Precision Bearing Set",
    brand: "IEF",
    model: "BCB-3572-2R-SU-CP",
    category: "Precision industrial bearing set",
    summary: "IEF BCB-3572-2R-SU-CP is an exact-model precision bearing set marked Made in Japan. Reliable public technical data for this complete suffix is limited, so replacement selection should be based on the original designation, measured interfaces and controlled manufacturer documentation rather than a guessed equivalent.",
    images: [{ src: "/images/products/general-products/ief-bcb-3572-2r-su-cp-precision-bearing-set/ief-bcb-3572-2r-su-cp-precision-bearing-set-main.webp", alt: "IEF BCB-3572-2R-SU-CP precision bearing packages with complete model labels", label: "IEF BCB-3572-2R-SU-CP model labels" }],
    summarySpecs: [["Brand Marking", "IEF"], ["Complete Model", "BCB-3572-2R-SU-CP"], ["Product", "Precision bearing set"], ["Country Marking", "Made in Japan"], ["Selection", "Exact model required"], ["Technical Status", "Drawing confirmation required"]],
    confirmedSpecs: [["Brand Marking", "IEF"], ["Complete Designation", "BCB-3572-2R-SU-CP"], ["Product Form", "Precision bearing set"], ["Country Marking", "Made in Japan"], ["Public Dimension Data", "Not confirmed"], ["Precision / Preload", "Not confirmed"], ["Internal Arrangement", "Not confirmed"], ["Load and Speed Ratings", "Not confirmed"]],
    overview: ["The BCB-3572-2R-SU-CP designation should be treated as one complete procurement reference. Individual suffix groups may describe arrangement, preload, accuracy or supplier-specific construction, but their meaning should not be decoded without the applicable technical catalog or drawing.", "For an existing machine, the safest path is to compare the old bearing marking, shaft diameter, housing bore, assembled width and shoulder arrangement. The machine model and operating position help distinguish a genuine replacement from another bearing with a similar outside appearance.", "MAVORIX can use the complete label and buyer-provided measurements to coordinate supplier confirmation. Dimensional or performance values will only be added after a controlled datasheet or drawing is available."],
    features: ["Complete BCB-3572-2R-SU-CP designation", "IEF brand marking", "Made in Japan marking", "Supplied as a precision bearing set", "Exact-model replacement approach", "Suitable for drawing-based verification", "No unverified load or speed claims", "China-side sourcing and label comparison support"],
    applications: ["Replacement in the original machine position", "Precision machinery maintenance", "Machine-tool repair where the exact model is specified", "Special bearing procurement", "Legacy equipment support", "Mixed MRO bearing consolidation"],
    selection: ["Do not select this bearing from the 3572 number group alone. Confirm the complete BCB-3572-2R-SU-CP marking and compare the physical interfaces with the original assembly.", "A current manufacturer drawing or supplier-controlled datasheet is required before claiming dimensions, contact angle, preload, accuracy class, permissible speed or load ratings."],
    ordering: ["Clear photo of the complete old designation", "Machine brand, model and bearing position", "Shaft diameter and housing bore", "Individual and assembled bearing widths", "Shoulder, spacer and locking arrangement", "Required preload or clearance if known", "Operating speed, load and lubrication", "Quantity and destination"],
    faqs: [{ q: "What is IEF BCB-3572-2R-SU-CP?", a: "It is a precision bearing-set designation marked IEF and Made in Japan. The complete model should be used for sourcing." }, { q: "Are the dimensions confirmed from the model number?", a: "No. Dimensions should be verified from the old bearing, installation drawing or controlled manufacturer data." }, { q: "Can a bearing with 3572 in its code replace this set?", a: "Not automatically. Arrangement, width, precision and preload may differ even when part of the code looks similar." }, { q: "What information is needed for sourcing?", a: "Send the full marking, machine model, shaft and housing dimensions, assembled width, arrangement, quantity and destination." }]
  },
  {
    slug: "fag-qj219-n2-mpa-four-point-contact-ball-bearing",
    title: "FAG QJ219-N2-MPA Four-Point Contact Ball Bearing",
    seoTitle: "FAG QJ219-N2-MPA Four-Point Bearing | MAVORIX",
    description: "Source FAG QJ219-N2-MPA four-point contact ball bearing, 95 x 170 x 32 mm, with N2 locating slots and machined brass cage.",
    badge: "Four-Point Contact Ball Bearing",
    brand: "FAG",
    model: "QJ219-N2-MPA",
    category: "Industrial four-point contact ball bearing",
    summary: "FAG QJ219-N2-MPA is a 95 x 170 x 32 mm four-point contact ball bearing with a split inner ring, two locating slots and an outer-ring-guided machined brass cage. It supports axial load in both directions in a compact single-bearing position.",
    images: [{ src: "/images/products/general-products/fag-qj219-n2-mpa-four-point-contact-ball-bearing/fag-qj219-n2-mpa-four-point-contact-ball-bearing-main.webp", alt: "FAG QJ219-N2-MPA four-point contact bearing with model-labelled boxes", label: "FAG QJ219-N2-MPA bearing and labels" }],
    summarySpecs: [["Brand", "FAG / Schaeffler"], ["Model", "QJ219-N2-MPA"], ["Type", "Four-point contact"], ["Dimensions", "95 x 170 x 32 mm"], ["Dynamic Rating", "190 kN"], ["Static Rating", "212 kN"]],
    confirmedSpecs: [["Brand", "FAG / Schaeffler"], ["Designation", "QJ219-N2-MPA"], ["Bearing Design", "Four-point contact ball bearing"], ["Bore Diameter", "95 mm"], ["Outside Diameter", "170 mm"], ["Width", "32 mm"], ["Basic Dynamic Load Rating", "190 kN"], ["Basic Static Load Rating", "212 kN"], ["Limiting Speed", "7,000 r/min"], ["N2 Feature", "Two locating slots in one outer-ring side face"], ["MPA Cage", "Outer-ring-guided machined brass cage"], ["Ring Design", "Split inner ring"]],
    overview: ["The FAG QJ219-N2-MPA is a four-point contact bearing derived from angular contact ball-bearing geometry. Its split inner ring allows a large ball complement and enables one bearing position to support axial load in both directions together with a limited radial load.", "Two locating slots identified by the N2 suffix help prevent the outer ring from turning where the housing arrangement uses a suitable locating element. The MPA suffix identifies an outer-ring-guided machined brass cage.", "Four-point contact bearings are sensitive to surrounding fit, internal clearance and load distribution. The complete suffix and bearing arrangement should be confirmed before replacing another QJ219 variant."],
    features: ["Carries axial load in both directions", "Compact four-point contact arrangement", "Split inner ring", "95 mm metric bore", "170 mm outside diameter", "32 mm width", "Two N2 locating slots", "Outer-ring-guided machined brass cage"],
    applications: ["Industrial gearboxes", "Large drive and transmission systems", "Compressors and process equipment", "Rotary machinery requiring bidirectional axial location", "Machine-tool assemblies", "Heavy-equipment MRO replacement"],
    selection: ["A four-point contact bearing is not automatically interchangeable with a conventional single-row angular contact bearing. Confirm the housing slot arrangement, radial load share, axial clearance, fits and surrounding bearings.", "Verify the complete QJ219-N2-MPA designation, dimensions, speed, lubrication, operating temperature and current manufacturer data for the final duty."],
    ordering: ["Complete designation: FAG QJ219-N2-MPA", "Old bearing and package markings", "95 x 170 x 32 mm dimensional confirmation", "Axial and radial load conditions", "Housing locating-slot arrangement", "Required clearance and accuracy", "Speed, lubrication and temperature", "Quantity and destination"],
    faqs: [{ q: "What are the QJ219-N2-MPA dimensions?", a: "The bearing measures 95 mm bore, 170 mm outside diameter and 32 mm width." }, { q: "What does N2 mean?", a: "N2 identifies two locating slots in one side face of the outer ring for use with a suitable housing locating arrangement." }, { q: "What does MPA mean?", a: "MPA identifies an outer-ring-guided machined brass cage." }, { q: "Can QJ219-N2-MPA carry axial load in both directions?", a: "Yes. Four-point contact geometry supports axial force in both directions, subject to the approved bearing arrangement and load limits." }]
  },
  {
    slug: "skf-6004-2z-shielded-deep-groove-ball-bearing",
    title: "SKF 6004-2Z Shielded Deep Groove Ball Bearing",
    seoTitle: "SKF 6004-2Z Deep Groove Ball Bearing | MAVORIX",
    description: "Source SKF 6004-2Z shielded deep groove ball bearing, 20 x 42 x 12 mm, for electric motors, machinery and MRO replacement.",
    badge: "Double-Shielded Deep Groove Ball Bearing",
    brand: "SKF",
    model: "6004-2Z",
    category: "Industrial deep groove ball bearing",
    summary: "SKF 6004-2Z is a 20 x 42 x 12 mm single-row deep groove ball bearing with non-contact metal shields on both sides. It is grease filled and suited to compact rotating equipment where the shields help retain lubricant and limit entry of larger contaminants.",
    images: [{ src: "/images/products/general-products/skf-6004-2z-shielded-deep-groove-ball-bearing/skf-6004-2z-shielded-deep-groove-ball-bearing-main.webp", alt: "SKF Explorer 6004-2Z deep groove ball bearing boxes with complete designation labels", label: "SKF 6004-2Z model labels" }],
    summarySpecs: [["Brand", "SKF"], ["Model", "6004-2Z"], ["Type", "Deep groove ball bearing"], ["Dimensions", "20 x 42 x 12 mm"], ["Closure", "Metal shields, both sides"], ["Lubrication", "Grease filled"]],
    confirmedSpecs: [["Brand", "SKF Explorer"], ["Designation", "6004-2Z"], ["Bearing Design", "Single-row deep groove ball bearing"], ["Bore Diameter", "20 mm"], ["Outside Diameter", "42 mm"], ["Width", "12 mm"], ["Closure", "Non-contact metal shield on both sides"], ["Lubrication", "Grease filled"], ["Bore", "Cylindrical"], ["Catalog Mass", "Approximately 0.067 kg"]],
    overview: ["The SKF 6004-2Z is a compact deep groove ball bearing for radial load and moderate axial load in either direction. Its simple raceway geometry supports relatively high rotational speed when fits, internal clearance, lubrication and load are correctly selected.", "The 2Z suffix identifies a non-contact metal shield on each side. The shields retain factory grease and reduce the entry of larger particles without the rubbing contact of a rubber seal. They do not make the bearing waterproof or suitable for heavy contamination.", "For replacement, distinguish 6004-2Z from open 6004, sealed 6004-2RS variants and bearings with additional clearance suffixes such as C3. The correct closure and internal clearance depend on the machine temperature, fits and speed."],
    features: ["Single-row deep groove design", "20 mm metric bore", "42 mm outside diameter", "12 mm width", "Non-contact metal shields on both sides", "Factory grease fill", "Supports radial and moderate bidirectional axial load", "Compact format for general machinery"],
    applications: ["Small and medium electric motors", "Industrial fans and blowers", "Pumps", "Conveyors and rollers", "Power tools and compact machinery", "General MRO bearing replacement"],
    selection: ["A 2Z metal-shielded bearing is different from a contact-sealed 2RS bearing. Choose the closure from speed, contamination, moisture and maintenance requirements rather than from dimensions alone.", "Confirm the complete 6004-2Z designation, radial clearance, accuracy class, fits, load, speed and operating temperature before approving a replacement."],
    ordering: ["Complete designation: SKF 6004-2Z", "Old bearing marking", "20 x 42 x 12 mm dimensional confirmation", "Required shields or seals", "Internal clearance requirement", "Load, speed and operating temperature", "Machine position and lubrication conditions", "Quantity and destination"],
    faqs: [{ q: "What are the SKF 6004-2Z dimensions?", a: "The bearing has a 20 mm bore, 42 mm outside diameter and 12 mm width." }, { q: "What does 2Z mean?", a: "It means the bearing has a non-contact metal shield on both sides." }, { q: "Is 6004-2Z the same as 6004-2RS?", a: "No. 2Z uses metal shields; 2RS variants use contact seals. Their friction and contamination protection differ." }, { q: "Is SKF 6004-2Z supplied lubricated?", a: "The standard shielded bearing is grease filled. Confirm the required grease and operating conditions for the application." }]
  }
];

type LocalBearingInput = Pick<BearingProduct, "slug" | "title" | "seoTitle" | "description" | "badge" | "brand" | "model" | "category"> & {
  designationNote: string;
  applications: string[];
  features: string[];
  selection: string;
};

function localBearingProduct(input: LocalBearingInput): BearingProduct {
  const imageBase = `/images/products/general-products/${input.slug}/${input.slug}-main.webp`;
  return {
    localOnly: false,
    ...input,
    summary: `${input.title} is identified by its complete designation. For replacement work, use the full marking rather than the basic bearing number alone, then confirm the machine arrangement and operating conditions before purchase.`,
    images: [{ src: imageBase, alt: `${input.title} with complete model marking`, label: `${input.model} bearing and model marking` }],
    summarySpecs: [["Brand", input.brand], ["Complete designation", input.model], ["Bearing design", input.badge], ["Selection basis", "Complete designation and application check"]],
    confirmedSpecs: [["Brand marking", input.brand], ["Complete designation", input.model], ["Bearing design", input.category], ["Visible product reference", "Complete model marking"], ["Technical selection", "Confirm against current manufacturer data and machine requirements"]],
    overview: [
      input.designationNote,
      "Bearing replacement is more than matching the bore, outside diameter and width. Internal clearance, cage design, sealing, pairing, fits, lubrication, load direction and speed can all affect whether a similar-looking bearing is suitable in service.",
      "MAVORIX can coordinate exact-model sourcing, supplier comparison and document requests in China. Final bearing approval should remain with the buyer's engineer or qualified maintenance team."
    ],
    features: input.features,
    applications: input.applications,
    selection: [input.selection, "Confirm the complete suffix, old bearing marking, machine position, dimensions, load, speed, temperature, lubrication and mounting arrangement before releasing an order."],
    ordering: [`Complete designation: ${input.model}`, "Clear photos of the old bearing and package labels", "Machine brand, model and bearing position", "Bore, outside diameter and width confirmation", "Load direction, speed and operating temperature", "Lubrication and sealing requirement", "Quantity and destination"],
    faqs: [
      { q: `What should be supplied when requesting ${input.model}?`, a: `Send the complete ${input.model} marking, old bearing photos, machine position, dimensions, duty conditions, quantity and destination.` },
      { q: `Can another bearing with a similar base number replace ${input.model}?`, a: "Not automatically. Full suffixes can identify a different internal design, clearance, accuracy, seal, cage or arrangement. Confirm interchangeability before purchase." },
      { q: "Can MAVORIX help verify a replacement bearing?", a: "Yes. We can coordinate supplier comparison using the complete designation, buyer-provided measurements and available technical documents. Final technical approval remains with the buyer." }
    ]
  };
}

const localProducts: BearingProduct[] = [
  localBearingProduct({
    slug: "nsk-3304btng-yrln5-double-row-angular-contact-ball-bearing",
    title: "NSK 3304BTNG YRLN5 Double-Row Angular Contact Ball Bearing",
    seoTitle: "NSK 3304BTNG YRLN5 Bearing | MAVORIX",
    description: "Source NSK 3304BTNG YRLN5 double-row angular contact ball bearing by complete designation for industrial replacement and MRO requirements.",
    badge: "Double-Row Angular Contact Ball Bearing", brand: "NSK", model: "3304BTNG YRLN5", category: "Double-row angular contact ball bearing",
    designationNote: "NSK 3304BTNG YRLN5 is a double-row angular contact ball-bearing designation. This design is typically selected where combined radial and axial loads must be handled in a compact bearing position.",
    features: ["Double-row angular contact design", "Complete NSK 3304BTNG YRLN5 designation", "Combined-load bearing category", "Exact-model MRO sourcing"],
    applications: ["Industrial gear drives", "Pumps and compressors", "Conveying equipment", "General machinery maintenance"],
    selection: "Check the complete YRLN5 suffix and the axial-load arrangement. A double-row angular contact bearing is not automatically interchangeable with two separate single-row bearings."
  }),
  localBearingProduct({
    slug: "skf-6211-2z-va965-high-temperature-deep-groove-ball-bearing",
    title: "SKF 6211-2Z/VA965 High-Temperature Deep Groove Ball Bearing",
    seoTitle: "SKF 6211-2Z/VA965 High Temperature Bearing | MAVORIX",
    description: "Source SKF 6211-2Z/VA965 high-temperature deep groove ball bearing by complete suffix for industrial heat-process and MRO replacement requirements.",
    badge: "High-Temperature Deep Groove Ball Bearing", brand: "SKF", model: "6211-2Z/VA965", category: "High-temperature deep groove ball bearing",
    designationNote: "SKF 6211-2Z/VA965 is a deep groove ball bearing marked with a high-temperature suffix. The complete designation matters because high-temperature bearing variants can differ from standard 6211 configurations in lubricant, internal design and operating limitations.",
    features: ["Deep groove ball-bearing design", "SKF 6211-2Z/VA965 complete designation", "High-temperature variant", "Exact-suffix replacement approach"],
    applications: ["Ovens and heat-treatment auxiliaries", "Drying and conveying equipment", "Industrial fans", "Heat-process machinery maintenance"],
    selection: "Do not substitute a standard 6211-2Z for the VA965 version without reviewing temperature, speed, lubricant and service-life requirements."
  }),
  localBearingProduct({
    slug: "nsk-6206zzcm-ns7s-deep-groove-ball-bearing",
    title: "NSK 6206ZZCM NS7S Deep Groove Ball Bearing",
    seoTitle: "NSK 6206ZZCM NS7S Bearing | MAVORIX",
    description: "Source NSK 6206ZZCM NS7S deep groove ball bearing by complete designation for industrial machinery replacement and mixed MRO bearing lists.",
    badge: "Deep Groove Ball Bearing", brand: "NSK", model: "6206ZZCM NS7S", category: "Deep groove ball bearing",
    designationNote: "NSK 6206ZZCM NS7S is a deep groove ball-bearing designation. Its compact, general-purpose bearing design is used in many rotating machines, but the complete suffix must be retained when replacing an installed unit.",
    features: ["Single-row deep groove design", "NSK 6206ZZCM NS7S complete designation", "Radial-load bearing category", "MRO list consolidation support"],
    applications: ["Electric motors", "Pumps", "Fans and blowers", "General industrial machinery"],
    selection: "Check the closure, internal clearance, lubrication and mounting fits rather than ordering from the 6206 base number alone."
  }),
  localBearingProduct({
    slug: "nsk-22212eae4c3-spherical-roller-bearing",
    title: "NSK 22212EAE4C3 Spherical Roller Bearing",
    seoTitle: "NSK 22212EAE4C3 Spherical Roller Bearing | MAVORIX",
    description: "Source NSK 22212EAE4C3 spherical roller bearing, 60 x 110 x 28 mm, with C3 internal clearance for industrial machinery replacement.",
    badge: "Spherical Roller Bearing", brand: "NSK", model: "22212EAE4C3", category: "Spherical roller bearing",
    designationNote: "NSK 22212EAE4C3 is a spherical roller bearing with 60 mm bore, 110 mm outside diameter and 28 mm width. The C3 suffix identifies a greater-than-normal radial internal clearance, which must suit the actual shaft fit, temperature and duty.",
    features: ["Spherical roller design", "60 x 110 x 28 mm principal dimensions", "C3 radial internal clearance", "Suitable for misalignment-tolerant bearing arrangements"],
    applications: ["Gearboxes", "Conveyors", "Industrial fans", "Process equipment and heavy-duty machinery"],
    selection: "Confirm that C3 clearance is required. Clearance changes after fitting and at operating temperature, so a standard-clearance version is not an automatic replacement."
  }),
  localBearingProduct({
    slug: "nsk-7026ctynsulp4-precision-angular-contact-ball-bearing",
    title: "NSK 7026CTYNSULP4 Precision Angular Contact Ball Bearing",
    seoTitle: "NSK 7026CTYNSULP4 Precision Bearing | MAVORIX",
    description: "Source NSK 7026CTYNSULP4 precision angular contact ball bearing by complete designation for machine-tool and precision equipment replacement.",
    badge: "Precision Angular Contact Ball Bearing", brand: "NSK", model: "7026CTYNSULP4", category: "Precision angular contact ball bearing",
    designationNote: "NSK 7026CTYNSULP4 is a precision angular contact ball-bearing designation. Precision class, mounting arrangement and the full suffix are central to replacement selection in spindle and accuracy-sensitive machinery.",
    features: ["Precision angular contact bearing category", "NSK 7026CTYNSULP4 complete designation", "P4 precision class marking", "Suitable for controlled replacement sourcing"],
    applications: ["Machine-tool spindle arrangements", "Precision grinding equipment", "High-accuracy rotary assemblies", "Specialized industrial machinery"],
    selection: "Confirm contact angle, pairing or preload requirement, precision class, arrangement and lubricant before replacing a precision angular contact bearing."
  }),
  localBearingProduct({
    slug: "crbs608auu-thin-section-crossed-roller-bearing",
    title: "CRBS608AUU Thin-Section Crossed Roller Bearing",
    seoTitle: "CRBS608AUU Crossed Roller Bearing | MAVORIX",
    description: "Source CRBS608AUU thin-section crossed roller bearing by complete designation for compact rotary, automation and precision positioning assemblies.",
    badge: "Thin-Section Crossed Roller Bearing", brand: "Brand marking not confirmed", model: "CRBS608AUU", category: "Thin-section crossed roller bearing",
    designationNote: "CRBS608AUU is a thin-section crossed roller bearing designation. Crossed roller geometry is commonly selected where a compact bearing position needs controlled rotational support and stiffness under combined loading.",
    features: ["Thin-section crossed roller category", "CRBS608AUU complete designation", "Compact rotary-bearing format", "Exact-model sourcing approach"],
    applications: ["Robotics and automation", "Rotary tables", "Inspection and positioning equipment", "Compact precision assemblies"],
    selection: "Confirm the complete marking, installation dimensions, fixing method, preload condition and permissible moment load before ordering."
  }),
  localBearingProduct({
    slug: "nachi-7205cydb-gl-p5-duplex-angular-contact-ball-bearing",
    title: "NACHI 7205CYDB/GL P5 Duplex Angular Contact Ball Bearing",
    seoTitle: "NACHI 7205CYDB/GL P5 Duplex Bearing | MAVORIX",
    description: "Source NACHI 7205CYDB/GL P5 duplex angular contact ball bearing by complete designation for precision paired-bearing arrangements.",
    badge: "Duplex Angular Contact Ball Bearing", brand: "NACHI", model: "7205CYDB/GL P5", category: "Duplex angular contact ball bearing",
    designationNote: "NACHI 7205CYDB/GL P5 is a duplex angular contact ball-bearing designation. The DB marking indicates a paired arrangement, while the P5 accuracy marking makes the complete designation especially important for a replacement request.",
    features: ["Duplex angular contact bearing category", "DB paired-arrangement marking", "P5 accuracy-class marking", "NACHI 7205CYDB/GL complete designation"],
    applications: ["Machine-tool spindles", "Precision pumps", "High-speed rotary equipment", "Paired-bearing replacement work"],
    selection: "Do not replace a DB matched pair with unrelated single bearings. Check pair orientation, preload or clearance, contact angle and accuracy class."
  }),
  localBearingProduct({
    slug: "skf-nnu-4948-bk-spw33-double-row-cylindrical-roller-bearing",
    title: "SKF NNU 4948 BK/SPW33 Double-Row Cylindrical Roller Bearing",
    seoTitle: "SKF NNU 4948 BK/SPW33 Cylindrical Roller Bearing | MAVORIX",
    description: "Source SKF NNU 4948 BK/SPW33 double-row cylindrical roller bearing by complete designation for machine-tool and high-radial-load equipment replacement.",
    badge: "Double-Row Cylindrical Roller Bearing", brand: "SKF", model: "NNU 4948 BK/SPW33", category: "Double-row cylindrical roller bearing",
    designationNote: "SKF NNU 4948 BK/SPW33 is a double-row cylindrical roller bearing designation. This bearing class is commonly used where radial stiffness and accuracy matter, and its suffixes must be checked alongside the existing machine arrangement.",
    features: ["Double-row cylindrical roller design", "SKF NNU 4948 BK/SPW33 complete designation", "High-radial-stiffness bearing category", "Precision machine replacement support"],
    applications: ["Machine-tool spindles", "Grinding machinery", "Rolling and processing equipment", "High-radial-load rotating assemblies"],
    selection: "Confirm bore style, internal design, accuracy, clearance or preload, lubrication and spindle mounting requirements before selecting a replacement."
  }),
  localBearingProduct({
    slug: "skf-6206-rs1-deep-groove-ball-bearing",
    title: "SKF 6206-RS1 Deep Groove Ball Bearing",
    seoTitle: "SKF 6206-RS1 Deep Groove Ball Bearing | MAVORIX",
    description: "Source SKF 6206-RS1 deep groove ball bearing by complete designation for electric motors, pumps and general industrial MRO replacement.",
    badge: "Deep Groove Ball Bearing", brand: "SKF", model: "6206-RS1", category: "Deep groove ball bearing",
    designationNote: "SKF 6206-RS1 is a deep groove ball-bearing designation with an RS1 sealing suffix. Seal configuration influences friction, lubricant retention and contamination protection, so it should be matched to the original application.",
    features: ["Single-row deep groove design", "SKF 6206-RS1 complete designation", "RS1 seal suffix", "General-purpose rotating-equipment bearing category"],
    applications: ["Electric motors", "Pumps", "Fans", "Conveyors and general industrial machinery"],
    selection: "Confirm whether the machine requires the RS1 seal configuration, a different closure, a particular internal clearance or a specific grease before ordering."
  }),
  localBearingProduct({
    slug: "ief-6040-2rs-deep-groove-ball-bearing",
    title: "IEF 6040-2RS Deep Groove Ball Bearing",
    seoTitle: "IEF 6040-2RS Deep Groove Ball Bearing | MAVORIX",
    description: "Source IEF 6040-2RS deep groove ball bearing by complete designation for industrial machinery replacement and special bearing sourcing.",
    badge: "Deep Groove Ball Bearing", brand: "IEF", model: "6040-2RS", category: "Deep groove ball bearing",
    designationNote: "IEF 6040-2RS is a deep groove ball-bearing designation marked IEF. The 2RS suffix is part of the complete procurement reference and should be checked with the original bearing, dimensions and sealing requirement.",
    features: ["Deep groove ball-bearing category", "IEF 6040-2RS complete designation", "2RS sealing suffix", "Exact-model replacement sourcing"],
    applications: ["Industrial machinery maintenance", "Rotating equipment", "Special bearing replacement", "Mixed MRO orders"],
    selection: "Use the full marking and measured interfaces for replacement. Do not assume dimensions, internal clearance or seal material from a similar-looking bearing."
  }),
  localBearingProduct({
    slug: "skf-24034-cc-w33-spherical-roller-bearing",
    title: "SKF 24034 CC/W33 Spherical Roller Bearing",
    seoTitle: "SKF 24034 CC/W33 Spherical Roller Bearing | MAVORIX",
    description: "Source SKF 24034 CC/W33 spherical roller bearing, 170 x 260 x 90 mm, with W33 lubrication groove and holes for heavy-duty machinery replacement.",
    badge: "Spherical Roller Bearing", brand: "SKF", model: "24034 CC/W33", category: "Spherical roller bearing",
    designationNote: "SKF 24034 CC/W33 is a spherical roller bearing with 170 mm bore, 260 mm outside diameter and 90 mm width. The W33 suffix identifies a lubrication groove and holes in the outer ring, making the complete configuration important in heavy-duty service.",
    features: ["Spherical roller bearing design", "170 x 260 x 90 mm principal dimensions", "CC internal design marking", "W33 lubrication groove and holes"],
    applications: ["Heavy-duty gearboxes", "Material-handling equipment", "Industrial fans", "Process and bulk-handling machinery"],
    selection: "Confirm the cylindrical-bore configuration, W33 lubrication arrangement, internal clearance, fits, alignment condition and duty before ordering."
  })
];

const allProducts = [...products, ...localProducts];

export function generateStaticParams() {
  return allProducts.map((product) => ({ locale: "en", slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = allProducts.find((item) => locale === "en" && item.slug === slug);
  if (!product) return {};
  const path = `/en/products/industrial-bearings/${product.slug}/`;
  return {
    title: product.seoTitle,
    description: product.description,
    alternates: { canonical: `${site.url}${path}` },
    robots: { index: !product.localOnly, follow: !product.localOnly, googleBot: { index: !product.localOnly, follow: !product.localOnly } },
    openGraph: { title: product.title, description: product.description, url: `${site.url}${path}`, siteName: site.name, locale: "en", type: "website", images: [{ url: product.images[0].src, alt: product.images[0].alt }] },
    twitter: { card: "summary_large_image", title: product.title, description: product.description, images: [product.images[0].src] }
  };
}

export default async function IndustrialBearingPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const product = allProducts.find((item) => locale === "en" && item.slug === slug);
  if (!product) notFound();
  const path = `/en/products/industrial-bearings/${product.slug}/`;
  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(`${product.model} bearing inquiry`)}`;
  const breadcrumbItems = [{ name: "Home", url: `${site.url}/en/` }, { name: "Electrical & Mechanical Parts", url: `${site.url}/en/industries/electrical-mechanical-parts/` }, { name: product.title, url: `${site.url}${path}` }];

  return <>
    <section className="bg-slate-50 py-8"><Container><Breadcrumbs items={[{ label: "Home", href: "/en/" }, { label: "Electrical & Mechanical Parts", href: "/en/industries/electrical-mechanical-parts/" }, { label: product.title, href: path }]} /></Container></section>
    <section className="bg-white py-12"><Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-start">
      <ProductImageGallery images={product.images} />
      <div className="space-y-7"><div><Badge>{product.badge}</Badge><h1 className="mt-4 break-words text-4xl font-black leading-tight text-navy [overflow-wrap:anywhere] md:text-5xl">{product.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{product.summary}</p></div>
        <dl className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm md:grid-cols-2">{product.summarySpecs.map(([label, value]) => <SpecTerm key={label} label={label} value={value} />)}</dl>
        <div className="flex flex-wrap gap-3"><Button href={mailtoHref} className="gap-2"><Send size={17} aria-hidden="true" /> Send Your Bearing List</Button><Button href={site.whatsappUrl} variant="secondary" className="gap-2"><MessageCircle size={17} aria-hidden="true" /> Request a Quote</Button></div>
      </div>
    </Container></section>
    <Container className="py-14"><article className="space-y-12">
      <Section title="Product Overview">{product.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Section>
      <section><h2 className="text-3xl font-black text-navy">Confirmed Specifications</h2><div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white"><table className="w-full text-left text-sm"><tbody>{product.confirmedSpecs.map(([label, value]) => <tr key={label} className="border-b border-slate-200 last:border-0"><th className="w-48 bg-slate-50 px-4 py-3 font-black text-navy">{label}</th><td className="break-words px-4 py-3 font-semibold text-slate-700 [overflow-wrap:anywhere]">{value}</td></tr>)}</tbody></table></div></section>
      <Section title="Key Features"><FeatureGrid items={product.features} /></Section>
      <Section title="Typical Applications"><FeatureGrid items={product.applications} /><p>Applications are selection references. Final bearing approval must follow the machine drawing, loads, speed, fits, lubrication and operating environment.</p></Section>
      <Section title="Compatibility and Selection Notice">{product.selection.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</Section>
      <Section title="Information Required Before Ordering"><FeatureGrid items={product.ordering} muted /></Section>
      <Section title="MAVORIX Bearing Sourcing Support"><p>MAVORIX is an independent China-side sourcing and supplier coordination partner, not the bearing manufacturer or an authorized distributor. We can help organize mixed bearing lists, compare complete designations, request supplier documents, coordinate label and dimension checks, and consolidate MRO shipments.</p><p>For a replacement inquiry, send the full suffix rather than only the basic bearing number. Related support is available through our <LinkText href="/en/industrial-sourcing/">industrial sourcing</LinkText>, <LinkText href="/en/industries/electrical-mechanical-parts/">electrical and mechanical parts</LinkText>, <LinkText href="/en/services/industrial-spare-parts-sourcing/">spare-parts sourcing</LinkText> and <LinkText href="/en/contact/">contact</LinkText> pages.</p></Section>
    </article></Container>
    <FAQSection faqs={product.faqs} />
    <CTASection title={`Need Help Sourcing ${product.model}?`} text="Send the complete bearing designation, old marking photos, machine position, dimensions, quantity and destination. We can coordinate supplier comparison and replacement checks in China." />
    <JsonLd data={[breadcrumbSchema(breadcrumbItems), { "@context": "https://schema.org", "@type": "Product", name: product.title, brand: { "@type": "Brand", name: product.brand }, model: product.model, mpn: product.model, category: product.category, image: product.images.map((image) => `${site.url}${image.src}`), description: product.description }, faqSchema(product.faqs)]} />
  </>;
}

function SpecTerm({ label, value }: { label: string; value: string }) { return <div><dt className="text-xs font-black uppercase text-slate-500">{label}</dt><dd className="mt-1 break-words font-bold text-navy [overflow-wrap:anywhere]">{value}</dd></div>; }
function Section({ title, children }: { title: string; children: React.ReactNode }) { return <section><h2 className="text-3xl font-black text-navy">{title}</h2><div className="mt-4 space-y-5 leading-8 text-slate-600">{children}</div></section>; }
function FeatureGrid({ items, muted = false }: { items: string[]; muted?: boolean }) { return <ul className="grid gap-3 md:grid-cols-2">{items.map((item) => <li key={item} className={`${muted ? "bg-slate-50 ring-1 ring-slate-200" : "border border-slate-200 bg-white"} rounded-md p-4 text-sm font-semibold text-slate-700`}>{item}</li>)}</ul>; }
function LinkText({ href, children }: { href: string; children: React.ReactNode }) { return <a href={href} className="font-bold text-signal hover:text-orange-700">{children}</a>; }
