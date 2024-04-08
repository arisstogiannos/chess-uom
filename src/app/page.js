"use client";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import React,{  useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from 'next/dynamic';
import Background from "@/components/Background";


const About = dynamic(() => import('@/components/About'));
const Contact = dynamic(() => import('@/components/Contact'));
const Puzzles = dynamic(() => import('@/components/Puzzles'));
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

// const Spline = dynamic(() => import('@splinetool/react-spline'),{loading:()=><p>Loading</p>});
export default function Home() {
  const spline = useRef();
  const [page, setPage] = useState(0);
  // const [loading,setLoading] = useState(true)
  const [isTabletOrPhone, setIsTabletOrPhone] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrPhone(window.innerWidth <= 1024); // Adjust the breakpoint as needed
      setIsPhone(window.innerWidth <= 640)
    };

    handleResize(); // Call once initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
    if(isTabletOrPhone){
      spline.current.setZoom(0.6)
    }

  }
  

  return (
    //loading?<Loading setLoading={setLoading}/>:
    <main id="canvas3d" className="">
      <div className="absolute left-[50%] -translate-x-1/2 top-2/3 3xl:top-[60%] -translate-y-1/2 w-screen h-screen   ">

        <Spline
          onLoad={onLoad}
          scene="https://prod.spline.design/Cyk1LeDuv8KuAT5W/scene.splinecode"/>
      </div>
      <Navbar spline={spline} setPage={setPage} page={page} isTabletOrPhone={isTabletOrPhone} />
      <AnimatePresence mode="wait">
        {page === 0 && <LandingPage key={0} spline={spline} /> }
        {page === 1 && <Puzzles key={3} isPhone={isPhone}/> }
        {page===2&& <About key={1} />}
        {page===3&& <Contact key={2} />}
       
      </AnimatePresence>
        <Background page={page}/>
    </main>

  );
}
