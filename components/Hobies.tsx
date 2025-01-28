import Image from "next/image";
import React from "react";
import girlWithBook from "../public/articles/girlWithBook.png";
import { Button } from "@/components/ui/button";

const Hobies = () => {
  return (
    <section className="relative max-container padding-container lg:flex lg:justify-between md:flexflex-col">
      <div className="flex flex-col justify-center">
        <p className="lg:text-[44px] md:text-[28px]">
          Pursue <span className="text-[#5624C1]">Your Hobby,</span>
        </p>
        <p className="lg:text-[44px] md:text-[28px]">
          Unleash Your Creativity!
        </p>
        <p className="lg:text-[20px] font-normal mt-2">
          Nurture Your Talent,{" "}
          <span className="font-medium text-[#5624C1]">Share Your Stories</span>
          , and Inspire Others
        </p>
        <Button className="bg-[#5624C1] text-white w-fit rounded-[4.41px] px-8 py-2 mt-4 lg:text-[20px] font-normal">
          Start Writing
        </Button>
      </div>
      <div>
        <Image
          src={girlWithBook}
          alt="girl"
          className="lg:w-[565.29px] lg:h-[608.9px] md:w-[334.7px] md:h-[360.52px]"
        />
      </div>
    </section>
  );
};

export default Hobies;
