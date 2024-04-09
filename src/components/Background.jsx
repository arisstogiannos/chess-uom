import React from "react";
import Image from 'next/image'

export default function Background({page}) {
  return (
    <div className="pointer-events-none fixed top-0 left-0 -z-10 h-screen w-screen ">
    <Image src="/bgV2.webp" unoptimized={true} alt="bg" priority fill  className="invisible md:visible pointer-events-none  fixed top-0 left-0 -z-10 h-screen w-screen " />
    <Image src="/bgV2-mobile.webp" unoptimized={true} alt="bg" priority fill className="visible md:invisible fixed top-0 left-0 -z-10 h-screen w-screen pointer-events-none " />
      {/* <div className=" -z-10 fixed top-full left-full -translate-x-1/2  -translate-y-1/2  bg-gradient-radial from-0% to-40% from-myOrange/5 to-myBlack/0 rounded-full   size-[2000px] "></div>
        <div className=" -z-10 fixed top-[60%] left-0 -translate-x-1/2 -translate-y-1/2   bg-gradient-radial from-0% to-40% from-myOrange/5 to-myBlack/0 rounded-full   size-[2000px] "></div> */}
      {/* <div className={` -z-10 fixed top-full left-full -translate-x-1/2  -translate-y-1/2  bg-gradient-radial from-0% to-40% ${page===0||page===3?'from-myBlue/4  0':'from-myOrange/5'} to-myBlack/0 rounded-full   size-[2000px] transition-colors duration-1000  `}></div>
      <div className={` -z-10 fixed top-[60%] left-0 -translate-x-1/2 -translate-y-1/2   bg-gradient-radial from-0% to-40% ${page===0||page===3?'from-myBlue/4  0':'from-myOrange/5'} to-myBlack/0 rounded-full   size-[2000px] transition-colors duration-1000  `}></div> */}
    </div>
  );
}
