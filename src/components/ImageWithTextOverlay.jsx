import HeroBgImage from "../assets/hero_bg.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { container, item } from "../data";

export default function ImageWithTextOverlay() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative mx-auto max-w-[1366px]"
    >
      <motion.div variants={item}>
        <LazyLoadImage
          className="h-[400px] w-full object-cover"
          src={HeroBgImage}
          alt="Hero Background Image"
        />
      </motion.div>
      <motion.div
        variants={item}
        className="absolute right-0 top-10 flex h-[80%] w-full flex-col items-start justify-between bg-black/40  p-4 text-white sm:right-[15%] sm:h-[300px] sm:w-[500px] sm:p-6 "
      >
        <div className="text-3xl font-bold">New Generation Ceramic Tile </div>
        <div>
          Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
          aptent dapibus metus maecenas consequat. Elementum interdum a semper.
          Netus nullam eros nisi volutpat nibh ex ultricies.
        </div>
        <button className="z-100 bg-white px-8 py-2 font-bold uppercase text-black">
          Learn More
        </button>
      </motion.div>
    </motion.div>
  );
}
