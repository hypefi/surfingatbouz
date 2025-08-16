'use client';

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// Import custom carousel styles
import './carousel.css';

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

const HeroCarousel = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="hero-carousel relative w-screen h-full">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="relative z-30 w-full">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-carousel relative w-screen h-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="swiper w-screen"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide w-screen">
            <div className="relative w-screen h-full">
              <Image
                src={image}
                alt={`Surf background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Content container with higher z-index */}
      <div className="relative z-30 w-full h-full flex items-center justify-center">{children}</div>
    </div>
  );
};

export default HeroCarousel; 