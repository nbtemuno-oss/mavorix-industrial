import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: string;
  faqs: { q: string; a: string }[];
};

const blogDir = path.join(process.cwd(), "content", "en", "blog");

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {} as Record<string, string>, body: raw };
  const meta = Object.fromEntries(
    match[1].split("\n").map((line) => {
      const [key, ...rest] = line.split(":");
      return [key.trim(), rest.join(":").trim().replace(/^"|"$/g, "")];
    })
  );
  return { meta, body: match[2] };
}

export function getBlogSlugs() {
  return fs.readdirSync(blogDir).filter((file) => file.endsWith(".md")).map((file) => file.replace(/\.md$/, ""));
}

export function getBlogPost(slug: string): BlogPost {
  const raw = fs.readFileSync(path.join(blogDir, `${slug}.md`), "utf8");
  const { meta, body } = parseFrontmatter(raw);
  const faqMatches = [...body.matchAll(/### FAQ: (.*?)\n([\s\S]*?)(?=\n### FAQ:|\n## |$)/g)];
  return {
    slug,
    title: meta.title,
    description: meta.description,
    date: meta.date || "2026-05-28",
    body,
    faqs: faqMatches.map((match) => ({ q: match[1].trim(), a: match[2].trim().replace(/\n+/g, " ") }))
  };
}

export function getAllBlogPosts() {
  return getBlogSlugs().map(getBlogPost);
}

export function markdownToHtml(markdown: string) {
  return markdown
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^\- (.*$)/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gims, "<ul>$1</ul>")
    .split(/\n{2,}/)
    .map((block) => {
      if (block.startsWith("<h") || block.startsWith("<ul")) return block;
      return `<p>${block.replace(/\n/g, " ")}</p>`;
    })
    .join("");
}
