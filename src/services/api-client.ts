import axios from "axios";

export default axios.create({
  baseURL:"https://api.rawg.io/api",
  params: {
    key:"277cb56923734cfdb46802efddcd69d7"
  }
})

