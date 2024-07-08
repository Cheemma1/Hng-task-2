import React from "react";
import check from "../assets/Vector.png";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { IoIosCloseCircleOutline } from "react-icons/io";
const PaymentSuccess = ({ isOpen, onClose }) => {
  return (
    <div className="mx-auto font-lato px-4 ">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent
          w="95%" // Set the width to 100% of the screen
          //   maxW="720px" // Ensure the content doesn't exceed 700px
          margin="12rem auto" // Center the modal horizontally with responsive margin
          // padding="1rem" // Remove default padding for smaller screens
          boxShadow="lg"
        >
          <ModalHeader>
            <button
              // mr={3}
              onClick={onClose}
              className=" absolute right-4"
            >
              <IoIosCloseCircleOutline />
            </button>
          </ModalHeader>
          <ModalBody className="flex flex-col items-center justify-center gap-4 mt-4  mb-10 font-lato">
            <img src={check} alt="check-icon" className="w-[50px]" />
            <h1 className="font-bold">Payment successful</h1>
            <Link to={"/"} className="underline">
              Back to Home
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PaymentSuccess;
