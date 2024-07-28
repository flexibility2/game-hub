import { Grid, Show, GridItem, Box, HStack } from "@chakra-ui/react";
import React from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenresList from "../components/GenresList";
import PlatformList from "../components/PlatformList";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside">
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
    </>
  );
};

export default HomePage;
