import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-primary gradient-bg p-6 md:px-10" >

        <div className="md:min-h-[150px] grid gap-6 md:gap-0 md:grid-cols-9 py-4">

          <div className="md:col-span-2 flex justify-center items-center" >
            <Link href="/" className="min-w-[100px]">
              <div className="h-20">
                <Image
                  src="/img/logo.png"
                  alt="logo image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-full"
                />
              </div>
            </Link>
          </div>

          <div className="md:col-span-5 flex justify-center items-center gap-4" >
            <Link href={'/'} className="text-xs md:text-base hover:underline" >
              Find a Mentor
            </Link>
            <Link href={'/'} className="text-xs md:text-base hover:underline" >
              About Us
            </Link>
            <Link href={'/'} className="text-xs md:text-base hover:underline" >
              Pricing
            </Link>
            <Link href={'/'} className="text-xs md:text-base hover:underline" >
              Become a Member
            </Link>
          </div>

          <div className="flex justify-center items-center gap-2 md:col-span-2">
            <span className="w-9 h-9 flex justify-center items-center hover:cursor-pointer rounded-md p-2 bg-primary/10" >
              <FaTwitter />
            </span>
            <span className="w-9 h-9 flex justify-center items-center hover:cursor-pointer rounded-md p-2 bg-primary/10" >
              <FaLinkedinIn />
            </span>
            <span className="w-9 h-9 flex justify-center items-center hover:cursor-pointer rounded-md p-2 bg-primary/10" >
              <FaInstagram />
            </span>
            <span className="w-9 h-9 flex justify-center items-center hover:cursor-pointer rounded-md p-2 bg-primary/10" >
              <FaFacebookF />
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="border-t-[1px] border-foreground mx-auto flex flex-col items-center md:flex-row md:justify-between pt-2">
            <p className="text-xs ">
              @2024 TheLearningDao. All Rights Reserved
            </p>

            <div className="flex gap-4 ">
              <Link href={'/'} className="text-xs md:text-base hover:underline" >
                Terms & Conditions
              </Link>
              <Link href={'/'} className="text-xs md:text-base hover:underline" >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
