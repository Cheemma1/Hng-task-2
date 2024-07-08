import React from "react";
import bed from "../assets/bed14.png";

const CartProduct = () => {
  const new_collections = [
    { id: 1, img: bed, name: "King size bed and platform", size: "30 inches" },
    { id: 2, img: bed, name: "King size bed and platform", size: "30 inches" },
    { id: 3, img: bed, name: "King size bed and platform", size: "30 inches" },
    { id: 4, img: bed, name: "King size bed and platform", size: "30 inches" },
    { id: 5, img: bed, name: "King size bed and platform", size: "30 inches" },
  ];

  return (
    <div className="font-lato mb-16">
      <h1 className="font-bold md:text-3xl py-6 px-2 mt-14 text-center">
        YOU MAY ALSO LIKE
      </h1>
      <div className="flex gap-6 overflow-x-auto px-4 md:px-0 max-w-full scrollbar-hide">
        {new_collections.map((items) => (
          <div key={items.id} className="flex-shrink-0 w-[250px]">
            <img src={items.img} alt="product-img" className="object-cover" />
            <div className="px-2 py-4">
              <p className="font-bold text-[16px]">{items.name}</p>
              <p className="text-sm font-semibold md:text-[14px]">
                Size{items.size}
              </p>
              <p className="text-sm font-semibold md:text-[12px]">
                Price: NGN 500,00
              </p>
            </div>
            <button
              className="bg-transparent border border-lightGrey text-black rounded-lg h-[48px] w-full flex items-center justify-center gap-4  mt-8"
              // onClick={() => handleAddToCart(item)}
            >
              <span>+</span>Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProduct;
