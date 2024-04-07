"use client";
import { easeInOut, motion } from "framer-motion";

function LandingPage() {
  //   const pawns = [
  //     {
  //       name: "king",
  //       left: 0,
  //       top: 100,
  //       scale: 0.7,
  //       svg: (
  //         <svg
  //           width="276"
  //           height="734"
  //           viewBox="0 0 276 734"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             d="M256.979 630.55H252.937C257.563 622.331 270.329 594.747 251.447 567.495C232.841 540.635 198.513 470.088 199.958 408.87C210.818 408.845 219.21 400.035 219.21 389.168V386.705C219.21 375.823 210.387 367 199.505 367C210.387 367 219.21 358.177 219.21 347.295V344.832C219.21 333.95 211.207 325.128 200.325 325.128H191.581C189.104 285.368 194.801 251.577 203.399 224.821C206.16 216.232 209.389 209.584 212.641 204.436H217.567C228.449 204.436 236.451 195.613 236.451 184.732V182.268C236.451 171.571 227.922 162.884 217.296 162.593C212.037 129.98 187.192 103.95 155.172 96.9545V66.5034H184.729V29.557H155.172V0H118.226V29.557H88.6687V66.5034H118.226V97.5259C88.6687 105.285 64.523 130.807 59.3875 162.564H57.4687C46.5868 162.564 36.9438 171.387 36.9438 182.268V184.732C36.9438 195.613 46.5868 204.436 57.4687 204.436H64.858C68.1093 209.587 71.3384 216.232 74.0995 224.821C82.6981 251.575 88.3953 285.368 85.9174 325.128H74.7104C63.8284 325.128 54.1855 333.95 54.1855 344.832V347.295C54.1855 358.177 63.0082 367 73.8902 367C63.0082 367 54.1855 375.823 54.1855 386.705V389.168C54.1855 400.05 63.8284 408.872 74.7104 408.872H77.304C78.7523 470.093 44.8331 540.635 26.227 567.495C7.34986 594.744 20.1136 622.331 24.7392 630.55H20.5249C9.64299 630.55 0 639.373 0 650.255V672.423C0 681.603 7.38926 689.293 14.7785 691.48V734H261.087V691.48C270.94 689.29 275.866 681.6 275.866 672.423V650.255C275.863 639.373 267.861 630.55 256.979 630.55Z"
  //             fill="black"
  //             fill-opacity="0.3"
  //           />
  //         </svg>
  //       ),
  //     },
  //   ];

  const variants = {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0, 0.55, 0.45, 1],
        delay: 1
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.55, 0, 1, 0.45],
        delay:  0.1,
      },
    },
  };

//   function lineSplit(text) {
//     const array = text.split(".");
//     return array.map((line, i) => (
//       <motion.div
//         key={i}
//         custom={i}
//         variants={variants}
//         initial="exit"
//         animate="enter"
//         exit="exit"
//         className=""
//       >
//         {line}
//       </motion.div>
//     ));
//   }

  return (
    <section className="myContainer  text-myWhite flex mt-6">
      <div className="w-full md:w-[800px]  text-center mx-auto  pointer-events-none relative tracking-wide">
        <motion.h1 
        variants={variants}
        initial="exit"
        animate="enter"
        exit="exit" className="text-xl md:text-3xl capitalize tracking-wide font-medium mb-10">
          
            Καλώς ορίσατε στην Σκακιστική ομάδα του Πανεπιστημίου Μακεδονίας!
          
        </motion.h1>
        
        <motion.p 
        className="text-sm sm:text-base font-light bodytxt text-myWhite/80"
        variants={variants}
        initial="exit"
        animate="enter"
        exit="exit">
          Το τμήμα σκακιού, ιδρύθηκε με σκοπό την δημιουργία σκακιστικής
          κοινότητας στο πανεπιστήμιο με άτομα που είναι ήδη σκακιστές και
          θέλουν να ασχοληθούν με το αγαπημένο τους άθλημα αλλά και με άτομα που
          δεν είναι, αλλά έχουν θέληση να μάθουν περισσότερα.
        </motion.p>
        
        
        
      </div>
      {/* {pawns.map((item, i) => {
        return <div style={{position:'fixed',left:item.left,top:item.top,scale:item.scale}}>{item.svg}</div>;
      })} */}
    </section>
  );
}

export default LandingPage;
