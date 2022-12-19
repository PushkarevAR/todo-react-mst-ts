import { types } from "mobx-state-tree";

export const Todo = types
  .model("Todo", {
    id: types.identifierNumber,
    userId: types.number,
    title: types.string,
    completed: types.boolean,
  })
  .actions((self) => ({
    toggle() {
      self.completed = !self.completed;
    },
  }));

export const TodoStore = types
  .model("TodoStore", {
    todos: types.array(Todo),
  })
  .views((self) => ({
    get completedTodoCount() {
      return self.todos.filter((todo) => todo.completed).length;
    },
  }))
  .actions((self) => ({
    addTodo(title: string) {
      const id = self.todos[self.todos.length - 1].id + 1;
      self.todos.push({ id, userId: 0, title, completed: false });
    },
    deleteTodo(id: number) {
      self.todos.replace(self.todos.filter((t) => t.id !== id));
    },
  }));
