"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import MenuButton from "./MenuButton";
import Logo from "./Logo";

function Navbar({ spline, setPage, page, isTabletOrPhone }) {
  const [menuOpen, setMenuOpen] = useState(false);
  function triggerAnimation() {
    spline.current.emitEvent("mouseHover", "Parent");
  }
  function triggerAnimation2(i) {
    if (i === 2) {
      //about
      if (!isTabletOrPhone) {
        spline.current.emitEvent("keyUp", "Parent");
        spline.current.emitEvent("keyUp", "Spot Light");
      } else {
        spline.current.emitEvent("keyUp", "Wrapper");
      }
    } else if (i === 3) {
      spline.current.emitEvent("keyUp", "chessboard");
      spline.current.emitEvent("mouseUp", "Spot Light");
    } else if (i === 1) {
      //spline.current.setZoom(1.05)

      spline.current.emitEvent("keyDown", "Wrapper");
    } else {
      spline.current.emitEvent("keyDown", "Parent");
      spline.current.emitEvent("keyDown", "Spot Light");
    }
    setMenuOpen(false);
    const c = document.getElementById("checkbox");
    c.ariaChecked = true;
    setPage(i);
  }

  const links = [
    { title: "Αρχική", href: 0 },
    { title: "Παζλ", href: 1 },
    { title: "Πληροφορίες", href: 2 },
    { title: "Επικοινωνία", href: 3 },
  ];
  const [selectedLink, setSelectedLink] = useState(0);
  return (
    <motion.nav
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: 0.6, ease: [0, 0.55, 0.45, 1] },
      }}
      className="myContainer  h-28  flex items-center justify-between z-50 3xl:mb-16 overflow-x-hidden "
    >
      <div className="flex justify-start gap-24 items-center">
        <Logo scale={"scale-75 md:scale-100 origin-left"} />
        <AnimatePresence>
          {!isTabletOrPhone || menuOpen ? (
            <motion.ul
              initial={isTabletOrPhone && { x: "100%" }}
              transition={{ duration: 0.8, ease: "circInOut" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              id="navlinks"
              className="text-myWhite  text-3xl lg:text-base flex-col  max-lg:pl-8 max-lg:pt-40 lg:flex-row flex gap-10 lg:gap-14 max-md:w-2/3 max-lg:w-1/3 max-lg:h-full max-lg:bg-myOrange/80 max-lg:backdrop-blur-lg max-lg:fixed max-lg:top-0 max-lg:right-0 z-[900]"
            >
              {links.map((item, i) => {
                return (
                  <motion.li
                    initial={isTabletOrPhone && { x: "100%", opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.05,
                      ease: "circInOut",
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 1 }}
                    className="navlink"
                    key={i}
                  >
                    <button
                      className={`navlinkbtn lg:hover:text-myOrange transition-colors ease-linear duration-300 relative py-1 ${
                        page === i
                          ? "text-myBlack  lg:text-myOrange"
                          : "text-myWhite "
                      }`}
                      onClick={() => triggerAnimation2(item.href)}
                    >
                      {item.title}
                    </button>
                  </motion.li>
                );
              })}
              <motion.li
                    initial={isTabletOrPhone && { x: "100%", opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 4 * 0.05,
                      ease: "circInOut",
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 1 }}
                    className="navlink"
                    key={'cta'}
                  >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfFtWLveO4_6LdXzL_iG_raS6xhytFxM5TTeVwsYbvGS3g4ww/viewform?vc=0&c=0&w=1&flr=0"
                target="_blank"
                className=" bg-myBlack w-fit rounded-full py-4  px-4 pl-6 relative  mt-10 flex items-center lg:hidden "
              >
                <span className=" tracking-wide">Εγγραφη</span>
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={` -rotate-90 ml-4`}
                >
                  <path
                    d="M2 2L12.5 12.5L23 2"
                    stroke="#FFA800"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              </motion.li> 
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </div>
      {/* <button
        onClick={triggerAnimation}
        className="w-36 h-12 font-medium text-base bg-myOrange rounded-full flex items-center justify-around"
      >
        Εγγραφή{SignIcon()}
      </button> */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfFtWLveO4_6LdXzL_iG_raS6xhytFxM5TTeVwsYbvGS3g4ww/viewform?vc=0&c=0&w=1&flr=0"
        target="_blank"
        className="btn learn-more hidden lg:block"
      >
        <span aria-hidden="true" className="circle">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text tracking-wide">Εγγραφη</span>
      </a>
      <MenuButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </motion.nav>
  );
}

function SignIcon() {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 27.0002C21.4037 27.0002 27.0001 21.4038 27.0001 14.5001C27.0001 7.59649 21.4037 2 14.5 2"
        stroke="black"
        stroke-width="2.34377"
        stroke-linecap="round"
      />
      <path
        d="M2 14.5H17.6252M17.6252 14.5L12.9376 9.8125M17.6252 14.5L12.9376 19.1876"
        stroke="black"
        stroke-width="2.34377"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default Navbar;
