import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  const projectVarient = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const Project = ({ title }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex-col 
    justify-center items-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
      <motion.div className="relative" variants={projectVarient}>
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">Send your sub-title like the title</p>
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </motion.div>
    );
  };
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-red pl-5">PRO</span>JECTS
          </p>
        </div>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center mt-10 mb-10">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* Row 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] 
          text-2xl font-playfair font-semibold"
          >
            Full-Stack Projects{" "}
            <span className="material-icons p-5 mt-1">arrow_forward</span>
          </div>
          <Project title={"Project 1"} />
          <Project title={"Project 2"} />

          {/* Row 2 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] 
          text-2xl font-playfair font-semibold"
          >
            FrontEnd Projects{" "}
            <span className="material-icons p-5 mt-1">arrow_forward</span>
          </div>
          <Project title={"Project 5"} />
          <Project title={"Project 6"} />
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
