import React from "react";
import bg2 from "../assets/bg-2.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { container, item } from "../data";

export default function ImageWithTextOverlay2() {
  return (
    <div className=" relative mx-auto flex h-fit max-w-[1366px] justify-end px-4 py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        className="h-[350px] w-full sm:h-[500px] sm:w-[90%]"
      >
        <motion.div variants={item} className="h-full w-full ">
          <LazyLoadImage
            className="h-full w-full object-cover"
            src={bg2}
            alt="Background Image"
          />
        </motion.div>
        <motion.div
          variants={item}
          className="absolute left-0 top-[15%] flex h-[70%] w-full flex-col items-start justify-between bg-white/50 p-8 text-black sm:right-[15%] sm:top-1/4 sm:h-[300px] sm:w-[500px] sm:bg-white md:left-4 "
        >
          <div className="text-3xl font-bold">Vision</div>
          <div>
            Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
            aptent dapibus metus maecenas consequat. Elementum interdum a
            semper. Netus nullam eros nisi volutpat nibh ex ultricies.
          </div>
          <button className="z-100 bg-black px-8 py-2 font-bold uppercase text-white">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
