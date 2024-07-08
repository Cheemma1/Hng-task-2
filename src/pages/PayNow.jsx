import { useDisclosure } from "@chakra-ui/react";
import arrowLeft from "../assets/arrow-left.svg";
import React from "react";
import { Link } from "react-router-dom";
import PaymentSuccess from "../components/PaymentSuccess";

const PayNow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="h-screen">
        <div className="container mx-auto w-full">
          {" "}
          <Link to={"/checkout"}>
            {" "}
            <img src={arrowLeft} alt="arrowleft" className="w-6" />
          </Link>
          <div className="border border-lightGrey rounded-md  mt-20 flex justify-between w-[90%] mx-auto">
            <div className="px-4 py-10">
              <h1 className="pb-8 font-bold"> Payment</h1>
              <div className="flex flex-col gap-8">
                <div className="flex ">
                  <h2 className="font-bold">Item Name</h2>
                  <p>Kingsize</p>
                </div>
                <div className="flex ">
                  <h2 className="font-bold">Amount</h2>
                  <p>NGN 500,000</p>
                </div>
                <div className="h-px w-full bg-lineClr"></div>
                <div className="flex ">
                  <h2 className="font-bold">Amount to pay:</h2>
                  <p>NGN 500,000</p>
                </div>
              </div>
              <div className="flex gap-1">
                <input type="checkbox" name="" id="" />
                <p>Remember card details</p>
              </div>
            </div>

            <div className="w-[30%] bg-babyWhite">
              <h1 className="pb-8 font-bold">Card Details</h1>

              <div>
                <h2>Card Holders Name</h2>
                <input
                  type="text"
                  className=" border-b  border-black outline-none"
                />
              </div>
              <div>
                <h2>Card Number</h2>
                <input
                  type="text"
                  className=" border-b  border-black outline-none"
                />
              </div>
              <div className="flex justify-between gap-4">
                <div>
                  <h2>Expiry Date</h2>
                  <input
                    type="text"
                    className=" border-b  border-black outline-none"
                  />
                </div>
                <div>
                  <h2>CSV/CVV</h2>
                  <input
                    type="text"
                    className=" border-b  border-black outline-none"
                  />
                </div>
              </div>
              <button
                className="bg-sageGreen text-white w-[50%] h-[40px] rounded-md my-10"
                onClick={onOpen}
              >
                PayNow
              </button>
            </div>
          </div>
        </div>
      </div>
      <PaymentSuccess isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default PayNow;
