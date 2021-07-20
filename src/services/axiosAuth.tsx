import axios from "axios";

const axiosAuth = axios.create({
  headers: {
    Authorization: `Bearer 33369d3d-d360-405b-96cc-e362e590dee7`,
  },
});

export default axiosAuth;
