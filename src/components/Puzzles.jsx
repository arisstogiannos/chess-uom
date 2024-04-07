import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Cursor from "./Cursor";

function Puzzles() {
  const scrollContainer = useRef(null);
  const [xPercent, setXPercent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // New state for animation
  const [clicked, setClicked] = useState(false); // New state for animation

  let myX = 0;
  const [maxClicks, setMaxClicks] = useState(0);
  const [currClicks, setCurrClicks] = useState(0);
  const [difficulty, setDifficulty] = useState(1);
  useEffect(() => {
    const ulRect = document.getElementById("ulContainer").getBoundingClientRect();
    const distance = document.querySelector("#ulContainer > li:nth-child(2)").getBoundingClientRect();
    myX = distance.left - ulRect.left;
  });

  useEffect(() => {
    const liElements = document.querySelectorAll(".puzzleLi");
    setMaxClicks(liElements.length - 3);
    setCurrClicks(0);
    setXPercent(0);
  }, [difficulty]);

  useEffect(() => {
    gsap.to(scrollContainer.current, {
      x: xPercent,
      ease: "circ.Out",
      onComplete: () => setIsAnimating(false),
    });
  }, [xPercent]);
  const handlePrev = () => {
    if (currClicks >= 0 && !isAnimating) {
      // Set animation state to true
      setIsAnimating(true);
      setXPercent((prev) => prev + myX);

      setCurrClicks((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (currClicks < maxClicks && !isAnimating) {
      // Set animation state to true
      setIsAnimating(true);
      setCurrClicks((prev) => prev + 1);
      setXPercent((prev) => prev - myX);
    }
  };

  const puzzles = [
    { desc: "matse2EASY", src: "/matse2EASY.webp", diff: 1 },
    { desc: "matse2EASY", src: "/matse2EASY.webp", diff: 1 },
    
    {
      desc: "blacktoplaydifficult",
      src: "/blacktoplaydifficult.webp",
      diff: 2,
    },
    {
      desc: "blacktoplaydifficult",
      src: "/blacktoplaydifficult.webp",
      diff: 2,
    },
    {
      desc: "blacktoplaydifficult",
      src: "/blacktoplaydifficult.webp",
      diff: 2,
    },
    {
      desc: "blacktoplaydifficult",
      src: "/blacktoplaydifficult.webp",
      diff: 3,
    },
    {
      desc: "blacktoplaydifficult",
      src: "/blacktoplaydifficult.webp",
      diff: 3,
    },
    {
      desc: "blacktoplaydifficult",
      src: "/blacktoplaydifficult.webp",
      diff: 3,
    },
    {
      desc: "blacktoplaydifficult",
      src: "/blacktoplaydifficult.webp",
      diff: 3,
    },
    {
      desc: "blacktoplaydifficult",
      src: "/blacktoplaydifficult.webp",
      diff: 3,
    },
    {
      desc: "blacktoplaydifficult",
      src: "/blacktoplaydifficult.webp",
      diff: 3,
    },
  ];

  const buttons = ["εύκολο", "μέτριο", "δύσκολο"];
  const variants = {
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0, 0.55, 0.45, 1],
        delay: i * 0.08,
      },
    }),
    exit: (i) => ({
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.55, 0, 1, 0.45],
        delay: (2 - i) * 0.08,
      },
    }),
  };
  return (
    <section className="myContainer mt-24 relative">
      <div className="flex gap-14 items-center">
        <motion.h5
          initial={{ x: -20, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "circOut" },
          }}
          exit={{
            x: -20,
            opacity: 0,
            transition: { duration: 0.3, ease: "circIn", delay: 0.2 },
          }}
          className="text-3xl text-myWhite"
        >
          Επίπεδο :
        </motion.h5>
        <ul className="flex gap-8">
          {buttons.map((b, i) => (
            <motion.li
              key={i}
              variants={variants}
              animate="enter"
              exit="exit"
              initial="exit"
              custom={i}
            >
              <button
                onClick={() => setDifficulty(i + 1)}
                className={` text-xl capitalize hover:text-myWhite/60 transition-colors duration-200 ${
                  difficulty === i + 1 ? "text-myOrange" : "text-myWhite"
                }`}
              >
                {b}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.hr
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: 1,
          transition: {
            duration: 0.6,
            ease: [0, 0.55, 0.45, 1],
          },
        }}
        exit={{
          scaleX: 0,
          transition: {
            duration: 0.6,
            ease: [0.55, 0, 1, 0.45],
          },
        }}
        className="w-1/2 border-myOrange origin-left mt-4"
      ></motion.hr>
      <motion.div
        id="slider"
        variants={variants}
        initial="exit"
        animate="enter"
        exit="exit"
        className=" text-sm mdtext-base text-myWhite/90 bodytxt overflow-x-hidden overflow-y-hidden py-10"
      >
        <AnimatePresence mode="wait">
          <ul
            id="ulContainer"
            ref={scrollContainer}
            className="flex gap-40 mt-10 pointer-events-none"
          >
            {puzzles.map(
              (item, index) =>
                item.diff === difficulty && (
                  <motion.li
                    initial={{ y: 40, opacity: 0 }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.2,
                        ease: "circOut",
                        delay: 0.08 * index,
                      },
                    }}
                    exit={{
                      y: -40,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        ease: "circIn",
                        delay: 0.08 * index,
                      },
                    }}
                    className={` flex flex-col items-center gap-5 puzzleLi`}
                    key={index}
                  >
                    <Image
                      src={item.src}
                      alt="img"
                      width={300}
                      height={300}
                      unoptimized={true}
                      className={`  min-w-[300px]`}
                    />
                    <p className="text-myWhite text-xl">{item.desc}</p>
                  </motion.li>
                )
            )}
          </ul>
        </AnimatePresence>
      </motion.div>
      {/* <div className="absolute right-0 mt-20">
        <p className="text-myOrange text-xl capitalize ">scroll</p>
        <svg
          width="132"
          height="16"
          viewBox="0 0 152 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M151.707 8.70711C152.098 8.31658 152.098 7.68342 151.707 7.29289L145.343 0.928932C144.953 0.538408 144.319 0.538408 143.929 0.928932C143.538 1.31946 143.538 1.95262 143.929 2.34315L149.586 8L143.929 13.6569C143.538 14.0474 143.538 14.6805 143.929 15.0711C144.319 15.4616 144.953 15.4616 145.343 15.0711L151.707 8.70711ZM0 9L151 9V7L0 7L0 9Z"
            fill="#FFA800"
          />
        </svg>
      </div> */}
      <div className="flex justify-between">
        <motion.button
          onClick={handlePrev}
          className={`${
            currClicks > 0 ? "visible" : "invisible"
          } active:-translate-x-3 hover:scale-90 transition-all duration-200 ease-in-out  size-24 bg-transparent rounded-full border-r-myBlack border-myOrange border-solid border flex items-center justify-center `}
        >
          <div className=" ml-16">
            <svg
              width="71"
              height="16"
              viewBox="0 0 71 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180 "
            >
              <path
                d="M70.7071 8.7071C71.0976 8.31658 71.0976 7.68341 70.7071 7.29289L64.3431 0.928927C63.9526 0.538402 63.3195 0.538402 62.9289 0.928927C62.5384 1.31945 62.5384 1.95262 62.9289 2.34314L68.5858 7.99999L62.9289 13.6568C62.5384 14.0474 62.5384 14.6805 62.9289 15.0711C63.3195 15.4616 63.9526 15.4616 64.3431 15.0711L70.7071 8.7071ZM8.74228e-08 9L70 8.99999L70 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
                fill="#FFA800"
              />
            </svg>
          </div>
        </motion.button>
        <motion.button
          onClick={handleNext}
          className={`${
            currClicks < maxClicks ? "visible" : "invisible"
          } active:translate-x-3 hover:scale-90 transition-all duration-200 ease-in-out  size-24 bg-transparent rounded-full border-l-myBlack border-myOrange border-solid border flex items-center justify-center `}
        >
          <div className=" mr-16">
            <svg
              width="71"
              height="16"
              viewBox="0 0 71 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" "
            >
              <path
                d="M70.7071 8.7071C71.0976 8.31658 71.0976 7.68341 70.7071 7.29289L64.3431 0.928927C63.9526 0.538402 63.3195 0.538402 62.9289 0.928927C62.5384 1.31945 62.5384 1.95262 62.9289 2.34314L68.5858 7.99999L62.9289 13.6568C62.5384 14.0474 62.5384 14.6805 62.9289 15.0711C63.3195 15.4616 63.9526 15.4616 64.3431 15.0711L70.7071 8.7071ZM8.74228e-08 9L70 8.99999L70 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
                fill="#FFA800"
              />
            </svg>
          </div>
        </motion.button>
      </div>
    </section>
  );
}

export default Puzzles;
