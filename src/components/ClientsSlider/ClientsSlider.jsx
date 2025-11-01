"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "next-intl";

export default function ClientsSlider({ clients }) {
  const t = useTranslations();
  return (
    <div>
      <h2 className="text-4xl lg:text-5xl  font-bold text-center text-[#001F54] mb-8 lg:mb-14">
        {t("ClientsSlider.title")}
      </h2>
      <Swiper
        className=" max-w-[375px] lg:max-w-[1024px] xl:max-w-[1440px]  mx-auto"
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={4000}
        loop
        slidesPerView="auto"
        spaceBetween={30}
      >
        {clients.map((client, i) => (
          <SwiperSlide key={i} style={{ width: "auto" }}>
            <Image
              src={client.image}
              alt={client.alt}
              width={120}
              height={60}
              priority
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
