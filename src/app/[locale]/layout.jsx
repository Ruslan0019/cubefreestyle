import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { NextIntlClientProvider } from "next-intl";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen ">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
