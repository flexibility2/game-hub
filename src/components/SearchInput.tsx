import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearch = useGameQueryStore((s) => s.setSearch);
  const navigate = useNavigate();

  const ref = useRef<HTMLInputElement>(null);
  const handleOnSearch = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      setSearch(ref.current.value);
      navigate("/");
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
