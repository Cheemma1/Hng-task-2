// import React from "react";
// import { Select, Stack, Flex, Text } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";

// const FlashSale = () => {
//   return (
//     <div className="container mx-auto font-lato my-8 flex items-center justify-between">
//       <p className="font-bold">Flash Sale: 23: 20:01</p>
//       <Stack spacing={3} className="font-lato">
//         <Select
//           icon={<ChevronDownIcon />}
//           variant="outline"
//           placeholder="Sort By"
//           focusBorderColor="transparent"
//         >
//           <option value="lowToHigh">Price: Low to High</option>
//           <option value="highToLow">Price: High to Low</option>
//           <option value="bestSellers">Best Sellers</option>
//           <option value="newArrivals">New Arrivals</option>
//         </Select>
//       </Stack>
//     </div>
//   );
// };

// export default FlashSale;

import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const FlashSale = () => {
  const [selectedOption, setSelectedOption] = useState("Sort By");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container mx-auto font-lato my-8 flex  flex-col md:flex-row  items-end gap-2  md:gap-0 justify-right md:items-center md:justify-between px-4 lg:px-0">
      <p className="font-bold">Flash Sale: 23: 20:01</p>
      <Stack spacing={3}>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant="outline"
            className="w-full text-left bg-white border border-gray-300 rounded p-2 font-lato"
          >
            {selectedOption}
          </MenuButton>
          <MenuList className="font-lato">
            <MenuItem onClick={() => handleOptionClick("Price: Low to High")}>
              Price: Low to High
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => handleOptionClick("Price: High to Low")}>
              Price: High to Low
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => handleOptionClick("Best Sellers")}>
              Best Sellers
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => handleOptionClick("New Arrivals")}>
              New Arrivals
            </MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </div>
  );
};

export default FlashSale;
