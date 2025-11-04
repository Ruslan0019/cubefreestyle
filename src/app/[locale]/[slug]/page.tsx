// src/app/[locale]/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceClient from "@/components/ServiceClient/ServiceClient";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { getCollection } from "@/../../lib/content";

export const revalidate = 3600;
export const dynamic = "force-static";
export const dynamicParams = false;

type Locale = "uk" | "ru";

interface Service {
  slug: string;
  title: string;
  title_seo?: string | null;
  description_seo?: string | null;
  // добавь сюда остальные поля, которые реально нужны ServiceClient
  [key: string]: unknown;
}

interface ServicePageParams {
  locale: Locale;
  slug: string;
}

// ВАЖНО: params теперь Promise
interface ServicePageProps {
  params: Promise<ServicePageParams>;
}

const BASE_URL = "https://cubefreestyle.com.ua";

async function getService(
  locale: Locale,
  slug: string
): Promise<Service | undefined> {
  const services = (await getCollection("services", locale)) as Service[];
  return services.find((service) => service.slug === slug);
}

export async function generateStaticParams(): Promise<ServicePageParams[]> {
  const locales: Locale[] = ["uk", "ru"];

  const paramsByLocale = await Promise.all(
    locales.map(async (locale) => {
      const services = (await getCollection("services", locale)) as Service[];

      return services.map((service) => ({
        slug: service.slug,
        locale,
      }));
    })
  );

  return paramsByLocale.flat();
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  // ⬇️ вот тут и нужен await params
  const { slug, locale } = await params;
  const serviceData = await getService(locale, slug);

  const baseTitle = "Cube Freestyle";
  const baseDescription =
    "Cube Freestyle — професійні футбольні фрістайл шоу та тренування.";

  const title = serviceData?.title_seo || serviceData?.title || baseTitle;
  const description = serviceData?.description_seo || baseDescription;

  const localePrefix = locale === "ru" ? "/ru" : "";
  const path = `/${slug}`;
  const url = `${BASE_URL}${localePrefix}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Cube Freestyle",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  // ⬇️ и здесь тоже await params — иначе та самая ошибка
  const { slug, locale } = await params;
  const serviceData = await getService(locale, slug);

  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <ServiceClient serviceData={serviceData} />
      <div className="px-4 lg:px-10 xl:px-40 my-4 lg:my-6">
        <Breadcrumbs />
      </div>
    </>
  );
}
