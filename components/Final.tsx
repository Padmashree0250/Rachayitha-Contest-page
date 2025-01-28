"use clients";
import a from "../public/logo/a.png";
import b from "../public/logo/b.png";
import c from "../public/logo/c.png";
import d from "../public/logo/d.png";
import e from "../public/logo/e.png";
import f from "../public/logo/f.png";
import g from "../public/logo/g.png";
import Image from "next/image";
const Final = () => {
  return (
    <section className="mt-10">
      <div className="mt-40">
        <p className=" text-center justify-center font-bold lg:text-[42px]">
          Benefits of Participating in contest:
        </p>
      </div>
      <div className="flex mt-12">
      <div
        className="border ml-80 flex justify-start items-center  gap-4 p-4 lg:w-[402px] lg:h-[64px] rounded-xl"
        style={{
          boxShadow:
            "-2.31px 3.47px 11.56px 0px #00000040, 0.58px 6.93px 17.33px -5.78px #00000033",
        }}
      >
        <Image src={a} alt="a" />
        <p>Certificate of Achievements</p>
      </div>
      <div
        className="border ml-10 flex justify-start items-center gap-4  p-4 lg:w-[402px] lg:h-[64px] rounded-xl"
        style={{
          boxShadow:
            "-2.31px 3.47px 11.56px 0px #00000040, 0.58px 6.93px 17.33px -5.78px #00000033",
        }}
      >
        <Image src={b} alt="a" />
        <p>Free Subscription to Premium Features</p>
      </div>
      </div>
      <div className="flex mt-12 ml-60">
      <div
        className="border ml-40  flex justify-center items-center gap-4   lg:w-[300px] lg:h-[64px] rounded-xl"
        style={{
          boxShadow:
            "-2.31px 3.47px 11.56px 0px #00000040, 0.58px 6.93px 17.33px -5.78px #00000033",
        }}
      >
        <Image src={c} alt="a" />
        <p>Instant Cash Rewards</p>
      </div>
      <div
        className="border ml-10 flex justify-start items-center gap-4  p-4 lg:w-[332px] lg:h-[64px] rounded-xl"
        style={{
          boxShadow:
            "-2.31px 3.47px 11.56px 0px #00000040, 0.58px 6.93px 17.33px -5.78px #00000033",
        }}
      >
        <Image src={d} alt="a" />
        <p>Feature on Rachayitha</p>
      </div>
      
      </div>
      
      <div className="flex mt-12">
      <div
        className="border ml-80 flex justify-start items-center gap-4  p-4 lg:w-[402px] lg:h-[64px] rounded-xl"
        style={{
          boxShadow:
            "-2.31px 3.47px 11.56px 0px #00000040, 0.58px 6.93px 17.33px -5.78px #00000033",
        }}
      >
        <Image src={e} alt="a" />
        <p>Social Media Promotions</p>
      </div>
      <div
        className="border ml-10 flex justify-start items-center gap-2  p-4 lg:w-[402px] lg:h-[64px] rounded-xl"
        style={{
          boxShadow:
            "-2.31px 3.47px 11.56px 0px #00000040, 0.58px 6.93px 17.33px -5.78px #00000033",
        }}
      >
        <Image src={f} alt="a" />
        <p>Internship Opportunities at Rachayitha</p>
      </div>
      
      </div>
      <div className="flex mt-12 ml-40">
      <div
        className="border ml-80 flex justify-start items-center  gap-4 p-4 lg:w-[460px] lg:h-[64px] rounded-xl"
        style={{
          boxShadow:
            "-2.31px 3.47px 11.56px 0px #00000040, 0.58px 6.93px 17.33px -5.78px #00000033",
        }}
      >
        <Image src={g} alt="a" />
        <p>Access to Free Webinars and Writing Workshops</p>
      </div>
      
      </div>
      
      
      
      
      
    </section>
  );
};

export default Final;
