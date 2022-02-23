import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => (
  <Flex as="footer" width="full" align="center">
    <Text>
      {new Date().getFullYear()} -{" "}
      <Link href="https://github.com/legitbeep" isExternal>
        legitbeep
      </Link>
    </Text>
    <Flex ml="auto">
      <Link passHref href="https://github.com/legitbeep/DumbPeople/issues/new" isExternal target="_blank" rel="noreferer">
        <Text mr="16px">Report Bug</Text>
      </Link>
      <Link passHref href="https://ropsten.etherscan.io/address/0xA358B0847831B97E4C387E1423B05b907F4BD476#readContract" isExternal target="_blank" rel="noreferer">
        <Text>Smart Contract</Text>
      </Link>
    </Flex>

  </Flex>
);

export default Footer;
