import React from "react";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-lightGrey mt-20 font-lato">
      <div className="container mx-auto flex flex-col md:flex-row  justify-between gap-8 pt-10 pb-4 px-4 lg:px-0 ">
        <div>
          <div>
            <h2 className="font-semibold pb-2">Get the good stuff</h2>
            <p className=" md:w-[70%] lg:w-[40%]">
              {" "}
              Connect with us on social media. Follow us on social media for
              sleep tips, new arrivals and exculsive offers
            </p>
          </div>
          <div className="flex gap-3  pt-4">
            {" "}
            <img src={linkedin} alt="linkedin" className="w-8 h-8" />
            <img src={instagram} alt="instagram" className="w-8 h-8" />
            <img src={facebook} alt="facebook" className="w-8 h-8" />
          </div>
        </div>
        <div className="grid grid-cols-2  md:gap-4 lg:gap-[8rem]">
          <div>
            <h3 className="font-bold pb-2">Compamy</h3>
            <ul className="flex flex-col gap-2 list-none">
              <li>Our story</li>
              <li>Our Blog</li>
              <li>Timbu Cloud Shop</li>
              <li>FAQS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold pb-2">Customer Service</h3>
            <ul className="flex flex-col gap-2 list-none">
              <li>Contact Us</li>
              <li>My Account</li>
              <li>Shipping and Returns</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
