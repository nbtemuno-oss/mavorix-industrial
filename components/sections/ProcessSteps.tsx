import { sourcingProcess } from "@/data/services";

const localizedSteps: Record<string, { title: string; text: string }[]> = {
  en: [
    { title: "Requirement Review", text: "We review product details, drawings, photos, target quantity, market requirements, and sourcing risks before searching suppliers." },
    { title: "Supplier Search and Screening", text: "We identify potential suppliers and compare their product focus, communication quality, production capability, and export experience." },
    { title: "Quotation and Technical Comparison", text: "We compare quotations, specifications, materials, lead time, MOQ, packaging, and payment terms to avoid hidden risks." },
    { title: "Sample or Trial Order Coordination", text: "We help coordinate samples, small trial orders, technical feedback, and improvement points before larger orders." },
    { title: "Quality Check", text: "We support quality inspection coordination, photo/video checks, packaging review, and pre-shipment communication." },
    { title: "Export and Shipping Support", text: "We follow export documentation, supplier-side shipment preparation, consolidation needs, and logistics communication." },
    { title: "Long-Term Supply Chain Follow-up", text: "We help buyers build repeatable sourcing channels, supplier records, reorder plans, and long-term procurement support." }
  ],
  fr: [
    { title: "Analyse du besoin", text: "Nous examinons details produit, plans, photos, quantite cible, exigences du marche et risques avant de chercher des fournisseurs." },
    { title: "Recherche et filtrage fournisseurs", text: "Nous identifions les fournisseurs potentiels et comparons leur specialisation, communication, capacite et experience export." },
    { title: "Comparaison technique et devis", text: "Nous comparons prix, specifications, matieres, delais, MOQ, emballage et conditions de paiement pour eviter les risques caches." },
    { title: "Echantillon ou commande test", text: "Nous coordonnons echantillons, petites commandes test, retours techniques et points d'amelioration avant les volumes plus importants." },
    { title: "Controle qualite", text: "Nous aidons a coordonner inspection, photos, videos, verification emballage et communication avant expedition." },
    { title: "Support export et expedition", text: "Nous suivons documents export, preparation fournisseur, consolidation et communication logistique." },
    { title: "Suivi long terme", text: "Nous aidons a construire des canaux repetables, dossiers fournisseurs, plans de reapprovisionnement et support durable." }
  ],
  es: [
    { title: "Revision del requisito", text: "Revisamos detalles del producto, planos, fotos, cantidad, requisitos del mercado y riesgos antes de buscar proveedores." },
    { title: "Busqueda y seleccion", text: "Identificamos proveedores potenciales y comparamos enfoque de producto, comunicacion, capacidad y experiencia exportadora." },
    { title: "Comparacion tecnica y cotizaciones", text: "Comparamos cotizaciones, especificaciones, materiales, plazos, MOQ, embalaje y condiciones de pago para evitar riesgos ocultos." },
    { title: "Muestra o pedido piloto", text: "Coordinamos muestras, pedidos pequenos, comentarios tecnicos y mejoras antes de pedidos mayores." },
    { title: "Control de calidad", text: "Apoyamos inspecciones, fotos, videos, revision de embalaje y comunicacion previa al embarque." },
    { title: "Exportacion y envio", text: "Seguimos documentos de exportacion, preparacion del proveedor, consolidacion y comunicacion logistica." },
    { title: "Seguimiento a largo plazo", text: "Ayudamos a crear canales repetibles, registros de proveedores, planes de recompra y soporte continuo." }
  ],
  ru: [
    { title: "Анализ требований", text: "Мы изучаем описание продукта, чертежи, фото, количество, требования рынка и риски до поиска поставщиков." },
    { title: "Поиск и отбор поставщиков", text: "Мы находим потенциальных поставщиков и сравниваем специализацию, качество коммуникации, возможности и экспортный опыт." },
    { title: "Сравнение цен и спецификаций", text: "Мы сравниваем предложения, материалы, сроки, MOQ, упаковку и условия оплаты, чтобы избежать скрытых рисков." },
    { title: "Образец или пробный заказ", text: "Мы координируем образцы, небольшие пробные заказы, технические замечания и улучшения перед крупной закупкой." },
    { title: "Проверка качества", text: "Мы поддерживаем инспекцию, фото и видео проверки, контроль упаковки и коммуникацию перед отгрузкой." },
    { title: "Экспорт и доставка", text: "Мы отслеживаем экспортные документы, подготовку поставщика, консолидацию и логистическую коммуникацию." },
    { title: "Долгосрочное сопровождение", text: "Мы помогаем формировать повторяемые каналы закупки, базу поставщиков, планы повторных заказов и поддержку." }
  ],
  ar: [
    { title: "مراجعة المتطلبات", text: "نراجع تفاصيل المنتج والرسومات والصور والكمية ومتطلبات السوق ومخاطر التوريد قبل البحث عن الموردين." },
    { title: "البحث عن الموردين وفرزهم", text: "نحدد الموردين المحتملين ونقارن تخصصهم وجودة التواصل والقدرة الإنتاجية وخبرة التصدير." },
    { title: "مقارنة العروض الفنية", text: "نقارن الأسعار والمواصفات والمواد والمدة والحد الأدنى والعبوة وشروط الدفع لتقليل المخاطر." },
    { title: "العينات أو الطلب التجريبي", text: "نساعد في تنسيق العينات والطلبات الصغيرة والملاحظات الفنية ونقاط التحسين قبل الطلبات الكبيرة." },
    { title: "فحص الجودة", text: "ندعم تنسيق الفحص والصور والفيديو ومراجعة التغليف والتواصل قبل الشحن." },
    { title: "دعم التصدير والشحن", text: "نتابع مستندات التصدير وتجهيز المورد واحتياجات التجميع والتواصل اللوجستي." },
    { title: "متابعة سلسلة التوريد", text: "نساعد المشترين على بناء قنوات توريد قابلة للتكرار وسجلات موردين وخطط إعادة طلب ودعم طويل الأجل." }
  ]
};

export function ProcessSteps({ steps = sourcingProcess, locale = "en" }: { steps?: string[]; locale?: string }) {
  const localized = localizedSteps[locale] || localizedSteps.en;
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step} className="rounded-lg border border-slate-200 bg-white p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-sm font-black text-white">{index + 1}</div>
          <h3 className="mt-4 font-black text-slate-900">{localized[index]?.title || step}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{localized[index]?.text || localizedSteps.en[index]?.text || "We keep each sourcing step documented, practical, and aligned with buyer requirements."}</p>
        </div>
      ))}
    </div>
  );
}
