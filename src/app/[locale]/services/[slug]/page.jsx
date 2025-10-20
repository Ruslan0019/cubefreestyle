import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default async function ServicePage({ params }) {
  const { slug, locale } = await params;
  const filePath = path.join("content/services", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);
  const serviceData = data[locale] || data.uk;

  return (
    <section className="w-full px-6 lg:px-16 py-12">
      <h1 className="text-3xl font-bold mb-6 text-dark">{serviceData.title}</h1>

      {serviceData.image && (
        <Image
          src={serviceData.image}
          alt={serviceData.title}
          width={1200}
          height={800}
          className="rounded-2xl mb-8"
        />
      )}

      <article className="prose lg:prose-lg text-dark">
        <ReactMarkdown>{serviceData.body}</ReactMarkdown>
      </article>
    </section>
  );
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/services");
  const files = fs.readdirSync(dir);
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}
