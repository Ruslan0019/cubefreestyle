import { getClients, getCollection } from "@/../../lib/content";
import { getLocale } from "next-intl/server";
import { getPage } from "../../../../lib/md";
import HeroArc from "@/components/HeroArc/HeroArc";
import ContactForm from "@/components/ContactForm/ContactForm";
import TeamList from "@/components/TeamList/TeamList";
import ClientsSlider from "@/components/ClientsSlider/ClientsSlider";
import GallerySection from "@/components/GallerySection/GallerySection";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export const revalidate = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const page = await getPage("about", locale);

  return {
    alternates: {
      canonical: `https://cubefreestyle.com.ua/${locale === "ru" ? "ru/" : ""}about`,
      languages: {
        uk: "/",
        ru: "/ru/",
        "x-default": `https://cubefreestyle.com.ua`,
      },
    },
    title: page.title_seo,
    description: page.description_seo,
    openGraph: {
      type: "website",
      locale: locale,
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
  };
}

export default async function About() {
  const locale = await getLocale();
  const about = await getPage("about", locale);
  const gallery = await getCollection("gallery");
  const images = gallery[0]?.images || [];
  const team = await getCollection("team", locale);
  const clients = await getClients();

  return (
    <>
      <section className="flex flex-col items-center w-full bg-white text-dark">
        <div className="relative w-full flex flex-col items-center justify-start bg-white">
          <HeroArc />
          <h1 className="mt-12 lg:mt-14 text-[36px] z-1 leading-[40px] lg:text-[48px] lg:leading-[56px] xl:text-[62px] xl:leading-[72px] font-bold text-white text-center max-w-[343px] lg:max-w-[983px]">
            {about.title}
          </h1>
          <p className="z-1 mt-4 lg:mt-6 max-w-[343px] lg:max-w-[804px] text-[16px] lg:text-[18px] font-semibold text-white text-center">
            {about.subtitle}
          </p>
        </div>
        <p className="z-1 mt-[104px] lg:mt-[128px] xl:mt-[168px] max-w-[343px] lg:max-w-[944px] xl:max-w-[1120px] text-[16px] lg:text-[18px] font-semibold text-dark text-center">
          {about.content}
        </p>
        <section className=" mt-24  xl:mt-32">
          <TeamList team={team} locale={locale} />
        </section>
        <section className=" mt-24  xl:mt-32">
          <ClientsSlider clients={clients} />
        </section>
        <section className="my-24 xl:my-32">
          <GallerySection images={images} />
        </section>
        <ContactForm locale={locale} />
      </section>
      <div className=" px-4 lg:px-10 xl:px-40 my-4 lg:my-6">
        <Breadcrumbs />
      </div>
    </>
  );
}
