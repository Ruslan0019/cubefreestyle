"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ReviewsList({ reviews = [] }) {
  return (
    <section className="flex items-end w-full bg-[#0B63E5] -mt-[110px] lg:-mt-[144px] xl:-mt-[208px] h-[582px] lg:h-[672px] xl:h-[768px]">
      <div className=" w-[375px] lg:w-[800px] xl:w-[1104px] mx-auto flex flex-col items-center gap-8 lg:gap-14 px-4 lg:px-0 py-12 pt-24 xl:pt-32 ">
        <h2 className="text-white font-bold text-[36px] leading-[40px] text-center lg:text-[48px] lg:leading-[56px]">
          Відгуки
        </h2>

        <div className="w-full relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".reviews-prev",
              nextEl: ".reviews-next",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!px-0"
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i} className="!flex !justify-center">
                <div className="w-[343px] lg:w-[352px] h-[216px] bg-white rounded-[4px] shadow-[0px_4px_24px_rgba(20,25,26,0.12)] p-8 flex flex-col justify-center gap-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <Image
                        src={r.photo}
                        alt={r.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <p className="text-[#02142E] font-semibold text-[18px] leading-[24px]">
                        {r.name}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg
                          key={idx}
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill={idx < (r.rating ?? 5) ? "#0B63E5" : "#E5E7EB"}
                        >
                          <path d="M12 2l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.77 6.2 19.86l1.1-6.46-4.7-4.58 6.49-.94L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-[18px] leading-[24px] text-[#02142E] opacity-80">
                    {r.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-4 lg:mt-8 w-full flex justify-center gap-12">
            <button type="button" className="reviews-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button type="button" className="reviews-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
