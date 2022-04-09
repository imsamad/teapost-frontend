import { Box, Divider, Flex, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import NavBar from "../NavBar";
import Footer from "../Footer";
const Context = dynamic(() => import("../Context"), {
  ssr: false,
  // loading: () => <>Loading</>,
});
// import Context from "../Context";

type LayoutProps = {
  children: React.ReactNode;
};

const Index = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth="container.xl" p="4px" overflow="hidden">
      <Context>
        <Flex
          direction="column"
          w="100%"
          minH="100vh"
          maxH="max-content"
          // overflow="hidden"
          // maxW="100wh"
        >
          <NavBar />
          <Divider my={2} />

          <Box flexGrow="1" as="main">
            {children}
          </Box>
          <Footer />
        </Flex>
      </Context>
    </Container>
  );
};

export default Index;
