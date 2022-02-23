import { Box, Heading,useColorModeValue } from '@chakra-ui/react';

type NftType = {
    nftPath : string;
}

const NftImage = ({nftPath}: NftType) => {
    const bg = useColorModeValue("white","rgb(14, 16, 21)");
    return (
        <Box minW="240px" position="relative" margin="12px" minH="240px" boxShadow="lg" borderRadius="22px" overflow="hidden" >
            <img
                style={{height:"250px"}}
                src={`/nft/${nftPath}`}
                alt="nft"
            />
            <Box position="absolute" bottom="0" width="110%" opacity="0.6" bg={bg} py={4} display="flex" justifyContent="center">
                <Heading as="p" variant="primary" fontSize="sm">{nftPath.slice(0,nftPath.length-4)}</Heading>
            </Box>
        </Box>
    )
}

export default NftImage;