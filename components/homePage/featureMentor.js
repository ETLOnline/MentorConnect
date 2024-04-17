import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import MentorCard from "./mentorCard";
import { getUsers } from "../../utils_firebase/users";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Spinner from "../spinner";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import CustomButton from "../ui/custom/custom-button";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const FeatureMentor = () => {
  const [mentors, setMentors] = useState(false);

  useEffect(() => {
    async function name() {
      const users = await getUsers();
      setMentors(users);
    }
    name();
  }, []);

  if (!mentors) {
    return <Spinner />;
  }

  const options = {
    margin: 10,
    responsiveClass: true,
    // nav: true,
    dots: true,
    // autoplay: true,
    // smartSpeed: 1000,
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
      768: {
        items: 2,
      },
      950: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  };

  return (
    <Fragment>
      <div className="text-primary" >
        <div className="flex justify-between items-center py-10">
          <h2 className="text-lg md:text-xl xl:text-3xl font-bold">Featured Mentors</h2>
          <CustomButton variant="outline" icon={<ArrowRightIcon />}>
            Find a Mentor
          </CustomButton>
        </div>

        <OwlCarousel
          className="owl-theme my-10"
          loop
          dots={true}
          animateIn={true}
          {...options}
        >
          <MentorCard mentors={mentors} />
        </OwlCarousel>
      </div>
    </Fragment>
  );
};

export default FeatureMentor;
