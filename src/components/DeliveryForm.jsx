import React from "react";
import arrowDown from "../assets/arrow-down.png";

const DeliveryForm = () => {
  return (
    <div className="border border-lightGrey rounded-md font-lato p-2 bg-white mt-6">
      <h2 className="font-semibold mb-8 text-xs lg:text-base">
        Delivery Address
      </h2>
      <form action="">
        <label htmlFor="email" className="font-semibold text-xs lg:text-base">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full border border-lightGrey rounded-md outline-none p-2 text-xs lg:text-base"
        />
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="font-semibold">
            <label htmlFor="firstname" className="text-xs lg:text-base">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-lightGrey rounded-md outline-none p-2 text-xs lg:text-base"
            />
          </div>
          <div className="font-semibold">
            <label htmlFor="lastname" className="text-xs lg:text-base">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-lightGrey rounded-md outline-none p-2 text-xs lg:text-base"
            />
          </div>
        </div>
        <label htmlFor="state" className="font-semibold text-xs lg:text-base">
          State/Province <span className="text-red-600">*</span>
        </label>
        <div className="w-full border border-lightGrey rounded-md flex items-center justify-between px-2 mb-4">
          <input
            type="text"
            className="outline-none w-full p-2 text-xs lg:text-base"
          />
          <img src={arrowDown} alt="arrowdown" className="w-4" />
        </div>
        <label htmlFor="address" className="font-semibold text-xs lg:text-base">
          Street Address <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full border border-lightGrey rounded-md outline-none p-2 text-xs lg:text-base"
        />
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="font-semibold">
            <label htmlFor="city" className="text-xs lg:text-base">
              City <span className="text-red-600">*</span>
            </label>
            <div className="w-full border border-lightGrey rounded-md flex items-center justify-between px-2">
              <input
                type="text"
                className="outline-none w-full p-2 text-xs lg:text-base"
              />
              <img src={arrowDown} alt="arrowdown" className="w-4" />
            </div>
          </div>
          <div className="font-semibold">
            <label htmlFor="district" className="text-xs lg:text-base">
              District <span className="text-red-600">*</span>
            </label>
            <div className="w-full border border-lightGrey rounded-md flex items-center justify-between p-2">
              <input
                type="text"
                className="outline-none w-full text-xs lg:text-base"
              />
              <img src={arrowDown} alt="arrowdown" className="w-4" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 my-4 items-center">
          <div className="font-semibold w-1/3">
            <label htmlFor="areaCode" className="text-xs lg:text-base">
              Area Number <span className="text-red-600">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="+234"
              className="w-full border border-lightGrey rounded-md outline-none text-black placeholder:text-black p-2 text-xs lg:text-base"
            />
          </div>
          <div className="font-semibold w-2/3">
            <label htmlFor="phoneNumber" className="text-xs lg:text-base">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-lightGrey rounded-md outline-none p-2 text-xs lg:text-base"
            />
          </div>
        </div>
        <button className="bg-lightGrey rounded-md w-[50%] h-[40px] flex items-center justify-center mx-auto my-12 text-xs lg:text-base">
          Save
        </button>
      </form>
    </div>
  );
};

export default DeliveryForm;
