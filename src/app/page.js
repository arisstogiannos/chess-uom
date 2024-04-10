"use client";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Background from "@/components/Background";
import Logo from "@/components/Logo";

const About = dynamic(() => import("@/components/About"));
const Contact = dynamic(() => import("@/components/Contact"));
const Puzzles = dynamic(() => import("@/components/Puzzles"));
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Home() {
  const spline = useRef();
  const [page, setPage] = useState(0);
  const [isTabletOrPhone, setIsTabletOrPhone] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrPhone(window.innerWidth <= 1024); // Adjust the breakpoint as needed
      setIsPhone(window.innerWidth <= 640);
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
    if (isTabletOrPhone) {
      spline.current.setZoom(0.6);
    }
  }

  return (
    <>
      <main className="h-[120dvh] ">
        <div id="canvas3d"  className="z-0 absolute left-[50%] -translate-x-1/2 top-[600px] md:top-2/3 3xl:top-[60%] -translate-y-1/2 w-screen h-[100dvh]   ">
          <Spline
            onLoad={onLoad}
            scene="https://draft.spline.design/1lVFjcF-nW7R7OYt/scene.splinecode"
          />
        </div>
        <Navbar
          spline={spline}
          setPage={setPage}
          page={page}
          isTabletOrPhone={isTabletOrPhone}
        />
        <AnimatePresence mode="wait">
          {page === 0 && <LandingPage key={0} spline={spline} />}
          {page === 1 && <Puzzles key={3} isPhone={isPhone} />}
          {page === 2 && <About key={1} />}
          {page === 3 && <Contact key={2} />}
        </AnimatePresence>
        <Background page={page} />
      </main>
      <footer className="relative z-[1000] myContainer w-full bg-myBlack h-56 sm:h-32 gap-4 sm:gap-0 flex-col-reverse sm:flex-row flex items-center justify-center  sm:justify-between px-8">
        <p className="text-myWhite font-extralight text-lg">
          Created By Aris Stogiannos
        </p>
        <div className=" flex-col-reverse sm:flex-row   flex items-center gap-2">
          {socials()}

          <Logo scale={"scale-75"} />
        </div>
      </footer>
    </>
  );
}

