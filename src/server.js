const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name, email, cpf } = req.body;
  const newUser = { name, email, cpf };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Deletar usuário
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});