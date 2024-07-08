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
const PaymentSuccess = ({ isOpen, onClose }) => {
  return (
    <div className="mx-auto font-lato">
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />

        <ModalContent margin="12rem auto">
          <ModalHeader>
            {" "}
            <button
              // mr={3}
              onClick={onClose}
              className="w-5 h-5 border border-black rounded-full flex items-center justify-center text-sm font-bold absolute right-4"
            >
              x
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
