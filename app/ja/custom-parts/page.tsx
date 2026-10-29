import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, FileText, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { japaneseCustomParts as copy } from "@/data/japanese-custom-parts";
import { site } from "@/data/site";
import { faqSchema, JsonLd, serviceSchema } from "@/lib/schema";

const canonical = `${site.url}${copy.path}`;
const heroImage = "/images/products/precision-machining/custom-cnc-machined-parts/custom-cnc-machined-complex-parts-main.webp";
const mailHref = `mailto:${site.email}?subject=${encodeURIComponent("図面製作・特注金属部品のご相談")}`;

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  alternates: { canonical },
  robots: { index: copy.published, follow: true, googleBot: { index: copy.published, follow: true } },
  openGraph: {
    title: copy.title,
    description: copy.description,
    url: canonical,
    siteName: site.name,
    locale: "ja_JP",
    type: "website",
    images: [{ url: heroImage, alt: "図面に基づいて加工した金属部品の例" }]
  },
  twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: [heroImage] }
};

export default function JapaneseCustomPartsPage() {
  return (
    <>
      <section className="overflow-hidden bg-navy py-14 text-white sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-widest text-orange-300">図面指定の法人向け部品調達</p>
            <h1 className="mt-5 text-[2rem] font-black leading-[1.4] tracking-tight sm:text-5xl xl:text-6xl">図面からつくる、<br />特注金属部品。</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">特殊ねじ・特注締結部品、CNC切削加工部品、金属プレス部品。材質・公差・数量・検査条件に合わせて、中国の製造パートナー選定と調達を支援します。</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#rfq" native className="gap-2"><FileText size={18} aria-hidden="true" /> 図面・仕様を相談する</Button>
              <Button href={mailHref} variant="secondary" className="gap-2"><Mail size={18} aria-hidden="true" /> 図面をメールで送る</Button>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">工場選定・仕様確認・試作・検査・出荷調整</p>
          </div>
          <figure className="min-w-0 overflow-hidden rounded-xl border border-white/15 bg-white shadow-industrial">
            <div className="relative aspect-[4/3]">
              <Image src={heroImage} alt="複雑な穴や外形を備えたCNC加工金属部品のロット例" fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-contain p-3" />
            </div>
            <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-600">取扱部品の加工例。仕様と供給範囲は、図面ごとに確認します。</figcaption>
          </figure>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white py-6">
        <Container className="grid gap-3 sm:grid-cols-3">
          {["形状・材質・公差を図面で指定", "試作と継続ロットを分けて検討", "完成品の検査条件まで確認"].map((item) => (
            <p key={item} className="flex items-start gap-3 py-2 text-sm font-bold leading-6 text-navy"><Check size={19} className="mt-0.5 shrink-0 text-signal" aria-hidden="true" />{item}</p>
          ))}
        </Container>
      </section>

      <section id="parts" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="対応部品" title="図面の要求から、加工と調達を考える。" text="部品の形状、機能、材質、数量を確認し、必要な工程と適した供給先を検討します。" />
          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {copy.parts.map((part) => (
              <article id={part.id} key={part.id} className="flex min-w-0 scroll-mt-24 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="relative aspect-[4/3] border-b border-slate-100"><Image src={part.image} alt={part.alt} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 600px, 100vw" className="object-contain p-4" /></div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-sm font-black text-signal">{part.number}</p>
                  <h3 className="mt-2 text-xl font-black leading-8 text-navy">{part.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{part.text}</p>
                  <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-sm leading-7 text-slate-700">{part.points.map((point) => <li key={point} className="flex gap-2"><Check size={16} className="mt-1.5 shrink-0 text-signal" aria-hidden="true" /><span>{point}</span></li>)}</ul>
                  <Link href={part.detailHref} hrefLang="en" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-navy hover:text-signal">加工例を詳しく見る（英語）<ArrowRight size={16} aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="quality" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <ClipboardCheck size={32} className="text-signal" aria-hidden="true" />
            <h2 className="mt-5 text-3xl font-black leading-normal text-navy">見積りの前に、<br />完成品の条件をそろえる。</h2>
            <p className="mt-5 leading-8 text-slate-600">MAVORIXは中国側の調達・製造パートナー調整を担当します。図面の質問、工場ごとの見積り範囲、検査項目を整理し、購入者と製造側の認識を合わせます。</p>
            <Link href="/en/blog/precision-stamped-parts-factory-inspection-china/" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-signal">工場での確認・測定の記録（英語）<ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">{copy.checks.map((check) => <div key={check.title} className="border-t-2 border-slate-200 pt-5"><h3 className="text-lg font-black text-navy">{check.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{check.text}</p></div>)}</div>
        </Container>
      </section>

      <section id="process" className="scroll-mt-24 bg-navy py-16 text-white sm:py-20">
        <Container>
          <h2 className="text-3xl font-black leading-normal">図面のご相談から、継続調達まで。</h2>
          <div className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{copy.process.map((step, index) => <div key={step.title} className="border-t border-white/20 pt-5"><span className="text-sm font-black text-orange-300">0{index + 1}</span><h3 className="mt-4 text-lg font-bold leading-8">{step.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p></div>)}</div>
        </Container>
      </section>

      <section id="rfq" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow="図面・仕様のご相談" title="この部品をつくれるか、まずはご相談ください。" text="日本語の図面・仕様書でご相談いただけます。加工の対応可否、数量に合う工法、確認が必要な仕様を整理します。" />
          </div>
          <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <ContactForm copy={copy.form} locale="ja" whatsappUrl={site.whatsappUrl} initialValues={{ country: "日本", targetMarket: "日本" }} requiredFields={["name", "email"]} requirementRequired messagePlaceholder={"図面共有リンク：\n材質・適用規格：\n重要寸法・公差：\n表面処理・熱処理：\n試作／ロット数量：\n希望納期・納入先："} />
          </div>
          <div className="lg:col-start-1 lg:row-start-2">
            <h3 className="font-black text-navy">お知らせいただきたい情報</h3>
            <ul className="mt-4 space-y-4">{copy.rfqChecklist.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600"><Check size={17} className="mt-1.5 shrink-0 text-signal" aria-hidden="true" /><span>{item}</span></li>)}</ul>
            <div className="mt-7 rounded-lg border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
              <p>図面はフォームに共有リンクをご記載いただくか、メールに添付してお送りください。</p>
              <a href={mailHref} className="mt-3 block break-all font-bold text-signal hover:underline">{site.email}</a>
              <p className="mt-3">機密図面は、共有範囲や取扱条件を事前にご相談ください。</p>
            </div>
          </div>
        </Container>
      </section>

      <div id="faq" className="scroll-mt-24"><FAQSection faqs={copy.faqs} title="よくあるご質問" /></div>
      <JsonLd data={[
        { ...serviceSchema("図面製作の特注金属部品調達", copy.description, canonical), inLanguage: "ja", serviceType: "図面に基づく金属部品の調達・製造パートナー調整" },
        faqSchema(copy.faqs)
      ]} />
    </>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-3xl"><p className="text-sm font-bold text-signal">{eyebrow}</p><h2 className="mt-3 text-3xl font-black leading-normal text-navy sm:text-4xl sm:leading-normal">{title}</h2><p className="mt-4 leading-8 text-slate-600">{text}</p></div>;
}
