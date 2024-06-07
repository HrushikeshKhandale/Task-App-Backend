const express = require('express');
const router = express.Router();

let tasks = [];
let nextId = 1;

const validateTask = (task) => {
    if (!task.title || !task.description) {
        return false;
    }
    return true;
};

//Route 1: Get all tasks
router.get('/', (req, res) => {
    res.status(200).json(tasks);
});

//Route 2: Get a task by ID
router.get('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
});

//Route 3: Create a new task
router.post('/', (req, res) => {
    const task = req.body;
    if (!validateTask(task)) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    task.id = nextId++;
    tasks.push(task);
    res.status(201).json(task);
});

//Route 4: Update a task by ID
router.put('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    const updatedTask = req.body;
    if (!validateTask(updatedTask)) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    task.title = updatedTask.title;
    task.description = updatedTask.description;
    res.status(200).json(task);
});

//Route 5: Delete a task by ID
router.delete('/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

module.exports = router;
