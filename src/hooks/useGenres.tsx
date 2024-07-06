import React from "react";
import useData from "./useData";
import { genres } from "../data/genres";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
  slug: string;
  games_count: number;
}

// const useGenres = () => {
//   return useData<Genres>("genres");
// };
const useGenres = () => {
  return { data: genres, error: null, loading: false };
};

export default useGenres;
