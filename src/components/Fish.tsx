import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Fish.css";

interface FishData {
  id: number;
  x: number;
  y: number;
  direction: number;
  duration: number;
  size: number;
  hue: number;
  imageName: string;
}

const Fish: React.FC = () => {
  const [fishList, setFishList] = useState<FishData[]>([]);

  const generateFishData = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const fishCount = Math.floor(Math.random() * 5) + 1;
    const newFishes: FishData[] = [];
  
    for (let i = 0; i < fishCount; i++) {
      const fishY = Math.random() * screenHeight;
      const fishDirection = Math.random() < 0.5 ? -1 : 1;
      const fishHue = Math.floor(Math.random() * 360);
      const fishIndex = Math.floor(Math.random() * 3) + 1;
      const fishImageName = `fish${fishIndex}_${fishDirection === 1 ? 'l' : 'r'}.png`;
  
      newFishes.push({
        id: Date.now() + i,
        x: fishDirection === -1 ? screenWidth : -200,
        y: fishY,
        direction: fishDirection,
        duration: Math.random() * 5 + 5,
        size: Math.random() * 30 + 20,
        hue: fishHue,
        imageName: fishImageName,
      });
    }
  
    setFishList((prevFishList) => [...prevFishList, ...newFishes]);
  };
  

  useEffect(() => {
    const interval = setInterval(generateFishData, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationComplete = (id: number) => {
    setFishList((prevFishList) =>
      prevFishList.filter((fish) => fish.id !== id)
    );
  };

  return (
    <>
      {fishList.map((fish) => (
        <motion.div
          key={fish.id}
          initial={{
            x: fish.direction === -1 ? -200 : window.innerWidth,
            y: fish.y,
            opacity: 0,
          }}
          animate={{
            x: fish.direction === -1 ? window.innerWidth : -200,
            opacity: 1,
          }}
          transition={{
            x: { duration: fish.duration, ease: "linear" },
            opacity: { duration: 1 },
          }}
          onAnimationComplete={() => handleAnimationComplete(fish.id)}
          className={`fish ${fish.direction === -1 ? "flipped" : ""}`}
          style={{
            width: fish.size,
            height: fish.size,
            backgroundImage: `url(${fish.imageName})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            filter: `hue-rotate(${fish.hue}deg) blur(${fish.size / 70}px)`,

          }}
        />
      ))}
    </>
  );
        };
export default Fish;
