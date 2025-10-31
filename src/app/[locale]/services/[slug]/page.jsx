import ServiceClient from "@/components/ServiceClient/ServiceClient";
import { getCollection } from "@/../../lib/content";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export default async function ServicePage({ params }) {
  const { slug, locale } = await params;

  const services = await getCollection("services", locale);
  const serviceData = services.find((item) => item.slug === slug);

  return (
    <>
      <ServiceClient serviceData={serviceData} />
      <div className=" px-4 lg:px-10 xl:px-40 my-4 lg:my-6">
        <Breadcrumbs />
      </div>
    </>
  );
}
