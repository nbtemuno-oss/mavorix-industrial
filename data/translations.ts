import type { Locale } from "./site";

export const coreCopy: Record<Locale, {
  dir: "ltr" | "rtl";
  nav: { home: string; industrial: string; services: string; industries: string; countries: string; blog: string; contact: string; whatsapp: string };
  footerIntro: string;
  footerColumns: { services: string; industries: string; countries: string; contact: string; whatsapp: string; contactPage: string };
  hero: { eyebrow: string; h1: string; subtitle: string; primary: string; whatsapp: string; services: string; trust: string[] };
  home: {
    metaTitle: string;
    metaDescription: string;
    strip: string[];
    sourceTitle: string;
    sourceText: string;
    sourceItems: { title: string; text: string }[];
    moreTitle: string;
    moreText: string;
    servicesTitle: string;
    servicesText: string;
    industriesTitle: string;
    industriesText: string;
    processTitle: string;
    processText: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
  };
  cta: { title: string; text: string; button: string; whatsapp: string };
  industrial: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    title: string;
    description: string;
    features: { title: string; text: string }[];
    processTitle: string;
    faqs: { q: string; a: string }[];
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    badge: string;
    title: string;
    description: string;
    fields: string[];
    requirement: string;
    message: string;
    submit: string;
    whatsapp: string;
    successMessage?: string;
    errorMessage?: string;
    checklistTitle: string;
    contactDirectTitle?: string;
    checklist: string[];
    faqs: { q: string; a: string }[];
  };
}> = {
  en: {
    dir: "ltr",
    nav: { home: "Home", industrial: "Industrial Sourcing", services: "Services", industries: "Industries", countries: "Countries", blog: "Blog", contact: "Contact", whatsapp: "WhatsApp" },
    footerIntro: "Your Industrial Sourcing Partner in China. China industrial sourcing, OEM, MRO, supplier verification, quality coordination, and export support.",
    footerColumns: { services: "Services", industries: "Industries", countries: "Countries", contact: "Contact", whatsapp: "WhatsApp Inquiry", contactPage: "Contact Page" },
    hero: {
      eyebrow: "China Industrial Sourcing Partner",
      h1: "Your Industrial Sourcing Partner in China",
      subtitle: "MAVORIX INDUSTRIAL helps overseas industrial buyers source reliable machinery, OEM products, MRO supplies, spare parts, and industrial equipment from China with supplier verification, quality control, export support, and supply chain coordination.",
      primary: "Send Inquiry",
      whatsapp: "Contact on WhatsApp",
      services: "Explore Sourcing Services",
      trust: ["Supplier verification", "Technical coordination", "Export execution"]
    },
    home: {
      metaTitle: "MAVORIX INDUSTRIAL | Industrial Sourcing Partner in China",
      metaDescription: "MAVORIX INDUSTRIAL helps overseas industrial buyers source reliable machinery, OEM products, MRO supplies, spare parts, and industrial equipment from China with supplier verification, quality control, and export support.",
      strip: ["Supplier Verification", "Quality Control", "OEM Coordination", "MRO Sourcing", "Export Support"],
      sourceTitle: "What We Source",
      sourceText: "Focused industrial sourcing support for practical B2B procurement needs, not an everything-for-everyone marketplace.",
      sourceItems: [
        { title: "Machinery and Equipment", text: "Production equipment, general machinery, and machinery-related purchasing coordination." },
        { title: "OEM Industrial Parts", text: "Custom parts, drawings, samples, supplier comparison, and production follow-up." },
        { title: "MRO Supplies", text: "Maintenance, repair, operation supplies, consumables, replacement items, and mixed-order sourcing." },
        { title: "Industrial Spare Parts", text: "Factory maintenance parts, mechanical spares, electrical spares, and urgent replacement sourcing." },
        { title: "Agricultural Equipment Parts", text: "Tractor, tiller, harvester, irrigation, and farm implement part sourcing from China." },
        { title: "Packaging and Factory Supplies", text: "Packaging machinery parts, conveyors, sealing parts, filling parts, and factory consumables." }
      ],
      moreTitle: "More Than Finding Suppliers",
      moreText: "AI, Google, and marketplaces can help buyers find supplier names. Industrial procurement needs more than search results: verification, technical communication, quotation comparison, sample coordination, quality inspection, export documents, consolidation, and long-term follow-up.",
      servicesTitle: "Core Services",
      servicesText: "Each service page is structured for Google SEO, AI answer engines, and practical buyer evaluation.",
      industriesTitle: "Industries We Support",
      industriesText: "We help buyers source, verify, and coordinate suppliers for industrial products from China.",
      processTitle: "Why MAVORIX INDUSTRIAL",
      processText: "Our background in industrial machinery and export operations helps us understand technical sourcing requirements better than general trading companies.",
      faqTitle: "FAQ",
      faqs: [
        { q: "Are you a trading company or sourcing agent?", a: "MAVORIX INDUSTRIAL is a China-based industrial sourcing partner. We help overseas buyers identify, verify, coordinate, and follow up with suitable suppliers." },
        { q: "What industrial products can you help source?", a: "We focus on machinery, OEM parts, MRO supplies, industrial spare parts, agricultural equipment parts, packaging machinery parts, metal parts, and factory maintenance products." },
        { q: "Can you verify Chinese suppliers?", a: "Yes. We can help screen supplier identity, communication quality, production capability signals, quotation clarity, and order execution risk." },
        { q: "How can I send an inquiry?", a: "Use the contact form, email michael@mavorixindustrial.com, or send a WhatsApp message to +8613967842747." }
      ]
    },
    cta: { title: "Need Industrial Sourcing Support from China?", text: "Send your product details, target quantity, photos, drawings, or supplier links. We will help review the sourcing path and next steps.", button: "Send Your Requirement", whatsapp: "WhatsApp" },
    industrial: {
      metaTitle: "China Industrial Sourcing Services | MAVORIX INDUSTRIAL",
      metaDescription: "MAVORIX INDUSTRIAL provides China industrial sourcing services for overseas buyers, including machinery, OEM products, MRO supplies, spare parts, supplier verification, quality control, and export coordination.",
      badge: "Industrial sourcing",
      title: "China Industrial Sourcing Services",
      description: "Structured sourcing support for overseas buyers purchasing machinery, OEM products, MRO supplies, spare parts, and industrial equipment from China.",
      features: [
        { title: "What Is Industrial Sourcing?", text: "Supplier identification, verification, technical clarification, quotation comparison, quality coordination, and export follow-up for industrial procurement." },
        { title: "Why Buyers Need Support", text: "China has many suppliers, but industrial buyers need reliable screening, specification control, and practical execution support." },
        { title: "What We Can Source", text: "Machinery, OEM parts, MRO supplies, spare parts, agricultural equipment parts, packaging products, metal parts, and factory supplies." },
        { title: "Supplier Verification", text: "We help check supplier identity, capability signals, communication quality, quotation clarity, and execution risk." },
        { title: "Quality Control", text: "We coordinate inspection requirements, specification checks, photo reports, packing checks, and issue follow-up before shipment." },
        { title: "Export Support", text: "We support supplier-side documentation communication, shipping coordination, packing follow-up, and consolidation planning." }
      ],
      processTitle: "Sourcing Process",
      faqs: [
        { q: "What is industrial sourcing?", a: "Industrial sourcing is the process of finding, verifying, comparing, and coordinating suppliers for machinery, parts, MRO items, OEM products, and industrial equipment." },
        { q: "Why use a China sourcing partner?", a: "A sourcing partner helps reduce risk by improving supplier screening, technical communication, quotation comparison, quality checks, and export coordination." },
        { q: "Can you source custom industrial parts?", a: "Yes. We can support OEM and custom parts sourcing when buyers provide drawings, samples, photos, specifications, or target use information." }
      ]
    },
    contact: {
      metaTitle: "Contact MAVORIX for China Supplier Checks and Sourcing",
      metaDescription: "Contact MAVORIX INDUSTRIAL for China supplier verification, quotation comparison, product sourcing, spare parts sourcing, MRO sourcing, quality inspection, shipment consolidation, and export support.",
      badge: "Contact",
      title: "Send Your China Industrial Sourcing Inquiry",
      description: "Share your product requirement, quantity, target market, drawings, photos, or supplier links. We will review the sourcing path and next steps.",
      fields: ["Name", "Company", "Country", "Email", "WhatsApp", "Quantity", "Target market"],
      requirement: "Product or sourcing requirement",
      message: "Message",
      submit: "Send Inquiry",
      whatsapp: "Contact on WhatsApp",
      successMessage: "Thank you. Your inquiry has been submitted. We will reply as soon as possible.",
      errorMessage: "Sorry, the inquiry could not be sent. Please contact us by email or WhatsApp.",
      checklistTitle: "Inquiry checklist",
      contactDirectTitle: "Contact us directly",
      checklist: ["Product name, photos, drawings, or sample details", "Quantity and expected repeat demand", "Material, size, technical standard, or application", "Target price or current quotation if available", "Destination country and target market", "Supplier information, website, or quotation if available", "Expected delivery time and packing needs"],
      faqs: [
        { q: "What information should I send?", a: "Send product name, quantity, photos, drawings, target price or current quotation, destination country, expected delivery time, target use, quality requirements, and any supplier links if available." },
        { q: "Can I contact you by WhatsApp?", a: "Yes. Contact us at +8613967842747 or use the WhatsApp button." },
        { q: "When should I contact MAVORIX?", a: "Contact us before paying a deposit, when comparing quotations, when checking a supplier, when sourcing spare parts or MRO items, or when coordinating several suppliers in China." },
        { q: "Can you check a supplier I already found?", a: "Yes. Send the supplier name, website, quotation, contact details, product information, and any documents you received. We can review practical risk points before you move forward." },
        { q: "Do you provide instant quotations?", a: "Industrial quotations usually require supplier screening and technical clarification, so we avoid unreliable instant pricing." },
        { q: "Can you help with shipment consolidation?", a: "Yes. When several suppliers are involved, we can help coordinate supplier delivery timing, packing notes, warehouse communication, and loading follow-up." }
      ]
    }
  },
  fr: {
    dir: "ltr",
    nav: { home: "Accueil", industrial: "Sourcing industriel", services: "Services", industries: "Industries", countries: "Pays", blog: "Blog", contact: "Contact", whatsapp: "WhatsApp" },
    footerIntro: "Votre partenaire de sourcing industriel en Chine. Sourcing industriel, OEM, MRO, verification fournisseurs, coordination qualite et support export.",
    footerColumns: { services: "Services", industries: "Industries", countries: "Pays", contact: "Contact", whatsapp: "Demande WhatsApp", contactPage: "Page contact" },
    hero: {
      eyebrow: "Sourcing industriel depuis la Chine",
      h1: "Votre partenaire de sourcing industriel en Chine",
      subtitle: "MAVORIX INDUSTRIAL aide les acheteurs industriels internationaux a sourcer des machines, pieces OEM, fournitures MRO, pieces detachees et equipements industriels en Chine avec verification fournisseurs, controle qualite et support export.",
      primary: "Envoyer une demande",
      whatsapp: "Contacter sur WhatsApp",
      services: "Voir les services",
      trust: ["Verification fournisseurs", "Coordination technique", "Support export"]
    },
    home: {
      metaTitle: "MAVORIX INDUSTRIAL | Partenaire de sourcing industriel en Chine",
      metaDescription: "MAVORIX INDUSTRIAL aide les acheteurs industriels a sourcer des machines, pieces OEM, fournitures MRO et equipements industriels en Chine.",
      strip: ["Verification fournisseurs", "Controle qualite", "Coordination OEM", "Sourcing MRO", "Support export"],
      sourceTitle: "Ce que nous sourcons",
      sourceText: "Un support de sourcing industriel cible pour les besoins B2B, sans pretendre tout sourcer.",
      sourceItems: [
        { title: "Machines et equipements", text: "Coordination d'achat pour machines, equipements de production et pieces associees." },
        { title: "Pieces industrielles OEM", text: "Pieces sur plan, echantillons, comparaison fournisseurs et suivi production." },
        { title: "Fournitures MRO", text: "Maintenance, reparation, operations, consommables et commandes mixtes." },
        { title: "Pieces detachees industrielles", text: "Pieces de maintenance, pieces mecaniques et electriques, sourcing urgent." },
        { title: "Pieces d'equipement agricole", text: "Pieces de tracteurs, motoculteurs, irrigation et equipements agricoles." },
        { title: "Fournitures d'usine", text: "Pieces de machines d'emballage, convoyeurs, composants et consommables." }
      ],
      moreTitle: "Plus qu'une recherche de fournisseurs",
      moreText: "Les moteurs de recherche et plateformes donnent des noms. L'achat industriel demande verification, communication technique, comparaison, echantillons, inspection, documents export et suivi long terme.",
      servicesTitle: "Services principaux",
      servicesText: "Nos services reduisent les risques de sourcing et ameliorent l'execution cote Chine.",
      industriesTitle: "Industries accompagnees",
      industriesText: "Nous aidons les acheteurs a sourcer, verifier et coordonner des fournisseurs industriels en Chine.",
      processTitle: "Pourquoi MAVORIX INDUSTRIAL",
      processText: "Notre experience en machines industrielles et operations export aide a mieux comprendre les exigences techniques.",
      faqTitle: "FAQ",
      faqs: [
        { q: "Etes-vous une societe de trading ou un agent de sourcing ?", a: "MAVORIX INDUSTRIAL est un partenaire de sourcing industriel base en Chine pour verifier, coordonner et suivre les fournisseurs." },
        { q: "Quels produits pouvez-vous sourcer ?", a: "Machines, pieces OEM, fournitures MRO, pieces detachees, pieces agricoles, emballage, metal et maintenance usine." },
        { q: "Pouvez-vous verifier les fournisseurs chinois ?", a: "Oui, nous aidons a verifier l'identite, la capacite, la communication et les risques avant commande." },
        { q: "Comment envoyer une demande ?", a: "Utilisez le formulaire, l'email michael@mavorixindustrial.com ou WhatsApp +8613967842747." }
      ]
    },
    cta: { title: "Besoin de support de sourcing industriel depuis la Chine ?", text: "Envoyez details produit, quantite, photos, plans ou liens fournisseurs. Nous examinerons la prochaine etape.", button: "Envoyer votre besoin", whatsapp: "WhatsApp" },
    industrial: {
      metaTitle: "Services de sourcing industriel en Chine | MAVORIX INDUSTRIAL",
      metaDescription: "Services de sourcing industriel en Chine pour machines, OEM, MRO, pieces detachees, verification fournisseurs, qualite et export.",
      badge: "Sourcing industriel",
      title: "Services de sourcing industriel en Chine",
      description: "Support structure pour acheteurs internationaux de machines, pieces OEM, fournitures MRO, pieces detachees et equipements industriels.",
      features: [
        { title: "Qu'est-ce que le sourcing industriel ?", text: "Identification, verification, clarification technique, comparaison de devis, coordination qualite et suivi export." },
        { title: "Pourquoi un partenaire en Chine ?", text: "Les acheteurs ont besoin de filtrage fournisseurs, controle des specifications et suivi pratique." },
        { title: "Ce que nous pouvons sourcer", text: "Machines, pieces OEM, MRO, pieces detachees, pieces agricoles, emballage, metal et fournitures usine." },
        { title: "Verification fournisseurs", text: "Controle d'identite, capacite, communication, clarte des devis et risque d'execution." },
        { title: "Controle qualite", text: "Coordination inspection, photos, rapports, emballage et suivi des problemes." },
        { title: "Support export", text: "Communication documents, expedition, emballage et consolidation." }
      ],
      processTitle: "Processus de sourcing",
      faqs: [
        { q: "Qu'est-ce que le sourcing industriel ?", a: "C'est la recherche, verification, comparaison et coordination de fournisseurs pour produits industriels." },
        { q: "Pourquoi utiliser un partenaire en Chine ?", a: "Pour reduire les risques de fournisseur, qualite, communication technique et export." },
        { q: "Pouvez-vous sourcer des pieces sur mesure ?", a: "Oui, avec plans, echantillons, photos ou specifications." }
      ]
    },
    contact: {
      metaTitle: "Contact MAVORIX INDUSTRIAL | Demande de sourcing Chine",
      metaDescription: "Contactez MAVORIX INDUSTRIAL pour sourcing industriel, OEM, MRO, verification fournisseurs, inspection qualite et export depuis la Chine.",
      badge: "Contact",
      title: "Envoyer une demande de sourcing industriel en Chine",
      description: "Partagez votre besoin, quantite, marche cible, plans, photos ou liens fournisseurs. Nous examinerons la voie de sourcing.",
      fields: ["Nom", "Societe", "Pays", "Email", "WhatsApp", "Quantite", "Marche cible"],
      requirement: "Produit ou besoin de sourcing",
      message: "Message",
      submit: "Envoyer la demande",
      whatsapp: "Contacter sur WhatsApp",
      checklistTitle: "Liste pour la demande",
      contactDirectTitle: "Contactez-nous directement",
      checklist: ["Nom du produit, photos, plans ou echantillon", "Quantite et repetition prevue", "Matiere, dimensions, standard ou application", "Pays de destination et marche cible", "Delai et besoins d'emballage"],
      faqs: [
        { q: "Quelles informations envoyer ?", a: "Produit, photos, plans, quantite, pays de destination, application et exigences qualite." },
        { q: "Puis-je vous contacter sur WhatsApp ?", a: "Oui, au +8613967842747." },
        { q: "Donnez-vous un devis instantane ?", a: "Les devis industriels demandent souvent verification fournisseur et clarification technique." }
      ]
    }
  },
  es: {} as any,
  ru: {} as any,
  ar: {} as any
};

