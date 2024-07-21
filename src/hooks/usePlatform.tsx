import React from "react";
import { platform } from "../data/platform";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () => apiClient.getAll(),
    staleTime: 1000 * 60 * 60,
    initialData: { count: platform.length, results: platform },
  });

export default usePlatform;
