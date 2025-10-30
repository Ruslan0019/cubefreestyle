import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function TeamList({ team = [], locale = "uk" }) {
  const t = await getTranslations();
  return (
    <section className="w-full  bg-white">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#001F54] mb-8 lg:mb-14">
        {t("TeamList.title")}
      </h2>

      <div
        className="
          grid grid-cols-2 gap-[7px]           /* мобилка: строго 2 в ряд */
          max-w-[343px] mx-auto
          lg:flex lg:flex-wrap lg:justify-center lg:gap-4 
          lg:max-w-[1024px] xl:max-w-[1392px]
        "
      >
        {team.map((member) => (
          <Link
            key={member.slug}
            href={`/team/${member.slug}`}
            className="
              group block overflow-hidden rounded-xl shadow-md hover:shadow-lg 
              transition-transform hover:scale-[1.02]
              w-full                  /* в grid ячейке занимает всю ширину */
              lg:w-[240px] xl:w-[336px]  /* как и было на больших брейкпоинтах */
            "
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={member.thumbnail}
                alt={member.name}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white px-3 py-3">
                <p className="font-semibold text-base leading-tight flex items-center gap-1">
                  {member.name}
                  <span className="opacity-80 group-hover:translate-x-1 transition">
                    →
                  </span>
                </p>
                <span className="bg-blue-600 text-xs font-semibold px-2 py-[2px] rounded mt-1 inline-block">
                  {member.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
