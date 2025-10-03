import { getTranslations } from "next-intl/server";
import { getPage } from "../../../lib/md";
import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

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
    description: page.description_seo, // CMS
    openGraph: {
      type: "website",
      siteName: "Cube Freestyle",
      title: page.title_seo, // CMS
      description: page.description_seo, // CMS
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
  const t = await getTranslations({ locale, namespace: "HomePage" });
  const page = await getPage("home", locale);

  return (
    <>
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

        <div className=" w-[375px] lg:w-[1024px] xl:w-[1440px] px-6 lg:px-10 xl:px-[160px] mx-auto">
          <div className="relative text-center   lg:text-left z-10  text-white w-[327px] lg:w-[566px]  ">
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
      <section className="w-[375px] lg:w-[1024px] xl:w-[1440px] pt-16 lg:pt-24 xl:pt-32 px-6 lg:px-10 xl:px-[160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-[120px] items-center text-black">
        <div className="max-w-[343px] lg:max-w-[944px] xl:max-w-[1136px] mx-auto ">
          <h2 className="text-3xl font-bold mb-6">{page.about_title}</h2>
          <div
            className="prose prose-lg max-w-none flex
          flex-col gap-2"
          >
            <ReactMarkdown>{page.about_description}</ReactMarkdown>
          </div>
        </div>
        <div className="lg:w-[422px] lg:h-[486px] xl:w-[422px] xl:h-[486px]">
          <Image
            width={343}
            height={395}
            src="/uploads/SoccerBall.webp"
            alt="Футбольний м’яч"
            className="rounded-lg"
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
            <h2 className="text-3xl text-dark font-bold mb-8">Чому ми?</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 bg-white p-6 pl-0 rounded-lg shadow hover:shadow-lg transition">
                <svg width="48" height="74">
                  <use href="/sprite.svg#CUBELOGO2" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg text-dark">
                    Вражаюче шоу
                  </h3>
                  <p className="text-dark">
                    Вдало підібрані трюки з м’ячем захоплюють увагу з перших
                    секунд.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 pl-0 rounded-lg shadow hover:shadow-lg transition">
                <svg width="48" height="74">
                  <use href="/sprite.svg#CUBELOGO2" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg text-dark">
                    Інтерактив з глядачами
                  </h3>
                  <p className="text-dark">
                    Публіка стає частиною виступу, що робить шоу ще яскравішим.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-6 pl-0 rounded-lg shadow hover:shadow-lg transition">
                <svg width="48" height="74">
                  <use href="/sprite.svg#CUBELOGO2" />
                </svg>
                <div>
                  <h3 className="font-semibold text-dark text-lg">
                    Гнучкий формат
                  </h3>
                  <p className="text-dark">
                    Виступ адаптується під будь-яку подію та аудиторію.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
