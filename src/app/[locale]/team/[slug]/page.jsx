import Image from "next/image";
import { getCollection } from "../../../../../lib/content";
import ReactMarkdown from "react-markdown";

export default async function TeamMemberPage({ params }) {
  const { slug, locale } = await params;
  const team = await getCollection("team", locale);
  const member = team.find((m) => m.slug === slug);

  if (!member) {
    return (
      <section className="w-full px-6 lg:px-16 py-12">
        <h1 className="text-3xl font-bold text-dark">Учасника не знайдено</h1>
      </section>
    );
  }

  return (
    <section className="w-full px-6 lg:px-16 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <Image
            src={member.photo}
            alt={member.name}
            width={600}
            height={800}
            className="rounded-2xl"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2 text-dark">{member.name}</h1>
          <p className="text-primary mb-4">{member.role}</p>
          <ReactMarkdown>{member.bio}</ReactMarkdown>

          {member.achievements?.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-3">Досягнення</h2>
              <ul className="list-disc pl-6 text-dark space-y-1">
                {member.achievements.map((a, i) => (
                  <li key={i}>{a.text}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {member.gallery?.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-dark">Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {member.gallery.map((img, i) => (
              <Image
                key={i}
                src={img.image}
                alt={`${member.name} photo ${i + 1}`}
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export async function generateStaticParams() {
  const team = await getCollection("team", "uk");
  return team.map((m) => ({
    slug: m.slug,
  }));
}
