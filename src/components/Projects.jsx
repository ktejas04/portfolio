import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, rocket } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tech,
  tags,
  image,
  source_code_link,
  deployment_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>     

        {/* Project Card */}
        <div className="flex flex-col justify-between lg:flex-row  w-full bg-tertiary py-5 lg:py-10 px-4 lg:px-8 mb-20 rounded-2xl">

            {/* Description */}
            <div className='mt-2 mx-auto text-center lg:text-left md:w-4/5 lg:max-w-[57%]'>
              <h3 className='text-white font-bold text-3xl lg:text-5xl mb-8'>{name}</h3>

               {/* Tags */}
              <div className='my-4 flex justify-center lg:justify-start flex-wrap gap-2 text-sm lg:text-base'>
              {tags.map((tag) => (
                <p
                key={`${name}-${tag.name}`}
                className={`${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
              </div>
              <p className='mt-2 lg:mr-12 text-secondary text-sm lg:text-[17px]'>{description}</p>
              <p className='mt-6 lg:mr-12 text-secondary text-sm lg:text-[17px]'>{tech}</p>

              {/* Links */}
              <div className='flex justify-center gap-20 mt-6 card-img_hover'>

                {/* Github */}
                <div 
                  className='black-gradient w-14 h-14 rounded-full flex items-center cursor-pointer hover:opacity-60 duration-300'
                  >
                    <a href={source_code_link} target="_blank" className="w-11 h-11 mx-auto">
                      <img
                        src={github}
                        alt='github'
                        className='object-contain'
                      />
                    </a>
                </div>

                {/* Deployment */}
                <div
                  className='black-gradient w-14 h-14 rounded-full flex items-center cursor-pointer hover:opacity-60 duration-300'
                  >
                    <a href={deployment_link} target="_blank" className="w-9 h-9 mx-auto">
                      <img
                        src={rocket}
                        alt='deployment'
                        className='object-contain rounded-full'
                      />
                    </a>
                </div>               
              </div>
            </div>
          
            {/* Image */}
            <div className='w-full mt-6 lg:mt-0'>
            <img
              src={image}
              alt='project_image'
              className='w-ful h-[90%] object-cover border rounded-2xl mt-4'
            />            
            </div>
        </div>

    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects demonstrate my technical skills and experience through practical, real-world applications. Each project is concisely described, including links to code repositories and live deployments. These examples highlight my proficiency in solving complex problems, working with diverse technologies, and managing projects efficiently.
        </motion.p>
      </div>

      <div className='mt-20'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
