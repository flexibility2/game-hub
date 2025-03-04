import React from "react";
import APIClient from "../services/api-client";
import { Screenshot } from "../entities/Screenshot";
import { useQuery } from "@tanstack/react-query";

const useScreenshot = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => apiClient.getAll(),
  });
};

export default useScreenshot;
