import React, { useState } from 'react';

function TodoApp() {
  // Step 3: Define tasks state variable and setTasks function
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to handle form submission
  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask('');
  };

  // Function to handle task deletion
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Function to handle task completion
  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo App</h1>
      {/* Step 4: Form to add new tasks */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">Add Task</button>
      </form>
      {/* Step 6: Render list of tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            {/* Step 7: Delete button for each task */}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
