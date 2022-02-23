import { useState, useEffect, memo } from 'react';
import { useColorMode, Flex, Stack, Heading, Text, Button, HStack } from "@chakra-ui/react";
import Link from 'next/link';
import Image from "next/image";
 
import MotionBox from "components/motion/Box";

const HeroSection = () => {
  const { colorMode } = useColorMode();
  const [curImg, setCurImg] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurImg(prev => {
        let newImg = prev+1;
        
        if (newImg > 4) {
          newImg = 1;
        }

        return newImg; 
      })
    },2500)
    return () => clearTimeout(timeout);
  },[curImg])

  return (
    <>
        <Flex
        textAlign={'start'}
        align={'end'}
        spacing={{ base: 8 }}
        py={{ base: 16, md: "55px" }}
        direction={{base:"column",lg:"row"}}>
        <Stack spacing={6} >
          <Heading
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            >
            Home brew{' '}
            <Text as={'span'} variant="primary">
              premium NFT{' '}
            </Text>
            Collection
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            These NFT&apos;s are deployed on ropsten testnet so basically you can buy and use these NFT for <Text as="b" variant="primary">FREE{' '}</Text>
            on the testnet. So, what are you waiting for grab your free coins and go shopping
            for some Dumb People NFTs.
          </Text>
          <Flex>
              <Link href="/mint" passHref>
                <Button
                  variant="primary"  px={6} mr={6}>
                  Mint Now
                </Button>
              </Link>
              <Link href="/collection" passHref>
                <Button rounded={'full'} px={6} >
                  Collection
                </Button>
              </Link>
          </Flex>
        </Stack>
        <Flex w={'full'}>
          <MotionBox
              animate={{ y: 20, scale: 0.97 }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
              maxWidth={400}
              marginX="auto"
            >
              <Image
                src={`/p${curImg}.svg`}
                width={400}
                height={400}
                alt="nfts"
              />
            </MotionBox>
        </Flex>
      </Flex>
    </>
  );
};

export default memo(HeroSection);
