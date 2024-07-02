import React from "react";
import useData from "./useData";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
  slug: string;
  games_count: number;
}

const useGenres = () => {
  return useData<Genres>("genres");
};

export default useGenres;
