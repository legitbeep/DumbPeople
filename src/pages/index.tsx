import { Box } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
const HeroSection = dynamic(() => import("components/HeroSection")) ;

const Home = () => {
  return (
    <Box mb={8} w="full">
      <HeroSection />
    </Box>
  );
};

export default Home;
