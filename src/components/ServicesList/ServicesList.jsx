"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ServicesList({ services = [] }) {
  return (
    <section className="w-full flex flex-col justify-center px-6 lg:px-4 xl:px-3.5 py-12 mx-auto">
      <h2 className="text-3xl lg:text-[36px] xl:text-[48px] font-bold mb-8 text-center text-dark">
        Наші послуги
      </h2>

      {/* 📱 Мобилка — Swiper */}
      <div className="block lg:hidden w-full">
        <Swiper spaceBetween={16} slidesPerView={"auto"} className="!px-1">
          {services.map((service) => (
            <SwiperSlide
              key={service.slug}
              className="!w-[220px] !h-[220px] relative rounded-sm overflow-hidden"
            >
              <Link href={`/services/${service.slug}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-[138px] bg-gradient-to-b from-transparent to-black/90" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-semibold text-[18px] leading-[24px] mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-[18px] opacity-80">
                    {service.short_description}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 💻 Планшет */}
      <div className="hidden lg:flex xl:hidden flex-wrap justify-center gap-4 w-full max-w-[992px] mx-auto">
        {services.map((service) => (
          <Link
            href={`/services/${service.slug}`}
            key={service.slug}
            className="relative flex-1 basis-[30%] h-[320px] min-w-[300px] rounded-sm overflow-hidden group"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-b from-transparent to-black/90" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="font-bold text-[22px] leading-[32px] mb-2">
                {service.title}
              </h3>
              <p className="text-[18px] leading-[24px] opacity-80">
                {service.short_description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* 🖥️ Десктоп */}
      <div className="hidden xl:flex flex-wrap justify-center gap-4 w-full max-w-[1394px] mx-auto">
        {services.map((service) => (
          <Link
            href={`/services/${service.slug}`}
            key={service.slug}
            className="relative flex-1 basis-[30%] h-[454px] w-[454px] rounded-sm overflow-hidden group"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full h-[226px] bg-gradient-to-b from-transparent to-black/90" />
            <div className="absolute bottom-[32px] left-[32px] right-[32px] text-white">
              <h3 className="font-bold text-[22px] leading-[32px] mb-2">
                {service.title}
              </h3>
              <p className="text-[18px] leading-[24px] opacity-80">
                {service.short_description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
