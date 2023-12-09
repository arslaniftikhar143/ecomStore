import React, { useRef } from "react";
import cs1 from "../assets/cs-1.png";
import cs2 from "../assets/cs-2.png";
import cs3 from "../assets/cs-3.png";
import cs4 from "../assets/cs-4.png";
import vector2 from "../assets/vector-2.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { container, item } from "../data";

export default function CreativeSolutionsSection() {
  const scrollRef = useRef(null);
  return (
    <div
      ref={scrollRef}
      className="mx-auto grid max-h-fit max-w-[1366px] grid-rows-1 p-4"
    >
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <LazyLoadImage src={vector2} alt="design image" />
      </div>
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col smp:flex-row ">
        <motion.div
          whileInView="visible"
          initial="hidden"
          variants={container}
          className="smp:[70%] mb-4 flex w-full flex-col items-start justify-between smp:mb-0"
        >
          <motion.div
            variants={item}
            className="w-full text-3xl font-bold text-black lg:w-[50%]"
          >
            Creative Solutions <br className="hidden lg:block" />
            by Professional Designers
          </motion.div>
          <motion.div
            variants={item}
            className="my-4 w-full pr-0 text-[#616161] sm:pr-4 lg:my-0 lg:w-1/2"
          >
            Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
            aptent dapibus metus maecenas consequat. Elementum interdum a
            semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra
            sagittis sit aliquet at. Magna nam platea justo.
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container}
            className="mr-0 grid w-full grid-rows-[repeat(3,minmax(auto,1fr))] gap-4  sm:mr-4 sm:w-fit sm:grid-cols-[repeat(3,minmax(120px,1fr))] sm:grid-rows-1"
          >
            <motion.div
              variants={item}
              className="h-[220px] w-full md:h-[320px]  "
            >
              <LazyLoadImage
                className="h-full w-full object-cover"
                src={cs1}
                alt="Creative Design Picture 1"
              />
            </motion.div>
            <motion.div variants={item} className="h-[220px] md:h-[320px] ">
              <LazyLoadImage
                className="h-full w-full object-cover"
                src={cs2}
                alt="Creative Design Picture 1"
              />
            </motion.div>
            <motion.div variants={item} className="h-[220px] md:h-[320px] ">
              <LazyLoadImage
                className="h-full w-full object-cover"
                src={cs3}
                alt="Creative Design Picture 1"
              />
            </motion.div>
          </motion.div>
          <button className="mt-4 bg-black px-8  py-2 font-bold uppercase text-white lg:mt-0">
            read more
          </button>
        </motion.div>
        <motion.div
          variants={container}
          whileInView="visible"
          initial="hidden"
          margin="120px"
          className="w-full smp:max-w-[33%]"
        >
          <motion.div variants={item} className="relative h-[400px] smp:h-full">
            <LazyLoadImage
              className="h-full w-full object-cover"
              src={cs4}
              alt="Creative Design Picture 1"
            />
            <div className="absolute bottom-0 right-0 flex bg-white p-4">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="30" cy="30" r="30" fill="#111010" />
                <path
                  d="M26.5945 20.3164C26.2291 20.1077 25.8154 19.9986 25.3946 20C24.9739 20.0014 24.5609 20.1133 24.1969 20.3245C23.833 20.5357 23.5309 20.8387 23.3208 21.2033C23.1108 21.5679 23.0001 21.9812 23 22.402V37.484C23.0001 37.9048 23.1108 38.3181 23.3208 38.6827C23.5309 39.0473 23.833 39.3503 24.1969 39.5615C24.5609 39.7726 24.9739 39.8845 25.3946 39.8859C25.8154 39.8874 26.2291 39.7783 26.5945 39.5696L39.7904 32.0274C40.1579 31.8171 40.4633 31.5135 40.6757 31.1473C40.8881 30.781 41 30.3652 41 29.9418C41 29.5184 40.8881 29.1025 40.6757 28.7363C40.4633 28.37 40.1579 28.0664 39.7904 27.8562L26.5945 20.3164Z"
                  fill="white"
                />
              </svg>
              <div className="ml-4 flex flex-col">
                <div className="text-2xl font-semibold capitalize text-[#898989]">
                  watch
                </div>
                <div className="text-2xl font-semibold capitalize ">
                  Video-tour
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
