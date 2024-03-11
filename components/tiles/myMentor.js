import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { getUsers } from "../../utils_firebase/users";
import { useEffect, useState } from "react";
import Spinner from "../spinner";
import MyMentorsCard from "./myMentorsCard";
import { BsArrowRight } from "react-icons/bs";

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
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="px-6 lg:px-10">
        <div className="flex justify-between items-center py-10">
          <h2 className="text-lg md:text-xl xl:text-3xl font-bold text-text">My Mentors</h2>

          <button className="flex items-center gap-2 primary-button">
            Explore <span><BsArrowRight /></span>
          </button>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <MyMentorsCard />
          <MyMentorsCard />
          <MyMentorsCard />
          <MyMentorsCard />
        </div>
        {/* <div>
          <OwlCarousel
            className="owl-theme"
            loop
            dots={false}
            animateIn={true}
            {...options}
          >
            <MyMentorsCard />
          </OwlCarousel>
        </div> */}
      </div>
    </>
  );
};

export default MyMentor;
