import express from 'express';
import toolkit from '@reduxjs/toolkit';

const todos = [
  { id: toolkit.nanoid(), name: 'Taste JavaScript', status: false },
  { id: toolkit.nanoid(), name: 'Code furiously', status: false },
  { id: toolkit.nanoid(), name: 'Promote Mavo', status: false },
  { id: toolkit.nanoid(), name: 'Give talks', status: false },
  { id: toolkit.nanoid(), name: 'Write tutorials', status: false },
  { id: toolkit.nanoid(), name: 'Have a life!', status: false },
];
const app = express();
app.use(express.json());

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.post('/todos', (req, res) => {
  const dup = todos.some((item) => item.name === req.body.todo);
  if (dup === false) {
    const todo = {
      id: toolkit.nanoid(),
      name: req.body.todo,
      status: false,
    };
    todos.push(todo);
    return res.send(todo);
  }
  return res.status(200);
});

app.patch('/todos/:name', (req, res) => {
  const index = todos.findIndex((item) => item.name === req.params.name);
  todos[index].status = !todos[index].status;
  return res.send(todos[index]);
});

app.listen(3001, () => {
  console.log('SW START');
});
