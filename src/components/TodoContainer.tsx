import { Space } from "antd";
import { StoreContext } from "../index";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Typography, Card, Checkbox, Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Todo } from "../models/TodoStore";
import { Instance } from "mobx-state-tree";

interface ITodo extends Instance<typeof Todo> {}

const TodoContainer = observer(() => {
  const store = useContext(StoreContext);

  const onToggle = (todo: ITodo) => {
    todo.toggle();
  };

  const onDelete = (id: number) => {
    store.deleteTodo(id);
  };

  return (
    <Space
      direction="vertical"
      align="center"
      size={24}
      style={{ display: "flex" }}
    >
      {store.todos.map((todo) => (
        <Card key={todo.id} size="small" style={{ width: 300 }}>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <Checkbox
              key={todo.id}
              checked={todo.completed}
              onChange={() => onToggle(todo)}
            ></Checkbox>
            <Typography.Text>{todo.title}</Typography.Text>
            <Popconfirm
              title="Are you sure delete this task?"
              okText="Yes"
              cancelText="No"
              onConfirm={() => onDelete(todo.id)}
            >
              <Button type="primary" shape="circle" danger>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </Space>
        </Card>
      ))}
    </Space>
  );
});

export default TodoContainer;
