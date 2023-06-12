import React from 'react'
import { motion } from 'framer-motion'
export default function IntroText() {
  return (
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      className="flex justify-evenly h-full flex-col my-au mx-auto text-center text-white relative z-10"
    >
      <h1 className="text-4xl md:text-9xl">You're Invited</h1>
      <div className="tagline">
        <h2 className="text-xl md:text-3xl uppercase">
          The best legal party in town!
        </h2>
        <p className="text-sm md:text-base">
          A benefit that supports San Diego legal charities
        </p>
      </div>
    </motion.div>
  )
}

