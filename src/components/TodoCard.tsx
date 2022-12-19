import { Typography, Card, Checkbox, Button, Space, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ITodo } from "../models/ITodo";

const TodoCard = (props: ITodo) => {
  const { id, userId, title, completed } = props;

  const onToggle = () => {
    console.log("Checked!");
  };

  const onDelete = () => {
    console.log("Deleted!");
  };

  return (
    <Card size="small" style={{ width: 300 }}>
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <Checkbox key={id} checked={completed} onChange={onToggle}></Checkbox>
        <Typography.Text>{title}</Typography.Text>
        <Popconfirm
          title="Are you sure delete this task?"
          okText="Yes"
          cancelText="No"
          onConfirm={onDelete}
        >
          <Button type="primary" shape="circle" danger>
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      </Space>
    </Card>
  );
};

export default TodoCard;
