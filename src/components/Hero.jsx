import { motion } from "framer-motion";
import React from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-start items-center mt-5 animate-fade-in h-full'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 violet-gradient h-full' />  {/*violet-gradient */}
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white animate-fade-in`}>
            Hi, I&apos;m <span className='text-[#915EFF]'>Tejas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100 animate-fade-in`}>
            I craft dynamic full stack web applications and<br className='sm:block hidden' /> intuitive user interfaces for seamless user 
            experience
          </p>
        </div>
      </div>

     <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
