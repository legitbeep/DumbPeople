import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import Button from './components/button';
import fonts from './fonts';

const customTheme = extendTheme({
    fonts,
    colors,
    components : {
        Button,
    },
    useSystemColorMode: true,
});

export default customTheme;