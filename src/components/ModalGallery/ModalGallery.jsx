"use client";
import React, { useState, useEffect, useMemo } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GalleryModal({ images }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open]);

  const galleryItems = useMemo(
    () =>
      Array.isArray(images)
        ? images.map((url) => ({
            original: url,
            thumbnail: url,
          }))
        : [],
    [images]
  );

  return (
    <>
      {/* Превью-карточка */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer w-[300px] rounded-[8px] overflow-hidden"
      >
        ыпыпуцыуп
      </div>

      {/* Модалка */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-[12px] p-[8px] w-full max-w-[800px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Крестик */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-[10px] right-[10px] text-[#02142E] text-[28px] font-bold hover:text-[#0B63E5] transition z-[60]"
              aria-label="Закрити"
            >
              ×
            </button>

            {/* Галерея */}
            <ImageGallery
              items={galleryItems}
              showPlayButton={false}
              showFullscreenButton={false}
              showIndex={false}
              thumbnailPosition="bottom"
            />
          </div>
        </div>
      )}
    </>
  );
}
