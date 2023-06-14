import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// The carousel images
import qcc002 from "/images/qcc002.jpg";
import qcc059 from "/images/qcc059.jpg";
import qcc139 from "/images/qcc139.jpg";
import qcc154 from "/images/qcc154.jpg";
import qcc222 from "/images/qcc222.jpg";
import qcc234 from "/images/qcc234.jpg";
import qcc239 from "/images/qcc239.jpg";
import qcc280 from "/images/qcc280.jpg";

const imageList = [
  qcc002,
  qcc059,
  qcc139,
  qcc154,
  qcc222,
  qcc234,
  qcc239,
  qcc280,
];

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows: true, // Change from `showArrows` to `arrows`
  };

  return (
    <motion.div
      className="w-3/4 mx-auto my-24 rounded-lg"
      initial={{ x: "100%", opacity: 0 }}
      whileInView={{ x: "0", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Slider {...settings}>
        {imageList.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`carousel-${index}`} className="rounded-lg" />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
