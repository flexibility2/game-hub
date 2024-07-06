import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformList from "./components/PlatformList";
import { Game, Platform } from "./hooks/useGames";

export interface GameQuery {
  genres: Genres | null;
  platforms: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenres={gameQuery.genres}
            onSelectGenres={(genres) => setGameQuery({ ...gameQuery, genres })}
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformList
          selectedPlateform={gameQuery.platforms}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platforms: platform })
          }
        ></PlatformList>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
