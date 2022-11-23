import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

let productsp = [
  {
    id: 1,
    name: "Casy Martha",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    img: "./img/Image (13).png",
  },
  {
    id: 2,
    name: "Jay jom",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    img: "./img/Image (14).png",
  },
  {
    id: 3,
    name: "Lily olsan",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    img: "./img/Image (8).png",
  },
  {
    id: 4,
    name: "Casy Martha",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    img: "./img/Image (7).png",
  },
  {
    id: 5,
    name: "Product Number 1",
    brand: "Brand Name",
    url: "products-number-1",
    price: 100,
    img: "./img/Image (4).png",
  },
];

const FeatureMentor = () => {
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
        {productsp && productsp.length > 0
          ? productsp.map((product) => {
              return (
                <Fragment key={product.id}>
                  <div id="featuredProducts" className=" mb-8 m-2 w-100">
                    <div class=" px-2 py-11 w-full  ">
                      <div class="relative group">
                        <div class="">
                          <img
                            src={product.img}
                            alt="IMG"
                            className="w-[21.11%] h-[53.1%]"
                          />
                        </div>

                        <div class="absolute w-full top-0 right-0 bottom-0 left-0 h-full overflow-hidden bg-fixed bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(36,36,36,0.3)] rounded-xl opacity-50 "></div>
                        <div class="flex flex-col w-[90%] ml-4 absolute group-hover:-translate-y-10 group-hover:duration-1000 transition-all duration-1000 top-[286px]  transition-all hover:duration-1000">
                          <div class="flex justify-between ">
                            <p class="text-[20px] text-[#FFFFFF] leading-[23px] font-normal font-['Raleway']">
                              Tom Jonex
                            </p>
                            <p class="text-[20px] text-[#FFFFFF] leading-[23px] font-['Raleway']">
                              200+ Hrs
                            </p>
                          </div>
                          <div class=" flex text-[16px] text-[#FFFFFF] leading-[19px]  font-['Raleway'] mt-3">
                            <div class="h-5 w-5">
                              <img
                                src="./img/icons8-speech-24_1.png"
                                alt="img"
                              />
                            </div>
                            <p>UI/UX Design & Job Hunting</p>
                          </div>
                        </div>
                        <div class="absolute w-[12.96%] h-[9%] top-[9px] right-[6%]  ">
                          <img src="./img/Path.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })
          : ""}
      </OwlCarousel>
    </Fragment>
  );
};

export default FeatureMentor;
