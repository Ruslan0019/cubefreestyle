import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { NextIntlClientProvider } from "next-intl";
import { getCollection } from "../../../lib/content";
import type { ReactNode } from "react";

type Locale = "uk" | "ru";

type LayoutProps = {
  children: ReactNode;
  params: { locale: Locale };
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  // грузим переводы и услуги параллельно
  const [messagesModule, services] = await Promise.all([
    import(`../../../messages/${locale}.json`),
    getCollection("services", locale),
  ]);

  const messages = messagesModule.default as Record<string, unknown>;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header services={services} locale={locale} />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
