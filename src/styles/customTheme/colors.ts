import { DeepPartial, Theme } from "@chakra-ui/react";

/** @extend additional colors here */
const extendedColors = {
    brand: {
        primary: "#ce0f50",
        secondary: "#fe112d",
      },  
}

/** @override chakra colors here */
const overrideChakraColors: DeepPartial<Theme["colors"]> = {
    
};

const colors = {
    ...overrideChakraColors,
    ...extendedColors,
};

export default colors;