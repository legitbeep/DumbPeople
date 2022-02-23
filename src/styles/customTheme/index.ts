import { extendTheme } from '@chakra-ui/react';
import { whiten, mode } from '@chakra-ui/theme-tools';

import colors from './colors';
import Button from './components/button';
import Text from './components/text';
import fonts from './fonts';

const customTheme = extendTheme({
    fonts,
    colors,
    components : {
        Button,
        Text
    },
    styles : {
        global : (props: any) => ({
            body:{
                bg : mode("white.400","rgb(14, 16, 21)")(props),
            }
        })
    },
    initialColorMode: 'dark',
    useSystemColorMode: false,
});

export default customTheme;