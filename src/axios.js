import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/ecommerce-7abf9/us-central1/api",
});

export default instance;
