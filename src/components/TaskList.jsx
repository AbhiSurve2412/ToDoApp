import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo, toggleToDo } from "../features/todo/todoSlice";
import '../style/TaskList.css'; 

function TaskList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">ToDos</h2>
      <div className="task-container">
        {todos.length > 0 ? (
          <ul className="list-group shadow">
            {todos.map(todo => (
              <li
                key={todo.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'completed' : ''}`}
              >
                {todo.text}
                <div>
                  <button
                    onClick={() => dispatch(toggleToDo(todo.id))}
                    className="btn btn-success btn-sm me-2"
                    aria-label="Complete"
                  >
                    <i className="bi bi-check-lg"></i>
                  </button>
                  <button
                    onClick={() => dispatch(deleteToDo(todo.id))}
                    className="btn btn-danger btn-sm"
                    aria-label="Delete"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center p-5">
            <h4>No tasks added yet!</h4>
            <p>Add some tasks to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
