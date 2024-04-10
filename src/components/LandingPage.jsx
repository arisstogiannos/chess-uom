"use client";
import {  motion } from "framer-motion";

function LandingPage() {
  

  const variants = {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0, 0.55, 0.45, 1],
        delay: 0.7
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



  return (
    <section className="myContainer h-[100dvh]  text-myWhite flex mt-6 ">
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
          κοινότητας στο πανεπιστήμιο για άτομα που είναι ήδη σκακιστές και
          θέλουν να ασχοληθούν με το αγαπημένο τους άθλημα αλλά και για άτομα που
          δεν είναι, αλλά έχουν θέληση να μάθουν περισσότερα.
        </motion.p>
        
        
        
      </div>
     
    </section>
  );
}

export default LandingPage;
