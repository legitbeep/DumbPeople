import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import {useRouter} from 'next/router'
import {useState} from 'react';
import {ethers} from 'ethers'

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const router = useRouter();
  const [loginState, setLoginState] = useState('Connect Wallet');
  const [connected, setConnected] = useState(false);
  const [userAcc, setUserAcc] = useState("");
  
  const login = async() => {
    setLoginState("Connecting Wallet...");
    // @ts-ignore
    if(!window.ethereum){
      alert('Please install metamask!');
      return;
    }
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts",[]);
    const signer = provider.getSigner();
    const walletAddr = await signer.getAddress();
    if(walletAddr){
      setConnected(true);
      setUserAcc(walletAddr);
    } else {
      setConnected(false);
    }
  }

  return (
  <Flex as="header" width="full" align="center">
    <Heading as="h1" size="md" className="grad-txt">
      <Link href="/" >DumbPeople</Link>
    </Heading>
    <Box marginLeft="auto">
      {
        router.pathname.split('/').includes('browse') && 
        <>
        <Button 
          px={6}
          mx="10px"
          >
          My Collection
        </Button>
        {
          !connected ?
          <Button 
            rounded={'full'}
            px={6}
            className="grad-bg"
            mx="10px"
            marginRight="20px"
            onClick={login}
          >
              Connect Wallet
          </Button>
          : null
        }
        </>
      }
      <ThemeToggle />
    </Box>
  </Flex>
)
};

export default Header;
