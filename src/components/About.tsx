import React from "react";
import FadeSlide from "./Fade";
import FadeSlideA from "./FadeA";
import FadeSlideB from "./FadeB";


export default function About() {
  return (
    <>
      <div className="w-full sm:w-full max-w-full about-bg mt-10 border border-gray shadow-lg shadow-gray-500/50">
        <div className="flex flex-wrap justify-between items-center p-5 md:p-10">
          <div className="parent ">
            <div className="div1">
             <FadeSlide/>
             <FadeSlideA/>
            <FadeSlideB/>
             </div>
             <div className="div2">
             
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
