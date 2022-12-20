import { types, flow, SnapshotOut } from "mobx-state-tree";
import todoAPI from "../api/todoApi";

export const Todo = types
  .model("Todo", {
    id: types.identifierNumber,
    userId: types.number,
    title: types.string,
    completed: types.boolean,
  })
  .actions(self => {
    const toggle = flow(function* toggle() {
      // const resp = 
    });
    return {
      toggle,
    }
  });

export const TodoStore = types
  .model("TodoStore", {
    todos: types.array(Todo),
  })
  .views((self) => ({
    get completedTodoCount() {
      return self.todos.filter((todo) => todo.completed).length;
    },
  }))
  .actions(self => {
    const fetchTodo = flow(function* fetchTodo() {
      const resp = yield todoAPI.getTodo();      
      self.todos.push(...resp);     
    });
    const addTodo = flow(function* addTodo(title, completed) {
      const resp = yield todoAPI.postTodo(title, completed);
      console.log(resp);
    })
    const deleteTodo = flow(function* deleteTodo(id: number) {
      const resp = yield todoAPI.deleteTodo(id);
    });
    return {
      addTodo,
      deleteTodo,
      fetchTodo,
    }
  });
