import HeroArc from "@/components/HeroArc/HeroArc";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ContactForm from "@/components/ContactForm/ContactForm";
import { getPage } from "../../../../lib/md";
import { getClients } from "../../../../lib/content";
import Image from "next/image";
import type { Metadata } from "next";

type Params = { locale: "uk" | "ru" };

interface ClientItem {
  image: string;
  alt: string;
}

interface ClientsPageData {
  title: string;
  subtitle: string;
  title_seo: string;
  description_seo: string;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { locale } = (await params) as Params;
  const page = (await getPage("clients", locale)) as ClientsPageData;

  return {
    alternates: {
      canonical: `https://cubefreestyle.com.ua/${locale === "ru" ? "ru/" : ""}clients`,
      languages: {
        uk: "/clients",
        ru: "/ru/clients",
        "x-default": "https://cubefreestyle.com.ua/clients",
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
      url: `https://cubefreestyle.com.ua/${locale === "ru" ? "ru/" : ""}clients`,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title_seo,
      description: page.description_seo,
      images: ["https://cubefreestyle.com.ua/uploads/preview.jpg"],
    },
  };
}

export const revalidate = 3600;
export const dynamic = "force-static";

export function generateStaticParams(): Params[] {
  return [{ locale: "uk" }, { locale: "ru" }];
}

export default async function ClientsPage({ params }: any) {
  const { locale } = (await params) as Params;

  const clientsPage = (await getPage("clients", locale)) as ClientsPageData;
  const clientsList = (await getClients()) as ClientItem[];

  return (
    <>
      <section className="flex flex-col items-center w-full bg-white text-dark">
        <div className="relative flex flex-col items-center justify-start w-full bg-white">
          <HeroArc />
          <h1 className="mt-12 lg:mt-14 text-[36px] leading-[40px] lg:text-[48px] lg:leading-[56px] xl:text-[62px] xl:leading-[72px] font-bold text-white text-center max-w-[343px] lg:max-w-[983px] z-10">
            {clientsPage.title}
          </h1>
          <p className="z-10 mt-4 lg:mt-6 max-w-[343px] lg:max-w-[804px] text-[16px] lg:text-[18px] font-semibold text-white text-center">
            {clientsPage.subtitle}
          </p>
        </div>

        <ul className="mt-36 mb-24 lg:mt-32 xl:mt-[168px] w-full max-w-[343px] lg:max-w-[944px] xl:max-w-[1120px] flex flex-wrap justify-center gap-8 lg:gap-16">
          {clientsList.map((el, i) => (
            <li
              key={i}
              className="w-full max-w-[92px] lg:max-w-[138px] xl:max-w-[172px] aspect-[172/48] flex items-center justify-center"
            >
              <Image
                src={el.image}
                width={172}
                height={48}
                alt={el.alt}
                title={el.alt}
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 92px, (max-width: 1200px) 138px, 172px"
              />
            </li>
          ))}
        </ul>

        <ContactForm />
      </section>

      <div className="px-4 lg:px-10 xl:px-40 my-4 lg:my-6">
        <Breadcrumbs />
      </div>
    </>
  );
}
