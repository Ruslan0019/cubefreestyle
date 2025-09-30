import { getTranslations } from "next-intl/server";
import { getPage } from "../../../lib/md";
import React from "react";

export default async function HomePage(props) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "HomePage" });
  const page = await getPage("home", locale);

  return (
    <>
      <section className="relative justify-center lg:justify-start w-full h-[700px] lg:h-[680px] xl:h-[780px] flex items-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/freestyle.webm"
          autoPlay
          loop
          suppressHydrationWarning
          muted
          playsInline
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

        <div className=" w-[375px] lg:w-[1024px] xl:w-[1440px] px-6 lg:px-10 xl:px-[160px] mx-auto">
          <div className="relative text-center   lg:text-left z-10  text-white w-[327px] lg:w-[566px]  ">
            <h1 className="text-4xl lg:text-5xl font-bold mb-10">
              {page.hero_content}
            </h1>
            <button className="bg-primary hover:bg-primary-hover px-8 py-4 rounded-sm text-lg font-semibold cursor-pointer transition-transform duration-200 hover:scale-105">
              {t("button")}
            </button>
          </div>
        </div>
      </section>

      <h1 className="text-black">{t("title")}</h1>
    </>
  );
}
