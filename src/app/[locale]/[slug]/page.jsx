import ServiceClient from "@/components/ServiceClient/ServiceClient";
import { getCollection } from "@/../../lib/content";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export const revalidate = false;
export const dynamic = "force-static";

export async function generateStaticParams() {
  const locales = ["uk", "ru"];
  const allParams = [];

  for (const locale of locales) {
    const services = await getCollection("services", locale);
    services.forEach((service) => {
      allParams.push({ slug: service.slug, locale });
    });
  }

  return allParams;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;
  const services = await getCollection("services", locale);
  const serviceData = services.find((item) => item.slug === slug);

  return {
    title: serviceData.title_seo,
    description: serviceData.description_seo,
    alternates: {
      canonical: `https://cubefreestyle.com.ua/${locale === "ru" ? "ru/" : ""}${slug}`,
    },
    openGraph: {
      title: serviceData.title_seo,
      description: serviceData.description_seo,
      url: `https://cubefreestyle.com.ua/${locale === "ru" ? "ru/" : ""}${slug}`,
      siteName: "Cube Freestyle",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  const { slug, locale } = resolvedParams;
  const services = await getCollection("services", locale);
  const serviceData = services.find((item) => item.slug === slug);

  return (
    <>
      <ServiceClient serviceData={serviceData} />
      <div className="px-4 lg:px-10 xl:px-40 my-4 lg:my-6">
        <Breadcrumbs />
      </div>
    </>
  );
}
