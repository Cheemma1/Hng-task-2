// import React from "react";
// import search from "../assets/search-normal.png";
// import user from "../assets/user.png";
// import cartImg from "../assets/shopping-cart.png";
// import logo from "../assets/logo.png";
// import MobHeader from "./MobHeader";
// import { useDisclosure } from "@chakra-ui/react";
// import CartPage from "../pages/CartPage";
// // import { useSelector } from "react-redux";

// const Header = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   // const cart = useSelector((state) => state.cart.value);

//   return (
//     <>
//       {/* Desktop Header */}
//       <div className="hidden md:block">
//         <nav className="bg-babyWhite flex items-center justify-between container mx-auto py-4 px-4 lg:px-0">
//           <div className="flex items-center gap-4 font-lato">
//             <p className="hover:underline font-medium cursor-pointer underline">
//               Type
//             </p>
//             <p className="hover:underline font-medium cursor-pointer">
//               Hot Deals{" "}
//             </p>
//             <p className="hover:underline font-medium cursor-pointer">Brand</p>
//           </div>
//           <img src={logo} alt="shop-haven-logo" className="h-[48px]" />
//           <div className="flex items-center justify-between gap-4">
//             <div className="flex items-center gap-6">
//               <img src={search} alt="search-png" className="w-5" />
//               <img src={user} alt="user-png" className="w-5" />
//             </div>
//             <button onClick={onOpen} className="relative rounded-full p-2">
//               <img src={cartImg} alt="cart-png" className="w-5" />
//               <span className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 bg-red-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 {/* {cart.cartItems.length} */} 2
//               </span>
//             </button>
//           </div>
//         </nav>
//         <div className="bg-header-pattern md:bg-cover bg-center md:h-[530px]">
//           <div className="container mx-auto font-lato pt-[12rem] text-white px-4 lg:px-0">
//             <h1 className="pb-2 text-6xl font-bold">New Arrivals!!!</h1>

//             <h2 className="text-2xl font-semibold">
//               Sleep Like Royality: Introducing Our New <br /> Luxury Bed
//               Collections
//             </h2>

//             <p className="pb-2">
//               Limited offer! Shop our new bed arrivals and enjoy <br /> 15% off
//               your purchase
//             </p>

//             <button className="bg-white text-black h-[48px] w-[127px] rounded-lg">
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Header */}
//       <div className="block md:hidden">
//         <MobHeader />
//       </div>
//       <CartPage isOpen={isOpen} onClose={onClose} />
//     </>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import search from "../assets/search-normal.png";
import user from "../assets/user.png";
import cartImg from "../assets/shopping-cart.png";
import logo from "../assets/logo.png";
import MobHeader from "./MobHeader";
import { useDisclosure } from "@chakra-ui/react";
import CartPage from "../pages/CartPage";
// import { useSelector } from "react-redux";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const cart = useSelector((state) => state.cart.value);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block">
        <nav className="bg-babyWhite flex items-center justify-between container mx-auto py-4 px-4 lg:px-0">
          <div className="flex items-center gap-4 font-lato relative">
            <Link to="/type" className="font-medium cursor-pointer">
              Type
              <div className="absolute bottom-[-2px] left-0 w-[20%] h-[2px] bg-black"></div>
            </Link>
            <Link
              to="/hot-deals"
              className="hover:underline font-medium cursor-pointer"
            >
              Hot Deals
            </Link>
            <Link
              to="/brand"
              className="hover:underline font-medium cursor-pointer"
            >
              Brand
            </Link>
          </div>
          <img src={logo} alt="shop-haven-logo" className="h-[48px]" />
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <img src={search} alt="search-png" className="w-5" />
              <img src={user} alt="user-png" className="w-5" />
            </div>
            <button onClick={onOpen} className="relative rounded-full p-2">
              <img src={cartImg} alt="cart-png" className="w-5" />
              <span className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 bg-red-700 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {/* {cart.cartItems.length} */} 2
              </span>
            </button>
          </div>
        </nav>
        <div className="bg-header-pattern md:bg-cover bg-center md:h-[530px]">
          <div className="container mx-auto font-lato pt-[12rem] text-white px-4 lg:px-0">
            <h1 className="pb-2 text-6xl font-bold">New Arrivals!!!</h1>

            <h2 className="text-2xl font-semibold">
              Sleep Like Royality: Introducing Our New <br /> Luxury Bed
              Collections
            </h2>

            <p className="pb-2">
              Limited offer! Shop our new bed arrivals and enjoy <br /> 15% off
              your purchase
            </p>

            <button className="bg-white text-black h-[48px] w-[127px] rounded-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Header */}
      <div className="block md:hidden">
        <MobHeader />
      </div>
      <CartPage isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Header;
