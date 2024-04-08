import React from "react";

export default function Background({page}) {
  return (
    <>
    <img src="/bg.webp" alt="bg" className="fixed top-0 left-0 -z-10 h-screen w-screen " />
      {/* <div className=" -z-10 fixed top-full left-full -translate-x-1/2  -translate-y-1/2  bg-gradient-radial from-0% to-40% from-myOrange/5 to-myBlack/0 rounded-full   size-[2000px] "></div>
        <div className=" -z-10 fixed top-[60%] left-0 -translate-x-1/2 -translate-y-1/2   bg-gradient-radial from-0% to-40% from-myOrange/5 to-myBlack/0 rounded-full   size-[2000px] "></div> */}
      {/* <div className={` -z-10 fixed top-full left-full -translate-x-1/2  -translate-y-1/2  bg-gradient-radial from-0% to-40% ${page===0||page===3?'from-myBlue/20':'from-myOrange/5'} to-myBlack/0 rounded-full   size-[2000px] transition-colors duration-1000  `}></div>
      <div className={` -z-10 fixed top-[60%] left-0 -translate-x-1/2 -translate-y-1/2   bg-gradient-radial from-0% to-40% ${page===0||page===3?'from-myBlue/20':'from-myOrange/5'} to-myBlack/0 rounded-full   size-[2000px] transition-colors duration-1000  `}></div> */}
    </>
  );
}
