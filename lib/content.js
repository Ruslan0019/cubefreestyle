"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import yaml from "js-yaml";

const root = process.cwd();
const DEFAULT_LOCALE = "uk";

export async function getCollection(folder, locale = DEFAULT_LOCALE) {
  const dir = path.join(root, "content", folder);
  const files = fs.readdirSync(dir);

  const items = await Promise.all(
    files
      .filter((f) => f.endsWith(".md"))
      .map(async (file) => {
        const raw = fs.readFileSync(path.join(dir, file), "utf8");
        const { data, content } = matter(raw);

        const dict = data?.[locale] ?? data?.[DEFAULT_LOCALE] ?? {};

        const bodyRaw =
          (data?.body && (data.body[locale] ?? data.body[DEFAULT_LOCALE])) ||
          content ||
          "";

        const body = String(await remark().use(html).process(bodyRaw));

        const slug = data?.slug ?? file.replace(/\.md$/, "");

        return { slug, ...dict, body };
      })
  );

  return items;
}
export async function getClients() {
  const filePath = path.join(root, "content", "clients.yaml");
  const file = fs.readFileSync(filePath, "utf8");
  const data = yaml.load(file);
  return data.clients || [];
}
