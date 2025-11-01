import { notFound, redirect } from "next/navigation";
import { getPaginatedEvents } from "@/../../lib/getPaginatedEvents";
import { getLocale } from "next-intl/server";
import HeroArc from "@/components/HeroArc/HeroArc";
import Pagination from "@/components/Pagination/Pagination";
import Image from "next/image";
import ReviewsList from "@/components/ReviewsList/ReviewsList";
import ContactForm from "@/components/ContactForm/ContactForm";
import { getCollection } from "@/../../lib/content";

export const revalidate = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const locales = ["uk", "ru"];
  const allParams = [];

  for (const locale of locales) {
    const { totalPages } = await getPaginatedEvents(locale, 1);
    for (let i = 2; i <= totalPages; i++) {
      allParams.push({ locale, slug: `page-${i}` });
    }
  }

  return allParams;
}

export default async function PortfolioSlugPage({ params }) {
  const locale = await getLocale();
  const reviews = await getCollection("reviews", locale);

  const { slug } = await params;

  const match = slug.match(/^page-(\d+)$/);
  const page = match ? Number(match[1]) : null;

  if (!page) notFound();
  if (page === 1) redirect("/portfolio");

  const { items: events, totalPages } = await getPaginatedEvents(locale, page);
  if (page < 1 || page > totalPages) notFound();

  return (
    <section className="flex flex-col items-center w-full bg-white text-dark">
      <HeroArc />
      <h1 className="mt-12 lg:mt-14 text-[36px] z-1 leading-[40px] lg:text-[48px] lg:leading-[56px] xl:text-[62px] xl:leading-[72px] font-bold text-white text-center max-w-[343px] lg:max-w-[983px]">
        Наше портфоліо
      </h1>

      <div className="w-full px-4 xl:px-40 mt-14 xl:mt-24 z-1 flex justify-center">
        <div className="flex flex-wrap justify-center gap-y-4 lg:gap-x-4 lg:gap-y-12 xl:gap-x-8 xl:gap-y-14 max-w-[343px] lg:max-w-[992px] xl:max-w-[1120px] ">
          {events.map((event, idx) => (
            <article
              key={idx}
              className="hover:scale-105 transition-transform duration-300 flex flex-col cursor-pointer shadow-xl rounded-sm w-full max-w-[343px] lg:max-w-[320px] xl:max-w-[352px]"
            >
              {event.cover ? (
                <Image
                  width={343}
                  height={349}
                  priority
                  src={event.cover}
                  alt={event.title || "Portfolio event"}
                  className="w-full h-[349px] lg:h-[325px] xl:h-[358px] object-cover rounded-t-sm"
                />
              ) : (
                <div className="w-full h-[349px] lg:h-[325px] xl:h-[358px] bg-gray-200 flex items-center justify-center text-gray-500 text-sm rounded-t-sm">
                  No image
                </div>
              )}
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
                  {event.description}
                </p>
                <time className="text-xs text-gray-500 mt-2 block">
                  {new Date(event.date).toLocaleDateString(locale)}
                </time>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath="/portfolio"
      />

      <section className="pt-24 pb-12 xl:py-32">
        <ReviewsList
          reviews={reviews}
          titleColor={"#02142e"}
          arrowColor="#838E9E"
        />
      </section>
      <ContactForm />
    </section>
  );
}
