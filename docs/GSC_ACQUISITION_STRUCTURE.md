# Search and inquiry structure

Implemented on 2026-11-03 using the October GSC export and the supplied strategy document.

## Buying topics

`data/procurement-paths.ts` connects each existing industry landing page to a buyer guide, a relevant sourcing case, a supporting service and a topic-specific inquiry link. These are crawlable HTML links rendered on the server. Topic query parameters belong to the contact page; the existing clean canonical is retained.

| Topic | Organic and potential paid landing page | Inquiry link |
| --- | --- | --- |
| Industrial MRO | /en/industries/mro-supplies/ | /en/contact/?topic=mro#inquiry |
| Mixed MRO sourcing service | /en/services/mro-sourcing-from-china/ | /en/contact/?topic=mro#inquiry |
| Drawing-based metal parts | /en/industries/metal-parts/ | /en/contact/?topic=metal#inquiry |
| Packaging machine replacement parts | /en/industries/packaging-industry/ | /en/contact/?topic=packaging#inquiry |
| Agricultural machinery parts | /en/industries/agricultural-equipment/ | /en/contact/?topic=agriculture#inquiry |

The homepage, navigation and blog index expose these purchasing needs. Explicitly mapped guides and cases link back to their corresponding topic. The bearing case linked from agriculture is identified as an industrial component reference, not an agricultural application claim.

The contact form recognizes only configured topic IDs and prefills an editable requirement. It shows the matching RFQ checklist. The standard contact form requires name, email and requirement before submission. English pages have a mobile quote/WhatsApp bar with bottom clearance and safe-area padding.

## Strategy decisions

- Keep existing URLs and their indexation/canonical behavior. Do not create duplicate industry or country pages to satisfy a checklist.
- Saudi Arabia and Mexico pages already exist. Organization and FAQ schemas already exist. Retain these rather than injecting duplicate entities or FAQ scripts.
- Do not promise cost savings, low MOQ, fast shipping, top-ten rankings or AI citations without evidence. Improve content accessibility, internal links and procurement clarity.
- Do not interpret a long query as proof of AI referral traffic. GSC performance alone does not measure third-party AI referrals or qualified inquiries.

## Paid traffic and measurement follow-up

These landing pages are candidates, not launched campaigns. Match each ad group to the buying intent and review its page and offer before spending. Avoid sending all ad clicks to the homepage.

English GA4/Google Ads conversion destinations have not been configured in this change. Existing Japanese conversion tagging remains scoped to Japanese inquiries. Do not reuse that destination for English leads.

Before paid campaigns launch, configure and verify consent-appropriate analytics with the actual account settings. Measure separately:

1. Landing visits by source, medium, campaign and landing page, including identifiable AI referrers.
2. Quote CTA and WhatsApp clicks as engagement, not completed inquiries.
3. Successful contact endpoint responses as form inquiries, not merely submit-button clicks.
4. Qualified inquiries, quotations and orders in the sales workflow.

Do not transmit form contents, names, email addresses or phone numbers to analytics events. No advertising budget or campaign settings were changed.

Review GSC after enough post-publication data is available: compare equal 28-day periods by page and query; inspect impressions, clicks and CTR alongside ranking and query mix. The 2026-10-28 export ends on October 25 and cannot measure the effects of this change. Record the actual production publication date before evaluating results.
