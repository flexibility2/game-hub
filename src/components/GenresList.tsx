import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import {
  Button,
  Heading,
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
  selectedGenres: Genres | null;
}

const GenresList = ({ onSelectGenres, selectedGenres }: GenresProps) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                boxSize="32px"
                objectFit={"cover"}
              />
              <Button
                fontWeight={selectedGenres?.id === genre.id ? "bold" : "normal"}
                variant={"link"}
                onClick={() => onSelectGenres(genre)}
                fontSize={"lg"}
                whiteSpace={"normal"}
                textAlign={"left"}
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
