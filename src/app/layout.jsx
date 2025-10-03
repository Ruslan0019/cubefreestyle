import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Header from "@/components/Header/Header";
import { NextIntlClientProvider } from "next-intl";
export const metadata = {
  charset: "UTF-8",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};
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
