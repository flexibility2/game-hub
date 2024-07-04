import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";

function App() {
  const [selectGenres, setSelectGenres] = useState<Genres | null>(null);
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
          <GenresList onSelectGenres={setSelectGenres}></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectGenres}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
