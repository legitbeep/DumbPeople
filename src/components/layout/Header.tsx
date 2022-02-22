import { Box, Flex, Heading, Button, IconButton,useDisclosure, VStack, CloseButton,
  HStack,
  useColorModeValue } from "@chakra-ui/react";
import {AiOutlineMenu} from 'react-icons/ai';
import Link from "next/link";
import {useRouter} from 'next/router'
import {useContext, useState} from 'react';
import {ethers} from 'ethers'

import {TransactionContext} from 'context/Transactions';
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const router = useRouter();
  const {connectWallet, currAcc} = useContext(TransactionContext);
  const mobileNav = useDisclosure();
  const bg = useColorModeValue("white","rgb(14, 16, 21)");

  const login = async() => {
    // setLoginState("Connecting Wallet...");
    // // @ts-ignore
    // if(!window.ethereum){
    //   alert('Please install metamask!');
    //   return;
    // }
    // // @ts-ignore
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // await provider.send("eth_requestAccounts",[]);
    // const signer = provider.getSigner();
    // const walletAddr = await signer.getAddress();
    // if(walletAddr){
    //   setUserAcc(walletAddr);
    // } 
    connectWallet();
  }
  
  return (
  <Flex as="header" width="full" align="center">
    <Heading as="h1" size="md" className="grad-txt">
      <Link href="/" >DumbPeople</Link>
    </Heading>

    <Box marginLeft="auto">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
              <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={mobileNav.onClose}
              />
              {
                router.pathname != "/" ? (
                  <>
                  <Link href="/collection">
                    <Button 
                      rounded={'full'}
                      px={6}
                      mx="10px"
                      marginRight="20px"
                    >
                        Collection
                    </Button>
                  </Link>
                  {
                    currAcc !== "" ?
                    <Button 
                      rounded={'full'}
                      px={6}
                      mx="10px"
                      marginRight="20px"
                      disabled
                    >
                        Connected
                    </Button>
                    :
                    <Button 
                      rounded={'full'}
                      px={6}
                      mx="10px"
                      marginRight="20px"
                      onClick={login}
                      variant="primary"
                    >
                        Connect Wallet
                    </Button>
                  }
                  </>)
                  :null
                  }
                <ThemeToggle />
              </VStack>
            </Box>
        <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
        {
          router.pathname !== "/" ? (
            <>
              <Link href="/collection">
                <Button 
                  rounded={'full'}
                  px={6}
                  mx="10px"
                  marginRight="20px"
                >
                    Collection
                </Button>
              </Link>
              {
                    currAcc !== "" ?
                    <Button 
                      rounded={'full'}
                      px={6}
                      mx="10px"
                      marginRight="20px"
                      disabled
                    >
                        Connected
                    </Button>
                    :
                    <Button 
                      rounded={'full'}
                      px={6}
                      mx="10px"
                      marginRight="20px"
                      onClick={login}
                      variant="primary"
                    >
                        Connect Wallet
                    </Button>
                  }
              </>)
              : null
            }
              <ThemeToggle />
          </HStack>
    </Box>
  </Flex>
)
};

export default Header;
