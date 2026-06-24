import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle?: string;
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
    metaTitle: meta.metaTitle,
    description: meta.description,
    date: meta.date || "2025-01-15",
    body,
    faqs: faqMatches.map((match) => ({ q: match[1].trim(), a: match[2].trim().replace(/\n+/g, " ") }))
  };
}

export function getAllBlogPosts() {
  return getBlogSlugs().map(getBlogPost);
}

export function markdownToHtml(markdown: string) {
  const withTables = markdown.replace(/((?:^\|.*\|\n?)+)/gim, (block) => {
    const rows = block.trim().split("\n").filter((line) => line.trim().startsWith("|"));
    if (rows.length < 2 || !/^\|?[\s:-]+\|[\s|:-]*$/.test(rows[1].trim())) return block;
    const headers = rows[0].split("|").slice(1, -1).map((cell) => cell.trim());
    const bodyRows = rows.slice(2).map((row) => row.split("|").slice(1, -1).map((cell) => cell.trim()));
    const thead = `<thead><tr>${headers.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>`;
    const tbody = `<tbody>${bodyRows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>`;
    return `<div class="table-wrap"><table>${thead}${tbody}</table></div>`;
  });

  return withTables
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^\- (.*$)/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gims, "<ul>$1</ul>")
    .split(/\n{2,}/)
    .map((block) => {
      if (block.startsWith("<h") || block.startsWith("<ul") || block.startsWith("<div")) return block;
      return `<p>${block.replace(/\n/g, " ")}</p>`;
    })
    .join("");
}
