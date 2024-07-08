import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import carticon from "../assets/shopping-cart.png";
import { CheckCircleIcon } from "@chakra-ui/icons";
import img1 from "../assets/bed2.png";
import { Link } from "react-router-dom";
import cartWhite from "../assets/shopping-cart-white.png";
// import { useDispatch, useSelector } from "react-redux";
// import { decreaseQty, increaseQty } from "../redux/features/cartSlice";

const CartPage = ({ isOpen, onClose }) => {
  const item = [
    {
      img: img1,
      name: "King Size Bedding Platform",
      inches: "30 inches",
      price: "NGN 500,000",
    },
    {
      img: img1,
      name: "King Size Bedding Platform",
      inches: "30 inches",
      price: "NGN 500,000",
    },
  ];
  // const cart = useSelector((state) => state.cart.value);
  // const dispatch = useDispatch();

  // const increaseBtn = (item) => {
  //   dispatch(increaseQty({ id: item.id }));
  // };

  // const decreaseBtn = (item) => {
  //   dispatch(decreaseQty({ id: item.id }));
  // };

  return (
    <div className="w-full ">
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent
          w="90%" // Set the width to 90% of the screen
          maxW="100%" // Ensure the content doesn't exceed 90% of the screen
          margin="1rem auto"
        >
          <ModalHeader>
            <div className="flex items-center justify-between pb-1 font-lato">
              <img src={carticon} alt="cart-icon" />
              <h2 className="font-bold">REVIEW YOUR CART</h2>
              <button
                mr={3}
                onClick={onClose}
                className="w-5 h-5 border border-black rounded-full flex items-center justify-center text-sm font-bold"
              >
                x
              </button>
            </div>
            <div className="h-px w-full bg-lineClr"></div>
            <p className="text-center text-green-600 text-[0.6rem] pt-4 flex items-center gap-1 justify-center  mt-6">
              <CheckCircleIcon />
              WORLDWIDE SHIPMENT + EASY RETURN
            </p>
            <div className="h-px w-[50%] lg:w-[18%] mx-auto bg-lineClr mt-2"></div>
          </ModalHeader>
          <ModalBody>
            <div className="mt-4">
              {item.map((items, index) => (
                <div key={index} className="mb-6">
                  <div className="grid grid-cols-3 gap-10 font-lato">
                    <img
                      src={items.img}
                      alt={items.name}
                      className=" w-[100%] object-cover"
                    />
                    <div className="flex flex-col ml-4">
                      <p className="font-bold">{items.name}</p>
                      <p className="font-medium">{items.inches}</p>
                      <p className="font-medium">{items.price}</p>
                      <p className="font-medium">Warranty years:1 year</p>
                      <p className="text-red-600 text-sm font-medium">REMOVE</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2 border border-black rounded-md h-[30px] w-[22%]">
                      <button className="border border-black rounded-full w-5 h-5 flex items-center justify-center">
                        -
                      </button>
                      <p>2</p>
                      <button className="border border-black rounded-full w-5 h-5 flex items-center justify-center">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="h-px w-full bg-lineClr my-10"></div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between font-normal font-lato">
              <p>SUBTOTAL:</p>
              <p>NGN 1,0000,000</p>
            </div>

            <Link
              to={"/checkout"}
              className="bg-sageGreen w-[20%] mx-auto h-[48px] text-white font-lato rounded-md flex items-center justify-center my-16"
            >
              <img src={cartWhite} alt="cart icon" className="mr-2" />{" "}
              <span>Checkout</span>
            </Link>
            <p className="font-medium font-lato">
              By clicking on “CHECKOUT”, you will be directed to the checkout
              page where payment will be taken and your order fulfilled using
              your payment card. Note that we “ONLY” accept valid payment card
              (Master Card, Verve Card and Visa).
            </p>
            {/* {cart.cartItems.length === 0 ? (
              <p className="text-center font-medium">Cart is empty!</p>
            ) : (
              cart.cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className=" w-[30%] object-cover"
                  />
                  <div className="flex flex-col ml-4">
                    <p className="font-bold">{item.name}</p>
                    <p>{item.price}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="border border-black rounded-full w-5 h-5 flex items-center justify-center"
                      onClick={() => decreaseBtn(item)}
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="border border-black rounded-full w-5 h-5 flex items-center justify-center"
                      onClick={() => increaseBtn(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )} */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CartPage;
