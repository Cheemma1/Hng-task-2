
import React from "react";
import arrowDown from "../assets/arrow-down.png";

const DeliveryForm = () => {
  return (
    <div className="border border-lightGrey rounded-md font-lato p-2 bg-white mt-6">
      <h2 className="font-semibold mb-8">Delivery Address</h2>
      <form action="">
        <label htmlFor="email" className="font-semibold">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full border border-lightGrey rounded-md outline-none px-2"
        />
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="font-semibold">
            <label htmlFor="firstname">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-lightGrey rounded-md outline-none px-2"
            />
          </div>
          <div className="font-semibold">
            <label htmlFor="firstname">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-lightGrey rounded-md outline-none px-2"
            />
          </div>
        </div>
        <label htmlFor="email" className="font-semibold">
          State/Province <span className="text-red-600">*</span>
        </label>
        <div className="w-full border border-lightGrey rounded-md flex items-center justify-between px-2 mb-4">
          <input type="text" className="outline-none w-full " />
          <img src={arrowDown} alt="arrowdown" className="w-4" />
        </div>
        <label htmlFor="address" className="font-semibold">
          Street Addres <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          className="w-full border border-lightGrey rounded-md outline-none px-2"
        />
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="font-semibold">
            <label htmlFor="city">
              City <span className="text-red-600">*</span>
            </label>
            <div className="w-full border border-lightGrey rounded-md flex items-center justify-between px-2">
              <input type="text" className="outline-none w-full" />
              <img src={arrowDown} alt="arrowdown" className="w-4" />
            </div>
          </div>
          <div className="font-semibold">
            <label htmlFor="firstname">
              District <span className="text-red-600">*</span>
            </label>
            <div className="w-full border border-lightGrey rounded-md flex items-center justify-between px-2 ">
              <input type="text" className="outline-none w-full" />
              <img src={arrowDown} alt="arrowdown" className="w-4" />
            </div>
          </div>
        </div>
        <div className="flex gap-4  my-4">
          <div className="font-semibold">
            <label htmlFor="postal code">
              Area Number<span className="text-red-600">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder="+234"
              className="w-[24%] border border-lightGrey rounded-md outline-none text-black placeholder:text-black"
            />
          </div>
          <div className="w-full font-semibold flex-1">
            <label htmlFor="phone number">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-lightGrey rounded-md outline-none px-2"
            />
          </div>
        </div>

        <button className="bg-lightGrey rounded-md w-[50%] h-[40px] flex items-center justify-center  mx-auto my-12">
          Save
        </button>
      </form>
    </div>
  );
};

export default DeliveryForm;
