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
      <div className="text-myWhite ml-auto w-2/3 flex flex-col gap-24 3xl:gap-40">
        <div className="w-2/3 flex flex-col gap-2">
          <motion.h3
            className="text-2xl font-semibold tracking-wide "
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
            className="w-1/3 border-myOrange origin-left"
          ></motion.hr>

          <motion.p
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="mt-2"
          >
            Η ομάδα αυτή, θα έχει ενεργό ρόλο με υλοποίηση διάφορων
            δραστηριοτήτων, όπως η συνάντηση των μελών της για φιλικούς αγώνες ή
            μαθήματα και συμβουλές από πιο έμπειρους παίκτες. Επίσης, μπορεί να
            συμμετάσχει μελλoντικά σε πανεπιστημιακούς αγώνες που θα
            διοργανωθούν.
          </motion.p>
        </div>
        <div className="w-2/3 ml-auto z-50 flex flex-col gap-2">
          <motion.h3
            className="text-2xl font-semibold tracking-wide"
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            Επικοινωνία
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
            className="w-1/3 origin-left border-myOrange"
          ></motion.hr>
          <motion.p
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="z-50 mt-2"
          >
            Βρείτε μας στο{" "}
            <a
              href="https://www.facebook.com/groups/455607596757531"
              target="_blank"
              className="text-myOrange underline text-lg"
            >
              Facebook
            </a>{" "}
            και στο{" "}
            <a
              href="https://discord.gg/XXf6pvePrv"
              target="_blank"
              className="text-myOrange underline text-lg "
            >
              Discord
            </a>
            .Για οποιαδήποτε άλλη επιθυμητή επικοινωνία με τα ιδρυτικά μέλη της
            ομάδας στείλτε μας ένα e-mail στο chess@uom.edu.gr
          </motion.p>
        </div>
        <div className="w-2/3 flex flex-col gap-2">
          <motion.h3
            className="text-2xl font-semibold tracking-wide"
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            Συμμετοχή
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
            className="w-1/3 origin-left border-myOrange"
          ></motion.hr>
          <motion.p
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="mt-2"
          >
            Γίνετε μέλος της ομάδας μας συμπληρώνοντας την{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfFtWLveO4_6LdXzL_iG_raS6xhytFxM5TTeVwsYbvGS3g4ww/viewform?vc=0&c=0&w=1&flr=0"
              target="_blank"
              className="text-myOrange underline text-lg"
            >
              φόρμα εγγραφής
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default About;
