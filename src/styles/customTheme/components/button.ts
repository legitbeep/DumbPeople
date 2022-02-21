import { DeepPartial, Theme } from "@chakra-ui/react";
import { whiten } from '@chakra-ui/theme-tools';

const Button = {
    baseStyle : {
        borderRadius : "full",
    },
    variants : {
        primary : {
            bgGradient: "linear(to-tl, brand.primary 25%, brand.secondary 75%)",
            color : 'white',
            _hover : {
                boxShadow: "lg",
                bgGradient: "linear(to-tl, brand.primary 100%, brand.secondary 0%)",
            },
            transition: "all 2s ease",
        },
        
        secondary : {
            bg: "",
            color : 'white',
            _hover : {
                boxShadow: "lg",
            }
        }
    }
}

export default Button;