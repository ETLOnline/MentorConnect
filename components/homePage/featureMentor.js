import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "./card";
import { getUsers } from "../../utils_firebase/users";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Spinner from "../spinner";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const FeatureMentor = () => {
  const [Mentors, setMentors] = useState(false);
  // const Mentors = getAllMentors();
  useEffect(() => {
    async function name() {
      const users = await getUsers();
      // console.log(users);
      setMentors(users);
    }
    name();
  }, []);

  if (!Mentors) {
    return <Spinner />;
  }

  // console.log(Mentors, "Mentorssssssssssssssssssssssssssssssssssss");

  const options = {
    margin: 10,
    responsiveClass: true,
    // nav: true,
    // dots: true,
    autoplay: true,
    smartSpeed: 1000,
    // navClass: ["owl-prev", "owl-next"],
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
      768: {
        items: 2,
      },
      950: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <Fragment>
      <div className="px-6">
        <div className="flex justify-between items-center py-10">
          <h2 className="text-lg md:text-xl xl:text-3xl font-bold">Featured Mentors</h2>

          <button className="flex items-center gap-2 primary-button">
            Explore <span><BsArrowRight /></span>
          </button>

        </div>
        <OwlCarousel
          className="owl-theme"
          loop
          dots={false}
          animateIn={true}
          {...options}
        >
          <Card mentors={Mentors} />
        </OwlCarousel>
      </div>
    </Fragment>
  );
};

export default FeatureMentor;
