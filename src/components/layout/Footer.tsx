import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => (
  <Flex as="footer" width="full" align="center">
    <Text>
      {new Date().getFullYear()} -{" "}
      <Link href="https://github.com/legitbeep" isExternal>
        legitbeep
      </Link>
    </Text>
  </Flex>
);

export default Footer;
