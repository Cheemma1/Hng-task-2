import React from "react";
import search from "../assets/search-normal.png";

import cartImg from "../assets/shopping-cart.png";
import logo from "../assets/logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import CartPage from "../pages/CartPage";
import { useDisclosure } from "@chakra-ui/react";

const MobHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <nav className="bg-babyWhite flex items-center justify-between container mx-auto py-4 px-4">
        <div className="flex items-center gap-4">
          <HamburgerIcon />
        </div>
        <div className="flex justify-center">
          <img src={logo} alt="shop-haven-logo" className="w-[60px]" />
        </div>
        <div className="flex items-center gap-4">
          <img src={search} alt="search-png" className="w-5" />
          <button onClick={onOpen} className="relative rounded-full p-2">
            <img src={cartImg} alt="cart-png" className="w-5" />
            <span className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 bg-red-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {/* {cart.cartItems.length} */} 1
            </span>
          </button>
        </div>
      </nav>

      <div className="bg-headerMob-pattern bg-no-repeat w-full bg-cover">
        <div className=" font-lato  mx-auto text-white text-center py-12  w-[280px]">
          <h1 className="pb-2 text-4xl font-bold"> New Arrivals!!!</h1>
          <h2 className=" font-semibold pb-2">
            Sleep Like Royality: Introducing Our New Luxury Bed Collections
          </h2>
          <p className="pb-2 text-sm">
            Limited offer! shop our new bed arrivals and enjoy 15% off your
            purchase
          </p>
          <button className="bg-white text-black h-[48px] w-[127px] rounded-lg mt-4">
            Shop Now
          </button>
        </div>
      </div>
      <CartPage isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default MobHeader;
