import { Box } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { ReactNode } from "react";

// import Header from "./Header";
import Footer from "./Footer";
const Header: any = dynamic(
  () => {
      return import("./Header");
   },{ loading: () => null, ssr: false }
);

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1300} transition="0.75s ease-out">
      <Box margin="8">
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
