import React, { useLayoutEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import CheckBox from "../components/CheckBox";
import PayPal from "../assets/paypalLogo.png";
import Investment from "../assets/investmentBank.png";
import tableEntryPic from "../assets/tableEntryPic.png";
function CheckOut() {
  const [countries, setCountries] = useState([]);
  const [checked, setChecked] = useState(false);
  const [shippingAddressDifferent, setShippingAddressDifferent] =
    useState(false);
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
      });
  }, []);

  const [mister, setMister] = useState("Mr.");
  return (
    <div className="mx-auto mb-8 max-w-[1366px]">
      <div className="bg-gradient-to-b from-[#c4c4c442] to-transparent p-4 text-3xl font-bold capitalize">
        Check Out
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  ">
        <div className="w-full ">
          <div className="bg-[#FAFAFA] p-4">
            <div className="flex">
              <div
                className={`flex h-10 w-14 cursor-pointer items-center justify-center border border-black ${
                  mister === "Mr."
                    ? "bg-[#111010] text-white"
                    : "bg-white text-[#111010]"
                }`}
                onClick={() => setMister("Mr.")}
              >
                Mr.
              </div>
              <div
                className={`flex h-10 w-14 cursor-pointer items-center justify-center border border-black ${
                  mister === "Mrs."
                    ? "bg-[#111010] text-white"
                    : "bg-white text-[#111010]"
                }`}
                onClick={() => setMister("Mrs.")}
              >
                Mrs.
              </div>
            </div>
            <InputField
              name="first-name"
              placeholder="First Name*"
              required={true}
              type="text"
            />
            <InputField
              name="last-name"
              placeholder="Last Name*"
              required={true}
              type="text"
            />
            <InputField
              name="email"
              placeholder="Email*"
              required={true}
              type="email"
            />
            <div className="flex">
              <div className="mr-2 w-[70%]">
                <InputField
                  name="street"
                  placeholder="Street*"
                  required={true}
                  type="text"
                />
              </div>
              <div className="w-[30%]">
                <InputField
                  name="house"
                  placeholder="House*"
                  required={true}
                  type="text"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-2 w-[50%]">
                <InputField
                  name="postcode"
                  placeholder="PostCode*"
                  required={true}
                  type="text"
                />
              </div>
              <div className="w-[50%]">
                <InputField
                  name="location"
                  placeholder="Location*"
                  required={true}
                  type="text"
                />
              </div>
            </div>
            <InputField
              name="phone"
              placeholder="Phone*"
              required={true}
              type="phone"
            />
            <Select
              className="mt-4 "
              options={countries}
              onChange={(e) => console.log(e)}
              placeholder="Country*"
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#E0E0E0",
                  primary: "black",
                  active: "#E0E0E0",
                  hover: "#E0E0E0",
                },
              })}
            />
            <p className="mt-2 text-[#828282]">*Required Fields</p>

            <CheckBox
              value={checked}
              style={{
                border: "1px solid #828282",
                color: "#22D3C5",
              }}
              onChange={(e) => setChecked(e.target.checked)}
              label="Create a customer account now and benefit from many advantages."
            />
            <CheckBox
              value={shippingAddressDifferent}
              style={{
                border: "1px solid #828282",
                color: "#22D3C5",
              }}
              onChange={(e) => setShippingAddressDifferent(e.target.checked)}
              label="Shipping address is different."
            />
            {shippingAddressDifferent ? (
              <div>
                <InputField
                  name="first-name"
                  placeholder="First Name*"
                  required={true}
                  type="text"
                />
                <InputField
                  name="last-name"
                  placeholder="Last Name*"
                  required={true}
                  type="text"
                />

                <div className="flex">
                  <div className="mr-2 w-[70%]">
                    <InputField
                      name="street"
                      placeholder="Street*"
                      required={true}
                      type="text"
                    />
                  </div>
                  <div className="w-[30%]">
                    <InputField
                      name="house"
                      placeholder="House*"
                      required={true}
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-2 w-[50%]">
                    <InputField
                      name="postcode"
                      placeholder="PostCode*"
                      required={true}
                      type="text"
                    />
                  </div>
                  <div className="w-[50%]">
                    <InputField
                      name="location"
                      placeholder="Location*"
                      required={true}
                      type="text"
                    />
                  </div>
                </div>
                <InputField
                  name="phone"
                  placeholder="Phone*"
                  required={true}
                  type="phone"
                />
                <Select
                  className="mt-4 "
                  options={countries}
                  onChange={(e) => console.log(e)}
                  placeholder="Country*"
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "#E0E0E0",
                      primary: "black",
                      active: "#E0E0E0",
                      hover: "#E0E0E0",
                    },
                  })}
                />
                <p className="mt-2 text-[#828282]">*Required Fields</p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full ">
          <div className=" bg-[#FAFAFA] p-4">
            <div className="flex items-center">
              <div className="mr-4 border-2 border-[#828282]">
                <img className="h-20" src={PayPal} alt="Paypal logo" />
              </div>
              <div>PayPal</div>
              <div
                className="ml-auto aspect-square h-5 w-5 cursor-pointer transition-all duration-300 hover:bg-black"
                id="input__radio"
              >
                <input
                  type="radio"
                  name="payment"
                  className="h-full	w-full p-4 opacity-0"
                />
              </div>
            </div>
          </div>
          <div className="mt-2  bg-[#FAFAFA] p-4">
            <div className="flex items-center">
              <div className="mr-4 border-2 border-[#828282]">
                <img className="h-20" src={PayPal} alt="Paypal logo" />
              </div>
              <div>PayPal Plus</div>
              <div
                className="ml-auto aspect-square h-5 w-5 cursor-pointer transition-all duration-300 hover:bg-black"
                id="input__radio"
              >
                <input
                  type="radio"
                  name="payment"
                  className="h-full	w-full p-4 opacity-0"
                />
              </div>
            </div>
          </div>
          <div className="mt-2  bg-[#FAFAFA] p-4">
            <div className="flex items-center">
              <div className="mb-4 mr-4 flex w-[130px] items-center justify-center border-2 border-[#828282]">
                <img
                  className="h-20"
                  src={Investment}
                  alt="Investment bank logo"
                />
              </div>
              <div>Investment Bank</div>
              <div
                className="ml-auto aspect-square h-5 w-5 cursor-pointer transition-all duration-300 hover:bg-black"
                id="input__radio"
              >
                <input
                  type="radio"
                  name="payment"
                  className="h-full	w-full p-4 opacity-0"
                />
              </div>
            </div>
            <InputField
              name="email"
              placeholder="Credit card number*"
              required={true}
              type="email"
            />
            <div className="flex">
              <div className="mr-2 w-[50%]">
                <InputField
                  name="street"
                  placeholder="Expiry date*"
                  required={true}
                  type="text"
                />
              </div>
              <div className="w-[50%]">
                <InputField
                  name="house"
                  placeholder="CVC/CVV*"
                  required={true}
                  type="text"
                />
              </div>
            </div>
            <InputField
              name="email"
              placeholder="Name of cardholder*"
              required={true}
              type="email"
            />
          </div>
        </div>
        <div className="w-full ">
          <div className="flex justify-evenly bg-[#FAFAFA] p-4 py-2">
            <HeaderEntry
              customStyle={"w-[250px]"}
              inlineStyle={{ textAlign: "left" }}
            >
              Article
            </HeaderEntry>
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
                  <div className="flex flex-col text-left capitalize">
                    <div>1x</div>
                    product name
                    <div className="text-left text-sm text-[#A1A1A1]">
                      lorem ipsum
                    </div>
                  </div>
                </div>
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
                  <div className="flex flex-col text-left capitalize">
                    <div>1x</div>
                    product name
                    <div className="text-left text-sm text-[#A1A1A1]">
                      lorem ipsum
                    </div>
                  </div>
                </div>
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
                  <div className="flex flex-col text-left capitalize">
                    <div>1x</div>
                    product name
                    <div className="text-left text-sm text-[#A1A1A1]">
                      lorem ipsum
                    </div>
                  </div>
                </div>
              </TableRowEntry>

              <TableRowEntry>199.99</TableRowEntry>
            </TableRow>
          </div>
          <div className="bg-[#FAFAFA] p-4">
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
    </div>
  );
}

export default CheckOut;

function InputField({
  name,
  placeholder,
  required,
  type,
  value,
  onChange,

  error,
}) {
  return (
    <div className="mt-4">
      <input
        type={type}
        name={name}
        className=" w-full border border-[#828282] px-4 py-2 text-sm focus:rounded-none "
        placeholder={placeholder}
        required={required}
      />
      <div className="mt-1 text-xs text-[#EB5757]">{error}</div>
    </div>
  );
}

const HeaderEntry = ({ children, customStyle, inlineStyle }) => {
  return (
    <div
      style={inlineStyle}
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
    <div className="border-red first:border-gray group relative flex items-center justify-evenly border-2 border-y border-white bg-[#FAFAFA] p-4 first:border-t">
      {children}
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
