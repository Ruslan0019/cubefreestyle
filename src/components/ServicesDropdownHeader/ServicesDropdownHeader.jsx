"use client";

import { useState, useRef, useEffect } from "react";
import { Link } from "@/i18n/routing";

export default function ServicesDropdown({ services = [], locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const label = locale === "ru" ? "Услуги" : "Послуги";

  if (!services.length) return null;

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
    <div className="relative " ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex  items-baseline gap-2  text-gray-700 hover:text-primary active:scale-90 active:text-primary/80 transition-all duration-200 ease-in-out"
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
        <div className=" absolute left-0 mt-2 w-64 rounded-xl bg-white shadow-xl ring-1 ring-black/5 z-51 overflow-hidden">
          <ul className="max-h-72 overflow-y-auto custom-scrollbar py-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 active:scale-95 active:text-primary/80 transition-all duration-200 ease-in-out"
                  onClick={() => setOpen(false)}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>

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
