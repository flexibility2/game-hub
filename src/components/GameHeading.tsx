import { Heading } from "@chakra-ui/react";
import React from "react";

import { GameQuery } from "../App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const headingText = `${gameQuery.platforms?.name || ""} ${
    gameQuery.genres?.name || ""
  } Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {headingText}
    </Heading>
  );
};

export default GameHeading;
