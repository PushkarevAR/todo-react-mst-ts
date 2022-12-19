import axios from "axios";

export const getTodos = async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data.slice(0, 1));
};
