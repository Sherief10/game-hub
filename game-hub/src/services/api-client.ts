import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b5c1754e922f4b7e97bd8aa6be740fe1",
  },
});
