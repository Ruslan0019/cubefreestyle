import { getClients, getCollection } from "@/../../lib/content";
import { getPage } from "../../../../lib/md";
import HeroArc from "@/components/HeroArc/HeroArc";
import ContactForm from "@/components/ContactForm/ContactForm";
import TeamList from "@/components/TeamList/TeamList";
import ClientsSlider from "@/components/ClientsSlider/ClientsSlider";
import GallerySection from "@/components/GallerySection/GallerySection";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import type { Metadata } from "next";

export const revalidate = false;
export const dynamic = "force-static";

// ---- TYPES ----
type Params = {
  locale: "uk" | "ru";
};

type PageProps = {
  params: Params;
};

type AboutPageData = {
  title: string;
  subtitle: string;
  content: string;
  title_seo: string;
  description_seo: string;
};

// ---- STATIC PARAMS ----
export function generateStaticParams(): Params[] {
  return [{ locale: "uk" }, { locale: "ru" }];
}

// ---- METADATA ----
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;
  const page: AboutPageData = await getPage("about", locale);

  return {
    alternates: {
      canonical: `https://cubefreestyle.com.ua/${locale === "ru" ? "ru/" : ""}about`,
      languages: {
        uk: "/about",
        ru: "/ru/about",
        "x-default": "https://cubefreestyle.com.ua/about",
      },
    },
    title: page.title_seo,
    description: page.description_seo,
    openGraph: {
      type: "website",
      locale,
      siteName: "Cube Freestyle",
      title: page.title_seo,
      description: page.description_seo,
      images: [
        {
          url: "https://cubefreestyle.com.ua/uploads/preview.jpg",
          width: 1200,
          height: 630,
          alt: "Cube Freestyle Show",
        },
      ],
      url: `https://cubefreestyle.com.ua/${locale === "ru" ? "ru/" : ""}about`,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title_seo,
      description: page.description_seo,
      images: ["https://cubefreestyle.com.ua/uploads/preview.jpg"],
    },
  };
}

// ---- PAGE ----
export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  const [about, gallery, team, clients] = await Promise.all([
    getPage("about", locale) as Promise<AboutPageData>,
    getCollection("gallery"),
    getCollection("team", locale),
    getClients(),
  ]);

  const images = gallery[0]?.images ?? [];

  return (
    <>
      <section className="flex flex-col items-center w-full bg-white text-dark">
        <div className="relative flex flex-col items-center justify-start w-full bg-white">
          <HeroArc />
          <h1 className="mt-12 lg:mt-14 text-[36px] leading-[40px] lg:text-[48px] lg:leading-[56px] xl:text-[62px] xl:leading-[72px] font-bold text-white text-center max-w-[343px] lg:max-w-[983px] z-10">
            {about.title}
          </h1>
          <p className="z-10 mt-4 lg:mt-6 max-w-[343px] lg:max-w-[804px] text-[16px] lg:text-[18px] font-semibold text-white text-center">
            {about.subtitle}
          </p>
        </div>

        <p className="mt-[104px] lg:mt-[128px] xl:mt-[168px] max-w-[343px] lg:max-w-[944px] xl:max-w-[1120px] text-[16px] lg:text-[18px] font-semibold text-dark text-center">
          {about.content}
        </p>

        <section className="mt-24 xl:mt-32 w-full flex justify-center">
          <TeamList team={team} locale={locale} />
        </section>

        <section className="mt-24 xl:mt-32 w-full flex justify-center">
          <ClientsSlider clients={clients} />
        </section>

        <section className="my-24 xl:my-32 w-full flex justify-center">
          <GallerySection images={images} />
        </section>

        <ContactForm />
      </section>

      <div className="px-4 lg:px-10 xl:px-40 my-4 lg:my-6">
        <Breadcrumbs />
      </div>
    </>
  );
}
