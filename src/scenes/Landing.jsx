import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import SocialMediaIcons from "./../components/SocialMediaIcons"

function Landing({ setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          > 
            <img
              src="./../assets/sijinpic.png"
              alt="profile"
              className="hover:filter rounded-t-[400px] transition duration-500z-10 w-full
    max-w-[400px] md:max-w[600px] "
            />
          </div>
        ) : (
          <img
            src="./../assets/sijinpic.png"
            alt="profile"
            className="hover:filter  rounded-t-[400px]  hover:saturate-200 transition duration-500z-10 w-full
    max-w-[400px] md:max-w[600px]"
          />
        )}
      </div>
      {/* main content */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Sijin {""}
            <span
              className="xs: relative xs:text-deep-blue xs:font-semibold z-25
              xs:before:content-brush before:absolute before:-left-[25px]
              before:-top-[80px] before:z-[-1]"
            >
              Mathews
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </p>
        </motion.div>
        {/* call to actions */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delsy: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-md py-3 px-7 font-semibold
             hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-md bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex
            items-center justify-center font-playfair px-10">Let's Talk</div>
          </AnchorLink>
        </motion.div>
        <motion.div
         className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delsy: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
<SocialMediaIcons/>
        </motion.div>
      </div>
    </section>
  );
}

export default Landing;
