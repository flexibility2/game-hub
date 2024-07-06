import { GameQuery } from "../App";
import useData from "./useData";
import { Genres } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [
    {
      platform: Platform;
    }
  ];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "games",
    {
      params: {
        genres: gameQuery.genres?.id,
        platforms: gameQuery.platforms?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );
};

export default useGames;
