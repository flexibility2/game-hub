import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";

import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenresList from "./components/GenresList";
import Navbar from "./components/NavBar";
import PlatformList from "./components/PlatformList";
import SortSelector from "./components/SortSelector";

function App() {
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
          <GenresList></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading></GameHeading>
          <HStack spacing={5} marginBottom={5}>
            <PlatformList></PlatformList>
            <SortSelector></SortSelector>
          </HStack>
        </Box>

        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
