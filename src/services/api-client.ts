import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fa4172a415a548a3849904aedaf78b97",
  },
});
