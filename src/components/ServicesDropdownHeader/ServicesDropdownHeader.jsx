"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "@/i18n/routing";

export default function ServicesDropdown({ services = [], locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const label = locale === "ru" ? "Услуги" : "Послуги";

  if (!services.length) return null;

  // Закрыть по клику вне дропдауна
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (!ref.current) return;
      if (!ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 text-sm lg:text-base font-medium text-gray-700 hover:text-primary transition"
      >
        <span>{label}</span>
        <span
          className={`text-xs transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-64 rounded-xl bg-white shadow-xl ring-1 ring-black/5 z-50 overflow-hidden">
          {/* скролл со скруглением по правому краю */}
          <ul className="max-h-72 overflow-y-auto custom-scrollbar py-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Локальные стили только для этого компонента */}
          <style jsx>{`
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: #d1d5db transparent; /* Firefox */
            }

            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #d1d5db;
              border-radius: 9999px; /* полный овал по краю */
            }

            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #9ca3af;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
