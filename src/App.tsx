import { Space, Typography } from "antd";
import { useEffect } from "react";
import Counter from "./components/Counter";
import InputForm from "./components/InputForm";
import TodoContainer from "./components/TodoContainer";

function App() {

  useEffect(() => {
    console.log("render app");
  }, []);

  return (
    <div className="App space-align-block">
      <Space
        direction="vertical"
        align="center"
        size={24}
        style={{ display: "flex" }}
      >
        <Typography.Title level={2}>Todo App</Typography.Title>
        <Counter />
        <TodoContainer />
        <InputForm />
      </Space>
    </div>
  );
}

export default App;
