import React from "react";
import useData, { FetchResponse } from "./useData";
import { platform } from "../data/platform";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60,
    initialData: { count: platform.length, results: platform },
  });

export default usePlatform;
