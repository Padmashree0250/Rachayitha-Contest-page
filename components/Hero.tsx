"use client";
import backgroundImage from "../public/background.svg";
import Image from "next/image";
import React from "react";
import shade1Image from "../public/shade1.png";
import { Select, SelectTrigger } from "@/components/ui/select";
import trophyImage from "../public/trophy.png";
import searchLogo from "../public/search.svg";
import { Input } from "@/components/ui/input";
import vector from "../public/Vector.png";
import eye from "../public/eye.png";
import like from "../public/like.png";
import { LEADERBOARD } from "../constants/index";
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "1580px", // Full viewport height
      }}
    >
      <section className="relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row xl:flex-row">
        <Image
          src={shade1Image}
          alt="shade"
          className="absolute top-[0px] left-[1px]"
          height={657}
          width={657}
        />
        {/* Your content here */}
        <div className="relative z-20 flex flex-1 flex-col ">
          <p className="text-center text-white font-maven font-bold lg:text-[36px] lg:w-[780px] md:text-[16px]">
            Select Competition to view leadership board
          </p>
          <Select>
            <SelectTrigger className="px-4 flex justify-between items-center w-[744px] h-[72px] bg-white rounded-lg shadow-[0px_40px_200px_rgba(11,17,75,0.16)] backdrop-blur-[25px]">
              <p className="text-purple-70 lg:text-2xl md:text-xs">
                Novel writing Competetion
              </p>
            </SelectTrigger>
          </Select>
          <p className="text-white font-maven font-normal lg:text-2xl md:text-[16px]">
            Read | Write | Participate & Compete{" "}
          </p>
        </div>

        <div className="absolute flex flex-1 items-start  w-[550px] right-10">
          <Image
            src={trophyImage}
            alt="trophy"
            // height={750}
            // width={1000}
            className=" absolute lg:-right-10 lg:-top-20 lg:h-[575.23px] lg:w-[699px] md:w-[43.17px] md:h-[30px] md:-top-10  "
          />
        </div>
      </section>
      <section className="relative max-container padding-container flex  gap-20 py-10  md:gap-28  lg:flex-row xl:flex-row">
        <div className="relative z-20 flex flex-1 items-center gap-4   ">
          <p className="text-center text-white font-maven-pro font-bold lg:text-[36px] md:text-[16px]">
            Engagement leaderboard
          </p>
          <div className=" flex py-2 px-4  h-[44px] bg-white rounded ">
            {/* <Search color="#969696"/> */}
            <Image src={searchLogo} alt="search" width={19.98} height={19.99} />

            <Input
              placeholder="Search your rank by writing your book name"
              className=" placeholder:text-gray-15 placeholder:font-normal placeholder:text-xs w-[281px] outline-none border-none"
            />
          </div>
        </div>
      </section>
      <section className="relative max-container padding-container flex  md:gap-28  lg:flex-row xl:flex-row ">
        <div>
          {LEADERBOARD.map((photo) => (
            <div className="p-2 " key={photo.key}> 
              <div className="flex justify-between lg:w-[1129px] bg-black/10 backdrop-blur-md rounded-xl items-center py-2 px-4 gap-2">
              <div className="flex gap-2 items-center">
                <Image
                  src={photo.crown}
                  alt="crown"
                  className=" relative lg:w-[36.12px] lg:h-[23.36px] md:w-[23.85px] md:h-[15.42px]"
                  
                />
                   <p className="absolute left-7 text-white">
                    {photo.label} 
                  </p>
               
                
                <Image
                  src={photo.image}
                  alt="image"
                  className="lg:w-[64px] lg:h-[64px] ml-4 md:w-[31.66px] md:h-[31.66px]"
                />
                <div className="text-white flex flex-col  justify-center h-full items-start">
                  <p className="text-base font-semibold">Suraj Khandelwal</p>
                  <p className="text-sm font-normal">Jaipur,Rajasthan</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex bg-black/15 rounded-[30px] p-2 gap-2 items-center">
                  <Image src={vector} alt="vector"  className="lg:w-[28px] lg:h-[28px] " />
                  <p className="text-white">4</p>
                </div>
                <div className="flex bg-black/15 rounded-[30px] p-2 gap-2 items-center ">
                  <Image src={eye} alt="vector" className="lg:w-[21.56px] lg:h-[15.81px]" />
                  <p className="text-white">3450</p>
                </div>
                <div className="flex bg-black/15 rounded-[30px] p-2 gap-2 items-center">
                  <Image src={like} alt="vector" />
                  <p className="text-white">3450</p>
                </div>
              </div>
            </div>
           
            </div>
             
          ))}
          <div className=" flex mt-12   w-full justify-center items-center">
          <Button className="text-white  bg-purple-70  text-center font-maven-pro rounded-lg px-6 py-6 lg:text-[24px] md:text-[16px] outline-none ">View full Leadership Board</Button>

          </div>
        </div>
      </section>
      
    </div>
    
  );
};

export default Hero;
