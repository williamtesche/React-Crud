import React, { useState, useEffect } from "react";
import { getUsers, createUser, deleteUser } from "./Api";
import { Form, Input, Button, Row, Col } from "antd";
import { updateUser } from "./UpdateUser";

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
        if (values.id) {
          // Atualizar usuário existente
          await updateUser(values.id, values);
        } else {
          // Criar novo usuário
          await createUser(values);
        }
        form.resetFields();
      } catch (error) {
        console.error("Error creating/updating user:", error);
      } finally {
        loadUsers();
      }
    };


    const handleDelete = async (userid) => {
      try {
        await deleteUser(userid);
      } catch (error) {
        console.error("Erro ao Deletar usuário", error);
      } finally {
        loadUsers();
      }
    };

    const handleEdit = (user) => {
      form.setFieldsValue({
        id: user.id,
        name: user.name,
        email: user.email,
        cpf: user.cpf,
      });
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
              <Form.Item name="name" label={"Nome"}>
                <Input />
              </Form.Item>
              <Form.Item name="email" label={"E-mail"}>
                <Input />
              </Form.Item>
              <Form.Item name="cpf" label={"CPF"}>
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
            {user.name} - {user.email} - {user.cpf}{" "}
            <Button onClick={() => handleDelete(user.id)} danger>
              Deletar
            </Button>
            <Button onClick={() => handleEdit(user)} style={{ marginLeft: '10px' }}>
              Atualizar
            </Button>
          </li>
        ))}
      </ul>
      </div>
    );
  };


export default App;
