const path = "/ja/custom-parts/";

// A partial locale: publish reviewed pages individually before advertising them.
// Keep this separate from site.locales, which generates the translated core site.
export const japaneseCustomParts = {
  path,
  published: true,
  title: "図面製作の特注金属部品・特殊ねじ・プレス部品 | MAVORIX",
  description: "図面に基づく特殊ねじ・特注締結部品、CNC切削加工部品、金属プレス部品の中国調達を支援。協力工場の選定、仕様確認、試作・検査・出荷調整まで、案件ごとの条件を整理します。",
  header: {
    homeHref: path,
    nav: [
      { label: "対応部品", href: `${path}#parts` },
      { label: "品質・仕様確認", href: `${path}#quality` },
      { label: "ご相談の流れ", href: `${path}#process` },
      { label: "お問い合わせ", href: `${path}#rfq` },
      { label: "English", href: "/en/" }
    ],
    contactHref: `${path}#rfq`,
    contactLabel: "図面・仕様を相談",
    mobileContactLabel: "図面相談",
    menuLabel: "メニューを開く",
    whatsappLabel: "WhatsAppで相談",
    languageLabel: "表示言語を選択",
    languages: [{ label: "日本語", href: path }, { label: "English", href: "/en/" }]
  },
  footer: {
    homeHref: path,
    intro: "図面に基づく金属部品の中国調達パートナー。工場選定、技術条件の確認、品質・出荷の調整を支援します。",
    columns: [
      { title: "対応部品", items: [
        { label: "特殊ねじ・特注締結部品", href: `${path}#custom-fasteners` },
        { label: "CNC切削加工部品", href: `${path}#machined-parts` },
        { label: "金属プレス・小型組立品", href: `${path}#stamped-parts` }
      ] },
      { title: "調達サポート", items: [
        { label: "図面・仕様の確認", href: `${path}#quality` },
        { label: "試作と検査の調整", href: `${path}#process` }
      ] },
      { title: "ご相談", items: [
        { label: "見積りに必要な情報", href: `${path}#rfq` },
        { label: "よくあるご質問", href: `${path}#faq` }
      ] }
    ],
    contactTitle: "お問い合わせ",
    contactHref: `${path}#rfq`,
    contactLabel: "図面・仕様のご相談",
    whatsappLabel: "WhatsApp"
  },
  parts: [
    {
      id: "custom-fasteners",
      number: "01",
      title: "特殊ねじ・特注締結部品",
      text: "頭部形状、首下長さ、ねじ部、材質などを図面で指定する部品。特殊ねじ、段付きボルト、ピン、リベットなどの対応可否を確認します。",
      points: ["冷間圧造・転造・切削の工法検討", "ねじ規格・公差・強度・表面処理の確認", "ステンレス鋼・炭素鋼・合金鋼などの指定材"],
      image: "/images/products/general-products/custom-cold-headed-screws-and-fasteners/custom-cold-headed-screws-and-fasteners-finished-batch-main.webp",
      alt: "ねじ加工後の冷間圧造ねじのロット例",
      detailHref: "/en/products/industrial-fasteners/custom-cold-headed-screws-and-fasteners/"
    },
    {
      id: "machined-parts",
      number: "02",
      title: "CNC切削加工部品",
      text: "組付けや機能に合わせた旋削・フライス加工部品。シャフト、ピン、ブッシュ、スペーサー、ハウジング、ねじ付き継手などを検討します。",
      points: ["2D図面と3Dモデルの仕様照合", "基準面・幾何公差・面粗さの確認", "試作から継続ロットまで数量別に検討"],
      image: "/images/products/precision-machining/custom-cnc-machined-parts/cnc-turned-threaded-parts-batch.webp",
      alt: "仕切りトレーに並べたねじ付き旋削部品のロット例",
      detailHref: "/en/products/precision-machining/custom-cnc-machined-parts/"
    },
    {
      id: "stamped-parts",
      number: "03",
      title: "金属プレス・小型組立品",
      text: "抜き、穴あけ、曲げ、成形を組み合わせるブラケット、取付板、カバー、レバーなど。溶接や組立を含む場合は、完成品の条件まで整理します。",
      points: ["板厚・曲げ角度・穴位置・バリの確認", "金型費・試作費・部品単価の範囲を整理", "溶接・熱処理・表面処理の二次工程も検討"],
      image: "/images/products/metal-stamping/custom-stamped-metal-parts/custom-stamped-metal-part-main.webp",
      alt: "取付穴と長穴を備えた曲げ成形金属部品の例",
      detailHref: "/en/products/metal-stamping/custom-stamped-metal-parts/"
    }
  ],
  checks: [
    { title: "図面と改訂番号", text: "最新版の図面、単位、重要寸法、組付け条件を確認し、不明点は加工前に整理します。" },
    { title: "材質と処理条件", text: "材質記号、適用規格、熱処理、表面処理を確認。代替材や工程変更は購入者の承認条件を明確にします。" },
    { title: "試作と検査項目", text: "測定箇所、測定方法、合否基準、必要な成績書や材料証明書の範囲を、見積り段階から確認します。" },
    { title: "ロットと出荷条件", text: "承認サンプル、改訂履歴、ロット識別、包装・防錆、納入先を整理し、継続発注につなげます。" }
  ],
  process: [
    { title: "図面・仕様を共有", text: "部品図、材質、数量、希望納期、納入先をお知らせください。図面は共有リンクまたはメール添付で受け付けます。" },
    { title: "工法・工場・見積りを確認", text: "対応できる中国の製造パートナーを検討。図面の質問、金型・治具費、検査範囲、納期条件を整理します。" },
    { title: "試作・サンプルを確認", text: "必要に応じて試作や初回品を手配。合意した検査結果とサンプルを確認し、量産条件を承認します。" },
    { title: "生産・検査・出荷を調整", text: "承認条件に沿って生産状況と検査をフォロー。梱包・輸出準備、複数部品の出荷調整を支援します。" }
  ],
  rfqChecklist: [
    "2D図面（PDF等）・改訂番号。3Dモデルがあれば併せて共有",
    "材質・適用規格、重要公差、ねじ・面粗さの指定",
    "熱処理・表面処理・溶接・組立などの追加工程",
    "試作数量、ロット数量、想定する継続需要",
    "検査項目・必要書類、希望納期、日本国内の納入先"
  ],
  form: {
    fields: ["お名前（必須）", "会社名", "国・地域", "メールアドレス（必須）", "電話番号／WhatsApp（任意）", "試作・ロット数量", "納入先の国・地域"],
    requirement: "部品名・ご希望の加工（必須）",
    message: "図面の共有リンク・仕様・ご相談内容",
    submit: "この内容で相談する",
    whatsapp: "WhatsAppで相談",
    successMessage: "お問い合わせを受け付けました。内容を確認し、ご連絡します。追加の図面はメールでお送りいただけます。",
    errorMessage: "送信できませんでした。お手数ですが、メールまたはWhatsAppからお問い合わせください。"
  },
  faqs: [
    { q: "どのような案件を相談できますか？", a: "形状、寸法、材質、公差、処理条件を指定する法人向けの部品調達が対象です。特殊ねじ・特注締結部品、切削加工部品、プレス部品、小型組立品などを、図面や仕様に基づいて検討します。" },
    { q: "MAVORIXは製造工場ですか？", a: "MAVORIXは中国側の調達・製造パートナー調整を担当します。図面と数量に合う工場を検討し、見積りの比較、仕様の確認、サンプル、合意した検査、出荷準備を支援します。" },
    { q: "ステンレス製の特殊ねじも相談できますか？", a: "ご相談いただけます。図面に材質記号と適用規格、必要な機械的性質、耐食性、処理条件をご記載ください。対応材質と加工方法は製造パートナーに確認し、仕様を合意してから進めます。" },
    { q: "最小ロットや対応公差は決まっていますか？", a: "部品形状、材質、工法、金型・治具、検査内容により異なります。試作数量と継続時のロット数量をお知らせください。図面を確認して、実際の対応範囲と費用条件を整理します。" },
    { q: "図面はどのように送れますか？", a: "フォームに閲覧可能な図面の共有リンクを記載するか、メールに図面を添付してください。2D図面を基本に、3Dモデル、改訂番号、材質、数量もあると確認が進めやすくなります。機密図面は、共有範囲や取扱条件を事前にご相談ください。" },
    { q: "プレス部品の溶接や表面処理も相談できますか？", a: "図面の要求に応じて検討します。溶接方法、組立寸法、外観、強度、熱処理、表面処理の条件を明示してください。各工程の担当と検査・合否基準を確認し、完成品としての見積り範囲を整理します。" }
  ]
};
