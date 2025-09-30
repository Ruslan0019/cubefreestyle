import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import React from "react";

async function NotFound() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col items-center min-h-[90vh] px-4 justify-center ">
      <div className="relative w-[290px] h-[153px] lg:w-[520px] lg:h-[275px] mb-[21px]">
        <Image
          src="/assets/images/404.webp"
          alt="404"
          fill
          className="object-contain"
        />
      </div>
      <h2 className="text-black leading-[32px] lg:leading-10 text-[22px] lg:text-4xl w-[215px] lg:w-[361px] text-center mb-6 font-bold">
        {/* Упс, такої сторінки не існує… */}
        {t("NotFound.title")}
      </h2>
      <Link
        href="/"
        className="bg-primary text-[18px] leading-[22px] lg:leading-6 hover:bg-primary-hover px-[17px] py-3 rounded-sm text-lg font-semibold cursor-pointer"
      >
        {/* Повернутись на головну сторінку */}
        {t("NotFound.button")}
      </Link>
    </div>
  );
}

export default NotFound;
