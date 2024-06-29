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

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});