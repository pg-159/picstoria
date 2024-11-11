const axios = require("axios");
const axiosInstance = axios.create({
  baseURL: process.env.MICROSERVICE_BASE_URL,
  headers: {
    Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
  },
});

module.exports = axiosInstance;
