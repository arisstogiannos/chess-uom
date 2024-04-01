"use client";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import React,{ Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "@/components/About";
import Loading from "@/components/Loading";

const Spline = React.lazy(() => import('@splinetool/react-spline'));
export default function Home() {
  const spline = useRef();
  const [page, setPage] = useState(0);
  const [loading,setLoading] = useState(true)

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  return (
    <main id="canvas3d" className="  ">
      <div className="absolute left-[50%] -translate-x-1/2 top-2/3 3xl:top-[60%] -translate-y-1/2 w-screen   ">

        <Spline
          onLoad={onLoad}
          scene="https://prod.spline.design/Cyk1LeDuv8KuAT5W/scene.splinecode"        />
      </div>
      <Navbar spline={spline} setPage={setPage} page={page} />
      <AnimatePresence mode="wait">
        {page === 0 ? <LandingPage key={0} spline={spline} /> : <About key={1} />}
      </AnimatePresence>
    </main>

  );
}