coreCopy.es = {
  ...coreCopy.en,
  dir: "ltr",
  nav: { home: "Inicio", industrial: "Sourcing industrial", services: "Servicios", industries: "Industrias", countries: "Paises", blog: "Blog", contact: "Contacto", whatsapp: "WhatsApp" },
  footerIntro: "Su socio de sourcing industrial en China. Sourcing industrial, OEM, MRO, verificacion de proveedores, coordinacion de calidad y soporte de exportacion.",
  footerColumns: { services: "Servicios", industries: "Industrias", countries: "Paises", contact: "Contacto", whatsapp: "Consulta por WhatsApp", contactPage: "Pagina de contacto" },
  hero: {
    eyebrow: "Sourcing industrial desde China",
    h1: "Su socio de sourcing industrial en China",
    subtitle: "MAVORIX INDUSTRIAL ayuda a compradores industriales internacionales a abastecer maquinaria, productos OEM, suministros MRO, repuestos y equipos industriales desde China con verificacion de proveedores, control de calidad y soporte de exportacion.",
    primary: "Enviar consulta",
    whatsapp: "Contactar por WhatsApp",
    services: "Ver servicios",
    trust: ["Verificacion de proveedores", "Coordinacion tecnica", "Soporte de exportacion"]
  },
  home: {
    ...coreCopy.en.home,
    metaTitle: "MAVORIX INDUSTRIAL | Socio de sourcing industrial en China",
    metaDescription: "MAVORIX INDUSTRIAL ayuda a compradores industriales a abastecer maquinaria, OEM, MRO, repuestos y equipos desde China.",
    strip: ["Verificacion de proveedores", "Control de calidad", "Coordinacion OEM", "Sourcing MRO", "Soporte exportacion"],
    sourceTitle: "Que podemos abastecer",
    sourceText: "Soporte de sourcing industrial enfocado en necesidades B2B reales.",
    sourceItems: [
      { title: "Maquinaria y equipos", text: "Coordinacion de compra para equipos de produccion, maquinaria general y componentes relacionados." },
      { title: "Piezas industriales OEM", text: "Piezas personalizadas, planos, muestras, comparacion de proveedores y seguimiento de produccion." },
      { title: "Suministros MRO", text: "Articulos de mantenimiento, reparacion y operacion, consumibles, repuestos y pedidos mixtos." },
      { title: "Repuestos industriales", text: "Repuestos mecanicos, electricos, piezas de mantenimiento de fabrica y sourcing urgente." },
      { title: "Piezas para equipos agricolas", text: "Piezas para tractores, motocultores, cosechadoras, riego e implementos agricolas." },
      { title: "Embalaje y suministros de fabrica", text: "Piezas de maquinaria de embalaje, transportadores, sellado, llenado y consumibles industriales." }
    ],
    moreTitle: "Mas que encontrar proveedores",
    moreText: "Google, IA y marketplaces ayudan a encontrar nombres. La compra industrial necesita verificacion, comunicacion tecnica, comparacion, muestras, inspeccion, documentos y seguimiento.",
    servicesTitle: "Servicios principales",
    servicesText: "Servicios para reducir riesgos y mejorar la ejecucion de compras industriales desde China.",
    industriesTitle: "Industrias que apoyamos",
    industriesText: "Ayudamos a compradores a buscar, verificar y coordinar proveedores industriales en China.",
    processTitle: "Por que MAVORIX INDUSTRIAL",
    processText: "Nuestra experiencia en maquinaria industrial y exportacion ayuda a entender mejor los requisitos tecnicos.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "Son una empresa comercial o agente de sourcing?", a: "MAVORIX INDUSTRIAL es un socio de sourcing industrial en China para verificar, coordinar y dar seguimiento a proveedores." },
      { q: "Que productos pueden abastecer?", a: "Maquinaria, piezas OEM, MRO, repuestos industriales, piezas agricolas, embalaje, metal y mantenimiento de fabrica." },
      { q: "Pueden verificar proveedores chinos?", a: "Si, revisamos identidad, capacidad, comunicacion, claridad de cotizacion y riesgos." },
      { q: "Como envio una consulta?", a: "Use el formulario, email michael@mavorixindustrial.com o WhatsApp +8613967842747." }
    ]
  },
  cta: { title: "Necesita soporte de sourcing industrial desde China?", text: "Envie detalles del producto, cantidad, fotos, planos o enlaces de proveedores. Revisaremos los siguientes pasos.", button: "Enviar requisito", whatsapp: "WhatsApp" },
  industrial: {
    ...coreCopy.en.industrial,
    metaTitle: "Servicios de sourcing industrial en China | MAVORIX INDUSTRIAL",
    metaDescription: "Sourcing industrial en China para maquinaria, OEM, MRO, repuestos, verificacion de proveedores, calidad y exportacion.",
    badge: "Sourcing industrial",
    title: "Servicios de sourcing industrial en China",
    description: "Soporte estructurado para compradores internacionales de maquinaria, OEM, MRO, repuestos y equipos industriales.",
    features: [
      { title: "Que es el sourcing industrial?", text: "Busqueda, verificacion, aclaracion tecnica, comparacion de cotizaciones, coordinacion de calidad y seguimiento de exportacion." },
      { title: "Por que necesita un socio en China?", text: "Los compradores necesitan filtrar proveedores, controlar especificaciones y coordinar la ejecucion de forma practica." },
      { title: "Que podemos abastecer", text: "Maquinaria, piezas OEM, suministros MRO, repuestos, piezas agricolas, embalaje, metal y suministros de fabrica." },
      { title: "Verificacion de proveedores", text: "Revisamos identidad, senales de capacidad, calidad de comunicacion, claridad de cotizacion y riesgos de ejecucion." },
      { title: "Control de calidad", text: "Coordinamos requisitos de inspeccion, fotos, reportes, revision de embalaje y seguimiento de problemas." },
      { title: "Soporte de exportacion", text: "Apoyamos comunicacion de documentos, preparacion de envio, embalaje y planificacion de consolidacion." }
    ],
    processTitle: "Proceso de sourcing",
    faqs: [
      { q: "Que es el sourcing industrial?", a: "Es el proceso de encontrar, verificar, comparar y coordinar proveedores para maquinaria, piezas, MRO, OEM y equipos industriales." },
      { q: "Por que usar un socio de sourcing en China?", a: "Ayuda a reducir riesgos mediante verificacion de proveedores, comunicacion tecnica, comparacion de cotizaciones, control de calidad y exportacion." },
      { q: "Pueden apoyar piezas industriales personalizadas?", a: "Si. Podemos apoyar proyectos OEM y piezas a medida cuando el comprador entrega planos, muestras, fotos o especificaciones." }
    ]
  },
  contact: {
    ...coreCopy.en.contact,
    metaTitle: "Contacto MAVORIX INDUSTRIAL | Consulta de sourcing en China",
    metaDescription: "Contacte a MAVORIX INDUSTRIAL para sourcing industrial, OEM, MRO, verificacion de proveedores, inspeccion y exportacion desde China.",
    badge: "Contacto",
    title: "Enviar una consulta de sourcing industrial en China",
    description: "Comparta producto, cantidad, mercado objetivo, planos, fotos o enlaces de proveedores. Revisaremos el camino de sourcing.",
    fields: ["Nombre", "Empresa", "Pais", "Email", "WhatsApp", "Cantidad", "Mercado objetivo"],
    requirement: "Producto o requisito de sourcing",
    message: "Mensaje",
    submit: "Enviar consulta",
    whatsapp: "Contactar por WhatsApp",
    successMessage: "Gracias. Su consulta ha sido enviada. Le responderemos lo antes posible.",
    errorMessage: "Lo sentimos, no se pudo enviar la consulta. Por favor contactenos por email o WhatsApp.",
    checklistTitle: "Lista para la consulta",
    contactDirectTitle: "Contacta con nosotros directamente",
    checklist: ["Nombre del producto, fotos, planos o detalles de muestra", "Cantidad y demanda repetida esperada", "Material, tamano, norma tecnica o aplicacion", "Pais de destino y mercado objetivo", "Plazo preferido y requisitos de embalaje"],
    faqs: [
      { q: "Que informacion debo enviar?", a: "Envie producto, fotos, planos, cantidad, pais de destino, uso previsto, requisitos de calidad y enlaces de proveedores si existen." },
      { q: "Puedo contactar por WhatsApp?", a: "Si. Contactenos al +8613967842747 o use el boton de WhatsApp." },
      { q: "Ofrecen cotizaciones instantaneas?", a: "Las cotizaciones industriales suelen requerir verificacion de proveedor y aclaracion tecnica, por eso evitamos precios instantaneos poco fiables." }
    ]
  }
};

