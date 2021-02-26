import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-ecommerce-7abf9.cloudfunctions.net/api",
});

export default instance;
