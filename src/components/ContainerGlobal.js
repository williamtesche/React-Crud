import global from "./global.css";
import React, { useState, useEffect } from 'react';
import { getUsers, createUser } from './api';

const App = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const newUser = { name, email };
      await createUser(newUser);
      loadUsers();
    };
  


const ContainerGlobal = () => {


    return(
        <div onSubmit={handleSubmit} class="conterGlobal">
            <div class="conter">
                <h1>Cadastro</h1>
                <input 
                class="input" 
                type="name" 
                value={name} onChange={(e) => setName(e.target.value)} 
                placeholder="Nome"/>


                <br/>
                <input class="input" ype="email" placeholder="E-mail"/>
                <br/>
                <input class="input" type="cpf" placeholder="CPF"/>
            </div>
        </div>
        )
    }
}

export default App;
