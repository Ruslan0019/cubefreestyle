import ServiceClient from "@/components/ServiceClient/ServiceClient";
import { getCollection } from "@/../../lib/content";

export default async function ServicePage({ params }) {
  const { slug, locale } = await params;

  const services = await getCollection("services", locale);
  const serviceData = services.find((item) => item.slug === slug);

  return <ServiceClient serviceData={serviceData} />;
}
