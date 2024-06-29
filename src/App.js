import React, { useState, useEffect } from "react";
import { getUsers, createUser } from "./Api";
import { Form, Input, Button, Row, Col } from "antd";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form] = Form.useForm();

  const loadUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const handleSubmit = async (values) => {
    try {
      await createUser(values);
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      loadUsers();
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="conterGlobal">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        scrollToFirstError={true}
      >
        <Row gutter={24}>
          <Col xs={24} sm={12}>
            <Form.Item name="name" label={"name"}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label={"email"}>
              <Input />
            </Form.Item>
            <Form.Item name="cpf" label={"cpf"}>
              <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="form-button">
              enviar
            </Button>
          </Col>
        </Row>
      </Form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email} - {user.cpf}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
