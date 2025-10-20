import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function TeamList({ team = [], locale = "uk" }) {
  return (
    <section className="w-full px-6 lg:px-16 py-12 bg-white">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-[#001F54] mb-10">
        {locale === "ru" ? "Наша команда" : "Наша команда"}
      </h2>

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
          justify-items-center
        "
      >
        {team.map((member) => (
          <Link
            key={member.slug}
            href={`/team/${member.slug}`}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
          >
            <div className="relative w-[160px] sm:w-[200px] md:w-[240px] xl:w-[280px] aspect-[4/5]">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
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
