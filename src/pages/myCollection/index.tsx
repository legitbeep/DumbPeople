import React,{ useEffect, useState, useContext } from 'react';
import { Button, Box, Text, Heading,useColorModeValue } from '@chakra-ui/react'

import { TransactionContext } from "context/Transactions";
import AlertDialog from 'components/AlertDialog';
import Image from 'next/image';

import {nftMap} from 'utils/contants';
import Link from 'next/link';

const NFT: {[key: number]: string} = nftMap;

const Minter = () => {
    const { currAcc, mintNft, state, ownerCollection, getOwnedTokens } = useContext(TransactionContext);
    const [isAlert, setIsAlert] = useState(false);
    const [nftPaths, setNftPaths] = useState<string[]>([]);
    const bg = useColorModeValue("white","rgb(14, 16, 21)");

     useEffect(() => {
        const size = ownerCollection.length;
        if(size > 1){
            const tokens:string[] = [];
            ownerCollection.map((tokenId: string,idx:number) => {
                if(idx != 0)
                    tokens.push(NFT[parseInt(tokenId)]);
            })
            console.log(tokens);
            setNftPaths(tokens);
        }
     },[ownerCollection,state,currAcc])

    useEffect(() => {
        if(currAcc == ""){
            setIsAlert(true);
        }else {
            getOwnedTokens();
        }
    },[currAcc,state])

    return (
        <>
            <AlertDialog 
                title="Please login to proceed"
                desc="It seems you haven't logged in please login using metamask in order to proceed"
                isOpen={isAlert}
                setIsOpen={setIsAlert}
            />
            {
                currAcc ?(
                    <Box display="flex" justifyContent="center" flexWrap="wrap" >
                        <Box my={6}>
                            <Heading 
                                fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>Here is your dumb collection of NFT's.</Heading>
                            <Heading className="outline-txt">Hope it was worth it.</Heading>
                        </Box>
                        <Box display="flex" justifyContent="center" flexWrap="wrap">
                            {
                                nftPaths.map(nftPath => (
                                    <Box minW="240px" position="relative" m="12px" minH="240px" boxShadow="lg" borderRadius="22px" overflow="hidden" mx="auto">
                                        <img
                                            style={{height:"250px"}}
                                            src={`/nft/${nftPath}`}
                                            alt="nft"
                                        />
                                        <Box position="absolute" bottom="0" width="110%" opacity="0.6" bg={bg} py={4} display="flex" justifyContent="center">
                                            <Heading as="p" variant="primary" fontSize="sm">{nftPath.slice(0,nftPath.length-4)}</Heading>
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                )
                : (<Heading>Please connect your wallet to proceed</Heading>)
            }
        </>
    )
}

export default Minter ;