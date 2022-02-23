import { useState, useEffect } from 'react';
import Link from 'next/link'
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Image from 'next/image'

import {nftMap} from 'utils/contants';
import NftImage from 'components/NftImage';

const NFT: {[key: number]: string} = nftMap;

const Collection = () => {
    const [curSize,setCurSize] = useState(12);
    const [nftPaths,setNftPaths] = useState<string[]>([]);

    // if(window && typeof window !== 'undefined'){
    //     if ( (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //         console.log("you're at the bottom of the page");
    //         setCurSize(prev => (prev+15))
    //     }
    // }

    return (
        <Box >
            <Box>
            <Heading
            as="h1"
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            >Feast your eyes on these Dumb artworks.</Heading>
            <Heading className="outline-txt">Total supply of 2700+ NFTs</Heading>
            </Box>
            <Box display="flex" flexDir="row-reverse" justifyContent={{base:"center",lg:"space-between"}} flexWrap="wrap" mb={8} >
                <Box maxW="600px" display="flex" justifyContent="center">
                    <Box minW="340px" minH="340px" maxW="450px" maxH="450px" boxShadow="lg" borderRadius="22px" overflow="hidden">
                        <img
                            style={{height:"100%"}}
                            src={`/nftGif.gif`}
                            alt="nft"
                        />
                    </Box>
                </Box>             
                <Box maxW="400px" mt="35vh" >
                    <Heading className="outline-txt" fontSize={{ base: '2xl', md: '3xl' }}>Like what you see ?</Heading>
                    <Heading fontSize={{ base: '2xl', md: '3xl' }}>Then its time to mint some !</Heading>
                    <Link href="/mnt" passHref>
                        <Button variant="primary" mt={4}>
                            <Heading fontSize="sm">
                                Come get some
                            </Heading>
                        </Button>
                    </Link>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {
                    Object.values(NFT).slice(0,curSize).map(nftPath => (
                        <NftImage nftPath={nftPath} useImage/>
                    ))
                }
            </Box>
            <Box display="flex" justifyContent="center" width="100%">
                <Button onClick={() => setCurSize(prev => prev+12)} disabled={curSize >= 2743}>Load More</Button>
            </Box>
        </Box>
    )
}

export default Collection;