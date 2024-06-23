import { motion } from "framer-motion";
import React, { useState } from "react";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Skills = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Skills</p>
          <h2 className={styles.sectionHeadText}>Technologies</h2>
        </motion.div>


        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-28'
        >
          My technical expertise spans across a range of technologies, including JavaScript and Python, and frameworks like React, Node.js, Express, and Next JS, enabling me to develop efficient, scalable, and user-friendly solutions while effectively tackling diverse challenges and delivering high quality results.
        </motion.p>

        <div className='flex flex-row flex-wrap justify-center gap-10 mt-16'>
          {skills.map((skill, index) => (
            <div className='w-28 h-28 cursor-pointer hover:drop-shadow-skill duration-300' key={skill.name} onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={()=>setHoveredIndex(null)} >
              <BallCanvas icon={skill.icon} />
              <p className={`text-center ${hoveredIndex === index? "" : "hidden"}`}>{skill.name}</p>
            </div>
          ))}
        </div>
      </>
  );
};

export default SectionWrapper(Skills, "skills");
