// --- Todo Application Routes ---
const express = require('express');
const router = express.Router();

// In-memory data store for simplicity
let todos = [
  { id: 1, text: 'Learn Git branching', completed: false },
  { id: 2, text: 'Resolve a merge conflict', completed: false },
  { id: 3, text: 'Master rebasing', completed: false }
];

// Get all todos
router.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
router.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }
  const newTodo = {
    id: Date.now(),
    text,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
router.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { text, completed } = req.body;
  
  const todoIndex = todos.findIndex(t => t.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    ...(text !== undefined && { text }),
    ...(completed !== undefined && { completed })
  };

  res.json(todos[todoIndex]);
});

// Delete a todo
router.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(todoIndex, 1);
  res.status(204).send();
});

module.exports = router;
