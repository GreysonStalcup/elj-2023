import React from "react";
import { motion } from "framer-motion";
import invited from "/intro/invited.png";
import logo from "/intro/sdcbf_logo.png";
import invitationSponsor from "/intro/InivitationSponsor-V2.webp";
import titleSponsor from "/intro/TitleSponsor-V2.webp";
import "../styles/main.css";
export default function IntroText() {
  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex justify-evenly h-full flex-col mx-auto text-center text-white relative z-10"
    >
      <div className="text-center items-center">
        <img src={invited} className="mx-auto" alt="invite text" />
        <img
          src={logo}
          className="mx-auto w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6"
          alt="invite text"
        />
      </div>
      <h1 className="p-10 md:p-0 text-4xl md:text-7xl font-oswald">
        26th Annual<br/>An Evening in La Jolla
      </h1>
      <div className="tagline">
        <h2 className="text-xl md:text-4xl uppercase font-oswald pb-10">
          The best legal party in town!
        </h2>
        <p className="md:text-6xl font-tangerine text-2xl">
          A benefit that supports San Diego legal charities
        </p>
        <div className="flex flex-col md:flex-row w-screen mx-auto md:justify-between items-center">
        <div className="md:px-24 mb-8 md:mb-0">
            <img
              src={titleSponsor}
              className="mx-auto md:float-right"
              alt="invite text"
            />
          </div>
          <div className="md:px-24 mb-8 md:mb-0">
            <img
              src={invitationSponsor}
              className="mx-auto md:float-right"
              alt="invite text"
            />
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}
