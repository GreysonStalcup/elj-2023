import { motion } from "framer-motion";
import info from "/when/info.png";
import button from "/when/button.webp";
import collage from "/when/collage.png";
export default function When() {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: "0", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-white flex md:w-fit p-4 flex-col md:flex-row mx-auto gap-8 md:gap-0 w-10/12 items-center mt-24 shadow-2xl rounded-lg mb-24"
    >
      <div className="flex flex-col items-center">
        <div className="flex-initial">
          <img src={info} alt="info" />
        </div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <a
            href="https://sdcbf.org/elj/elj-2023-register-here/?civiwp=CiviCRM&q=civicrm%2Fevent%2Fregister&id=22&reset=1"
            target="_blank"
            className="hover:cursor-pointer"
          >
            <img src={button} alt="register button" />
          </a>
        </motion.div>
      </div>
      <div>
        <img src={collage} alt="collage" />
      </div>
    </motion.div>
  );
}