coreCopy.ru = {
  ...coreCopy.en,
  dir: "ltr",
  nav: { home: "Главная", industrial: "Промышленный сорсинг", services: "Услуги", industries: "Отрасли", countries: "Страны", blog: "Блог", contact: "Контакты", whatsapp: "WhatsApp" },
  footerIntro: "Ваш партнер по промышленному сорсингу в Китае: поставщики, OEM, MRO, контроль качества и экспортная координация.",
  footerColumns: { services: "Услуги", industries: "Отрасли", countries: "Страны", contact: "Контакты", whatsapp: "Запрос в WhatsApp", contactPage: "Страница контактов" },
  hero: {
    eyebrow: "Промышленный сорсинг из Китая",
    h1: "Ваш партнер по промышленному сорсингу в Китае",
    subtitle: "MAVORIX INDUSTRIAL помогает зарубежным промышленным покупателям закупать оборудование, OEM детали, MRO материалы, запасные части и промышленную технику из Китая с проверкой поставщиков, координацией качества и экспортной поддержкой.",
    primary: "Отправить запрос",
    whatsapp: "Связаться в WhatsApp",
    services: "Посмотреть услуги",
    trust: ["Проверка поставщиков", "Техническая координация", "Экспортная поддержка"]
  },
  home: {
    ...coreCopy.en.home,
    metaTitle: "MAVORIX INDUSTRIAL | Партнер по промышленному сорсингу в Китае",
    metaDescription: "Промышленный сорсинг из Китая: оборудование, OEM, MRO, запасные части, проверка поставщиков, качество и экспортная поддержка.",
    strip: ["Проверка поставщиков", "Контроль качества", "OEM координация", "MRO сорсинг", "Экспортная поддержка"],
    sourceTitle: "Что мы помогаем закупать",
    sourceText: "Практичная поддержка B2B закупок из Китая для промышленных товаров, без обещания закупать все подряд.",
    sourceItems: [
      { title: "Машины и оборудование", text: "Координация закупок производственного оборудования, общей техники и связанных компонентов." },
      { title: "Промышленные OEM детали", text: "Индивидуальные детали, чертежи, образцы, сравнение поставщиков и сопровождение производства." },
      { title: "MRO материалы", text: "Материалы для обслуживания, ремонта и эксплуатации, расходники, замены и смешанные заказы." },
      { title: "Промышленные запасные части", text: "Механические и электрические запчасти, детали для обслуживания завода и срочный поиск замен." },
      { title: "Детали сельхозтехники", text: "Детали тракторов, мотоблоков, уборочной техники, орошения и сельскохозяйственных агрегатов." },
      { title: "Упаковка и заводские материалы", text: "Детали упаковочных машин, конвейеры, узлы запайки, розлива и промышленные расходники." }
    ],
    moreTitle: "Больше, чем поиск поставщиков",
    moreText: "Поиск, ИИ и торговые площадки дают названия поставщиков. Промышленная закупка требует проверки, технической коммуникации, сравнения предложений, образцов, инспекции, экспортных документов и долгосрочного сопровождения.",
    servicesTitle: "Основные услуги",
    servicesText: "Услуги помогают снизить риски закупки и улучшить исполнение заказов со стороны Китая.",
    industriesTitle: "Отрасли, которые мы поддерживаем",
    industriesText: "Мы помогаем покупателям искать, проверять и координировать промышленных поставщиков в Китае.",
    processTitle: "Почему MAVORIX INDUSTRIAL",
    processText: "Опыт в промышленном оборудовании и экспортных операциях помогает нам лучше понимать технические требования закупки.",
    faqTitle: "Вопросы и ответы",
    faqs: [
      { q: "Вы торговая компания или агент по сорсингу?", a: "MAVORIX INDUSTRIAL - партнер по промышленному сорсингу в Китае для проверки, координации и сопровождения поставщиков." },
      { q: "Какие товары вы помогаете закупать?", a: "Оборудование, OEM детали, MRO материалы, промышленные запчасти, детали сельхозтехники, упаковочное оборудование, металл и заводские расходники." },
      { q: "Можете проверить китайского поставщика?", a: "Да. Мы помогаем проверить идентичность, сигналы возможностей, качество коммуникации, ясность предложения и риски исполнения." },
      { q: "Как отправить запрос?", a: "Через форму, email michael@mavorixindustrial.com или WhatsApp +8613967842747." }
    ]
  },
  cta: { title: "Нужна поддержка промышленного сорсинга из Китая?", text: "Отправьте детали продукта, количество, фотографии, чертежи или ссылки на поставщиков. Мы оценим путь закупки и следующие шаги.", button: "Отправить требование", whatsapp: "WhatsApp" },
  industrial: {
    ...coreCopy.en.industrial,
    metaTitle: "Услуги промышленного сорсинга в Китае | MAVORIX INDUSTRIAL",
    metaDescription: "Сорсинг оборудования, OEM, MRO, запасных частей, проверка поставщиков, качество и экспортная координация из Китая.",
    badge: "Промышленный сорсинг",
    title: "Услуги промышленного сорсинга в Китае",
    description: "Структурированная поддержка зарубежных покупателей оборудования, OEM изделий, MRO материалов, запасных частей и промышленной техники.",
    features: [
      { title: "Что такое промышленный сорсинг?", text: "Поиск поставщиков, проверка, техническое уточнение, сравнение предложений, координация качества и экспортное сопровождение." },
      { title: "Почему нужен партнер в Китае?", text: "Покупателям нужны фильтрация поставщиков, контроль спецификаций и практическая координация исполнения." },
      { title: "Что мы можем закупать", text: "Оборудование, OEM детали, MRO материалы, запасные части, сельхоздетали, упаковка, металл и заводские материалы." },
      { title: "Проверка поставщиков", text: "Проверяем идентичность, признаки производственных возможностей, коммуникацию, ясность предложений и риски исполнения." },
      { title: "Контроль качества", text: "Координируем требования инспекции, фотоотчеты, проверку упаковки и работу с замечаниями перед отгрузкой." },
      { title: "Экспортная поддержка", text: "Поддерживаем коммуникацию по документам, подготовке отгрузки, упаковке и консолидации." }
    ],
    processTitle: "Процесс сорсинга",
    faqs: [
      { q: "Что такое промышленный сорсинг?", a: "Это поиск, проверка, сравнение и координация поставщиков для оборудования, деталей, MRO, OEM и промышленной техники." },
      { q: "Зачем нужен партнер по сорсингу в Китае?", a: "Он помогает снизить риски благодаря проверке поставщиков, технической коммуникации, сравнению предложений, контролю качества и экспортной координации." },
      { q: "Можете поддержать индивидуальные детали?", a: "Да, если покупатель предоставляет чертежи, образцы, фотографии, спецификации или информацию о применении." }
    ]
  },
  contact: {
    ...coreCopy.en.contact,
    metaTitle: "Контакты MAVORIX INDUSTRIAL | Запрос на сорсинг в Китае",
    metaDescription: "Свяжитесь с MAVORIX INDUSTRIAL по промышленному сорсингу, OEM, MRO, проверке поставщиков, инспекции качества и экспорту из Китая.",
    badge: "Контакты",
    title: "Отправьте запрос на промышленный сорсинг в Китае",
    description: "Укажите продукт, количество, целевой рынок, чертежи, фотографии или ссылки на поставщиков. Мы оценим путь закупки.",
    fields: ["Имя", "Компания", "Страна", "Email", "WhatsApp", "Количество", "Целевой рынок"],
    requirement: "Продукт или требование к сорсингу",
    message: "Сообщение",
    submit: "Отправить запрос",
    whatsapp: "Связаться в WhatsApp",
    checklistTitle: "Что указать в запросе",
    checklist: ["Название продукта, фотографии, чертежи или данные образца", "Количество и ожидаемый повторный спрос", "Материал, размер, стандарт или применение", "Страна назначения и целевой рынок", "Желаемый срок поставки и требования к упаковке"],
    faqs: [
      { q: "Какие данные отправить?", a: "Название товара, фото, чертежи, количество, страну назначения, применение, требования к качеству и ссылки на поставщиков, если есть." },
      { q: "Можно связаться через WhatsApp?", a: "Да. Напишите на +8613967842747 или используйте кнопку WhatsApp." },
      { q: "Вы даете мгновенные цены?", a: "Промышленные предложения обычно требуют проверки поставщика и технического уточнения, поэтому мы избегаем ненадежных мгновенных цен." }
    ]
  }
};

