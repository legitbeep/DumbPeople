import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

import MotionBox from "components/motion/Box";

const NotFound = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={["100%", "95%", "70%", "60%", "58%"]}
        margin="0 auto"
      >
        <Image src="/404.svg" alt="Error 404 not found" />
      </MotionBox>
      <Box marginY={4}>
        <Heading textAlign="center">Page not Found.</Heading>
        <Box textAlign="center" margin={4}>
          <Text>It&apos;s Okay!</Text>

          <Link href="/" passHref>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              margin="16px"
              _hover={{ bg: 'orange.500' }}
            >
              Let&apos;s Head Back.
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
