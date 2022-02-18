import { useState, useEffect, memo } from 'react';
import { useColorMode, Flex, Stack, Heading, Text, Button } from "@chakra-ui/react";
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
      console.log("changed")
    },3300)
    return () => clearTimeout(timeout);
  },[curImg])

  return (
    <>
        <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={700}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Home brew{' '}
          <Text as={'span'} color={'orange.400'}>
            premium NFT{' '}
          </Text>
          Collection
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          These NFT's are deployed on ropsten testnet so basically you can buy and use these NFT for <Text as="b" color="orange.400">free{' '}</Text>
          on the testnet. So, what are you waiting for grab your free coins and go shopping
          for some Dumb People NFTs.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Link href="/browse">
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
          </Link>
          <Button rounded={'full'} px={6}>
            Know More
          </Button>
        </Stack>
        <Flex w={'full'}>
          <MotionBox
              animate={{ y: 20, scale: 0.97 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              marginY={8}
              maxWidth={[240, 320]}
              marginX="auto"
            >
              <Image
                src={`/p${curImg}.svg`}
                width={400}
                height={400}
                alt="Welcome illustration"
              />
            </MotionBox>
        </Flex>
      </Stack>
    </>
  );
};

export default memo(HeroSection);
