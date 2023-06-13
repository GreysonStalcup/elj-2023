import React from 'react';
import { motion } from 'framer-motion';
import info from "/when/info.png";
import button from "/when/button.png";
import collage from "/when/collage.png";
export default function When() {
  return (
    <motion.div initial={{x: "-100%", opacity: 0}} whileInView={{x: "0", opacity: 1}} transition={{duration: 1}} className='bg-white flex md:w-fit p-4 flex-col md:flex-row mx-auto gap-8 md:gap-0 w-10/12 items-center mt-24'>
      <div className='flex flex-col items-center'>
        <div className="flex-initial">
          <img src={info} alt="info" />
        </div>
        <div className="">
          <a href="#" target='_blank'><img src={button} alt="register button" /></a>
        </div>
      </div>
      <div>
        <img src={collage} alt="collage" />
      </div>
    </motion.div>
  );
}
