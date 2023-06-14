import React, { useEffect, useState } from "react";
import desktopImage from "/sponsors/Sponsors_desktop.webp";
import mobileImage from "/sponsors/Sponsors_mobile.webp";
import { motion } from "framer-motion";
export default function Sponsors() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <motion.div
      className=" px-10 md:px-24 my-24"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: "0", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <a href="https://sdcbf.org/elj/2023-our-sponsors/" target="_blank">
        <img
          src={isDesktop ? desktopImage : mobileImage}
          alt="Sponsor Image"
          className="mx-auto max-w-[2000px] w-full rounded-xl shadow-2xl"
        />
      </a>
    </motion.div>
  );
}
