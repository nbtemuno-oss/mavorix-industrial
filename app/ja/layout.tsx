import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { japaneseCustomParts } from "@/data/japanese-custom-parts";
import { JsonLd, organizationSchema } from "@/lib/schema";

// Explicit Japanese routes keep unreviewed /ja/* pages from using English fallback copy.
export default function JapaneseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ja" dir="ltr" className="[font-family:'Hiragino_Kaku_Gothic_ProN','Yu_Gothic',Meiryo,sans-serif]">
      <Header locale="ja" landing={japaneseCustomParts.header} />
      <main>{children}</main>
      <Footer locale="ja" landing={japaneseCustomParts.footer} />
      <JsonLd data={organizationSchema()} />
    </div>
  );
}
