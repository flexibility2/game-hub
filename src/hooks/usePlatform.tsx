import React from "react";
import useData from "./useData";
import { platform } from "../data/platform";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  //   return useData<Platform>("/platforms/lists/parents");
  return { data: platform, error: null, loading: false };
};

export default usePlatform;
