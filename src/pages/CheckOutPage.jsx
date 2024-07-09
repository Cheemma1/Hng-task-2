// import React from "react";
// import { Link } from "react-router-dom";
// import DeliveryForm from "../components/DeliveryForm";
// import img1 from "../assets/bed13.png";
// import cartWhite from "../assets/shopping-cart-white.png";
// import arrowLeft from "../assets/arrow-left.svg";
// import { useDisclosure } from "@chakra-ui/react";
// import CartPage from "./CartPage";
// // import { HamburgerIcon } from "@chakra-ui/icons";
// // import cartImg from "../assets/shopping-cart.png";
// // import logo from "../assets/logo.png";
// // import search from "../assets/search-normal.png";
// import NavPay from "../components/NavPay";
// const CheckOutPage = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <div className=" font-lato bg-babyWhite  ">
//         <NavPay />
//         <div className="container mx-auto pt-4">
//           <Link to={"/"} className="hidden md:block">
//             {" "}
//             <img src={arrowLeft} alt="arrowleft" className="w-6" />
//           </Link>
//           <div className=" py-8 grid grid-cols-1  gap-6 lg:grid-cols-2   ">
//             <div className="px-2">
//               <div className=" border border-lightGrey rounded-md px-4  bg-white pt-4 pb-10 w-full">
//                 <div className="flex items-center justify-between border border-lightGrey rounded-md p-4 mb-10">
//                   <div>
//                     <h2 className="font-semibold pb-4">Delivery Method</h2>
//                     <div>
//                       <h3 className="font-semibold">Express Dlivery</h3>
//                       <p className="">
//                         {" "}
//                         Deliverd on or before wednesday 10th july
//                       </p>
//                     </div>
//                   </div>
//                   <h2 className="font-semibold">Free</h2>
//                 </div>
//                 <DeliveryForm />
//               </div>
//             </div>
//             <div className="px-2 lg:px-0 mt">
//               <div className="border border-lightGrey rounded-md p-4 lg:w-[75%]  mx-auto bg-white ">
//                 <div className="flex items-center justify-between font-semibold">
//                   <h2 className=" text-sm md:text-[1rem]">My Order</h2>
//                   <p className="text-sm md:text-[1rem]">Edit</p>
//                 </div>
//                 <div className="h-px w-full bg-lineClr my-10"></div>
//                 <div className="">
//                   <div className="flex gap-10 font-lato">
//                     <img
//                       src={img1}
//                       alt="prodeuct-image"
//                       className=" w-[30%] object-cover"
//                     />
//                     <div className="flex flex-col">
//                       <p className="font-bold text-sm md:text-base">
//                         King Size Bedding Platform
//                       </p>
//                       <p className="font-medium text-[0.75rem]">Quantity:2</p>

//                       <p className="font-medium text-[0.6rem]">NGN 500,000</p>
//                     </div>
//                   </div>
//                   <div className="h-px w-full bg-lineClr my-8"></div>

//                   <div>
//                     <div className="flex items-center justify-between font-normal font-lato mb-4">
//                       <p>Cart Subtotal:</p>
//                       <p>NGN 1,0000,000</p>
//                     </div>
//                     <div className="flex items-center justify-between font-meduim font-lato">
//                       <p>Delivery</p>
//                       <p>Free</p>
//                     </div>
//                     <div className="h-px w-full bg-lineClr my-4"></div>
//                     <div className="flex items-center justify-between font-medium font-lato">
//                       <p>Total:</p>
//                       <p>NGN 1,0000,000</p>
//                     </div>
//                   </div>
//                   <Link
//                     to={"/pay"}
//                     className="bg-sageGreen w-full mx-auto h-[48px] text-white font-lato rounded-md flex items-center justify-center my-16"
//                   >
//                     <img src={cartWhite} alt="cart icon" className="mr-2" />{" "}
//                     <span>PayNow</span>
//                   </Link>

//                   <div className="flex gap-1 font-lato ">
//                     <input type="checkbox" name="" id="" />
//                     <p className="text-xs">
//                       I have read and agreed to the Haven shop{" "}
//                       <span className="underline">Terms of Use</span> and{" "}
//                       <span className="underline">Privacy Policy</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <footer className="bg-lightGrey pt-[8rem] pb-4 mt-[10rem]">
//           <div className="flex items-center justify-between container mx-auto px-2 lg:px-0 font-lato">
//             <p className="text-clrGery text-xs md:text-sm">
//               Terms and Conditions
//             </p>
//             <p className="text-clrGery  text-xs md:text-sm">Privacy Policy</p>
//             <p className="text-clrGery  text-xs md:text-sm">Cookie Policy</p>
//           </div>
//         </footer>
//       </div>
//       <CartPage isOpen={isOpen} onClose={onClose} />
//     </>
//   );
// };

