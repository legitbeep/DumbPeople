import React,{ useEffect, useState, useContext } from 'react';
import { Button, Box, Text, Heading } from '@chakra-ui/react'

import { TransactionContext } from "context/Transactions";
import AlertDialog from 'components/AlertDialog';
import Image from 'next/image';

import nft1  from 'public/p1.svg'
import nft2  from 'public/p2.svg'
import nft3  from 'public/p3.svg'
import nft4  from 'public/p4.svg'

const Minter = () => {
    const { currAcc, mintNft } = useContext(TransactionContext);
    const [isAlert, setIsAlert] = useState(false);
    const [nftPath, setNftPath] = useState("/nft/question.gif");

    const onAlert = () => {
        setIsAlert(true);
    }

    const onMint = () => {
        if(currAcc == "") setIsAlert(true);
        else mintNft();
    }

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
                    <Button variant="primary" minW="150px" onClick={onMint}>Mint</Button>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" minW="45vw" padding={{base:"40px 0px", lg:0 }}>
                    <Box minW="340px" minH="340px" boxShadow="lg" borderRadius="22px" overflow="hidden" mx="auto">
                        <img
                            style={{height:"350px"}}
                            src={nftPath}
                            alt="nft"
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Minter ;