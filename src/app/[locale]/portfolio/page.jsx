import HeroArc from "@/components/HeroArc/HeroArc";
import { getPaginatedEvents } from "@/../../lib/getPaginatedEvents";
import { getCollection } from "@/../../lib/content";
import Image from "next/image";
import ReviewsList from "@/components/ReviewsList/ReviewsList";
import ContactForm from "@/components/ContactForm/ContactForm";
import Pagination from "@/components/Pagination/Pagination";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { getPage } from "../../../../lib/md";
import EventsGrid from "@/components/EventsGrid/EventsGrid";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

export async function generateMetadata({ params, searchParams }) {
  const { locale } = await params;
  const pageParam = (await searchParams)?.page ?? "1";

  const portfolio = await getPage("portfolio_page", locale);

  const basePath = `https://cubefreestyle.com.ua/${locale === "ru" ? "ru/" : ""}portfolio`;
  const url =
    pageParam && pageParam !== "1" ? `${basePath}?page=${pageParam}` : basePath;

  return {
    title: portfolio.title_seo ?? portfolio.title,
    description: portfolio.description_seo ?? "",
    alternates: {
      canonical: url,
      languages: {
        uk: "https://cubefreestyle.com.ua/portfolio",
        ru: "https://cubefreestyle.com.ua/ru/portfolio",
        "x-default": "https://cubefreestyle.com.ua",
      },
    },
    openGraph: {
      title: portfolio.title_seo ?? portfolio.title,
      description: portfolio.description_seo ?? "",
      url,
      siteName: "Cube Freestyle",
      type: "website",
      images: [
        {
          url: "https://cubefreestyle.com.ua/uploads/preview.jpg",
          width: 1200,
          height: 630,
          alt: "Cube Freestyle Show",
        },
      ],
      locale,
    },
  };
}

export default async function PortfolioPage({ params }) {
  const { locale } = await params;
  const reviews = await getCollection("reviews", locale);
  const portfolio = await getPage("portfolio_page", locale);
  const { items: events, totalPages } = await getPaginatedEvents(locale, 1);

  return (
    <>
      <section className="flex flex-col items-center w-full bg-white text-dark">
        <div className="relative w-full flex flex-col items-center justify-start bg-white">
          <HeroArc />
          <h1 className="mt-12 lg:mt-14 text-[36px] z-1 leading-[40px] lg:text-[48px] lg:leading-[56px] xl:text-[62px] xl:leading-[72px] font-bold text-white text-center max-w-[343px] lg:max-w-[983px]">
            {portfolio.title}
          </h1>

          <div className="w-full px-4 xl:px-40 mt-14 xl:mt-24 z-1 flex justify-center z-50">
            <EventsGrid events={events} locale={locale} />
          </div>

          <Pagination
            currentPage={1}
            totalPages={totalPages}
            basePath="/portfolio"
          />
        </div>

        <section className="pt-24 pb-12 xl:py-32">
          <ReviewsList
            reviews={reviews}
            titleColor={"#02142e"}
            arrowColor="#838E9E"
          />
        </section>
        <ContactForm locale={locale} />
      </section>
      <div className=" px-4 lg:px-10 xl:px-40 my-4 lg:my-6">
        <Breadcrumbs />
      </div>
    </>
  );
}
