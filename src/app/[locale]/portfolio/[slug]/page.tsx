import { notFound, redirect } from "next/navigation";
import { getPaginatedEvents } from "lib/getPaginatedEvents";
import HeroArc from "@/components/HeroArc/HeroArc";
import Pagination from "@/components/Pagination/Pagination";
import ReviewsList from "@/components/ReviewsList/ReviewsList";
import ContactForm from "@/components/ContactForm/ContactForm";
import { getCollection } from "@/../../lib/content";
import { getPage } from "../../../../../lib/md";
import EventsGrid from "@/components/EventsGrid/EventsGrid";
import type { Metadata } from "next";

export const revalidate = 3600;
export const dynamic = "force-static";

// ---- TYPES ----
type Locale = "uk" | "ru";

type Params = {
  locale: Locale;
  slug: string;
};

// ---- METADATA ----
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { locale, slug } = (await params) as Params;
  const portfolio = await getPage("portfolio_page", locale);

  const m = /^page-(\d+)$/.exec(slug);
  const pageNum = m ? Number(m[1]) : 1;

  const basePath = `/${locale === "ru" ? "ru/" : ""}portfolio`;
  const path = pageNum > 1 ? `${basePath}/page-${pageNum}` : basePath;

  return {
    title: portfolio.title_seo ?? portfolio.title,
    description: portfolio.description_seo ?? "",
    alternates: {
      canonical: path,
      languages: {
        uk: pageNum > 1 ? `/portfolio/page-${pageNum}` : `/portfolio`,
        ru: pageNum > 1 ? `/ru/portfolio/page-${pageNum}` : `/ru/portfolio`,
        "x-default": "https://cubefreestyle.com.ua/portfolio",
      },
    },
    openGraph: {
      title: portfolio.title_seo ?? portfolio.title,
      description: portfolio.description_seo ?? "",
      url: path,
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
    twitter: {
      card: "summary_large_image",
      title: portfolio.title_seo ?? portfolio.title,
      description: portfolio.description_seo ?? "",
      images: ["https://cubefreestyle.com.ua/uploads/preview.jpg"],
    },
  };
}

// ---- STATIC PARAMS ----
export async function generateStaticParams() {
  const locales: Locale[] = ["uk", "ru"];
  const allParams: Params[] = [];

  for (const locale of locales) {
    const { totalPages } = await getPaginatedEvents(locale, 1);
    for (let i = 2; i <= totalPages; i++) {
      allParams.push({ locale, slug: `page-${i}` });
    }
  }

  return allParams;
}

// ---- PAGE ----
export default async function PortfolioSlugPage({ params }: { params: any }) {
  const { locale, slug } = (await params) as Params;

  const match = slug.match(/^page-(\d+)$/);
  const page = match ? Number(match[1]) : null;

  if (!page) notFound();
  if (page === 1) redirect("/portfolio");

  // ⚡ параллельно тянем события, отзывы и страницу
  const [paginated, reviews, portfolio] = await Promise.all([
    getPaginatedEvents(locale, page),
    getCollection("reviews", locale),
    getPage("portfolio_page", locale),
  ]);

  const { items: events, totalPages } = paginated;

  if (page < 1 || page > totalPages) notFound();

  return (
    <section className="flex flex-col items-center w-full bg-white text-dark">
      <HeroArc />
      <h1 className="mt-12 lg:mt-14 text-[36px] leading-[40px] lg:text-[48px] lg:leading-[56px] xl:text-[62px] xl:leading-[72px] font-bold text-white text-center max-w-[343px] lg:max-w-[983px] z-10">
        {portfolio.title}
      </h1>

      <div className="w-full px-4 xl:px-40 mt-14 xl:mt-24 flex justify-center z-50">
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
          titleColor="#02142e"
          arrowColor="#838E9E"
        />
      </section>

      <ContactForm />
    </section>
  );
}
