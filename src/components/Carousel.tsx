import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
// The carousel images
import image1 from "/images/qcc002.jpg";
import image2 from "/images/qcc059.jpg";
import image3 from "/images/qcc139.jpg";
import image4 from "/images/qcc154.jpg";
import image5 from "/images/qcc222.jpg";
import image6 from "/images/qcc234.jpg";
import image7 from "/images/qcc239.jpg";
import image8 from "/images/qcc280.jpg";

const imageList = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
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
    showArrows: true,
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
            <img src={image} alt="carousel" className="rounded-lg" />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
