import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Header from "@/components/Header/Header";
import { NextIntlClientProvider } from "next-intl";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="flex flex-col min-h-screen ">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1 ">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
