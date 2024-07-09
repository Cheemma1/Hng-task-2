import { useDisclosure } from "@chakra-ui/react";
import arrowLeft from "../assets/arrow-left.svg";
import React from "react";
import { Link } from "react-router-dom";
import PaymentSuccess from "../components/PaymentSuccess";
import NavPay from "../components/NavPay";

const PayNow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="">
      <NavPay />
      <div className="w-full lg:w-[60%] container mx-auto px-4 lg:px-0 mb-6">
        <Link to={"/checkout"} className="">
          <img src={arrowLeft} alt="arrowleft" className="w-6 mt-4" />
        </Link>

        <div className="border border-lightGrey rounded-md mt-10 flex flex-col lg:flex-row justify-between w-full mx-auto lg:h-[500px] bg-white">
          <div className="flex-1 px-4 py-10">
            <h1 className="pb-8 font-bold text-lg lg:text-2xl">Payment</h1>
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <h2 className=" text-sm lg:text-base">Item:</h2>
                <p className="text-sm lg:text-base font-semibold">
                  Kingsize Bedding and Platform
                </p>
              </div>
              <div className="flex justify-between">
                <h2 className=" text-sm lg:text-base">Amount:</h2>
                <p className="text-sm lg:text-base font-semibold">
                  NGN 1,000,000
                </p>
              </div>
              <div className="h-px w-full bg-lineClr"></div>
              <div className="flex justify-between">
                <h2 className=" text-sm lg:text-base">Amount to pay:</h2>
                <p className="text-sm lg:text-base font-semibold">
                  NGN 1,000,000
                </p>
              </div>
            </div>
            <div className="flex gap-1 mt-8 lg:mt-40">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember" className="text-sm lg:text-base">
                Remember card details
              </label>
            </div>
          </div>
          <div className="w-full lg:w-[35%] bg-babyWhite p-6 rounded-b-md lg:rounded-r-md lg:rounded-bl-none flex flex-col gap-6">
            <h1 className="pb-8 font-bold text-lg lg:text-2xl">Card Details</h1>
            <div className="mb-6">
              <h2 className="text-sm lg:text-base">Card Holder's Name</h2>
              <input
                type="text"
                className="w-full border-b border-black outline-none bg-transparent text-sm lg:text-base"
              />
            </div>
            <div className="mb-6">
              <h2 className="text-sm lg:text-base">Card Number</h2>
              <input
                type="text"
                className="w-full border-b border-black outline-none bg-transparent text-sm lg:text-base"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
              <div className="w-full lg:w-1/2">
                <h2 className="text-sm lg:text-base">Expiry Date</h2>
                <input
                  type="text"
                  className="w-full border-b border-black outline-none bg-transparent text-sm lg:text-base"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-sm lg:text-base">CVC/CVV</h2>
                <input
                  type="text"
                  className="w-full border-b border-black outline-none bg-transparent text-sm lg:text-base"
                />
              </div>
            </div>
            <button
              className="bg-sageGreen text-white w-full h-[40px] rounded-md mt-8"
              onClick={onOpen}
            >
              Pay Now
            </button>
          </div>
        </div>

        <PaymentSuccess isOpen={isOpen} onClose={onClose} />
      </div>
    </div>
  );
};

export default PayNow;
