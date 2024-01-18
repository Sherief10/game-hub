import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7bd60b315de943eb98ec5cff2a3bd941",
  },
});
