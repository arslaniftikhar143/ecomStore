import { LazyLoadImage } from "react-lazy-load-image-component";
import showRoom from "../assets/showroom.png";
import vector3 from "../assets/Vector3.png";
import { container, item } from "../data";
import { motion } from "framer-motion";

export default function ShowRoomSection() {
  return (
    <div className=" relative mx-auto  mt-8 grid h-full max-w-[1366px] grid-rows-2 items-center px-4">
      <div className="col-start-1 col-end-2 row-start-2 row-end-3 h-fit w-full ">
        <LazyLoadImage
          className="h-full w-full object-cover"
          src={vector3}
          alt="Design"
        />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        className="col-start-1 col-end-2 row-start-1 row-end-3"
      >
        <motion.div
          variants={item}
          className=" h-[400px] w-full md:h-[650px] md:w-[60%]"
        >
          <LazyLoadImage
            className="h-full w-full object-cover"
            src={showRoom}
            alt="Background Image"
          />
        </motion.div>
        <motion.div
          variants={item}
          className="absolute right-0 top-[10%] flex h-[80%] w-full flex-col items-start  justify-between  bg-white/50 p-8 text-black  sm:right-[15%] sm:w-[500px] sm:bg-[#F9F9F9] md:top-1/4 md:h-[350px]  md:p-16"
        >
          <div className="text-3xl font-bold">Our Showrooms</div>
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
