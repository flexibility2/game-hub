import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformList from "./components/PlatformList";
import { Game } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genres: Genres | null;
  platforms: Platform | null;
  sortOrder: string;
  search: string;
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
        <Navbar
          onSearch={(search) => setGameQuery({ ...gameQuery, search })}
        ></Navbar>
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
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformList
              selectedPlateform={gameQuery.platforms}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platforms: platform })
              }
            ></PlatformList>
            <SortSelector
              selectedSort={gameQuery.sortOrder}
              onSelectSort={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
