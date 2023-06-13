import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SharkData {
  id: number;
  y: number;
  direction: number;
  duration: number;
  size: number;
}

const Shark: React.FC = () => {
  const [currentShark, setCurrentShark] = useState<SharkData | null>(null);

  const generateSharkData = () => {
    const screenHeight = window.innerHeight;
    const sharkY = Math.random() * (screenHeight - 200) + 100; // Adjust the range as per your requirements
    const sharkDirection = Math.random() < 0.5 ? -1 : 1;

    const newShark: SharkData = {
      id: Date.now(),
      y: sharkY,
      direction: sharkDirection,
      duration: Math.random() * 10 + 10,
      size: Math.random() * 80 + 120,
    };

    setCurrentShark(newShark);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentShark === null) {
        generateSharkData();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [currentShark]);

  const handleAnimationComplete = () => {
    setCurrentShark(null);
  };

  if (currentShark === null) {
    return null; // No shark to render
  }

  return (
    <motion.div
      key={currentShark.id}
      initial={{
        x: currentShark.direction === -1 ? -300 : window.innerWidth + 300,
        y: currentShark.y,
        opacity: 0,
      }}
      animate={{
        x: currentShark.direction === -1 ? window.innerWidth + 300 : -300,
        opacity: 1,
      }}
      transition={{
        x: { duration: currentShark.duration, ease: "linear" },
        opacity: { duration: 1 },
      }}
      onAnimationComplete={handleAnimationComplete}
      className={`shark ${currentShark.direction === -1 ? "flipped" : ""}`}
      style={{
        width: currentShark.size,
        height: currentShark.size / 2,
        backgroundImage: `url(${
          currentShark.direction === -1 ? "/shark_r.png" : "/shark_l.png"
        })`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: `brightness(60%) blur(${currentShark.size / 70}px)`,
        opacity: 0.3,
      }}
    />
  );
};

export default Shark;
