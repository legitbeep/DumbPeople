import { useColorMode } from "@chakra-ui/react";
import Image from "next/image";
 
import MotionBox from "components/motion/Box";

const HeroSection = () => {
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
    </>
  );
};

export default HeroSection;
