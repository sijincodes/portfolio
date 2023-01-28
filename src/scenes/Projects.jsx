import React from "react";
import { motion } from "framer-motion";

function Projects() {

  const Project = ({ title, subtitle, gitlink, sitelink }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-light-brown z-30 flex-col 
    justify-center items-center p-10 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
      <div className="relative" >
        <div className={overlayStyles}>
          <p className="text-md font-opensans font-bold  pl-8">{title}</p>
          <p className="mt-1 pl-8 text-md font-opensans">
            <span className="font-bold">Tech-Stack: </span>
            {subtitle}
          </p>

          <div className="flex justify-evenly">
            <a
              className="hover:underline "
              href={gitlink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="../assets/GitHub-Mark.png"
                className="h-8 mt-3 rounded-full  pl-2"
                alt="github-link"
              />
              <span>Git Hub</span>
            </a>
            <a
              className="hover:underline "
              href={sitelink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="../assets/website.webp"
                className="h-8 mt-3 rounded-full  pl-2"
                alt="github-link"
              />
              <span>Website</span>
            </a>
          </div>
        </div>
        <img
          src={`../assets/${projectTitle}.jpeg`}
          alt={projectTitle}
          
        />
      </div>
    );
  };
  return (
    <section id="projects" className="pt-40 pb-40">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-light-brown pl-5">PRO</span>JECTS
          </p>
        </div>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center mt-10 mb-10">
        <motion.div
          className="sm:grid sm:grid-cols-3"
         
        >
          {/* Row 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] 
          text-2xl font-playfair font-semibold text-brown"
          >
            Full-Stack Projects{" "}
            <span className="material-icons p-5 mt-1">arrow_forward</span>
          </div>
          <Project
            title={"parfum-Ecommerce"}
            subtitle={"React SASS Strapi Stripe"}
            gitlink={"https://github.com/sijincodes/ecommerce-client"}
            sitelink={""}
          />
          <Project
            title={"pennyWise-ExpenseTracker"}
            subtitle={"Mongoose, Express, React, NodeJs"}
            gitlink={"https://github.com/sijincodes/ExpenseTracker-client"}
            sitelink={"https://penny-wise-sm.netlify.app/"}
          />
           <Project
            title={"Job-Tracker"}
            subtitle={"Mongoose, Express, React, NodeJs"}
            gitlink={"https://github.com/sijincodes/JobApplicationTracker-client"}
            sitelink={"https://job-application-tracker-sm.netlify.app"}
          />

          {/* Row 2 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] 
          text-2xl font-playfair font-semibold text-brown"
          >
            FrontEnd Projects{" "}
            <span className="material-icons p-5 mt-1">arrow_forward</span>
          </div>
          <Project
            title={"Traveler-Travigo"}
            subtitle={"React,JavaScript,Tailwind CSS"}
            gitlink={"https://github.com/sijincodes/Traveler"}
            sitelink={"https://travigo-traveler-sm.netlify.app"}
          />
          {/* <Project title={"Project 6"} /> */}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
