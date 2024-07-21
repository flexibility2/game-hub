import React from "react";
import useData, { FetchResponse } from "./useData";
import { genres } from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import ms from "ms";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
  slug: string;
  games_count: number;
  games?: any[];
}

// const useGenres = () => {
//   return useData<Genres>("genres");
// };
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genres>>("genres").then((res) => res.data),
    staleTime: ms("1d"),
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
