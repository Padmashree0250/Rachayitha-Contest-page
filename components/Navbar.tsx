"use client";
import Image from "next/image";
import React from "react";
import rachayitha from "../public/logo.png"
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import searchLogo from "../public/search.svg";
import exploreLogo from "../public/explore.png";
import rankingLogo from "../public/ranking.png";
import createLogo from "../public/create.png";
import libraryLogo from "../public/library.png";
import shorts from "../public/shorts.png";
import langLogo from "../public/lang.png";
import profileLogo from "../public/profile.png"
const Navbar = () => {
  return (
    <nav className="flexBetween max-container gap-4 relative z-30 px-4 py-5 h-[100px]">
        <div>
            <Image src={rachayitha} alt="logo" width={195.1} height={36.17}/>
        </div> 
        <ul className="hidden h-full  lg:flex  lg:justify-center lg:items-center gap-12 ">
            <div className=" border-[2px] border-[#5121C0] rounded-[22.37px] flex py-2 px-4 gap-2 h-[44px]">
           
            {/* <Search color="#969696"/> */}
            <Image src={searchLogo} alt="search"width={19.98} height={19.99}/>

            <Input placeholder="Search novels,poems and many more" className=" placeholder:text-gray-15 placeholder:font-normal placeholder:text-sm w-[281px] outline-none border-none"/>
            </div>
           <div className="flex h-full  gap-1 justify-center items-center " >
            <Image src={exploreLogo} alt ="explore" width={21.89} height={21.89} />
            <p className="text-purple-50">Explore</p>
           </div>

           <div className="flex h-full  gap-1 justify-center items-center " >
            <Image src={rankingLogo} alt ="ranking" width={21.89} height={21.89} />
            <p className="text-purple-50">Ranking</p>
           </div>

           <div className="flex h-full  gap-1 justify-center items-center " >
            <Image src={createLogo} alt ="create" width={21.89} height={21.89} />
            <p className="text-purple-50">Create</p>
           </div>

           <div className="flex h-full gap-1 justify-center items-center " >
            <Image src={libraryLogo} alt ="library" width={21.89} height={21.89} />
            <p className="text-purple-50">Library</p>
           </div>

           <div className="flex h-full  gap-1 justify-center items-center " >
            <Image src={shorts} alt ="shorts" width={21.89} height={21.89} />
            <p className="text-purple-50">Shorts</p>
           </div>
           <Image src={langLogo} alt ="shorts" width={55.68} height={36.17} />
           <Image src={profileLogo} alt ="shorts" width={35.21} height={35.21} />

           

      </ul>
      <Menu
        width={32}
        height={32}
        color="#5629C5"
        className="inline-block cursor-pointer lg:hidden "
      />
      
    
    </nav>
  );
};

export default Navbar;