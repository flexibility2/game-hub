import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearch = useGameQueryStore((s) => s.setSearch);

  const ref = useRef<HTMLInputElement>(null);
  const handleOnSearch = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      setSearch(ref.current.value);
      console.log("search: ", ref.current.value);
    }
  };
  return (
    <form onSubmit={handleOnSearch}>
      <InputGroup>
        <InputLeftElement>
          <BsSearch color="gray.300" />
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          variant={"filled"}
          type="text"
          placeholder="Search Games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
