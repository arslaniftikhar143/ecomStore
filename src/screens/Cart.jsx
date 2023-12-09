import React, { useState } from "react";
import tableEntryPic from "../assets/tableEntryPic.png";

function Cart() {
  const [show, setShow] = useState(false);
  return (
    <div className="mx-auto max-w-[1366px]">
      <div className="bg-gradient-to-b from-[#c4c4c442] to-transparent p-4 text-3xl font-bold capitalize">
        shopping cart
        <div className="mt-4 flex cursor-pointer items-center  text-base ">
          <svg
            className="mr-2"
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM32 7L1 7V9L32 9V7Z"
              fill="#111010"
            />
          </svg>
          Continue Shopping
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-evenly bg-[#FAFAFA] py-2">
            <HeaderEntry customStyle={"w-[250px]"}></HeaderEntry>
            <HeaderEntry>Unit Price</HeaderEntry>
            <HeaderEntry>QTY</HeaderEntry>
            <HeaderEntry>Total SAR</HeaderEntry>
          </div>
          <div className="flex flex-col">
            <TableRow>
              <TableRowEntry customStyle={"w-[250px]"}>
                <div className="flex items-center">
                  <img
                    className="mr-2"
                    src={tableEntryPic}
                    alt="Table product entry"
                  />
                  <div className="flex flex-col capitalize">
                    product name
                    <div className="text-left text-sm text-[#A1A1A1]">
                      lorem ipsum
                    </div>
                  </div>
                </div>
              </TableRowEntry>
              <TableRowEntry>199.99</TableRowEntry>
              <TableRowEntry>
                <ProductCounter />
              </TableRowEntry>
              <TableRowEntry>199.99</TableRowEntry>
            </TableRow>
            <TableRow>
              <TableRowEntry customStyle={"w-[250px]"}>
                <div className="flex items-center">
                  <img
                    className="mr-2"
                    src={tableEntryPic}
                    alt="Table product entry"
                  />
                  <div className="flex flex-col capitalize">
                    product name
                    <div className="text-left text-sm text-[#A1A1A1]">
                      lorem ipsum
                    </div>
                  </div>
                </div>
              </TableRowEntry>
              <TableRowEntry>199.99</TableRowEntry>
              <TableRowEntry>
                <ProductCounter />
              </TableRowEntry>
              <TableRowEntry>199.99</TableRowEntry>
            </TableRow>
            <TableRow>
              <TableRowEntry customStyle={"w-[250px]"}>
                <div className="flex items-center">
                  <img
                    className="mr-2"
                    src={tableEntryPic}
                    alt="Table product entry"
                  />
                  <div className="flex flex-col capitalize">
                    product name
                    <div className="text-left text-sm text-[#A1A1A1]">
                      lorem ipsum
                    </div>
                  </div>
                </div>
              </TableRowEntry>
              <TableRowEntry>199.99</TableRowEntry>
              <TableRowEntry>
                <ProductCounter />
              </TableRowEntry>
              <TableRowEntry>199.99</TableRowEntry>
            </TableRow>
          </div>
        </div>
        <div className="mx-0 h-fit  cursor-pointer bg-[#FAFAFA] p-4 transition-all duration-500 md:w-full lg:mx-2 lg:w-[400px]">
          <div
            className="flex items-center justify-between font-bold"
            onClick={() => setShow(!show)}
          >
            <div>
              Do you have a Voucher?{" "}
              <span className="text-sm font-normal">(Optional)</span>
            </div>
            <div className={`ml-4 ${show ? "rotate-180" : " "}`}>
              <svg
                width="17"
                height="11"
                s
                viewBox="0 0 17 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 10L8.5 2L16 10"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          {show ? (
            <>
              <div className="my-8 flex justify-between">
                <input
                  type="text"
                  className="placeholder:font-bolds mr-2 border-2 border-black p-2 placeholder-black focus:outline-none"
                  placeholder="Enter the code"
                />
                <button className="z-100 bg-black px-8 py-2 font-bold uppercase text-white">
                  Redeem
                </button>
              </div>
            </>
          ) : null}
          <div className="my-8 flex justify-between">
            <div className="font-semibold">
              Subtotal <div className="text-sm font-normal">shipping</div>
            </div>
            <div className="font-semibold">
              1,300 SAR{" "}
              <div className="text-right text-sm font-normal">5,19 SAR</div>
            </div>
          </div>
          <div className="my-8 flex justify-between">
            <div className="font-semibold">
              Total <span>(VAT included.)</span>
            </div>
            <div className="font-semibold">143,91 SAR</div>
          </div>
          <button className="z-100 w-full bg-black px-8 py-2 font-bold uppercase text-white">
            Safe Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

const HeaderEntry = ({ children, customStyle }) => {
  return (
    <div
      className={`min-w-[100px] text-center font-bold  ${
        customStyle ? customStyle : " "
      }`}
    >
      {children}
    </div>
  );
};

const TableRow = ({ children }) => {
  return (
    <div className="border-red first:border-gray group relative flex items-center justify-evenly border-2 border-y border-white bg-[#FAFAFA] py-4 first:border-t">
      {children}
      <div className="absolute right-2 hidden  cursor-pointer transition duration-300 group-hover:block">
        <svg
          width="12"
          height="12"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_3_1311)">
            <path
              d="M12.7734 1.75781H10.5762V1.31836C10.5762 0.591416 9.98476 0 9.25781 0H5.74219C5.01524 0 4.42383 0.591416 4.42383 1.31836V1.75781H2.22656C1.49962 1.75781 0.908203 2.34923 0.908203 3.07617C0.908203 3.66 1.28979 4.15608 1.81655 4.32894L2.60039 13.7911C2.65685 14.469 3.23394 15 3.91418 15H11.0858C11.7661 15 12.3432 14.469 12.3997 13.7909L13.1834 4.32891C13.7102 4.15608 14.0918 3.66 14.0918 3.07617C14.0918 2.34923 13.5004 1.75781 12.7734 1.75781ZM5.30273 1.31836C5.30273 1.07604 5.49987 0.878906 5.74219 0.878906H9.25781C9.50013 0.878906 9.69727 1.07604 9.69727 1.31836V1.75781H5.30273V1.31836ZM11.5238 13.7181C11.5049 13.9441 11.3126 14.1211 11.0858 14.1211H3.91418C3.68745 14.1211 3.49509 13.9441 3.47631 13.7183L2.70393 4.39453H12.2961L11.5238 13.7181ZM12.7734 3.51562H2.22656C1.98425 3.51562 1.78711 3.31849 1.78711 3.07617C1.78711 2.83386 1.98425 2.63672 2.22656 2.63672H12.7734C13.0158 2.63672 13.2129 2.83386 13.2129 3.07617C13.2129 3.31849 13.0158 3.51562 12.7734 3.51562Z"
              fill="black"
            />
            <path
              d="M5.74137 12.7756L5.30192 5.68572C5.28689 5.44346 5.07721 5.25921 4.83613 5.2743C4.59387 5.28933 4.40968 5.49787 4.42468 5.74009L4.86414 12.83C4.87858 13.063 5.07206 13.2422 5.30233 13.2422C5.55683 13.2422 5.75699 13.0279 5.74137 12.7756Z"
              fill="black"
            />
            <path
              d="M7.5 5.27344C7.2573 5.27344 7.06055 5.4702 7.06055 5.71289V12.8027C7.06055 13.0454 7.2573 13.2422 7.5 13.2422C7.7427 13.2422 7.93945 13.0454 7.93945 12.8027V5.71289C7.93945 5.4702 7.7427 5.27344 7.5 5.27344Z"
              fill="black"
            />
            <path
              d="M10.1639 5.2743C9.92221 5.25927 9.71312 5.44346 9.69812 5.68571L9.25866 12.7756C9.24369 13.0178 9.42788 13.2263 9.67011 13.2413C9.91248 13.2563 10.1209 13.0721 10.1359 12.8299L10.5754 5.74009C10.5904 5.49783 10.4062 5.2893 10.1639 5.2743Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_1311">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

const TableRowEntry = ({ children, customStyle }) => {
  return (
    <div
      className={`min-w-[100px] text-center ${customStyle ? customStyle : " "}`}
    >
      {children}
    </div>
  );
};

const ProductCounter = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
        className="cursor-pointer border border-black px-2 "
      >
        -
      </button>
      <div className="cursor-pointer px-4 py-1">{count}</div>
      <button
        onClick={() => setCount(count + 1)}
        className="cursor-pointer  border border-black px-2 "
      >
        +
      </button>
    </div>
  );
};
