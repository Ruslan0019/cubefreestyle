import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

export default async function TermsOfUse({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Terms_of_use_page" });

  return (
    <section className="text-dark w-full max-w-[375px] lg:max-w-[1024px] xl:max-w-[1440px] px-4 lg:px-10 xl:px-[160px] mx-auto">
      <h1 className="text-[36px] lg:text-[48px] xl:text-[62px] leading-[40px] lg:leading-[56px] xl:leading-[72px] font-bold text-center mt-[62px]">
        {t("title")}
      </h1>

      <div className="mb-14 lg:mb-24 xl:mb-32">
        <p className="flex mb-4 flex-col gap-6 font-normal text-lg leading-6 mt-[58px]">
          {t("updated")}
        </p>

        {/* 1. Загальні положення */}
        <div className="mt-4">
          <h3>{t("sections.general.title")}</h3>
          <ul className="ml-8 ">
            <li>
              {t("sections.general.items.1")}{" "}
              <span>
                <Link className="text-primary" href="/">
                  https://cubefreestyle.com.ua
                </Link>
              </span>
            </li>
            <li>{t("sections.general.items.2")}</li>
          </ul>
        </div>

        {/* 2. Інтелектуальна власність */}
        <div className="mt-4">
          <h3>{t("sections.ip.title")}</h3>
          <ul className="ml-8 ">
            <li>{t("sections.ip.items.1")}</li>
            <li>{t("sections.ip.items.2")}</li>
          </ul>
        </div>

        {/* 3. Дозволене використання матеріалів */}
        <div className="mt-4">
          <h3>{t("sections.permitted_use.title")}</h3>
          <ul className="ml-8 ">
            <li>{t("sections.permitted_use.items.1")}</li>
            <li>{t("sections.permitted_use.items.2")}</li>
            <li>{t("sections.permitted_use.items.3")}</li>
          </ul>
        </div>

        {/* 4. Заборонене використання */}
        <div className="mt-4">
          <h3>{t("sections.prohibited_use.title")}</h3>
          <ul className="ml-8 ">
            <li>{t("sections.prohibited_use.items.1")}</li>
            <li>{t("sections.prohibited_use.items.2")}</li>
            <li>{t("sections.prohibited_use.items.3")}</li>
          </ul>
        </div>

        {/* 5. Користувацький контент і зворотний зв’язок */}
        <div className="mt-4">
          <h3>{t("sections.user_content.title")}</h3>
          <ul className="ml-8 ">
            <li>{t("sections.user_content.items.1")}</li>
            <li>{t("sections.user_content.items.2")}</li>
          </ul>
        </div>

        {/* 6. Відмова від гарантій та обмеження відповідальності */}
        <div className="mt-4">
          <h3>{t("sections.disclaimer.title")}</h3>
          <ul className="ml-8 ">
            <li>{t("sections.disclaimer.items.1")}</li>
            <li>{t("sections.disclaimer.items.2")}</li>
          </ul>
        </div>

        {/* 7. Посилання на сторонні ресурси */}
        <div className="mt-4">
          <h3>{t("sections.external_links.title")}</h3>
          <ul className="ml-8 ">
            <li>{t("sections.external_links.items.1")}</li>
          </ul>
        </div>

        {/* 8. Правила цитування */}
        <div className="mt-4">
          <h3>{t("sections.quoting_rules.title")}</h3>
          <ul className="ml-8 ">
            <li>{t("sections.quoting_rules.items.1")}</li>
            <li>{t("sections.quoting_rules.items.2")}</li>
          </ul>
        </div>

        {/* 9. Порядок вирішення спорів */}
        <div className="mt-4">
          <h3>{t("sections.disputes.title")}</h3>
          <ul className="ml-8 ">
            <li>{t("sections.disputes.items.1")}</li>
            <li>{t("sections.disputes.items.2")}</li>
          </ul>
        </div>

        {/* 10. Зміни до Правил */}
        <div className="mt-4">
          <h3>{t("sections.changes.title")}</h3>
          <ul className="ml-8 ">
            <li>{t("sections.changes.items.1")}</li>
            <li>{t("sections.changes.items.2")}</li>
          </ul>
        </div>

        {/* 11. Контакти */}
        <div className="mt-4">
          <h3>{t("sections.contacts.title")}</h3>
          <ul className="ml-8 ">
            <li>{t("sections.contacts.text")}</li>
          </ul>
        </div>
      </div>

      <div className="my-4 lg:my-6">
        <Breadcrumbs />
      </div>
    </section>
  );
}
