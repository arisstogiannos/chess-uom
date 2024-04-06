import React from 'react'
import {motion} from 'framer-motion'

function Contact() {
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
    <section className=' myContainer mx-auto'>
        
              <div className="w-full md:w-1/3 mr-auto mt-10 z-50 flex flex-col gap-2 text-myWhite">
          <motion.h3
            className="text-xl md:text-2xl font-semibold tracking-wide"
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
            className="w-1/2 origin-left border-myOrange"
          ></motion.hr>
          <motion.p
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="z-50 mt-2 text-sm md:text-base bodytxt"
          >
            Βρείτε μας στο{" "}
            <a
              href="https://www.facebook.com/groups/455607596757531"
              target="_blank"
              className="text-myOrange underline text-base md:text-lg"
            >
              Facebook
            </a>{" "}
            και στο{" "}
            <a
              href="https://discord.gg/XXf6pvePrv"
              target="_blank"
              className="text-myOrange underline text-base md:text-lg "
            >
              Discord
            </a>
            .Για οποιαδήποτε άλλη επιθυμητή επικοινωνία με τα ιδρυτικά μέλη της
            ομάδας στείλτε μας ένα e-mail στο chess@uom.edu.gr
          </motion.p>
        </div>
              <div className="w-full md:w-1/3 mr-auto mt-10 z-50 flex flex-col gap-2 text-myWhite">
              <motion.h3
            className="text-xl md:text-2xl font-semibold tracking-wide"
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
            className="w-1/2 origin-left border-myOrange"
          ></motion.hr>
              <motion.p
            variants={variants}
            initial="exit"
            animate="enter"
            exit="exit"
            className="z-50 mt-2 md:text-base text-sm bodytxt"
          >
              Γίνετε μέλος της ομάδας μας συμπληρώνοντας την{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfFtWLveO4_6LdXzL_iG_raS6xhytFxM5TTeVwsYbvGS3g4ww/viewform?vc=0&c=0&w=1&flr=0"
              target="_blank"
              className="text-myOrange underline "
            >
              φόρμα εγγραφής
            </a>
            </motion.p>
        </div>
    </section>
  )
}

export default Contact