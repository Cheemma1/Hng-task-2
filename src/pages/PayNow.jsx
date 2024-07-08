import { useDisclosure } from "@chakra-ui/react";
import arrowLeft from "../assets/arrow-left.svg";
import React from "react";
import { Link } from "react-router-dom";
import PaymentSuccess from "../components/PaymentSuccess";

const PayNow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="w-full lg:w-[80%] container mx-auto px-4 lg:px-0">
        <Link to={"/checkout"} className="">
          <img src={arrowLeft} alt="arrowleft" className="w-6 mt-4 " />
        </Link>

        <div className="border border-lightGrey rounded-md mt-10 flex flex-col lg:flex-row justify-between w-full mx-auto lg:h-[500px]">
          <div className="flex-1 px-4 py-10">
            <h1 className="pb-8 font-bold text-lg lg:text-2xl">Payment</h1>
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <h2 className="font-bold">Item Name:</h2>
                <p>Kingsize</p>
              </div>
              <div className="flex justify-between">
                <h2 className="font-bold">Amount:</h2>
                <p>NGN 500,000</p>
              </div>
              <div className="h-px w-full bg-lineClr"></div>
              <div className="flex justify-between">
                <h2 className="font-bold">Amount to pay:</h2>
                <p>NGN 500,000</p>
              </div>
            </div>
            <div className="flex gap-1 mt-40">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember card details</label>
            </div>
          </div>

          <div className="w-full lg:w-[35%] bg-babyWhite p-6 rounded-b-md lg:rounded-r-md lg:rounded-bl-none">
            <h1 className="pb-8 font-bold text-lg lg:text-2xl">Card Details</h1>
            <div className="mb-6">
              <h2>Card Holder's Name</h2>
              <input
                type="text"
                className="w-full border-b border-black outline-none bg-transparent"
              />
            </div>
            <div className="mb-6">
              <h2>Card Number</h2>
              <input
                type="text"
                className="w-full border-b border-black outline-none bg-transparent"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">
              <div className="w-full lg:w-1/2">
                <h2>Expiry Date</h2>
                <input
                  type="text"
                  className="w-full border-b border-black outline-none bg-transparent"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h2>CSV/CVV</h2>
                <input
                  type="text"
                  className="w-full border-b border-black outline-none bg-transparent"
                />
              </div>
            </div>
            <button
              className="bg-sageGreen text-white w-full h-[40px] rounded-md"
              onClick={onOpen}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>

      <PaymentSuccess isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default PayNow;
