import React, { useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import design from "../assets/Vector4.png";
import cs1 from "../assets/cs-1.png";
import cs2 from "../assets/cs-2.png";
import cs3 from "../assets/cs-3.png";
import cs4 from "../assets/cs-4.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import vector2 from "../assets/vector-2.png";
import tc1 from "../assets/tc-1.png";
import tc2 from "../assets/tc-2.png";
import tc3 from "../assets/tc-3.png";
import tc4 from "../assets/tc-4.png";
import tc5 from "../assets/tc-5.png";
import tc6 from "../assets/tc-6.png";
import tc7 from "../assets/tc-7.png";
import tc8 from "../assets/tc-8.png";
import { container, item } from "../data";

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
const tabs = [
  {
    id: 1,
    value: "description",
    details:
      "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem! 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem! 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem!",
  },
  {
    id: 2,
    value: "details",
    details:
      "2 Lorem ipsum dolor sit amet consectetur adipisicing elit 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem! 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem!.",
  },
  {
    id: 3,
    value: "reviews",
    details:
      "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem! 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem! 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quidem!",
  },
];
function ProductDetails() {
  const images = [cs1, cs2, cs3, cs4];
  const [selected, setSelected] = useState(images[0]);
  const [selectedRadio, setSelectedRadio] = useState(tabs[0].value);

  return (
    <div>
      <div className="relative mx-auto h-[70px] max-w-[1366px]  overflow-hidden bg-[#222]">
        <div className="h-full w-full">
          <img src={design} alt="Bg design" className="object-cover" />
        </div>
        <div className="absolute left-0 top-0 flex h-full w-full items-center px-8">
          <BreadCrumbs />
        </div>
      </div>
      <div className="mx-auto my-10 flex max-w-[1366px]">
        <div className=" flex w-1/2 flex-col p-4">
          <div className="h-[400px] w-full ">
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 100, duration: 0.5 },
              }}
              src={selected}
              alt="selected image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 grid w-full grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
            {images.map((image, index) => {
              return (
                <button
                  onClick={() => setSelected(image)}
                  key={index}
                  className="m-2 first:ml-0"
                >
                  <img
                    src={image}
                    alt="image"
                    className="h-[150px] w-full object-cover "
                  />
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="mb-2 text-4xl font-bold">Product Name</div>
          <div className="text-2xl">199,50 SAR</div>
          <div className="mb-8 mt-4 w-[80%] text-[#616161]">
            Product Short Description senectus et netus et malesuada fames ac
            turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies
            eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
            semper. Aenean ultricies mi vitae est. Mauris placerat eleifend{" "}
          </div>
          <div className="my-4 flex">
            <div className="flex w-fit justify-between border border-black p-4">
              <button>
                <svg
                  width="16"
                  height="1"
                  viewBox="0 0 16 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="16" y2="0.5" stroke="black" />
                </svg>
              </button>
              <div className="mx-4">Value</div>
              <button>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="8.5"
                    y1="2.18557e-08"
                    x2="8.5"
                    y2="15"
                    stroke="black"
                  />
                  <line y1="6.5" x2="16" y2="6.5" stroke="black" />
                </svg>
              </button>
            </div>
            <button className="mx-4 bg-[#22222B] px-8 py-4 text-white">
              Add to Cart
            </button>
            <button className="border border-black p-4">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.610919 6.42787C0.674502 6.04637 0.711903 5.66113 0.809148 5.28711C1.32155 3.32725 2.46979 1.89476 4.42965 1.27763C6.52416 0.615619 8.34937 1.15047 9.8604 2.74379C10.0399 2.9308 10.197 3.13651 10.3728 3.34596C10.5449 3.14399 10.7019 2.94202 10.8777 2.75127C11.7118 1.85362 12.7067 1.22901 13.9372 1.07192C15.8372 0.828809 17.4642 1.40854 18.7134 2.87095C19.9627 4.33337 20.3292 6.06133 20.0412 7.93891C19.8579 9.12829 19.3156 10.1643 18.605 11.1181C17.6737 12.371 16.5366 13.4258 15.366 14.4468C13.9858 15.6474 12.5945 16.8406 11.2069 18.0337C10.672 18.4937 10.0998 18.5124 9.58737 18.0711C7.77712 16.5002 5.96313 14.9368 4.17532 13.3397C3.26645 12.5319 2.45483 11.6267 1.78534 10.6019C1.15699 9.63321 0.734345 8.5897 0.6371 7.43024C0.63336 7.38536 0.618398 7.34422 0.607178 7.30307C0.610918 7.01134 0.610919 6.7196 0.610919 6.42787ZM10.3691 17.237C10.4177 17.1996 10.4588 17.1697 10.4962 17.136C12.0409 15.8008 13.5931 14.4768 15.1228 13.1303C16.1925 12.1878 17.2099 11.1891 17.9991 9.99227C18.7546 8.85151 19.1248 7.60977 18.9528 6.23338C18.7658 4.74853 18.13 3.518 16.8134 2.74379C15.5866 2.02193 14.2888 1.93216 12.9872 2.56052C12.2167 2.93079 11.6482 3.53297 11.1695 4.23238C11.1021 4.33337 11.0386 4.43809 10.9675 4.53534C10.6533 4.96546 10.0923 4.96172 9.77438 4.53908C9.49761 4.1688 9.24327 3.77608 8.92535 3.43946C7.90428 2.35855 6.6401 1.93965 5.18517 2.25382C3.61429 2.59418 2.582 3.58907 2.06211 5.08514C1.4562 6.82433 1.7442 8.46253 2.74657 9.98853C3.36744 10.9348 4.13044 11.7651 4.96824 12.5169C6.35211 13.7624 7.7659 14.9779 9.16473 16.201C9.56493 16.5488 9.96513 16.8892 10.3691 17.237Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul className="list-inside list-disc">
              <li className="marker:text-[#C4C4C4]">
                Lorem ipsum dolor sit amet consectetur
              </li>
              <li className="marker:text-[#C4C4C4]">
                Lorem ipsum dolor sit amet consectetur
              </li>
              <li className="marker:text-[#C4C4C4]">
                Lorem ipsum dolor sit amet consectetur
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto my-10 max-w-[1366px] ">
        <div className="flex w-full justify-center">
          {tabs.map((tab) => {
            console.log(tab.value);
            return (
              <div className=" relative w-[150px] border border-black">
                <input
                  className="h-full w-full cursor-pointer opacity-0"
                  type="radio"
                  name="tab"
                  id="tab1"
                  value={tab.value}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <div
                  className={`absolute left-0 top-0 -z-10 w-full capitalize transition-all duration-300  ${
                    selectedRadio === tab.value ? "text-gray" : "font-semibold"
                  }`}
                >
                  {tab.value}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center p-4">
          {tabs.map((tab) => {
            return (
              <>{tab.value === selectedRadio && <div>{tab.details}</div>}</>
            );
          })}
        </div>
      </div>
      <div className="mx-auto my-10 max-w-[1366px] ">
        <div className="mx-auto mt-8 grid max-w-[1366px] grid-flow-row grid-rows-1">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2">
            <LazyLoadImage src={vector2} alt="design image" />
          </div>
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex h-full w-full flex-col">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
