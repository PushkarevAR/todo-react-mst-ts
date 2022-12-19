import { Typography } from "antd";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StoreContext } from "../index";

const Counter = observer(() => {
  const store = useContext(StoreContext);

  return <Typography.Text>Well done: {store.completedTodoCount} tasks comlite!</Typography.Text>;
});

export default Counter;
