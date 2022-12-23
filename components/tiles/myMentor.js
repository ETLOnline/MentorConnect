import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { getUsers } from "../../utils_firebase/users";
import { useEffect, useState } from "react";
import Spinner from "../spinner";
import MyMentorsCard from "./myMentorsCard";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const MyMentor = () => {
  const options = {
    margin: 10,
    responsiveClass: true,
    // nav: true,
    // dots: true,
    autoplay: true,
    smartSpeed: 1000,
    // navClass: ["owl-prev", "owl-next"],
    // // navText: [
    // //   '<i class="fas fa-angle-left"></i>',
    // //   '<i class="fas fa-angle-right"></i>',
    // // ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <>
      <div className="ml-[62px] my-[64px]">
        <div className="flex justify-between ml-6 mb-[30px] mr-[64px]">
          <h2 className="text-3xl   font-bold"> MyMentors</h2>
          <div className="flex gap-2 justify-between items-center ">
            <p className="text-[20px] text-[#909090] leading-[23px] ">
              Explore
            </p>
            <img
              src="/img/Arrow.png"
              alt="Arrow Image"
              className="object-cover mt-[6px]"
            />
          </div>
        </div>
        <OwlCarousel
          className="owl-theme"
          loop
          dots={false}
          animateIn={true}
          {...options}
        >
          <MyMentorsCard />
          <MyMentorsCard />
          <MyMentorsCard />
          <MyMentorsCard />
          <MyMentorsCard />
          <MyMentorsCard />
          <MyMentorsCard />
          <MyMentorsCard />
        </OwlCarousel>
      </div>
    </>
  );
};

export default MyMentor;
