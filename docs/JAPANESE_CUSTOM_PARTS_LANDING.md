# Japanese drawing-based custom parts landing page

Status: publication approved on 2026-10-29. Indexing enabled; deployment uses the existing GitHub–Vercel workflow. No Google Ads changes.

Public URL: `https://www.mavorixindustrial.com/ja/custom-parts/`. `/ja/` redirects to this page.

## Scope and expansion

Use the existing Next.js App Router, shared header/footer, UI components, approved product images and contact endpoint. The Japanese subtree contains explicitly authored pages, separate from `site.locales`, which drives the five existing core-language sites. This avoids generating untranslated Japanese home, service, country or blog routes and inaccurate hreflang references. Future Japanese pages can be added under `app/ja/` after individual review. Additional language landing pages can use the same optional header/footer presentation settings.

The page targets drawing-based B2B special screws and fasteners, machined parts, stamped parts and small assemblies. It does not promise universal manufacturing capabilities, fixed tolerances, minimum quantities, prices, delivery dates or Japanese customer references. MAVORIX's role is China-side sourcing and supplier coordination.

## Inquiry flow

The primary CTA scrolls to a Japanese inquiry form using the existing `/api/contact/` endpoint. Stable field keys and `locale: ja` are preserved in the notification. Drawings are shared through a link in the message or attached to email; the page does not imply an attachment upload service. Contact information is read from `data/site.ts`.

Local UI and endpoint validation can be checked without sending a message. Production mail delivery and advertising conversion measurement require separate verification before launching ads; this change does not install a Google tag or create an Ads conversion action.

## Review and future launch

The approved page has `japaneseCustomParts.published` enabled and is included in the sitemap and language navigation. Only explicitly reviewed Japanese routes are exposed. Production mail delivery and conversion measurement remain separate pre-advertising checks. No English page is declared as its hreflang equivalent because an equivalent English landing page has not been authored.

Suggested future Search ad groups: `特殊ねじ・特注締結部品`, `図面製作・切削加工部品`, and `金属プレス部品`. Each group should use drawing-based buying intent, with commodity retail, jobs/training and equipment-sales searches excluded as appropriate. Establish valid drawing/quantity inquiries and quotable projects as the useful outcomes before expanding spend.
