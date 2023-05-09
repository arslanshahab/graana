import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const HTTP = axios.create({
  baseURL,
  timeout: 60000,
});

HTTP.interceptors.request.use(
  (request) => {
    request.headers["access-token"] =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODM1MzE0NDUsImV4cCI6MTY4MzUzNTA0NX0.X1qWPKjBsL2je4g4JD81zg5CmoRMXYYDCylwHZLWW301";

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

HTTP.interceptors.response.use(
  (response) => {
    // on fulfilled
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      //1. expire local session
      // ---> tokens, ids -> delete/expire
      //2. redirect to login page
    }

    if (error.response.status === 500) {
      // toast notification with error message
    }

    return Promise.reject(error);
  }
);
