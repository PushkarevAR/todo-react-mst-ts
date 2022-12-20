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
    const toggle = () => {
      self.completed = !self.completed;
    };
    return {
      toggle,
    }
  });

interface ITodoSanapshotOut extends SnapshotOut<typeof Todo> {};

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
    // const fetchTodo = flow(function* fetchTodo() {
    //   yield todoAPI.getTodo().then(data => console.log(data));
    //   // yield todoAPI.getTodo().then((data: ITodoSanapshotOut[]) => self.todos.push(data[0]));
    // });
    const addTodo = (title: string) => {
      const id = self.todos[self.todos.length - 1].id + 1;
      self.todos.push({ id, userId: 0, title, completed: false });
    };
    const deleteTodo = (id: number) => {
      self.todos.replace(self.todos.filter((t) => t.id !== id));
    };
    return {
      addTodo,
      deleteTodo,
      // fetchTodo,
    }
  });

//   const fetchData = flow(function* fetchData() {
//     yield doSomething()
// })

// actions(self => {
//   // Don't forget that async operations HAVE
//   // to use `flow( ... )`.
//   const fetchData = flow(function* fetchData() {
//       yield doSomething()
//   })

//   return {
//       fetchData,
//       afterCreate() {
//           // Notice that we call the function directly
//           // instead of using `self.fetchData()`. This is
//           // because Typescript doesn't know yet about `fetchData()`
//           // being part of `self` in this context.
//           fetchData()
//       }
//   }
// })