function socials() {
  return (
    <div className="py-6 sm:py-0 px-16 border-y sm:border-y-0 sm:px-10  sm:border-r flex gap-10 scale-90">
      <a href="https://discord.gg/XXf6pvePrv" target="_blank">
        <svg
          width="42"
          height="30"
          viewBox="0 0 42 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group"
        >
          <path
            className="fill-myWhite/60 group-hover:fill-purple-900 transition-colors duration-300"
            d="M36.2936 3.69035C31.2205 -0.105953 26.3599 0.000741949 26.3599 0.000741949L25.8631 0.568306C31.8943 2.37769 34.6971 5.03843 34.6971 5.03843C26.0681 0.287623 15.0772 0.321712 6.10198 5.03843C6.10198 5.03843 9.01108 2.23558 15.3973 0.426193L15.0427 0.00029863C15.0427 0.00029863 10.2175 -0.105953 5.10896 3.68991C5.10896 3.68991 0 12.8785 0 24.1962C0 24.1962 2.98038 29.3051 10.8209 29.5535C10.8209 29.5535 12.1336 27.9925 13.1979 26.6444C8.69232 25.2963 6.98919 22.4935 6.98919 22.4935C9.81993 24.2648 12.6821 25.3733 16.2491 26.0768C22.0522 27.2713 29.2707 26.0432 34.6622 22.4935C34.6622 22.4935 32.8882 25.3671 28.2405 26.6798C29.3048 27.9925 30.5821 29.5181 30.5821 29.5181C38.4226 29.2697 41.4025 24.1607 41.4025 24.1966C41.4021 12.879 36.2936 3.69035 36.2936 3.69035ZM14.0846 20.897C12.0977 20.897 10.4659 19.1585 10.4659 16.9945C10.6111 11.8116 17.5945 11.8275 17.7034 16.9945C17.7034 19.1585 16.1065 20.897 14.0846 20.897ZM27.0337 20.897C25.0468 20.897 23.4149 19.1585 23.4149 16.9945C23.5743 11.8218 30.4705 11.8195 30.6525 16.9945C30.6525 19.1585 29.056 20.897 27.0337 20.897Z"
          />
        </svg>
      </a>
      {/* instagram */}
      <a href="/">
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.3269 22.8734C19.7854 22.8734 23.3998 19.259 23.3998 14.8004C23.3998 10.3419 19.7854 6.72747 15.3269 6.72747C10.8683 6.72747 7.25391 10.3419 7.25391 14.8004C7.25391 19.259 10.8683 22.8734 15.3269 22.8734ZM15.3269 20.1824C18.2992 20.1824 20.7088 17.7728 20.7088 14.8004C20.7088 11.828 18.2992 9.41845 15.3269 9.41845C12.3545 9.41845 9.94489 11.828 9.94489 14.8004C9.94489 17.7728 12.3545 20.1824 15.3269 20.1824Z"
            className="fill-myWhite/60 group-hover:fill-pink-900 transition-colors duration-300"
          />
          <path
            d="M23.4002 5.38197C22.6571 5.38197 22.0547 5.98438 22.0547 6.72747C22.0547 7.47056 22.6571 8.07296 23.4002 8.07296C24.1433 8.07296 24.7457 7.47056 24.7457 6.72747C24.7457 5.98438 24.1433 5.38197 23.4002 5.38197Z"
            className="fill-myWhite/60 group-hover:fill-pink-900 transition-colors duration-300"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.40724 4.40792C0.527344 6.13482 0.527344 8.39546 0.527344 12.9167V16.6841C0.527344 21.2054 0.527344 23.4661 1.40724 25.1929C2.18122 26.7119 3.41623 27.947 4.93526 28.7209C6.66216 29.6009 8.92281 29.6009 13.4441 29.6009H17.2115C21.7327 29.6009 23.9934 29.6009 25.7202 28.7209C27.2393 27.947 28.4743 26.7119 29.2483 25.1929C30.1282 23.4661 30.1282 21.2054 30.1282 16.6841V12.9167C30.1282 8.39546 30.1282 6.13482 29.2483 4.40792C28.4743 2.88888 27.2393 1.65388 25.7202 0.879899C23.9934 0 21.7327 0 17.2115 0H13.4441C8.92281 0 6.66216 0 4.93526 0.879899C3.41623 1.65388 2.18122 2.88888 1.40724 4.40792ZM17.2115 2.69099H13.4441C11.139 2.69099 9.57209 2.69309 8.36092 2.79203C7.18113 2.88842 6.57781 3.06314 6.15694 3.27758C5.14426 3.79358 4.32092 4.61691 3.80493 5.6296C3.59048 6.05047 3.41577 6.65379 3.31938 7.83357C3.22043 9.04474 3.21833 10.6117 3.21833 12.9167V16.6841C3.21833 18.9892 3.22043 20.556 3.31938 21.7673C3.41577 22.9471 3.59048 23.5504 3.80493 23.9713C4.32092 24.9839 5.14426 25.8072 6.15694 26.3232C6.57781 26.5377 7.18113 26.7125 8.36092 26.8088C9.57209 26.9077 11.139 26.9099 13.4441 26.9099H17.2115C19.5166 26.9099 21.0834 26.9077 22.2946 26.8088C23.4745 26.7125 24.0778 26.5377 24.4987 26.3232C25.5113 25.8072 26.3346 24.9839 26.8506 23.9713C27.0651 23.5504 27.2398 22.9471 27.3362 21.7673C27.4351 20.556 27.4372 18.9892 27.4372 16.6841V12.9167C27.4372 10.6117 27.4351 9.04474 27.3362 7.83357C27.2398 6.65379 27.0651 6.05047 26.8506 5.6296C26.3346 4.61691 25.5113 3.79358 24.4987 3.27758C24.0778 3.06314 23.4745 2.88842 22.2946 2.79203C21.0834 2.69309 19.5166 2.69099 17.2115 2.69099Z"
            className="fill-myWhite/60 group-hover:fill-pink-900 transition-colors duration-300"
          />
        </svg>
      </a>
      {/* facebook */}
      <a href="https://www.facebook.com/groups/455607596757531" target="_blank">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.9628 0C28.1922 0 29.9993 1.8072 29.9993 4.03648V25.5644C29.9993 27.7937 28.1922 29.6009 25.9628 29.6009H4.43492C2.20564 29.6009 0.398438 27.7937 0.398438 25.5644V4.03648C0.398438 1.8072 2.20564 0 4.43492 0H25.9628ZM25.9628 2.69099C26.7059 2.69099 27.3083 3.29339 27.3083 4.03648V25.5644C27.3083 26.3075 26.7059 26.9099 25.9628 26.9099H19.2353V17.4913H22.0289C22.608 17.4913 23.1221 17.1207 23.3053 16.5712L23.9014 14.7831C24.1192 14.1296 23.6328 13.4548 22.9441 13.4548H19.2353V10.7638C19.2353 10.0911 19.9081 9.41835 20.5808 9.41835H23.2718C24.0149 9.41835 24.6173 8.81594 24.6173 8.07285V7.14986C24.6173 6.71524 24.3397 6.32557 23.9194 6.21466C22.1557 5.74923 20.5808 5.74923 20.5808 5.74923C17.2171 5.74923 15.1989 8.07285 15.1989 10.0911V13.4548H12.5079C11.7648 13.4548 11.1624 14.0572 11.1624 14.8003V16.1458C11.1624 16.8889 11.7648 17.4913 12.5079 17.4913H15.1989V26.9099H4.43492C3.69183 26.9099 3.08942 26.3075 3.08942 25.5644V4.03648C3.08942 3.29339 3.69183 2.69099 4.43492 2.69099H25.9628Z"
            className="fill-myWhite/60 group-hover:fill-blue-900 transition-colors duration-300"
          />
        </svg>
      </a>
    </div>
  );
}
