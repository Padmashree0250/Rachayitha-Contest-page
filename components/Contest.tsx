"use clients";
import Image from "next/image";
import bg from "../public/bg.png";
import trophy from "../public/trophy2.png";
import frame from "../public/Frame.png";
import pencil from "../public/pencil.png";
import star from "../public/star.png";
import laptop from "../public/laptop.png";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
const Contest = () => {
  return (
    <section>
      <div className="relative max-container padding-container mt-20">
        <p className=" text-center justify-center text-lg lg:text-[24px]">
          {" "}
          How to Win
        </p>
        <div className="flex justify-center items-center gap-8 mt-4">
          <p className="text-lg font-bold lg:text-[50px] ">Join a Contest </p>
          <Image src={trophy} alt="trophy" />
        </div>
        <p className="text-center justify-center text-gray-40 mt-4">
          The best way is by writing and sharing your creative pieces—stories,
          poems, or shayaris—
        </p>
        <p className="text-center justify-center  text-gray-40 ">
          and joining our Literary Ambassador Program.
        </p>
      </div>
      <div className="flex gap-8">
        <div className="relative">
          <Image
            src={bg}
            alt="bg"
            className="relative lg:w-[600.77px] lg:h-[600.62px]"
          />
          <Image
            src={frame}
            alt="frame"
            className="absolute top-14 left-4 mt-20 mb-20 ml-10 lg:w-[500px] lg:h-[420px]"
          />
        </div>
        <div className="items-center   w-fit">
          <p className="font-bold ml-30 mt-10 lg:text-[42px] font-maven">
            Submit your Work
          </p>
          <p className="ml-40 mt-10 lg:text-[16px] font-bold">
            Write a Story or Poem:
          </p>
          <div className="flex  ">
            <Image
              src={pencil}
              alt="pencil"
              className=" mt-4 lg:w-[44px] lg:h-[44px]"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="mt-4 text-gray-40 text-sm ml-8">
                Share your creativity with the world! Submit your original
              </p>
              <p className="text-center text-gray-40 text-sm ml-8">
                works and contribute to the literary community.
              </p>
            </div>
          </div>
          <p className="ml-40 mt-10 lg:text-[16px] font-bold">
            Recive your Reward
          </p>
          <div className="flex justify-start items-start ">
            <Image
              src={star}
              alt="Star"
              className=" mt-4 lg:w-[44px] lg:h-[44px]"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="mt-4 text-gray-40 text-sm ml-8">
                Each published piece will be rewarded with Rs. 50-200 within
              </p>
              <p className="text-center text-gray-40 text-sm ml-8">
                14 days. Higher engagement and quality will lead to greater
              </p>
              <p className="text-center text-gray-40 text-sm ml-8">rewards! </p>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center text-center">
        <p className="font-bold lg:text-[42px] mt-4">Rules and Guidelines</p>
      </div>
      <div className="flex mt-4 gap-10">
        <div className="">
          <Image
            src={laptop}
            alt="laptop"
            className="lg:w-[649.16px] lg:h-[409px]"
          />
        </div>
        <div className="mt-6 ml-10">
          <p className=" ml-8 font-bold">Key Point</p>
          <div className="flex mt-6 gap-2">
            <CircleCheck color="#5624C1" />
            <p className="text-gray-40">
              Provide detailed and thoughtful critiques or submissions.
            </p>
          </div>
          <div className="flex mt-6 gap-2">
            <CircleCheck color="#5624C1" />
            <p className="text-gray-40">
              Ensure all content is original, avoiding plagiarism.{" "}
            </p>
          </div>
          <div className="flex mt-6 gap-2">
            <CircleCheck color="#5624C1" />
            <p className="text-gray-40">
              Focus on literary works like stories, poems, and shayaris.{" "}
            </p>
          </div>
          <div className="flex mt-6 gap-2">
            <CircleCheck color="#5624C1" />
            <div>
              <p className="text-gray-40">
                Support your work with relevant references and{" "}
              </p>
              <p className="text-gray-40"> authentic information. </p>
            </div>
          </div>

          <div className="flex mt-6 gap-2">
            <CircleCheck color="#5624C1" />
            <div>
              <p className="text-gray-40">
                High-quality, well-crafted submissions are more likely
              </p>
              <p className="text-gray-40">to be featured and rewarded. </p>
            </div>

          </div>
          <Button className=  " ml-8 mt-4 px-12 text-purple-700 bg-white border border-purple-700 rounded-lg " >Read Terms & Guidelines</Button>

        </div>
      </div>
    </section>
  );
};
export default Contest;
