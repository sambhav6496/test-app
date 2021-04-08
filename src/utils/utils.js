import axios from "axios";
export const handleDelete = (id) => {
  return axios.delete(`http://localhost:3000/person/${id}`).then((response) => {
    console.log(response.data);
  });
};

export const handleEdit = (id, name, lastName) => {
  console.log(id);
  return axios
    .put(`http://localhost:3000/person/${id}`, {
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
