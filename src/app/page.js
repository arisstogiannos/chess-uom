"use client";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import React,{  useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "@/components/About";
import Spline from "@splinetool/react-spline";
import Contact from "@/components/Contact";

// const Spline = dynamic(() => import('@splinetool/react-spline'),{loading:()=><p>Loading</p>});
export default function Home() {
  const spline = useRef();
  const [page, setPage] = useState(0);
  // const [loading,setLoading] = useState(true)

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  return (
    //loading?<Loading setLoading={setLoading}/>:
    <main id="canvas3d" className="  ">
      <div className="absolute left-[50%] -translate-x-1/2 top-2/3 3xl:top-[60%] -translate-y-1/2 w-screen   ">

        <Spline
          onLoad={onLoad}
          scene="https://draft.spline.design/v5rj5kq1KWmy77le/scene.splinecode"/>
      </div>
      <Navbar spline={spline} setPage={setPage} page={page} />
      <AnimatePresence mode="wait">
        {page === 0 && <LandingPage key={0} spline={spline} /> }
        {page===2&& <About key={1} />}
        {page===3&& <Contact key={2} />}
        
      </AnimatePresence>
    </main>

  );
}
