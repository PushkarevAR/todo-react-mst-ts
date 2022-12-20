import axios from "axios";
import { Todo } from "../models/TodoStore";
import { SnapshotIn } from "mobx-state-tree";

interface ITodoSanapshotIn extends SnapshotIn<typeof Todo> {};

const getTodo = async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data.slice(0, 10))
    .catch(() => []);
};

const patchTodo = async (todo: ITodoSanapshotIn) => {
  return await axios
    .patch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, { completed: !todo.completed })
    .then((response) => console.log(response));
}

const deleteTodo = async (id: number) => {
  return await axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((responce) => console.log(responce));
}

const postTodo = async (todo: ITodoSanapshotIn) => {
  return await axios
    .post(`https://jsonplaceholder.typicode.com/todos`, todo)
    .then((responce) => console.log(responce));
}

const todoAPI = {
  getTodo,
  patchTodo,
  deleteTodo,
  postTodo,
}

export default todoAPI;