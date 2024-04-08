import React from "react";
import { motion } from "framer-motion";

function About() {
  const variants = {
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0, 0.55, 0.45, 1],
        delay: 1.2,
      },
    }),
    exit: (i) => ({
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.55, 0, 1, 0.45],
        delay: i * 0.2,
      },
    }),
  };
  return (
    <section className="myContainer mx-auto">
      <div className="text-myWhite ml-auto w-full md:w-2/3 flex flex-col gap-14 3xl:gap-24">
        <div className="w-full md:w-2/3 flex flex-col gap-2 self-center">
          <motion.h3
            className="text-xl md:text-2xl font-semibold  "
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            Πληροφορίες
          </motion.h3>
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: {
                duration: 0.8,
                ease: [0, 0.55, 0.45, 1],
                delay: 1.2,
              },
            }}
            exit={{
              scaleX: 0,
              transition: {
                duration: 0.8,
                ease: [0.55, 0, 1, 0.45],
              },
            }}
            className="w-48 border-myOrange origin-left"
          ></motion.hr>

          <motion.p
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="mt-2 text-sm md:text-base text-myWhite/90 bodytxt"
          >
            Η σκακιστική ομάδα του ΠΑ.ΜΑΚ. ιδρύθηκε το 2022. Συντελείται από
            σχεδών 100 φοιτητές και απόφοιτους από όλα τα τμήματα της σχολής και
            όλα τα επίπεδα παιχτηκής δυναμικότητας.
          </motion.p>
        </div>
      
        <div className="w-1/2 ml-auto z-50 flex flex-col gap-2 ">
          <motion.h3
            className="text-xl md:text-2xl font-semibold "
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            Δράσεις
          </motion.h3>
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: {
                duration: 0.8,
                ease: [0, 0.55, 0.45, 1],
                delay: 1.2,
              },
            }}
            exit={{
              scaleX: 0,
              transition: {
                duration: 0.8,
                ease: [0.55, 0, 1, 0.45],
              },
            }}
            className="w-48 origin-left border-myOrange"
          ></motion.hr>
          <motion.div
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="z-50 mt-2 bodytxt text-sm md:text-base text-myWhite/90"
          >
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 ">
                <div className="bg-myOrange size-2 rounded-full"></div>{" "}
                Εβδομαδιαίες συναντήσεις μελών.
              </li>
              <li className="flex items-center gap-2 ">
                <div className="bg-myOrange size-2 rounded-full"></div> Φιλικές
                παρτίδες
              </li>
              <li className="flex items-center gap-2 ">
                <div className="bg-myOrange size-2 rounded-full"></div> Μαθήματα
                από υψηλόβαθμους σκακιστές.
              </li>
              <li className="flex items-center gap-2 ">
                <div className="bg-myOrange size-2 rounded-full"></div>{" "}
                Συμμετοχή σε τουρνουά.
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-2 self-center">
          <motion.h3
            className="text-xl  md:text-2xl font-semibold tracking-wide"
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            Στόχοι
          </motion.h3>
          <motion.hr
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: {
                duration: 0.8,
                ease: [0, 0.55, 0.45, 1],
                delay: 1.2,
              },
            }}
            exit={{
              scaleX: 0,
              transition: {
                duration: 0.8,
                ease: [0.55, 0, 1, 0.45],
              },
            }}
            className="w-48 origin-left border-myOrange"
          ></motion.hr>
          <motion.div
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="mt-2 text-sm md:text-base text-myWhite/90 bodytxt"
          >
            <ul className="flex flex-col gap-2">
              {" "}
              <li className="flex items-center gap-2 ">
                <div className="bg-myOrange size-2 rounded-full"></div> Συνένωση
                φοιτητών.
              </li>
              <li className="flex items-center gap-2 ">
                <div className="bg-myOrange size-2 rounded-full"></div>{" "}
                Εκπαίδευση και βελτίωση(ανεξάρτητα επιπέδου).
              </li>
              <li className="flex items-center gap-2 ">
                <div className="bg-myOrange size-2 rounded-full"></div>Προώθηση
                του σκακιού.
              </li>
            </ul>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
