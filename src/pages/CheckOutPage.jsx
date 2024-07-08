import React from "react";
import { Link } from "react-router-dom";
import DeliveryForm from "../components/DeliveryForm";
import img1 from "../assets/bed2.png";
import cartWhite from "../assets/shopping-cart-white.png";
import arrowLeft from "../assets/arrow-left.svg";
const CheckOutPage = () => {
  return (
    <div className=" font-lato bg-babyWhite  ">
      <div className="container mx-auto pt-4">
        <Link to={"/"}>
          {" "}
          <img src={arrowLeft} alt="arrowlrft" className="w-6" />
        </Link>
        <div className=" py-8 grid grid-cols-1  md:gap-6 lg:grid-cols-2  ">
          <div className="px-2">
            <div className=" border border-lightGrey rounded-md px-4  bg-white pt-4 pb-10 w-full">
              <div className="flex items-center justify-between border border-lightGrey rounded-md p-2 mb-6">
                <div>
                  <h2 className="font-semibold">Delivery Method</h2>
                  <div>
                    <h2 className="font-semibold">Express Dlivery</h2>
                    <p className="">
                      {" "}
                      Deliverd on or before wednesday 10th july
                    </p>
                  </div>
                </div>
                <h2 className="font-semibold">Free</h2>
              </div>
              <DeliveryForm />
            </div>
          </div>
          <div className="px-2 lg:px-0 mt">
            <div className="border border-lightGrey rounded-md p-4 lg:w-[75%]  mx-auto bg-white ">
              <div className="flex items-center justify-between font-semibold">
                <h2>My Order</h2>
                <p>Edit</p>
              </div>
              <div className="h-px w-full bg-lineClr my-10"></div>
              <div className="">
                <div className="flex gap-10 font-lato">
                  <img
                    src={img1}
                    alt="prodeuct-image"
                    className=" w-[30%] object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">King Size Bedding Platform</p>

                    <p className="font-medium">NGN 500,000"</p>
                    <p className="font-medium">Quantity:2</p>
                  </div>
                </div>
                <div className="h-px w-full bg-lineClr my-8"></div>

                <div>
                  <div className="flex items-center justify-between font-normal font-lato mb-4">
                    <p>Cart Subtotal:</p>
                    <p>NGN 1,0000,000</p>
                  </div>
                  <div className="flex items-center justify-between font-meduim font-lato">
                    <p>Delivery</p>
                    <p>Free</p>
                  </div>
                  <div className="h-px w-full bg-lineClr my-4"></div>
                  <div className="flex items-center justify-between font-medium font-lato">
                    <p>Total:</p>
                    <p>NGN 1,0000,000</p>
                  </div>
                </div>
                <Link
                  to={"/pay"}
                  className="bg-sageGreen w-full mx-auto h-[48px] text-white font-lato rounded-md flex items-center justify-center my-16"
                >
                  <img src={cartWhite} alt="cart icon" className="mr-2" />{" "}
                  <span>PayNow</span>
                </Link>

                <div className="flex gap-1 font-lato ">
                  <input type="checkbox" name="" id="" />
                  <p className="text-xs">
                    I have read and agreed to the Haven shop{" "}
                    <span className="underline">Terms of Use</span> and{" "}
                    <span className="underline">Privacy Policy</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-lightGrey pt-[8rem] pb-4 mt-[10rem]">
        <div className="flex items-center justify-between container mx-auto px-2 lg:px-0 font-lato">
          <p className="text-clrGery text-xs md:text-sm">
            Terms and Conditions
          </p>
          <p className="text-clrGery  text-xs md:text-sm">Privacy Policy</p>
          <p className="text-clrGery  text-xs md:text-sm">Cookie Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default CheckOutPage;
