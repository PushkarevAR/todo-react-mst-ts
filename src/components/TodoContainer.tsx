import { StoreContext } from "../index";
import TodoCard from "./TodoCard";
import { Space } from "antd";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";

const TodoContainer = observer(() => {
  const store = useContext(StoreContext);

  useEffect(() => {
    console.log('rerender container');
  }, []);

  return (
    <Space
      direction="vertical"
      align="center"
      size={24}
      style={{ display: "flex" }}
    >
      {store.todos.map((t) => (
        <TodoCard
          key={t.id}
          id={t.id}
          userId={t.userId}
          title={t.title}
          completed={t.completed}
        />
      ))}
    </Space>
  );
});

export default TodoContainer;
