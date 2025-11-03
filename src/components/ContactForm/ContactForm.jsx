// components/ContactForm/ContactForm.jsx
import { getLocale } from "next-intl/server";
import { getCollection } from "@/../../lib/content";
import ContactFormClient from "./ContactFormClient";

export default async function ContactForm() {
  const locale = await getLocale();

  const servicesData = await getCollection("services", locale);

  const services = servicesData.map((service) => ({
    value: service.title,
    label: service.title,
  }));

  // просто передаём данные в клиентский компонент
  return <ContactFormClient services={services} />;
}
