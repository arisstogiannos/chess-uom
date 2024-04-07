import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function Cursor({cursorScale}) {
  const cursor = useRef(null);
  const arrow = useRef(null);
  useEffect(() => {
    // const handleMouseOver = (e)=>{

    // }
    // document.getElementById('slider').addEventListener('mouseover',handleMouseOver)

    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3 ",
    });
    const moveArrowX = gsap.quickTo(arrow.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const moveArrowY = gsap.quickTo(arrow.current, "top", {
      duration: 0.4,
      ease: "power3 ",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if(clientX<window.innerWidth/2){
        gsap.set(arrow.current,{rotateY:180})
        gsap.set(arrow.current,{translateX:"0%"})
        gsap.set(cursor.current,{rotateY:180})
      }else{
        gsap.set(arrow.current,{rotateY:0})
        gsap.set(arrow.current,{translateX:"-100%"})
        gsap.set(cursor.current,{rotateY:0})
      }

      moveCursorX(clientX-48);
      moveCursorY(clientY-48);
      moveArrowX(clientX);
      moveArrowY(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <motion.div className="pointer-events-none" >
    <motion.div
      ref={cursor}
      initial={{scale:1}} animate={cursorScale?{scale:1}:{scale:0}}   transition={{duration:0.2,ease:"easeOut"}}
      className=" size-24  bg-transparent border-solid border-[1px] border-myOrange fixed rounded-full border-l-transparent pointer-events-none"
    >
    </motion.div>
        <motion.div  ref={arrow} className="  fixed   -translate-y-1/2   ">
      <svg
        width="71"
        height="16"
        viewBox="0 0 71 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       
      >
        <path
          d="M70.7071 8.7071C71.0976 8.31658 71.0976 7.68341 70.7071 7.29289L64.3431 0.928927C63.9526 0.538402 63.3195 0.538402 62.9289 0.928927C62.5384 1.31945 62.5384 1.95262 62.9289 2.34314L68.5858 7.99999L62.9289 13.6568C62.5384 14.0474 62.5384 14.6805 62.9289 15.0711C63.3195 15.4616 63.9526 15.4616 64.3431 15.0711L70.7071 8.7071ZM8.74228e-08 9L70 8.99999L70 6.99999L-8.74228e-08 7L8.74228e-08 9Z"
          fill="#FFA800"
        />
      </svg>
      </motion.div>
    </motion.div>
  );
}

export default Cursor;