coreCopy.ar = {
  ...coreCopy.en,
  dir: "rtl",
  nav: { home: "الرئيسية", industrial: "التوريد الصناعي", services: "الخدمات", industries: "القطاعات", countries: "الدول", blog: "المدونة", contact: "اتصل بنا", whatsapp: "واتساب" },
  footerIntro: "شريكك في التوريد الصناعي من الصين: موردون، OEM، MRO، تنسيق الجودة، ودعم التصدير.",
  footerColumns: { services: "الخدمات", industries: "القطاعات", countries: "الدول", contact: "اتصل بنا", whatsapp: "استفسار واتساب", contactPage: "صفحة الاتصال" },
  hero: {
    eyebrow: "توريد صناعي من الصين",
    h1: "شريكك في التوريد الصناعي من الصين",
    subtitle: "تساعد MAVORIX INDUSTRIAL المشترين الصناعيين خارج الصين في توريد المعدات وقطع OEM ومستلزمات MRO وقطع الغيار من الصين مع التحقق من الموردين وتنسيق الجودة ودعم التصدير.",
    primary: "إرسال استفسار",
    whatsapp: "تواصل عبر واتساب",
    services: "استكشف الخدمات",
    trust: ["التحقق من الموردين", "تنسيق فني", "دعم التصدير"]
  },
  home: {
    ...coreCopy.en.home,
    metaTitle: "MAVORIX INDUSTRIAL | شريك التوريد الصناعي من الصين",
    metaDescription: "دعم التوريد الصناعي من الصين للمعدات وقطع OEM ومستلزمات MRO وقطع الغيار مع التحقق من الموردين والجودة والتصدير.",
    strip: ["التحقق من الموردين", "فحص الجودة", "تنسيق OEM", "توريد MRO", "دعم التصدير"],
    sourceTitle: "ما الذي نساعد في توريده",
    sourceText: "دعم توريد صناعي موجه لاحتياجات B2B العملية من الصين، بدون الادعاء بتوريد كل شيء.",
    sourceItems: [
      { title: "الآلات والمعدات", text: "تنسيق شراء معدات الإنتاج والآلات العامة والمكونات المرتبطة بها." },
      { title: "قطع صناعية OEM", text: "قطع مخصصة ورسومات وعينات ومقارنة موردين ومتابعة الإنتاج." },
      { title: "مستلزمات MRO", text: "مواد الصيانة والإصلاح والتشغيل والمستهلكات وقطع الاستبدال والطلبات المختلطة." },
      { title: "قطع غيار صناعية", text: "قطع ميكانيكية وكهربائية وقطع صيانة للمصانع وتوريد عاجل للبدائل." },
      { title: "قطع معدات زراعية", text: "قطع جرارات ومعدات حرث وحصاد وري ومستلزمات زراعية." },
      { title: "التعبئة ومستلزمات المصانع", text: "قطع آلات التعبئة والسيور وأجزاء الختم والتعبئة والمستهلكات الصناعية." }
    ],
    moreTitle: "أكثر من مجرد العثور على موردين",
    moreText: "محركات البحث والذكاء الاصطناعي والمنصات تعطي أسماء الموردين. أما الشراء الصناعي فيحتاج إلى تحقق وتواصل فني ومقارنة عروض وعينات وفحص ومستندات تصدير ومتابعة طويلة الأجل.",
    servicesTitle: "الخدمات الرئيسية",
    servicesText: "خدمات تقلل مخاطر الشراء وتساعد على تنفيذ التوريد من الصين بشكل منظم.",
    industriesTitle: "القطاعات التي ندعمها",
    industriesText: "نساعد المشترين على البحث والتحقق والتنسيق مع الموردين الصناعيين في الصين.",
    processTitle: "لماذا MAVORIX INDUSTRIAL",
    processText: "خبرتنا في المعدات الصناعية وعمليات التصدير تساعدنا على فهم المتطلبات الفنية بشكل أفضل.",
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { q: "هل أنتم شركة تجارية أم شريك توريد؟", a: "MAVORIX INDUSTRIAL شريك توريد صناعي في الصين يساعد في التحقق والتنسيق والمتابعة مع الموردين." },
      { q: "ما المنتجات التي يمكنكم المساعدة في توريدها؟", a: "المعدات، قطع OEM، مستلزمات MRO، قطع الغيار، قطع المعدات الزراعية، آلات التعبئة، المعادن ومستلزمات المصانع." },
      { q: "هل يمكنكم التحقق من الموردين الصينيين؟", a: "نعم، نساعد في مراجعة هوية المورد وقدرته وجودة التواصل ووضوح العرض ومخاطر التنفيذ." },
      { q: "كيف أرسل استفسارا؟", a: "عبر النموذج أو البريد michael@mavorixindustrial.com أو واتساب +8613967842747." }
    ]
  },
  cta: { title: "هل تحتاج إلى دعم توريد صناعي من الصين؟", text: "أرسل تفاصيل المنتج والكمية والصور والرسومات أو روابط الموردين. سنراجع مسار التوريد والخطوات التالية.", button: "أرسل متطلباتك", whatsapp: "واتساب" },
  industrial: {
    ...coreCopy.en.industrial,
    metaTitle: "خدمات التوريد الصناعي من الصين | MAVORIX INDUSTRIAL",
    metaDescription: "توريد صناعي من الصين للمعدات وOEM وMRO وقطع الغيار مع التحقق من الموردين والجودة ودعم التصدير.",
    badge: "التوريد الصناعي",
    title: "خدمات التوريد الصناعي من الصين",
    description: "دعم منظم للمشترين الدوليين في شراء المعدات وقطع OEM ومستلزمات MRO وقطع الغيار الصناعية من الصين.",
    features: [
      { title: "ما هو التوريد الصناعي؟", text: "البحث عن الموردين والتحقق منهم وتوضيح المتطلبات الفنية ومقارنة العروض وتنسيق الجودة ومتابعة التصدير." },
      { title: "لماذا تحتاج إلى شريك في الصين؟", text: "المشتري يحتاج إلى فرز الموردين وضبط المواصفات وتنسيق التنفيذ بشكل عملي." },
      { title: "ما الذي يمكننا توريده", text: "معدات، قطع OEM، مستلزمات MRO، قطع غيار، قطع زراعية، تعبئة، معادن ومستلزمات مصانع." },
      { title: "التحقق من الموردين", text: "نراجع هوية المورد وإشارات القدرة وجودة التواصل ووضوح العرض ومخاطر التنفيذ." },
      { title: "تنسيق الجودة", text: "ننسق متطلبات الفحص والصور والتقارير ومراجعة التغليف ومتابعة الملاحظات قبل الشحن." },
      { title: "دعم التصدير", text: "ندعم التواصل حول المستندات وتجهيز الشحنة والتغليف وخطط التجميع." }
    ],
    processTitle: "عملية التوريد",
    faqs: [
      { q: "ما هو التوريد الصناعي؟", a: "هو عملية البحث والتحقق والمقارنة والتنسيق مع الموردين للمعدات والقطع وMRO وOEM والمنتجات الصناعية." },
      { q: "لماذا أستخدم شريك توريد في الصين؟", a: "يساعد على تقليل المخاطر من خلال التحقق من الموردين والتواصل الفني ومقارنة العروض وفحص الجودة وتنسيق التصدير." },
      { q: "هل تدعمون القطع الصناعية المخصصة؟", a: "نعم، عندما يقدم المشتري رسومات أو عينات أو صورا أو مواصفات أو معلومات عن الاستخدام." }
    ]
  },
  contact: {
    ...coreCopy.en.contact,
    metaTitle: "اتصل ب MAVORIX INDUSTRIAL | استفسار توريد من الصين",
    metaDescription: "تواصل مع MAVORIX INDUSTRIAL للتوريد الصناعي وOEM وMRO والتحقق من الموردين وفحص الجودة ودعم التصدير من الصين.",
    badge: "اتصل بنا",
    title: "أرسل استفسار التوريد الصناعي من الصين",
    description: "شارك متطلبات المنتج والكمية والسوق المستهدف والرسومات والصور أو روابط الموردين. سنراجع مسار التوريد.",
    fields: ["الاسم", "الشركة", "الدولة", "البريد الإلكتروني", "واتساب", "الكمية", "السوق المستهدف"],
    requirement: "المنتج أو متطلبات التوريد",
    message: "الرسالة",
    submit: "إرسال الاستفسار",
    whatsapp: "تواصل عبر واتساب",
    checklistTitle: "قائمة معلومات الاستفسار",
    checklist: ["اسم المنتج والصور والرسومات أو تفاصيل العينة", "الكمية والطلب المتكرر المتوقع", "المادة والحجم والمعيار الفني أو الاستخدام", "بلد الوجهة والسوق المستهدف", "وقت التسليم المطلوب واحتياجات التغليف"],
    faqs: [
      { q: "ما المعلومات التي يجب إرسالها؟", a: "اسم المنتج والصور والرسومات والكمية وبلد الوجهة والاستخدام ومتطلبات الجودة وروابط الموردين إن وجدت." },
      { q: "هل يمكنني التواصل عبر واتساب؟", a: "نعم. تواصل معنا على +8613967842747 أو استخدم زر واتساب." },
      { q: "هل تقدمون أسعارا فورية؟", a: "العروض الصناعية تحتاج غالبا إلى تحقق من المورد وتوضيح فني، لذلك نتجنب الأسعار الفورية غير الموثوقة." }
    ]
  }
};

export function t(locale: string) {
  return coreCopy[(locale as Locale) in coreCopy ? (locale as Locale) : "en"];
}
