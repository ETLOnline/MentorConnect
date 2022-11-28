import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getAllMentors } from "../../proxyLayer/api-util";
import Card from "./card";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

// let productsp = [
//   {
//     id: 1,
//     name: "Casy Martha",
//     brand: "Brand Name",
//     url: "products-number-1",
//     price: 100,
//     img: "./img/Image (13).png",
//   },
//   {
//     id: 2,
//     name: "Jay jom",
//     brand: "Brand Name",
//     url: "products-number-1",
//     price: 100,
//     img: "./img/Image (14).png",
//   },
//   {
//     id: 3,
//     name: "Lily olsan",
//     brand: "Brand Name",
//     url: "products-number-1",
//     price: 100,
//     img: "./img/Image (8).png",
//   },
//   {
//     id: 4,
//     name: "Casy Martha",
//     brand: "Brand Name",
//     url: "products-number-1",
//     price: 100,
//     img: "./img/Image (7).png",
//   },
//   {
//     id: 5,
//     name: "Product Number 1",
//     brand: "Brand Name",
//     url: "products-number-1",
//     price: 100,
//     img: "./img/Image (4).png",
//   },
// ];

const FeatureMentor = () => {
  // get the mentors here

  const Mentors = getAllMentors();

  const options = {
    margin: 10,
    responsiveClass: true,
    // nav: true,
    // dots: true,
    autoplay: true,
    smartSpeed: 1000,
    navClass: ["owl-prev", "owl-next"],
    // navText: [
    //   '<i class="fas fa-angle-left"></i>',
    //   '<i class="fas fa-angle-right"></i>',
    // ],
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
        items: 4,
      },
    },
  };
  return (
    <Fragment>
      <h2 className="text-3xl px-2 mt-6 font-bold"> FeatureMentor</h2>
      <OwlCarousel
        className="owl-theme"
        loop
        // margin={4}
        dots={false}
        animateIn={true}
        {...options}
      >
        <Card Mentors={Mentors} />
      </OwlCarousel>
    </Fragment>
  );
};

export default FeatureMentor;
