import { Box, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';

import Minter from 'components/Minter';

const Browse = () => {
    return (
        <Box display="flex" flexDirection="column" my={16} >
            
          <Heading
            as="h1"
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            >Mint NFT and increase your collection.</Heading>
            <Heading as="h2" className="grad-txt" >For FREE !</Heading>
            <Minter />
        </Box>
    )
}
export default Browse;