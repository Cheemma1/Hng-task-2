import React from "react";
import { allProducts } from "../products/products";
import { StarIcon } from "@chakra-ui/icons";
import { FaRegHeart } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import CartPage from "../pages/CartPage";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   decreaseQty,
//   increaseQty,
// } from "../redux/features/cartSlice";
// import { toast } from "react-toastify";

const AllProducts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart.value);

  // const handleAddToCart = (item) => {
  //   dispatch(addToCart(item));
  //   toast.success("Product added to cart!");
  // };

  // const increaseBtn = (item) => {
  //   dispatch(increaseQty({ id: item.id }));
  // };

  // const decreaseBtn = (item) => {
  //   dispatch(decreaseQty({ id: item.id }));
  // };

  return (
    <>
      <div>
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-32 my-6 px-4 lg:px-0">
          {allProducts.map((item) => {
            // Find the cart item for the current product
            // const cartItem = cart.cartItems.find(
            //   (cartItem) => cartItem.id === item.id
            // );
            // Set quantity to 0 if the item is not in the cart
            // const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div
                key={item.id}
                className="font-lato flex flex-col gap-4 relative"
              >
                <div className="relative">
                  <img src={item.img} alt={item.name} className="w-full" />

                  <FaRegHeart className="absolute bottom-2 right-2 bg-transparent text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <StarIcon color={"#EFB727"} fontSize={12} />
                  <StarIcon color={"#EFB727"} fontSize={12} />
                  <StarIcon color={"#EFB727"} fontSize={12} />
                  <StarIcon color={"#EFB727"} fontSize={12} />
                  <StarIcon color={"#EFB727"} fontSize={12} />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-bold text-[0.8rem] md:text-[16px]">
                    {item.name}
                  </p>
                  <p className="text-xs md:text-[14px]">{item.inches}</p>
                  <p className="text-xs md:text-[12px]">{item.price}</p>
                  <p className="line-through text-xs md:text-[10px]">
                    {item.slashPricw}
                  </p>
                  <button
                    className="bg-sageGreen text-white rounded-lg h-[48px] w-full flex items-center justify-center gap-4 mt-14"
                    // onClick={() => handleAddToCart(item)}
                    onClick={onOpen}
                  >
                    <span>+</span>Add to cart
                  </button>
                </div>
                {/* <div className="flex items-center gap-2">
                <button
                  className="border border-black rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"
                  // onClick={() => decreaseBtn(item)}
                >
                  -
                </button>
                <p className="font-bold text-xs md:text-1xl">
                  {/* {quantity} 0
                </p>
                <button
                  className="border border-black rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center"
                  // onClick={() => increaseBtn(item)}
                >
                  +
                </button>
              </div> */}
              </div>
            );
          })}
        </div>
        <button className="border border-babyDark rounded-lg h-[48px] w-[70%] md:w-[15%] mt-20 mb-4 flex items-center justify-center mx-auto font-bold">
          Load more
        </button>
      </div>
      <CartPage isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AllProducts;
