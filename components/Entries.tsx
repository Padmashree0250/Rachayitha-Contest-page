"use clients";
import React from "react";
import { POEMS, STORIES } from "../constants";
import Image from "next/image";
import like from "../public/articles/like.svg";
import comment from "../public/articles/comment.svg";

const Entries = () => {
  return (
    <section className="relative max-container padding-container flex flex-col gap-16">
      <div>
        <div className="font-sans mb-4  lg:text-[44px] md:text-[28px] font-semibold text-purple-50">
          Recent Entries
        </div>

        <div className="flex ">
          <p className="font-semibold text-purple-50 text-bold text-[20px]  ">
            Stories
          </p>
          <p className="underline text-sm text-purple-600 ml-auto">View all</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  gap-8 w-full ">
          {STORIES.map((photo) => (
            <div
              className="flex p-4 bg-[#F7F3FF] gap-6 border-[2px] rounded-[10px] border-[#C7AFFF] w-full"
              key={photo.key}
            >
              <Image
                src={photo.image}
                alt={photo.key}
                className="lg:w-[156px] lg:h-[231.98px] rounded-[3.47px] "
                style={{
                  boxShadow:
                    "-2.31px 3.47px 11.56px 0px #00000040, 0.58px 6.93px 17.33px -5.78px #00000033",
                }}
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <p className="w-fit  bg-[#673CCB] text-white rounded-[13.23px] text-[15.87px] px-3  font-normal">
                    Fantasy
                  </p>
                  <p className="font-semibold text-lg">Supreme Magus</p>
                  <p className="text-[#5624C1] font-normal text-base">
                    by Tarun
                  </p>
                  <div className="flex text-[#5624C1] font-medium text-[16.49px] justify-start gap-2 items-center">
                    <Image
                      src={like}
                      alt="like"
                      className="lg:w-[12.53px] lg:h-[13.87px]"
                    />
                    <p>430</p>
                    <Image
                      src={comment}
                      alt="comment"
                      className="lg:w-[15.32px] lg:h-[15.32px]"
                    />
                    <p>44</p>
                  </div>
                </div>
                <p className="font-normal text-[12.34px] text-[#3E3E3E]">
                  Aug 14, 2024 | 09:20 AM
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex ">
          <p className="font-semibold text-purple-50 text-bold text-[20px]  ">
            Poem
          </p>
          <p className="underline text-sm text-purple-600 ml-auto">View all</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3  gap-8 w-full ">
          {POEMS.map((photo) => (
            <div
              className="flex p-4 bg-[#F7F3FF] gap-6 border-[2px] rounded-[10px] border-[#C7AFFF] w-full"
              key={photo.key}
            >
              <Image
                src={photo.image}
                alt={photo.key}
                className="lg:w-[156px] lg:h-[231.98px] rounded-[3.47px] "
                style={{
                  boxShadow:
                    "-2.31px 3.47px 11.56px 0px #00000040, 0.58px 6.93px 17.33px -5.78px #00000033",
                }}
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <p className="w-fit  bg-[#673CCB] text-white rounded-[13.23px] text-[15.87px] px-3  font-normal">
                    Fantasy
                  </p>
                  <p className="font-semibold text-lg">Supreme Magus</p>
                  <p className="text-[#5624C1] font-normal text-base">
                    by Tarun
                  </p>
                  <div className="flex text-[#5624C1] font-medium text-[16.49px] justify-start gap-2 items-center">
                    <Image
                      src={like}
                      alt="like"
                      className="lg:w-[12.53px] lg:h-[13.87px]"
                    />
                    <p>430</p>
                    <Image
                      src={comment}
                      alt="comment"
                      className="lg:w-[15.32px] lg:h-[15.32px]"
                    />
                    <p>44</p>
                  </div>
                </div>
                <p className="font-normal text-[12.34px] text-[#3E3E3E]">
                  Aug 14, 2024 | 09:20 AM
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Entries;
