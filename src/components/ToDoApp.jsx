import React from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import '../style/ToDoApp.css';
const ToDoApp = () => {
  return (
    <div className="app-main-container">
      <div className="app-header">
        <h2 className="app-title">My Task Manager</h2>
      </div>
      <div className="app-container">
        <TaskInput />
      </div>
      <div className="app-container">
        <TaskList />
      </div>
    </div>
  )
}

export default ToDoApp;
