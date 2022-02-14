import { DeepPartial, Theme } from "@chakra-ui/react";

/** @extend additional colors here */
const extendedColors : DeepPartial<
    Record<string, Theme['colors']['blackAlpha']>
    >= {
    brand: {
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
      },  
}

/** @override chakra colors here */
const overrideChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
    ...overrideChakraColors,
    ...extendedColors,
};

export default colors;