import { Button, Form, Input } from "antd";
import { StoreContext } from "../index";
import { useContext } from "react";

const InputForm = () => {
  const store = useContext(StoreContext);
  const [ form ] = Form.useForm();

  const onSubmit = (values: { title: string }) => {
    store.addTodo(values.title);
    form.resetFields();
  };

  const onSubmitFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      // wrapperCol={{ span: 36 }}
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      onFinishFailed={onSubmitFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input task title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
