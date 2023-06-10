import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BubbleAnimation = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prevBubbles) => [...prevBubbles, generateBubble()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const generateBubble = () => {
    return {
      id: Date.now(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 5 + 5,
    };
  };

  const handleAnimationComplete = (id) => {
    setBubbles((prevBubbles) =>
      prevBubbles.filter((bubble) => bubble.id !== id)
    );
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        zIndex: "100",
      }}
    >
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ y: "110vh", x: bubble.x, opacity: 0 }}
          animate={{
            y: "-100vh",
            opacity: 1,
          }}
          transition={{
            duration: bubble.duration,
            ease: "linear",
          }}
          onAnimationComplete={() => handleAnimationComplete(bubble.id)}
          style={{
            position: "absolute",
            width: bubble.size,
            height: bubble.size,
            background: "transparent",
            boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.5)",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
};

export default BubbleAnimation;