// export default CheckOutPage;

import React from "react";
import { Link } from "react-router-dom";
import DeliveryForm from "../components/DeliveryForm";
import img1 from "../assets/bed13.png";
import cartWhite from "../assets/shopping-cart-white.png";
import arrowLeft from "../assets/arrow-left.svg";
import { useDisclosure } from "@chakra-ui/react";
import CartPage from "./CartPage";
import NavPay from "../components/NavPay";

const CheckOutPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="font-lato bg-babyWhite ">
        <NavPay />
        <div className="container mx-auto   pt-4 px-4 md:px-0">
          <Link to={"/"} className="">
            <img src={arrowLeft} alt="Back" className="w-6" />
          </Link>
          <div className="py-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="px-2">
              <div className="border border-lightGrey rounded-md px-4 bg-white pt-4 pb-10 w-full">
                <div className="flex items-center justify-between border border-lightGrey rounded-md p-4 mb-10">
                  <div>
                    <h2 className="font-semibold text-base md:text-lg pb-4">
                      Delivery Method
                    </h2>
                    <div>
                      <h2 className="font-semibold text-sm md:text-base">
                        Express Delivery
                      </h2>
                      <p className="text-xs md:text-sm">
                        Delivered on or before Wednesday 10th July
                      </p>
                    </div>
                  </div>
                  <h2 className="font-semibold text-sm md:text-base">Free</h2>
                </div>
                <DeliveryForm />
              </div>
            </div>
            <div className="px-2 lg:px-0 mt">
              <div className="border border-lightGrey rounded-md p-4 lg:w-[75%] mx-auto bg-white">
                <div className="flex items-center justify-between font-semibold">
                  <h2 className="text-sm md:text-base">My Order</h2>
                  <p className="text-sm md:text-base">Edit</p>
                </div>
                <div className="h-px w-full bg-lineClr my-10"></div>
                <div>
                  <div className="flex gap-10 font-lato">
                    <img
                      src={img1}
                      alt="product"
                      className="w-[30%] object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-sm md:text-base">
                        King Size Bedding Platform
                      </p>
                      <p className="font-medium text-xs md:text-sm">
                        Quantity: 2
                      </p>
                      <p className="font-medium text-xs">NGN 500,000</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-lineClr my-8"></div>
                  <div>
                    <div className="flex items-center justify-between font-normal mb-4">
                      <p className="text-sm md:text-base">Cart Subtotal:</p>
                      <p className="text-sm md:text-base">NGN 1,000,000</p>
                    </div>
                    <div className="flex items-center justify-between font-medium">
                      <p className="text-sm md:text-base">Delivery</p>
                      <p className="text-sm md:text-base">Free</p>
                    </div>
                    <div className="h-px w-full bg-lineClr my-4"></div>
                    <div className="flex items-center justify-between font-medium">
                      <p className="text-sm md:text-base">Total:</p>
                      <p className="text-sm md:text-base">NGN 1,000,000</p>
                    </div>
                  </div>
                  <Link
                    to={"/pay"}
                    className="bg-sageGreen w-full h-12 text-white rounded-md flex items-center justify-center my-16"
                  >
                    <img src={cartWhite} alt="cart icon" className="mr-2" />
                    <span className="text-sm md:text-base">Pay Now</span>
                  </Link>
                  <div className="flex gap-1">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms" className="text-xs md:text-sm">
                      I have read and agreed to the Haven shop{" "}
                      <span className="underline">Terms of Use</span> and{" "}
                      <span className="underline">Privacy Policy</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-lightGrey pt-32 pb-4 mt-40">
          <div className="flex items-center justify-between container mx-auto px-2 lg:px-0">
            <p className="text-clrGrey text-xs md:text-sm">
              Terms and Conditions
            </p>
            <p className="text-clrGrey text-xs md:text-sm">Privacy Policy</p>
            <p className="text-clrGrey text-xs md:text-sm">Cookie Policy</p>
          </div>
        </footer>
      </div>
      <CartPage isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CheckOutPage;
