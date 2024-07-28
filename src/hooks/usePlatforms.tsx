import React from "react";
import platforms from "../data/platform";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platform"],
    queryFn: () => apiClient.getAll(),
    staleTime: 1000 * 60 * 60,
    initialData: platforms,
  });

export default usePlatforms;
