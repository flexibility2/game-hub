import React from "react";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
  slug: string;
  games_count: number;
  games?: any[];
}
const apiClient = new APIClient<Genres>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("1d"),
    initialData: genres,
  });

export default useGenres;
