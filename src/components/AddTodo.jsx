import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from "../firebase/config";
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { FaPlus } from 'react-icons/fa';

function AddTodo() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };

    await push(ref(db, 'todos'), newTodo);   // realtime DB write
    setTask('');
  };

  return (
    <div className="glass-card-dark p-4 mb-4 shadow">
      <h5 className="mb-3 fw-semibold text-info">➕ Add a new task</h5>

      <form className="d-flex gap-3" onSubmit={handleSubmit}>
        <input
          className="form-control bg-dark text-light border-secondary"
          placeholder="What do you need to do?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-success d-flex align-items-center gap-2 fw-bold">
          <FaPlus /> Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
