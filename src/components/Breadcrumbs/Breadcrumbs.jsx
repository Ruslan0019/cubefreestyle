"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const t = useTranslations("Breadcrumbs");

  const segments = pathname
    .split("/")
    .filter((seg) => seg && seg !== "uk" && seg !== "ru");

  if (segments.length === 0) return null;

  const mainSection = segments[0];

  return (
    <nav className="text-sm text-[#838E9E] flex gap-2 flex-wrap w-full max-w-[343px] lg:max-w-[944px] xl:max-w-[1120px] lg:m-auto">
      <Link href="/" className="hover:text-[#0B63E5] transition">
        {t("home")}
      </Link>

      <span className="flex items-center gap-2">
        <span>/</span>
        <span className="text-[#02142E] font-semibold">
          {t(mainSection) || mainSection}
        </span>
      </span>
    </nav>
  );
}
