import React, { useState, useEffect } from "react";
import { getUsers, createUser } from "./Api";
import { Input } from 'antd';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const loadUsers = async () => {
    try {
      const users = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email ,cpf };
    
    try {
      await createUser(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
    }finally{
      loadUsers();
    }
  };
  
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="conterGlobal">
      <form onSubmit={handleSubmit} className="conter">
        <h1>Cadastro</h1>
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <br />
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <br />
        <input
          className="input"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="CPF"
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
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
