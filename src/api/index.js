import axios from "axios";

export const data = () => {
  return axios
    .get("http://localhost:3000/person")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.message;
    });
};
