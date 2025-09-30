import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  return (
    <select
      className="text-gray-700 cursor-pointer"
      value={locale}
      onChange={(e) => switchLocale(e.target.value)}
    >
      <option value="uk">UK</option>
      <option value="ru">RU</option>
    </select>
  );
}
