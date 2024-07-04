import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenresList = () => {
  const { data, error, loading } = useGenres();
  if (error) return null;
  return (
    <>
      {loading && <Spinner></Spinner>}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                boxSize="32px"
              />
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
