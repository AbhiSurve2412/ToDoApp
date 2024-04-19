import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../features/todo/todoSlice';
import '../style/TaskInput.css';

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch(addToDo(task));
      setTask('');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="input-group mb-3 shadow">
          <input
            id="task"
            type="text"
            name="task"
            value={task}
            onChange={handleChange}
            placeholder="Enter Task"
            className="form-control stylish-input"
            aria-label="Task"
            aria-describedby="button-addon"
            required
          />
          <div className="input-group-append">
            <button className="btn btn-primary stylish-button" type="submit" id="button-addon">
              <i className="bi bi-plus-lg"></i> Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskInput;
