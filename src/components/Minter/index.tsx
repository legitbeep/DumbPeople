import React,{ useEffect, useState, useContext } from 'react';
import { Button, Box, Text, Heading,useColorModeValue } from '@chakra-ui/react'

import { TransactionContext } from "context/Transactions";
import AlertDialog from 'components/AlertDialog';
import Image from 'next/image';

import {nftMap} from 'utils/contants';
import Link from 'next/link';

const NFT: {[key: number]: string} = nftMap;

const Minter = () => {
    const { currAcc, mintNft, state, ownerCollection, txHash } = useContext(TransactionContext);
    const [isAlert, setIsAlert] = useState(false);
    const [nftPath, setNftPath] = useState("/nft/question.gif");
    const [txLink, setTxLink] = useState("");
    const bg = useColorModeValue("white","rgb(14, 16, 21)");

    const onAlert = () => {
        setIsAlert(true);
    }

    const onMint = () => {
        if(currAcc == "") setIsAlert(true);
        else {
            mintNft();
        }
    }

    useEffect(() => {
        const size = ownerCollection.length;
        if(state.success && size > 1){
            setNftPath(`/nft/${NFT[parseInt(ownerCollection[size-1])]}`)
        }
    },[state])

    return (
        <>
            <AlertDialog 
                title="Please login to proceed"
                desc="It seems you haven't logged in please login using metamask in order to proceed"
                isOpen={isAlert}
                setIsOpen={setIsAlert}
            />
            <Box display="flex" minH="40vh" flexWrap="wrap">
                <Box textAlign="start" maxW="450px"  pt="56px" marginTop="auto" ml="25px">
                    <Heading className="outline-txt">NOTE :</Heading>
                    <ul>
                        <li><Text my="7px" as="p">Please make sure you are connected to ropsten before making any transaction.</Text></li>
                        <li><Text my="7px" as="p">The transaction can take from 2 min to 1 hr to complete.</Text></li>
                        <li><Text my="7px" as="p">You cant see these NFT on opensea since it doesnt support Ropsten testnet.</Text></li>
                    </ul>
                    {/* <Button minW="150px" mr="20px">My Collection</Button> */}
                    <Button variant="primary" minW="150px" onClick={onMint} disabled={state.loading}>Mint</Button>
                    {
                        txHash !== "" &&
                        <Box mt={8}>
                            <Text as="p">Check your transaction status{' '}
                                <a href={`https://ropsten.etherscan.io/tx/${txHash}`} target="_blank" style={{color:'blue'}}>here.</a>
                            </Text>
                        </Box>
                    }
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" minW="45vw" padding={{base:"40px 0px", lg:0 }}>
                <Box minW="340px" position="relative" m="12px" minH="340px" boxShadow="lg" borderRadius="22px" overflow="hidden" mx="auto">
                    <img
                        style={{height:"350px"}}
                        src={nftPath}
                        alt="nft"
                    />
                    <Box position="absolute" bottom="0" width="110%" opacity="0.6" bg={bg} py={4} display="flex" justifyContent="center">
                        <Heading as="p" variant="primary" fontSize="sm">{nftPath == "/nft/question.gif" ? "MINT TO REVEAL" : nftPath.slice(5,nftPath.length-4)}</Heading>
                    </Box>
                </Box>
                </Box>
            </Box>
        </>
    )
}

export default Minter ;