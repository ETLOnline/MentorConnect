import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsArrowRight } from "react-icons/bs";
import VideoCardItem from "./videoCardItem";
import { getAllPastSessionsWithLink } from "../../utils_firebase/sessions";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const VideoCard = () => {
  const [pastSessions, setPastSessions] = useState([]);

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
    margin: 10,
    responsiveClass: true,
    // nav: true,
    dots: true,
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

  useEffect(() => {
    getAllPastSessionsWithLink().then((data) => {
      setPastSessions(data);
    });
  }, []);
  return (
    <div className="text-primary">
      <div className="flex justify-between items-center py-10">
        <h2 className="text-lg md:text-xl xl:text-3xl font-bold text-text">Past Sessions</h2>
        <Link href={"/pastSessions"} >
          <Button variant="outline">
            Explore <ArrowRightIcon className="ml-2" />
          </Button>
        </Link>
      </div>

      <OwlCarousel
        className="owl-theme"
        loop
        dots={false}
        animateIn={true}
        {...options}
      >
        {pastSessions.length > 0 &&
          pastSessions
            .map((pastSession) => (
              <VideoCardItem
                key={Math.random()}
                link={pastSession.videoUrl}
                title={pastSession.title}
                instructorName={pastSession.instructor.summry.displayName}
                instructorImage={pastSession.instructor.summry.image}
              />
            ))}
      </OwlCarousel>
    </div>
  );
};

export default VideoCard;
