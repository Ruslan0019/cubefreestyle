import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { NextIntlClientProvider } from "next-intl";
import { getCollection } from "../../../lib/content";

type Locale = "uk" | "ru";

// временно определим базовый тип сервиса
interface Service {
  title: string;
  slug: string;
  image?: string;
  [key: string]: any;
}

export default async function LocaleLayout({ children, params }: any) {
  const { locale } = (await params) as { locale: Locale };

  const [messagesModule, servicesData] = await Promise.all([
    import(`../../../messages/${locale}.json`),
    getCollection("services", locale),
  ]);

  // ✨ Явно указываем тип
  const services = servicesData as Service[];

  const messages = messagesModule.default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header services={services as any} locale={locale} />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
