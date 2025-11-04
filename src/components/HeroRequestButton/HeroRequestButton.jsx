"use client";

import { useState } from "react";
import RequestShowModal from "@/components/RequestShowModal/RequestShowModal";

export default function HeroRequestButton({ label, servicesData }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-primary hover:bg-primary-hover px-8 py-4 rounded-sm text-lg font-semibold transition-transform duration-200 hover:scale-105"
      >
        {label}
      </button>

      <RequestShowModal
        isOpen={open}
        onClose={() => setOpen(false)}
        servicesData={servicesData}
      />
    </>
  );
}
