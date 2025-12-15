"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { ReactNode, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface GeneralSwiperProps {
  children: ReactNode;
  slidesPerView?: number | { [key: number]: number };
  spaceBetween?: number;
  autoplay?: boolean | { delay: number; disableOnInteraction: boolean };
  loop?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  className?: string;
}

export function GeneralSwiper({
  children,
  slidesPerView = 1,
  spaceBetween = 20,
  autoplay = false,
  loop = true,
  navigation = true,
  pagination = true,
  className = "",
}: GeneralSwiperProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const breakpoints =
    typeof slidesPerView === "object"
      ? Object.entries(slidesPerView).reduce(
          (accumulator, [key, value]) => {
            accumulator[Number.parseInt(key)] = { slidesPerView: value };
            return accumulator;
          },
          {} as { [key: number]: { slidesPerView: number } },
        )
      : {
          640: {
            slidesPerView: Math.min(2, slidesPerView as number),
          },
          1024: {
            slidesPerView: slidesPerView,
          },
        };

  return (
    <div
      className={`relative w-full ${className} [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        autoplay={
          autoplay
            ? {
                delay: 5000,
                disableOnInteraction: false,
                ...(typeof autoplay === "object" ? autoplay : {}),
              }
            : false
        }
        loop={loop}
        navigation={
          navigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        pagination={
          pagination
            ? {
                clickable: true,
                el: ".swiper-pagination",
                bulletActiveClass: "bg-primary",
              }
            : false
        }
        breakpoints={breakpoints}
        onSwiper={setSwiper}
        className="py-12"
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      {pagination && <div className="swiper-pagination mt-4"></div>}
      {navigation && (
        <>
          <div
            className="swiper-button-prev bg-background/60 text-foreground hover:bg-accent hover:text-accent-foreground focus:ring-accent absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full p-2 shadow-lg focus:ring-2 focus:outline-none"
            onClick={() => swiper?.slidePrev()}
            role="button"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-6" />
          </div>
          <div
            className="swiper-button-next bg-background/60 text-foreground hover:bg-accent hover:text-accent-foreground focus:ring-accent absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full p-2 shadow-lg focus:ring-2 focus:outline-none"
            onClick={() => swiper?.slideNext()}
            role="button"
            aria-label="Next slide"
          >
            <ChevronRight className="size-6" />
          </div>
        </>
      )}
    </div>
  );
}
