import axios from "axios";
const url = "http://localhost:3000/person/";
export const data = () => {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.message;
    });
};

export const handleDelete = (id) => {
  return axios.delete(`${url + id}`).then((response) => {
    console.log(response.data);
  });
};

export const handleEdit = ({ id, name, lastName }) => {
  console.log(id);
  return axios
    .put(`${url + id}`, {
      name: name,
      lastName: lastName,
    })
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
