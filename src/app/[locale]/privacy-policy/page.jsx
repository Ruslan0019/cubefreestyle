import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { getPage } from "../../../../lib/md";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const page = await getPage("privacy_policy", locale);

  return {
    alternates: {
      canonical: `https://cubefreestyle.com.ua/${locale === "ru" ? "ru/" : ""}privacy-policy`,
      languages: {
        uk: "/",
        ru: "/ru/",
        "x-default": `https://cubefreestyle.com.ua`,
      },
    },
    title: page.title_seo,
    description: page.description_seo,
    openGraph: {
      type: "website",
      locale: locale,
      siteName: "Cube Freestyle",
      title: page.title_seo,
      description: page.description_seo,
      images: [
        {
          url: "https://cubefreestyle.com.ua/uploads/preview.jpg",
          width: 1200,
          height: 630,
          alt: "Cube Freestyle Show",
        },
      ],
      url: `https://cubefreestyle.com.ua/${locale === "ru" ? "ru/" : ""}privacy-policy`,
    },
  };
}
export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

export default async function PrivacyPolicy(props) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "Privacy_policy_page" });

  return (
    <section className="text-dark w-full  max-w-[375px] lg:max-w-[1024px] xl:max-w-[1440px] px-6 lg:px-10 xl:px-[160px] mx-auto">
      <h1
        className="
     text-[31px] lg:text-[48px] xl:text-[62px] leading-[40px] lg:leading-[56px] xl:leading-[72px] font-bold text-center  mt-[62px]"
      >
        {t("title")}
      </h1>
      <div className="mb-14 lg:mb-24 xl:mb-32">
        <p className="flex text-[18px] mb-4 flex-col gap-6 font-normal text-lg leading-6 mt-[58px] ">
          {t("updated")}
        </p>
        <div>
          <span>{t("intro1")}</span>
          <Link className="text-primary" href="/">
            https://cubefreestyle.com.ua
          </Link>
          <span>{t("intro2")}</span>
        </div>

        <div className="mt-4">
          <h3>{t("sections.definitions.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.definitions.items.1")}</li>
            <li>{t("sections.definitions.items.2")}</li>
            <li>{t("sections.definitions.items.3")}</li>
            <li>{t("sections.definitions.items.4")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.general.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.general.items.1")}</li>
            <li>{t("sections.general.items.2")}</li>
            <li>{t("sections.general.items.3")}</li>
            <li>{t("sections.general.items.4")}</li>
            <li>{t("sections.general.items.5")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.data.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.data.items.1")}</li>
            <li>{t("sections.data.items.2")}</li>
            <li>{t("sections.data.items.3")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.purposes.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.purposes.items.1")}</li>
            <li>{t("sections.purposes.items.2")}</li>
            <li>{t("sections.purposes.items.3")}</li>
            <li>{t("sections.purposes.items.4")}</li>
            <li>{t("sections.purposes.items.5")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.cookies.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.cookies.items.1")}</li>
            <li>{t("sections.cookies.items.2")}</li>
            <li>{t("sections.cookies.items.3")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.processing.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.processing.items.1")}</li>
            <li>{t("sections.processing.items.2")}</li>
            <li>{t("sections.processing.items.3")}</li>
            <li>{t("sections.processing.items.4")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.transfer.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.transfer.items.1")}</li>
            <li>{t("sections.transfer.items.2")}</li>
            <li>{t("sections.transfer.items.3")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.rights.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.rights.items.1")}</li>
            <li>{t("sections.rights.items.2")}</li>
            <li>{t("sections.rights.items.3")}</li>
            <li>{t("sections.rights.items.4")}</li>
            <li>{t("sections.rights.items.5")}</li>
            <li>{t("sections.rights.items.6")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.security.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.security.items.1")}</li>
            <li>{t("sections.security.items.2")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.minors.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.minors.items.1")}</li>
            <li>{t("sections.minors.items.2")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.disputes.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.disputes.items.1")}</li>
            <li>{t("sections.disputes.items.2")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.changes.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.changes.items.1")}</li>
            <li>{t("sections.changes.items.2")}</li>
            <li>{t("sections.changes.items.3")}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3>{t("sections.contacts.title")}</h3>
          <ul className="ml-8">
            <li>{t("sections.contacts.text")}</li>
          </ul>
        </div>
      </div>
      <div className="  my-4 lg:my-6">
        <Breadcrumbs />
      </div>
    </section>
  );
}
