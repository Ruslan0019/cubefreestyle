import { getTranslations } from "next-intl/server";
import { getPage } from "../../../lib/md";
import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import ServicesList from "@/components/ServicesList/ServicesList";
import { getClients, getCollection } from "../../../lib/content";
import ReviewsList from "@/components/ReviewsList/ReviewsList";
import ClientsSlider from "@/components/ClientsSlider/ClientsSlider";
import TeamList from "@/components/TeamList/TeamList";
import ContactForm from "@/components/ContactForm/ContactForm";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const page = await getPage("home", locale);

  return {
    title: page.title_seo,
    description: page.description_seo,
    openGraph: {
      type: "website",
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
      url:
        locale === "ru"
          ? "https://cubefreestyle.com.ua/ru/"
          : "https://cubefreestyle.com.ua/",
    },
  };
}

export default async function HomePage(props) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "Home_page" });
  const page = await getPage("home", locale);
  const services = await getCollection("services", locale);
  const reviews = await getCollection("reviews", locale);
  const clients = await getClients();
  const team = await getCollection("team", locale);
  return (
    <div className="flex flex-col items-center justify-center">
      {/* hero section */}
      <section className="relative justify-center lg:justify-start w-full h-[700px] lg:h-[680px] xl:h-[780px] flex items-center">
        <video
          poster="/uploads/poster.webp"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/freestyle.webm"
          autoPlay
          fetchPriority="high"
          loop
          preload="auto"
          suppressHydrationWarning
          muted
          aria-hidden="true"
          playsInline
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

        <div className="w-full max-w-[375px] lg:max-w-[1024px] xl:max-w-[1440px] px-6 lg:px-10 xl:px-[160px] mx-auto">
          <div className="relative text-center lg:text-left z-10 text-white w-full max-w-[327px] lg:max-w-[566px]">
            <h1 className="text-4xl lg:text-5xl font-bold mb-10">
              {page.hero_title}
            </h1>
            <button className="bg-primary hover:bg-primary-hover px-8 py-4 rounded-sm text-lg font-semibold cursor-pointer transition-transform duration-200 hover:scale-105">
              {page.hero_button}
            </button>
          </div>
        </div>
      </section>
      {/* About section */}
      <section className="w-full max-w-[375px] lg:max-w-[1024px] xl:max-w-[1440px] pt-16 lg:pt-24 xl:pt-32 px-6 lg:px-10 xl:px-[160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-[120px] items-center text-black">
        <div className="w-full max-w-[343px] lg:max-w-[944px] xl:max-w-[1136px] mx-auto">
          <h2 className="text-3xl font-bold mb-6">{page.about_title}</h2>
          <div
            className="prose prose-lg max-w-none flex
          flex-col gap-2"
          >
            <ReactMarkdown>{page.about_description}</ReactMarkdown>
          </div>
        </div>
        <div className="w-full max-w-[422px] lg:w-[422px] lg:h-[486px] xl:w-[422px] xl:h-[486px]">
          <Image
            width={343}
            height={395}
            src="/uploads/rectangle-90.png"
            alt="Футбольний м’яч"
            className="rounded-lg w-full h-auto"
            preload="true"
          />
        </div>
      </section>
      {/* Чому ми? */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/uploads/Footballer.webp"
              alt="Футболіст"
              className="max-h-[500px] object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl text-dark font-bold mb-8">
              {page.whyUs_title}
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 bg-white p-6 pl-0 rounded-lg shadow hover:shadow-lg transition">
                <svg width="48" height="74">
                  <use href="/sprite.svg#CUBELOGO2" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg text-dark">
                    {page.whyUs_card1_title}
                  </h3>
                  <p className="text-dark">{page.whyUs_card1_description}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 pl-0 rounded-lg shadow hover:shadow-lg transition">
                <svg width="48" height="74">
                  <use href="/sprite.svg#CUBELOGO2" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg text-dark">
                    {page.whyUs_card2_title}
                  </h3>
                  <p className="text-dark">{page.whyUs_card2_description}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 pl-0 rounded-lg shadow hover:shadow-lg transition">
                <svg width="48" height="74">
                  <use href="/sprite.svg#CUBELOGO2" />
                </svg>
                <div>
                  <h3 className="font-semibold text-dark text-lg">
                    {page.whyUs_card3_title}
                  </h3>
                  <p className="text-dark">{page.whyUs_card3_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-3xl lg:text-[36px] xl:text-[48px] font-bold mb-8 text-center text-dark">
        {t("service_title")}
      </h2>
      <ServicesList services={services} />
      <section className="flex justify-center items-end w-full bg-[#0B63E5] -mt-[110px] lg:-mt-[144px] xl:-mt-[208px] h-[582px] lg:h-[672px] xl:h-[768px] overflow-x-clip">
        <div className="mb-12">
          <ReviewsList reviews={reviews} />
        </div>
      </section>
      <section className="mt-12 xl:mt-32">
        <ClientsSlider clients={clients} />
      </section>
      <section className="mt-24 xl:mt-32">
        <TeamList team={team} locale={locale} />
      </section>
      <h2 className="w-full max-w-[340px] lg:max-w-full text-4xl lg:text-5xl font-bold text-center text-[#001F54]  mt-12 xl:mt-32">
        {t("map_title")}
      </h2>
      <section className=" mx-auto w-full max-w-[376px] lg:max-w-[800px] h-[662px] lg:h-[644px] px-6 lg:px-10 xl:px-[160px] aspect-[376/500] lg:aspect-[800/450] relative">
        <Image
          src="/uploads/mapMobile.svg"
          alt="Карта"
          fill
          quality={100}
          className="lg:hidden object-contain"
          sizes="(min-width:1024px) 0px, 376px"
          priority
        />
        <Image
          src="/uploads/mapDesktop.svg"
          alt="Карта"
          fill
          quality={100}
          className="hidden lg:block object-contain"
          sizes="(min-width:1024px) 800px, 0px"
        />
      </section>
      <section className=" w-full mt-12 xl:mt-32">
        <ContactForm locale={locale} />
      </section>
    </div>
  );
}
