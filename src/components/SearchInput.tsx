import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch color="gray.300" />
      </InputLeftElement>
      <Input
        borderRadius={20}
        variant={"filled"}
        type="text"
        placeholder="Search Games..."
      />
    </InputGroup>
  );
};

export default SearchInput;
