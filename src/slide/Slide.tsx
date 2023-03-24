'use client'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiper-styles.css";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <p className="text-center text-white text-sm m-4">
            « Nous avons fait appel à la société QCD transport pour une livraison en urgence en Seine 
            et Marne (77). La réactivité et le souci de satisfaire notre client ont été les facteurs 
            clés lors de cette collaboration. »</p>
            <p className="text-center mt-5 text-white">
            David LENOBLE - secteur BTP
            </p>
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-center text-white text-sm m-4">
        « Le service sur mesure est selon moi la réelle valeur ajoutée de QCD Transport. 
        Dans le cadre d’un déménagement nous avons pu compter sur la souplesse et l’implication de la 
        société pour optimiser l’organisation de notre déménagement. »</p>
            <p className="text-center mt-5 text-white">
            Alexis - Etudiant
            </p>
        </SwiperSlide>
        <SwiperSlide>
        <p className="text-center text-white text-sm m-4">
        « Notre client (laboratoire) nous a recommandé de solliciter QCD pour une livraison en express. 
        Malgré l’urgence, nous avons pu nous entendre sur un prix compétitif et une livraison dans les temps. 
        Nul doute que nous ferons de nouveau appel à cette société. » </p>
            <p className="text-center mt-5 text-white">
            Sabrina GERARD - secteur pharmaceutique
            </p>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
