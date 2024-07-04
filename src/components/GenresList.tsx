import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface GenresProps {
  onSelectGenres: (genre: Genres) => void;
}

const GenresList = ({ onSelectGenres }: GenresProps) => {
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
              <Button
                variant={"link"}
                onClick={() => onSelectGenres(genre)}
                fontSize={"lg"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
