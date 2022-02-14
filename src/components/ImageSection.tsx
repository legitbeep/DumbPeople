import { Flex, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import HelperImage from "./HelperImage";
import MotionBox from "./motion/Box";

const ImageSection = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <Image
          src="/hello.svg"
          width={400}
          height={400}
          alt="Welcome illustration"
        />
      </MotionBox>

      <Flex marginY={4} justifyContent="center" alignItems="center">
        <HelperImage src={`/nextjs-${colorMode}.svg`} label="NextJS" />
        <HelperImage src={`/chakraui-logo.svg`} label="Chakra UI" />
        <HelperImage src={`/ts-logo.svg`} label="Typescript" />
      </Flex>
    </>
  );
};

export default ImageSection;
