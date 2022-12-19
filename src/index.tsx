import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoStore } from "./models/TodoStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = TodoStore.create({
  todos: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ],
});
export const StoreContext = createContext(store);

root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
