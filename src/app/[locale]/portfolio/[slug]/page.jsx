import { notFound, redirect } from "next/navigation";
import { getPaginatedEvents } from "@/../../lib/getPaginatedEvents";
import HeroArc from "@/components/HeroArc/HeroArc";
import Pagination from "@/components/Pagination/Pagination";
import Image from "next/image";
import ReviewsList from "@/components/ReviewsList/ReviewsList";
import ContactForm from "@/components/ContactForm/ContactForm";
import { getCollection } from "@/../../lib/content";
import { getPage } from "../../../../../lib/md";
import EventsGrid from "@/components/EventsGrid/EventsGrid";

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const portfolio = await getPage("portfolio_page", locale);

  // извлекаем номер страницы из slug "page-2"
  const m = /^page-(\d+)$/.exec(slug);
  const pageNum = m ? Number(m[1]) : 1;

  // относительный путь (работает и на localhost, и в проде)
  const basePath = `/${locale === "ru" ? "ru/" : ""}portfolio`;
  const path = pageNum > 1 ? `${basePath}/page-${pageNum}` : basePath;

  return {
    title: portfolio.title_seo ?? portfolio.title,
    description: portfolio.description_seo ?? "",
    alternates: {
      canonical: path, // относительный canonical → подставится текущий хост (localhost/прод)
      languages: {
        uk: pageNum > 1 ? `/portfolio/page-${pageNum}` : `/portfolio`,
        ru: pageNum > 1 ? `/ru/portfolio/page-${pageNum}` : `/ru/portfolio`,
        "x-default": "https://cubefreestyle.com.ua",
      },
    },
    openGraph: {
      title: portfolio.title_seo ?? portfolio.title,
      description: portfolio.description_seo ?? "",
      url: path, // тоже относительный
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
  const { locale } = await params;
  const reviews = await getCollection("reviews", locale);
  const portfolio = await getPage("portfolio_page", locale);
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
        {portfolio.title}
      </h1>

      <div className="w-full px-4 xl:px-40 mt-14 xl:mt-24  flex justify-center z-50">
        <EventsGrid events={events} locale={locale} />
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
      <ContactForm locale={locale} />
    </section>
  );
}
