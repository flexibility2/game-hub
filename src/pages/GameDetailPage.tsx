import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameTrailer from "../components/GameTrailer";
import GameScreenshot from "../components/GameScreenshot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText children={game.description_raw}></ExpandableText>
      <GameAttribute game={game}></GameAttribute>
      <GameTrailer gameId={game.id}></GameTrailer>
      <GameScreenshot gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
