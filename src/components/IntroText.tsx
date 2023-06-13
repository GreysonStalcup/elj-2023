import React from 'react';
import { motion } from 'framer-motion';
import invited from '/intro/invited.png';
import logo from '/intro/sdcbf_logo.png';
export default function IntroText() {
  return (
    <motion.div initial={{ y: "-100%", opacity: 0 }} whileInView={{ y: "0", opacity: 1 }} transition={{ duration: 2 }}
      className="flex justify-evenly h-full flex-col my-au mx-auto text-center text-white relative z-10"
    >
      <div className='text-center items-center'>
        <img src={invited} className="mx-auto" alt='invite text' />
        <img src={logo} className="mx-auto w-1/2 md:w-1/4" alt='invite text' />
      </div>
      <h1 className="p-1 md:p-0 text-4xl md:text-6xl font-bold">
          26th Annual An Evening in La Jolla
        </h1>
      <div className="tagline">
        
        <h2 className="text-xl md:text-3xl uppercase">
          The best legal party in town!
        </h2>
        <p className="text-sm md:text-base italic">
          A benefit that supports San Diego legal charities
        </p>
      </div>
    </motion.div>
  )
}

