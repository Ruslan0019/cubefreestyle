import React from "react";
import { getPage } from "../../../../lib/md";
import ReactMarkdown from "react-markdown";
import { getLocale } from "next-intl/server";

export const revalidate = false;
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "uk" }, { locale: "ru" }];
}

export default async function TeremsOfUse({ params }) {
  const { locale } = await params;
  const page = await getPage("terms", locale);
  const localei18n = await getLocale();
  console.log(localei18n);
  return (
    <section className="text-dark  w-[375px] lg:w-[1024px] xl:w-[1440px] px-6 lg:px-10 xl:px-[160px] mx-auto">
      <h1
        className="
     text-[36px] lg:text-[48px] xl:text-[62px] leading-[40px] lg:leading-[56px] xl:leading-[72px] font-bold text-center  mt-[62px]"
      >
        {page.title}
      </h1>
      <div className="flex flex-col gap-6 font-normal text-lg leading-6 mt-[58px] mb-[128px]">
        <ReactMarkdown>{page.content}</ReactMarkdown>
      </div>
    </section>
  );
}
