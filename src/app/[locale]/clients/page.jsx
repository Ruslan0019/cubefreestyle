import ContactForm from "@/components/ContactForm/ContactForm";
import { getPage } from "../../../../lib/md";
import { getLocale } from "next-intl/server";
import HeroArc from "@/components/HeroArc/HeroArc";
import { getClients } from "../../../../lib/content";
import Image from "next/image";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

export default async function Clients() {
  const locale = await getLocale();
  const clientsPage = await getPage("clients", locale);
  const clientsList = await getClients();

  return (
    <section className="flex flex-col items-center w-full bg-white text-dark">
      <div className="relative w-full flex flex-col items-center justify-start bg-white">
        <HeroArc />
        <h1 className="mt-12 lg:mt-14 text-[36px] z-1 leading-[40px] lg:text-[48px] lg:leading-[56px] xl:text-[62px] xl:leading-[72px] font-bold text-white text-center max-w-[343px] lg:max-w-[983px]">
          {clientsPage.title}
        </h1>
        <p className="z-1 mt-4 lg:mt-6 max-w-[343px] lg:max-w-[804px] text-[16px] lg:text-[18px] font-semibold text-white text-center">
          {clientsPage.subtitle}
        </p>
      </div>
      <ul className="mt-36 mb-24 lg:mt-32 xl:mt-[168px] w-full max-w-[343px] lg:max-w-[944px] xl:max-w-[1120px]  flex flex-wrap gap-8 lg:gap-16  justify-center  ">
        {clientsList.map((el, i) => (
          <li
            key={i}
            className=" w-full max-w-[92px] max-h-[32px] lg:max-w-[138px] lg:max-h-[48px] xl:max-w-[172px]  "
          >
            <Image
              src={el.image}
              width={172}
              height={32}
              title={el.alt}
              alt={el.alt}
            />
          </li>
        ))}
      </ul>
      <ContactForm />
    </section>
  );
}
