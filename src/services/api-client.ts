import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "0f2eb5240c2648bf9befd5f1b33ce9a7",
  },
});
