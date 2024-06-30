import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
    return controller.abort();
  }, []);
  return (
    <>
      {error && <Text> {error}</Text>}
      <ul>
        {games.map((item) => (
          <li key={item.id}> {item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
