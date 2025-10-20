"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  const t = useTranslations();

  return (
    <footer className="bg-dark w-full">
      <div
        className="
          px-4 lg:px-10 xl:px-40 mx-auto
          w-full max-w-[1440px]
          mt-12 flex flex-col lg:justify-between items-center lg:flex-row lg:gap-16
        "
      >
        {/* Лого */}
        <Link
          className="transition-transform duration-200 hover:scale-110"
          href="/"
        >
          <svg width="48" height="74">
            <use href="/sprite.svg#CubeFooter" />
          </svg>
        </Link>

        {/* Навигация */}
        <nav
          className="grid grid-rows-6 gap-y-3 mt-6 text-2xl text-center lg:text-start mb-6 
                     lg:grid-flow-col lg:grid-rows-3 lg:gap-x-32"
        >
          <Link
            className="transition-transform hover:scale-105 text-white text-lg font-normal leading-6"
            href="/about"
          >
            {t("Navigations.about")}
          </Link>
          <Link
            className="transition-transform hover:scale-105 text-white text-lg font-normal leading-6"
            href="/portfolio"
          >
            {t("Navigations.portfolio")}
          </Link>
          <Link
            className="transition-transform hover:scale-105 text-white text-lg font-normal leading-6"
            href="/clients"
          >
            {t("Navigations.clients")}
          </Link>
          <Link
            className="transition-transform hover:scale-105 text-white text-lg font-normal leading-6"
            href="/contacts"
          >
            {t("Navigations.contacts")}
          </Link>
          <Link
            className="transition-transform hover:scale-105 text-white text-lg font-normal leading-6"
            href="/privacy-policy"
          >
            {t("Navigations.privacy-policy")}
          </Link>
          <Link
            className="transition-transform hover:scale-105 text-white text-lg font-normal leading-6"
            href="/terms-of-use"
          >
            {t("Navigations.terms-of-use")}
          </Link>
        </nav>

        {/* Контакты */}
        <address className="mb-8">
          <div className="mb-4">
            <a
              href="tel:+380505926134"
              className="text-white text-lg font-normal leading-6"
            >
              +38 (050) 592 61 34
            </a>
          </div>
          <div className="flex flex-row justify-center gap-4">
            <a
              className="transition-transform hover:scale-115"
              target="_blank"
              href="https://www.instagram.com/cubefreestyleteam"
            >
              <svg width="44" height="44">
                <use href="/sprite.svg#instagramIcon" />
              </svg>
            </a>
            <a
              className="transition-transform hover:scale-115"
              target="_blank"
              href="https://www.youtube.com/@CUBEFreestyleTeam"
            >
              <svg width="44" height="44">
                <use href="/sprite.svg#youtubeIcon" />
              </svg>
            </a>
          </div>
        </address>
      </div>

      {/* Copyright */}
      <p className="py-4 border-t border-[#F4F7FA33] w-full text-center text-white/60 text-sm px-4">
        <span className="mr-2">{date}</span>
        {t("Footer.copyright")}
      </p>
    </footer>
  );
}

export default Footer;
