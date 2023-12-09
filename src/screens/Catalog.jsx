import CatalogBg from "../assets/catalog-bg.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { container, item } from "../data";
import design from "../assets/Vector.png";
import catalog1 from "../assets/catalog-1.png";
import catalog2 from "../assets/catalog-2.png";
import catalog3 from "../assets/catalog-3.png";
import vector2 from "../assets/vector-2.png";
import catalogBanner from "../assets/catalog_banner.png";
import catalogBannerleft from "../assets/catalog_bannerLeft.png";
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
function Catalog() {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto  max-w-[1366px]"
      >
        <motion.div variants={item}>
          <LazyLoadImage
            className="h-[400px] w-full object-cover"
            src={CatalogBg}
            alt="Hero Background Image"
          />
        </motion.div>
        <motion.div
          variants={item}
          className="absolute right-0 top-10  h-[80%] w-full  bg-black/30  p-4 text-white sm:right-0 sm:top-0 sm:h-full sm:w-full"
        >
          <div className="flex h-full flex-col justify-center sm:w-1/2">
            <div className="mb-4 text-2xl font-bold uppercase sm:text-4xl">
              catalog
            </div>
            <div>
              Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
              aptent dapibus metus maecenas consequat. Elementum interdum a
              semper. Netus nullam eros nisi volutpat nibh ex ultricies.
              Pharetra sagittis sit aliquet at. Magna nam platea justo.
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* categories */}
      <div className="mx-auto grid h-fit max-w-[1366px] grid-rows-1 ">
        <div className="col-start-1 col-end-1 row-start-1 row-end-2 h-fit w-full  ">
          <LazyLoadImage src={design} alt="Design Background" />
        </div>
        <div className="col-start-1 col-end-1 row-start-1 row-end-2 flex items-end pt-12 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container}
            className="grid h-full w-full grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4 px-4 pb-4"
          >
            <motion.div
              variants={item}
              className="h-[350px]  bg-[#252525] p-4 text-white"
            >
              <div>lorem ipsum</div>
              <div className="my-4 text-2xl font-bold">Categories</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                accusamus reprehenderit nostrum aperiam deserunt recusandae id
                architecto amet in expedita.
              </div>
            </motion.div>
            <motion.div variants={item} className="relative h-[350px] w-full">
              <LazyLoadImage
                src={catalog3}
                alt="Catalog 3"
                className="h-full min-w-full object-cover"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-end bg-gradient-to-b from-white/40 to-black/50 p-4 text-white">
                <div>
                  <div className="text-[14px]">lorem ipusm</div>
                  <div className="text-xl font-bold capitalize">
                    lorem ipusm
                  </div>
                  <div className="text-[#BCBCBC]">lorem ipusm</div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={item} className="relative h-[350px] w-full">
              <LazyLoadImage
                src={catalog2}
                alt="Catalog 2"
                className="h-full min-w-full object-cover"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-end bg-gradient-to-b from-white/40 to-black/50 p-4 text-white">
                <div>
                  <div className="text-[14px]">lorem ipusm</div>
                  <div className="text-xl font-bold capitalize">
                    lorem ipusm
                  </div>
                  <div className="text-[#BCBCBC]">lorem ipusm</div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={item} className="relative h-[350px] w-full">
              <LazyLoadImage
                src={catalog1}
                alt="Catalog 1"
                className="h-full min-w-full object-cover"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-end bg-gradient-to-b from-white/40 to-black/50 p-4 text-white">
                <div>
                  <div className="text-[14px]">lorem ipusm</div>
                  <div className="text-xl font-bold capitalize">
                    lorem ipusm
                  </div>
                  <div className="text-[#BCBCBC]">lorem ipusm</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* tiles */}

      <div className="mx-auto mt-10 flex h-fit max-w-[1366px] items-center justify-between px-4">
        <div className="text-[#808080]">Showing 1 - 15 of 22 results</div>
        <div className="flex font-bold ">
          <div className="flex items-center">
            Filter
            <button className="mx-4">
              <svg
                className="h-3 w-3"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5385 0.923077H5.07692C5.07692 0.414 4.66292 0 4.15385 0H3.23077C2.72169 0 2.30769 0.414 2.30769 0.923077H0.461538C0.206769 0.923077 0 1.12938 0 1.38462C0 1.63985 0.206769 1.84615 0.461538 1.84615H2.30769C2.30769 2.35523 2.72169 2.76923 3.23077 2.76923H4.15385C4.66292 2.76923 5.07692 2.35523 5.07692 1.84615H11.5385C11.7932 1.84615 12 1.63985 12 1.38462C12 1.12938 11.7932 0.923077 11.5385 0.923077ZM3.23077 1.84615V0.923077H4.15385L4.15431 1.38277C4.15431 1.38369 4.15385 1.38415 4.15385 1.38462C4.15385 1.38508 4.15431 1.38554 4.15431 1.38646V1.84615H3.23077Z"
                  fill="black"
                />
                <path
                  d="M11.5385 4.61546H8.76923C8.76923 4.10638 8.35523 3.69238 7.84615 3.69238H6.92308C6.414 3.69238 6 4.10638 6 4.61546H0.461538C0.206769 4.61546 0 4.82177 0 5.077C0 5.33223 0.206769 5.53854 0.461538 5.53854H6C6 6.04761 6.414 6.46161 6.92308 6.46161H7.84615C8.35523 6.46161 8.76923 6.04761 8.76923 5.53854H11.5385C11.7932 5.53854 12 5.33223 12 5.077C12 4.82177 11.7932 4.61546 11.5385 4.61546ZM6.92308 5.53854V4.61546H7.84615L7.84662 5.07515C7.84662 5.07608 7.84615 5.07654 7.84615 5.077C7.84615 5.07746 7.84662 5.07792 7.84662 5.07884V5.53854H6.92308Z"
                  fill="black"
                />
                <path
                  d="M11.5385 8.30784H5.07692C5.07692 7.79877 4.66292 7.38477 4.15385 7.38477H3.23077C2.72169 7.38477 2.30769 7.79877 2.30769 8.30784H0.461538C0.206769 8.30784 0 8.51415 0 8.76938C0 9.02461 0.206769 9.23092 0.461538 9.23092H2.30769C2.30769 9.74 2.72169 10.154 3.23077 10.154H4.15385C4.66292 10.154 5.07692 9.74 5.07692 9.23092H11.5385C11.7932 9.23092 12 9.02461 12 8.76938C12 8.51415 11.7932 8.30784 11.5385 8.30784ZM3.23077 9.23092V8.30784H4.15385L4.15431 8.76753C4.15431 8.76846 4.15385 8.76892 4.15385 8.76938C4.15385 8.76984 4.15431 8.7703 4.15431 8.77123V9.23092H3.23077Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            Sort by Price
            <button className="mx-2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#808080"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <button className="mx-2 flex items-center">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.24626 14.4849C8.85553 14.485 10.4188 13.948 11.6884 12.9592L16.4782 17.749C16.836 18.0945 17.4061 18.0846 17.7517 17.7268C18.0888 17.3778 18.0888 16.8244 17.7517 16.4754L12.9619 11.6856C15.4157 8.52694 14.8443 3.97712 11.6856 1.52332C8.5269 -0.930479 3.97712 -0.359074 1.52332 2.79963C-0.930479 5.95833 -0.359075 10.5081 2.79963 12.9619C4.07129 13.9498 5.63594 14.4857 7.24626 14.4849ZM3.39772 3.39495C5.52323 1.26939 8.96937 1.26935 11.0949 3.39487C13.2205 5.52038 13.2205 8.96652 11.095 11.0921C8.96949 13.2176 5.52335 13.2177 3.39779 11.0922C3.39775 11.0921 3.39775 11.0921 3.39772 11.0921C1.2722 8.98205 1.25968 5.54847 3.36971 3.42296C3.37903 3.41359 3.38835 3.40427 3.39772 3.39495Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="flex items-center">
            <button className="mx-2">
              <svg
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="6" width="5" height="5" fill="#252525" />
                <rect width="5" height="5" fill="#252525" />
                <rect x="6" width="17" height="5" fill="#252525" />
                <rect x="6" y="6" width="17" height="5" fill="#252525" />
                <rect x="6" y="12" width="17" height="5" fill="#252525" />
                <rect y="12" width="5" height="5" fill="#252525" />
              </svg>
            </button>
            <button className="mx-2">
              <svg
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="11" height="17" fill="#252525" />
                <rect x="12" width="11" height="17" fill="#252525" />
              </svg>
            </button>
            <button className="mx-2">
              <svg
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="7" height="17" fill="#252525" />
                <rect x="8" width="7" height="17" fill="#252525" />
                <rect x="16" width="7" height="17" fill="#252525" />
              </svg>
            </button>
            <button className="mx-2">
              <svg
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="5" height="17" fill="#252525" />
                <rect x="6" width="5" height="17" fill="#252525" />
                <rect x="12" width="5" height="17" fill="#252525" />
                <rect x="18" width="5" height="17" fill="#252525" />
              </svg>
            </button>
            <button className="mx-2">
              <svg
                width="23"
                height="17"
                viewBox="0 0 23 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="5" height="17" fill="#252525" />
                <rect x="6" width="5" height="17" fill="#252525" />
                <rect x="12" width="5" height="17" fill="#252525" />
                <rect x="18" width="5" height="17" fill="#252525" />
              </svg>
            </button>
          </div>
        </div>
      </div>
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
          <button className=" mx-auto mt-10 w-fit bg-black px-8 py-2 font-bold uppercase text-white">
            More Products
          </button>
        </div>
      </div>

      {/* banner */}

      <div className=" relative mx-auto my-10 flex h-[200px]  max-w-[1366px] px-4">
        <div className="clip_path_1 absolute left-4 h-full w-[40%] border-2 p-4 drop-shadow-lg ">
          {/* <img
            src={catalogBannerleft}
            alt="Catalog Banner Left"
            className="z-10 h-full w-full object-cover"
          /> */}
          <div>
            <div className="mb-4 text-xl font-bold uppercase sm:text-2xl">
              Promotional Banner
            </div>
            <div className="w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </div>
          </div>
        </div>
        <img
          className="absolute right-4 h-full w-[65%] drop-shadow"
          src={catalogBanner}
          alt="Catalog Banner Image"
        />
      </div>

      {/* <div className="mx-auto my-10 flex h-[250px] w-full max-w-[1366px] bg-[url('./assets/bg-2.png')] bg-cover px-4 md:h-[500px] ">
        shfksahfksahfksdafhk hkfhks hskdjfhksdhf kshfksdkf
      </div> */}
    </div>
  );
}

export default Catalog;
