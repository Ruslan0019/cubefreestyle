"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ClientsSlider({ clients }) {
  return (
    <Swiper
      className="w-full max-w-[375px] lg:max-w-[1024px] xl:max-w-[1440px] mx-auto"
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
            className="object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
