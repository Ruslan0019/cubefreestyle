"use client";

import { Link } from "@/i18n/routing";
import { useState } from "react";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { useTranslations } from "use-intl";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navigations");

  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto w-full max-w-[375px] lg:max-w-[1024px] xl:max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-[160px] py-3 lg:py-4">
        {/* ДЕСКТОП ХЕДЕР */}
        <div className="hidden lg:flex items-center justify-between">
          {/* ЛОГО */}
          <Link
            href="/"
            className="flex items-center space-x-2 transition-transform duration-200 hover:scale-110"
          >
            <svg width="80" height="48">
              <use href="/sprite.svg#CubeLogo" />
            </svg>
          </Link>

          {/* ДЕСКТОП МЕНЮ */}
          <nav className="flex-1 items-center justify-center space-x-6 flex ">
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-transform duration-200 hover:scale-105"
            >
              {t("about")}
            </Link>

            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-primary transition-transform duration-200 hover:scale-105"
            >
              {t("portfolio")}
            </Link>
            <Link
              href="/clients"
              className="text-gray-700 hover:text-primary transition-transform duration-200 hover:scale-105"
            >
              {t("clients")}
            </Link>
            <Link
              href="/contacts"
              className="text-gray-700 hover:text-primary transition-transform duration-200 hover:scale-105"
            >
              {t("contacts")}
            </Link>
          </nav>

          {/* КОНТАКТЫ / ЯЗЫК */}
          <div className="items-center space-x-4 flex">
            <a href="tel:+380505926134" className="text-gray-700 text-sm">
              +38 (050) 592 61 34
            </a>
            <a
              href="https://t.me/alive_now"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-115"
            >
              <svg width="24" height="24">
                <use href="/sprite.svg#telegram" />
              </svg>
            </a>
            <a
              href="https://connect.viber.com/business/fcceef18-9c6b-11f0-a222-46fc2ffa8d57"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-115"
            >
              <svg width="24" height="24">
                <use href="/sprite.svg#viber" />
              </svg>
            </a>

            <LangSwitcher />
          </div>
        </div>

        {/* МОБИЛЬНЫЙ ХЕДЕР */}
        <div className="grid grid-cols-3 items-center lg:hidden">
          {/* СЛЕВА: бургер */}
          <div className="flex justify-start">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#02142E"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#02142E"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* ЦЕНТР: логотип */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <svg
                className="w-20 h-12"
                viewBox="0 0 80 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#0B63E5"
                  d="M.002 43.729h79.996V48H.002v-4.271ZM.002 0h79.996v4.271H.002V0Z"
                />
                <path
                  fill="#02142E"
                  d="M58.486 7.174c1.489.203 2.146 1.375 2.235 2.773.22 3.467-.164 7.18-.013 10.672-.116.97-.772 1.303-1.569 1.655l-2.632.959c.985.343 2.102.634 3.053 1.046.682.295 1.175.666 1.245 1.471.354 4.072-.264 8.68-.014 12.807.027 1.013-1.277 2.274-2.221 2.274H44.802V7.174h13.684Zm-1.39 2.648h-8.673v12.13h5.179c.17 0 2.561-1.501 2.933-1.722.17-.102.365-.207.561-.242V9.822Zm.085 28.361v-11.66l-3.58-2.008h-5.178v13.668h8.758ZM25.603 7.174v31.009h9.347V7.174h3.536V38.91c0 .774-1.467 1.926-2.24 1.913-3.804-.232-8.028.34-11.783.012-1.259-.11-2.481-1.066-2.481-2.438V7.174h3.62Zm-9.6 10.166h-3.62V9.822H3.624v28.36h8.757v-8.2h3.621v8.67c0 1.033-1.354 2.1-2.325 2.17-3.613-.22-7.625.324-11.193.012-1.474-.129-2.488-1.17-2.485-2.69V9.776c.115-1.548.91-2.348 2.405-2.601 3.585.263 7.67-.355 11.197 0 1.006.101 2.401 1.065 2.401 2.177v7.988ZM79.832 7.174v2.648h-9.347V22.38h8.505v2.648h-8.505v13.155H80v2.648H66.864V7.174h12.968Z"
                />
              </svg>
            </Link>
          </div>

          {/* СПРАВА: телефон или язык */}
          <div className="flex justify-end">
            {isOpen ? (
              <LangSwitcher />
            ) : (
              <a href="tel:+380505926134">
                <svg width="40" height="40">
                  <use href="/sprite.svg#phone" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* МОБИЛЬНОЕ МЕНЮ */}
      {isOpen && (
        <div className="flex flex-col justify-center items-center lg:hidden border-t bg-white px-4 py-2 space-y-2">
          <Link
            href="/about"
            className="block text-gray-700 hover:text-primary"
          >
            {t("about")}
          </Link>
          <Link
            href="/portfolio"
            className="block text-gray-700 hover:text-primary"
          >
            {t("portfolio")}
          </Link>
          <Link
            href="/clients"
            className="block text-gray-700 hover:text-primary"
          >
            {t("clients")}
          </Link>
          <Link
            href="/contacts"
            className="block text-gray-700 hover:text-primary"
          >
            {t("contacts")}
          </Link>
        </div>
      )}
    </header>
  );
}
