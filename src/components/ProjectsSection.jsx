import { useRef } from "react";
import p1 from "../assets/p-1.png";
import p2 from "../assets/p-2.png";
import p3 from "../assets/p-3.png";
import p4 from "../assets/p-4.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { container, item } from "../data";

export default function ProjectsSection() {
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      className="mx-auto mt-8 grid max-w-[1366px] grid-flow-row grid-rows-2"
    >
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 flex h-full w-full flex-col">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ root: scrollRef }}
          className="mb-4 flex flex-col items-center gap-4"
        >
          <motion.div
            variants={item}
            className=" relative p-4 text-3xl font-bold text-black after:absolute after:bottom-0 after:left-[15%] after:h-1 after:w-3/4 after:bg-[#C4C4C4]"
          >
            Projects
          </motion.div>
          <motion.div
            variants={item}
            className="p-4 text-center text-[#616161] md:w-1/2 md:p-0"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-4"
        >
          <motion.div variants={item} className="flex flex-col justify-evenly">
            <div className="mb-4 h-[300px] w-full">
              <LazyLoadImage
                src={p1}
                className="h-full w-full object-cover"
                alt="Project Picture"
              />
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">Kingdom Tower</div>
              <div className="text-[#1110107e]">Marble Flooring</div>
            </div>
          </motion.div>
          <motion.div variants={item} className="flex flex-col justify-evenly">
            <div className="mb-4 h-[300px] w-full">
              <LazyLoadImage
                src={p2}
                className="h-full w-full object-cover"
                alt="Project Picture"
              />
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">Dubai mall</div>
              <div className="text-[#1110107e]">Wood Flooring</div>
            </div>
          </motion.div>
          <motion.div variants={item} className="flex flex-col justify-evenly">
            <div className="mb-4 h-[300px] w-full">
              <LazyLoadImage
                src={p3}
                className="h-full w-full object-cover"
                alt="Project Picture"
              />
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">King Road Offices</div>
              <div className="text-[#1110107e]">Outdoor Flooring</div>
            </div>
          </motion.div>
          <motion.div variants={item} className="flex flex-col justify-evenly">
            <div className="mb-4 h-[300px] w-full">
              <LazyLoadImage
                src={p4}
                className="h-full w-full object-cover"
                alt="Project Picture"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">Beach Tower Alupang</div>
              <div className="text-[#1110107e]">Wood Flooring</div>
            </div>
          </motion.div>
        </motion.div>
        <button
          variants={item}
          className="mx-auto mt-4 w-fit bg-black px-8 py-2 font-bold uppercase text-white"
        >
          View All
        </button>
      </div>
    </div>
  );
}
