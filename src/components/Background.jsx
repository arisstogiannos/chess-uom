import React from "react";

export default function Background({page}) {
  return (
    <>
      {/* <div className=" -z-10 fixed top-full left-full -translate-x-1/2  -translate-y-1/2  bg-gradient-radial from-0% to-40% from-myOrange/5 to-myBlack/0 rounded-full   size-[2000px] "></div>
        <div className=" -z-10 fixed top-[60%] left-0 -translate-x-1/2 -translate-y-1/2   bg-gradient-radial from-0% to-40% from-myOrange/5 to-myBlack/0 rounded-full   size-[2000px] "></div> */}
      <div className={` -z-10 fixed top-full left-full -translate-x-1/2  -translate-y-1/2  bg-gradient-radial from-0% to-40% ${page===0||page===3?'from-blue-800/10':'from-myOrange/5'} to-myBlack/0 rounded-full   size-[2000px] transition-colors duration-200  `}></div>
      <div className={` -z-10 fixed top-[60%] left-0 -translate-x-1/2 -translate-y-1/2   bg-gradient-radial from-0% to-40% ${page===0||page===3?'from-blue-800/10':'from-myOrange/5'} to-myBlack/0 rounded-full   size-[2000px] transition-colors duration-200  `}></div>
    </>
  );
}
