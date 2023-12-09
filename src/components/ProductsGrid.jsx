import design from "../assets/Vector.png";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import product4 from "../assets/product-4.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { container, item } from "../data";

export default function ProductsGrid() {
  return (
    <div className="mx-auto grid max-w-[1366px] grid-rows-2">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 h-fit w-full ">
        <LazyLoadImage
          className="h-full w-full object-cover"
          src={design}
          alt="Design"
        />
      </div>
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 flex h-full w-full flex-col">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              type: "tween",
              stiffness: 100,
            },
          }}
          viewport={{ once: true }}
          className="mb-4 flex flex-col items-center gap-4"
        >
          <div className=" relative p-4 text-3xl font-bold text-black after:absolute after:bottom-0 after:left-[15%] after:h-1 after:w-3/4 after:bg-[#C4C4C4]">
            Products
          </div>
          <div className="p-4 text-[#616161] md:p-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            quisquam distinctio minima, inventore deserunt ullam?
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" grid grid-cols-[repeat(auto-fill,minmax(300px,auto))] gap-8 p-4 lg:grid-cols-[repeat(auto-fill,minmax(350px,auto))] lg:gap-4"
        >
          <motion.div
            variants={item}
            className="relative row-span-2 h-[320px] bg-slate-500  md:h-[618px]"
          >
            <LazyLoadImage
              className="h-full w-full object-cover"
              src={product1}
              alt="Product 1"
            />
            <div className=" absolute bottom-[-1em] left-6 mx-auto flex w-[90%]  flex-col items-center border border-white bg-black p-4">
              <div className="mb-2 text-2xl font-bold text-white">
                Bathroom Tiles
              </div>
              <div className="text-center text-base text-[#B4B4B4]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            className="relative row-span-2 h-[320px] bg-slate-500 md:h-[618px]"
          >
            <LazyLoadImage
              className="h-full w-full object-cover"
              src={product2}
              alt="Product 2"
            />
            <div className=" absolute bottom-[-1em] left-6 mx-auto flex w-[90%]  flex-col items-center border border-white bg-black p-4">
              <div className="mb-2 text-2xl font-bold text-white">Marble</div>
              <div className="text-center text-base text-[#B4B4B4]">
                Lorem ipsum dolor sit amet consect
              </div>
            </div>
          </motion.div>
          <motion.div variants={item} className="relative  bg-slate-500">
            <LazyLoadImage
              className="h-full w-full object-cover"
              src={product3}
              alt="Product 2"
            />
            <div className=" absolute bottom-[-1em] left-6 mx-auto flex w-[90%]  flex-col items-center border border-white bg-black p-4">
              <div className="mb-2 text-2xl font-bold text-white">
                Outdoor Flooring
              </div>
              <div className="text-center text-base text-[#B4B4B4]">
                Lorem ipsum dolor sit amet consectetur
              </div>
            </div>
          </motion.div>
          <motion.div variants={item} className="relative bg-slate-500">
            <LazyLoadImage
              className="h-full w-full object-cover"
              src={product4}
              alt="Product 2"
            />
            <div className=" absolute bottom-[-1em] left-6 mx-auto flex w-[90%]  flex-col items-center border border-white bg-black p-4">
              <div className="mb-2 text-2xl font-bold text-white">
                Kitchen Interior
              </div>
              <div className="text-center text-base text-[#B4B4B4]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
