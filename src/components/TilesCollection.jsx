import vector2 from "../assets/vector-2.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { container, item } from "../data";
import tc1 from "../assets/tc-1.png";
import tc2 from "../assets/tc-2.png";
import tc3 from "../assets/tc-3.png";
import tc4 from "../assets/tc-4.png";
import tc5 from "../assets/tc-5.png";
import tc6 from "../assets/tc-6.png";
import tc7 from "../assets/tc-7.png";
import tc8 from "../assets/tc-8.png";

const tilesCollection = [
  {
    id: 1,
    name: "Zurich Vision 60×60",
    price: "449.99 SAR",
    discountPrice: "237.99 SAR",
    LazyLoadImage: tc7,
  },
  {
    id: 2,
    name: "Zurich Pearl 60×60",
    price: "449.99 SAR",
    discountPrice: "312.99 SAR",
    LazyLoadImage: tc8,
  },
  {
    id: 3,
    name: "Zurich Grey 60×60",
    price: "449.99 SAR",
    discountPrice: "312.99 SAR",
    LazyLoadImage: tc6,
  },
  {
    id: 4,
    name: "Zurich Dark Grey 60×60",
    price: "449.99 SAR",
    discountPrice: "312.99 SAR",
    LazyLoadImage: tc5,
  },
  {
    id: 5,
    name: "Windsor White Oak",
    price: "449.99 SAR",
    discountPrice: "312.99 SAR",
    LazyLoadImage: tc4,
  },
  {
    id: 6,
    name: "Sicily Grey Décor 30×60",
    price: "449.99 SAR",
    discountPrice: "312.99 SAR",
    LazyLoadImage: tc3,
  },
  {
    id: 7,
    name: "Sardinia White",
    price: "449.99 SAR",
    discountPrice: "312.99 SAR",
    LazyLoadImage: tc2,
  },
  {
    id: 8,
    name: "Sicily Grey 30×60",
    price: "449.99 SAR",
    discountPrice: "312.99 SAR",
    LazyLoadImage: tc1,
  },
];

export default function TilesCollection() {
  return (
    <div className="mx-auto mt-8 grid max-w-[1366px] grid-flow-row grid-rows-1">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <LazyLoadImage src={vector2} alt="design image" />
      </div>
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex h-full w-full flex-col">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          className="mb-4 flex flex-col items-center gap-4"
        >
          <motion.div
            variants={item}
            className=" relative p-4 text-3xl font-bold text-black after:absolute after:bottom-0 after:left-[15%] after:h-1 after:w-3/4 after:bg-[#C4C4C4]"
          >
            Tile Collections
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
          {tilesCollection.map((tile) => {
            return (
              <motion.div
                variants={item}
                key={tile.id}
                className="flex flex-col justify-evenly bg-white"
              >
                <div className="mb-4 h-[300px] w-full">
                  <LazyLoadImage
                    src={tile.LazyLoadImage}
                    className="h-full w-full object-cover"
                    alt="Project Picture"
                  />
                </div>
                <div className="flex flex-col items-center p-4 shadow">
                  <div className="mb-2 text-2xl font-bold">{tile.name}</div>
                  <div className="font-bold text-[#1110107e]">
                    <span className="text=[#CACACA] mr-2 text-[12px] line-through">
                      {tile.price}
                    </span>
                    {tile.discountPrice}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <button className=" mx-auto mt-4 w-fit bg-black px-8 py-2 font-bold uppercase text-white">
          More Products
        </button>
      </div>
    </div>
  );
}
