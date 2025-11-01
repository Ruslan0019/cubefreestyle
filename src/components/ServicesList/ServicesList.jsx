"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ServicesList({ services = [] }) {
  return (
    <section className="w-full flex flex-col justify-center px-6 lg:px-4 xl:px-3.5  mx-auto">
      <div className="block lg:hidden w-full">
        <Swiper spaceBetween={16} slidesPerView={"auto"} className="!px-1">
          {services.map((service) => (
            <SwiperSlide
              key={service.slug}
              className="!w-[220px] !h-[220px] relative rounded-sm overflow-hidden"
            >
              <Link href={`/${service.slug}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 220px, (max-width: 1440px) 320px, 454px"
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

      <div className="hidden lg:flex flex-wrap justify-center gap-4 w-full mx-auto max-w-[992px] xl:max-w-[1394px]">
        {services.map((service) => (
          <Link
            href={`/${service.slug}`}
            key={service.slug}
            className="relative min-w-[220px] min-h-[220px] lg:min-w-[320px] lg:min-h-[320px] xl:min-w-[454px] xl:min-h-[454px] rounded-sm overflow-hidden group"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 220px, 320px"
            />
            <div className="absolute bottom-0 left-0 w-full h-[160px] xl:h-[226px] bg-gradient-to-b from-transparent to-black/90" />
            <div className="absolute bottom-6 xl:bottom-[32px] left-6 xl:left-[32px] right-6 xl:right-[32px] text-white">
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
