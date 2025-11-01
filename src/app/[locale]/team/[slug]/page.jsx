import Image from "next/image";
import { getCollection } from "../../../../../lib/content";
import GallerySection from "@/components/GallerySection/GallerySection";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export const revalidate = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const locales = ["uk", "ru"];
  const allParams = [];

  for (const locale of locales) {
    const team = await getCollection("team", locale);
    team.forEach((m) => {
      allParams.push({ slug: m.slug, locale });
    });
  }

  return allParams;
}

export default async function TeamMemberPage({ params }) {
  const { slug, locale } = await params;
  const team = await getCollection("team", locale);
  const member = team.find((m) => m.slug === slug);

  return (
    <section className="w-full mt-8 px-4 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center lg:items-start mb-20 lg:mb-24 max-w-[1024px] mx-auto">
        <div className="w-full max-w-[298px] lg:max-w-[398px]">
          <Image
            src={member.photo}
            alt={member.name}
            width={600}
            height={800}
            priority
            preload="true"
            className="rounded-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col w-full max-w-[343px] lg:max-w-[498px] text-center lg:text-start">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-primary">
            {member.name}
          </h1>

          {member.achievements?.length > 0 && (
            <ul className="text-dark flex flex-col gap-3 text-[18px] leading-[1.5]">
              {member.achievements.map((a, i) => (
                <li key={i}>{a.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[343px] lg:max-w-[944px] mx-auto text-dark">
        <h2 className="text-3xl lg:text-5xl font-bold mb-10 lg:mb-14 text-center">
          {member.section_title}
        </h2>

        <p className="mb-6 lg:mb-8 leading-relaxed">{member.bio}</p>

        {member.achievements?.length > 0 && (
          <ul className="text-dark flex flex-col gap-3">
            {member.achievements.map((a, i) => (
              <li key={i}>{a.text}</li>
            ))}
          </ul>
        )}
      </div>

      <section className="my-16 lg:my-24 ">
        <GallerySection images={member.gallery.map((img) => img.image)} />
      </section>
      <div className="  my-4 lg:my-6">
        <Breadcrumbs />
      </div>
    </section>
  );
}
