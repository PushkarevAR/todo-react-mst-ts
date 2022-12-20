import axios from "axios";

const getTodo = async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.data.slice(196))
    .catch(() => []);
};

const patchTodo = async (id: number, completed: boolean) => {
  return await axios
    .patch(`https://jsonplaceholder.typicode.com/todos/${id}`, { completed })
    .then((response) => console.log("PATCH:", response))
    .then(() => getTodo())
    .catch((err) => console.log(err));
};

const deleteTodo = async (id: number) => {
  return await axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => console.log("DELETE:", response))
    .then(() => getTodo())
    .catch((err) => console.log(err));
};

const postTodo = async (title: string, completed: boolean) => {
  return await axios
    .post(`https://jsonplaceholder.typicode.com/todos`, {
      title,
      completed,
      userId: 1,
    })
    .then((response) => console.log("POST:", response))
    .then(() => getTodo())
    .catch((err) => console.log(err));
};

const todoAPI = {
  getTodo,
  patchTodo,
  deleteTodo,
  postTodo,
};

export default todoAPI;
