import { DeepPartial, Theme } from "@chakra-ui/react";
import { whiten } from '@chakra-ui/theme-tools';

const Text = {
    variants : {
        primary : {
            bgGradient: "linear(to-tl, brand.primary 25%, brand.secondary 75%)",
            bgClip: "text",
            color :"transparent",
        },
    }
}

export default Text;