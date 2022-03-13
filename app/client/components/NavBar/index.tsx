import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import MyLink from "../MyLink";
import DarkMode from "../DarkMode";
import LogInBtn from "./LogInBtn";

const Index = () => {
  return (
    <Flex alignItems="center" py={4} as="nav">
      <MyLink href="/">
        <Heading
          as="h1"
          textTransform="uppercase"
          // fontStyle="italic"
          color="black"
          fontWeight={900}
          _dark={{
            color: "white",
          }}
        >
          Teapost
        </Heading>
      </MyLink>
      <Spacer />
      <InputGroup
        maxW="md"
        size="md"
        overflow="hidden"
        mx={[1, 4]}
        display={["none", "none", "flex"]}
      >
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<Search2Icon color="gray.300" />}
        />
        <Input placeholder="Enter or ctrl + /" variant="filled" />
      </InputGroup>
      <DarkMode />
      <LogInBtn />
    </Flex>
  );
};

export default Index;
