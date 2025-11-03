import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { NextIntlClientProvider } from "next-intl";
import { getCollection } from "../../../lib/content";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const services = await getCollection("services", locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header services={services} locale={locale} />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
