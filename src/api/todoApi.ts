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
    .then((response) => console.log(response))
    .catch(() => [])
    .finally(() => getTodo());
}

const deleteTodo = async (id: number) => {
  return await axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((responce) => console.log(responce))
    .catch(() => [])
    .finally(() => getTodo());
}

const postTodo = async (title: string, completed: boolean) => {
  return await axios
    .post(`https://jsonplaceholder.typicode.com/todos`, {title, completed, userId: 1})
    .then((responce) => console.log(responce))
    .catch(() => [])
    .finally(() => getTodo());
}

const todoAPI = {
  getTodo,
  patchTodo,
  deleteTodo,
  postTodo,
}

export default todoAPI;