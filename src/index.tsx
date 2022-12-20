import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoStore } from "./models/TodoStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = TodoStore.create({
  todos: [ ],
});
export const StoreContext = createContext(store);

root.render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
);
