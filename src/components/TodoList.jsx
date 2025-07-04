import React, { useEffect, useState } from 'react';
import { ref, onValue, remove, update } from 'firebase/database';
import { db } from '../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../redux/todoSlice';
import { FaTrash } from 'react-icons/fa';
import FilterButtons from './FilterButtons';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const [filter, setFilter] = useState('all');

  /* Realtime listener */
  useEffect(() => {
    const todosRef = ref(db, 'todos');
    const unsub = onValue(todosRef, (snap) => {
      const data = snap.val();
      const arr =
        data ? Object.entries(data).map(([k, v]) => ({ firebaseKey: k, ...v })) : [];
      dispatch(setTodos(arr));
    });
    return () => unsub();
  }, [dispatch]);

  /* toggle complete */
  const toggle = (todo) => {
    update(ref(db, `todos/${todo.firebaseKey}`), {
      completed: !todo.completed,
    });
  };

  /* delete */
  const del = (todo) => remove(ref(db, `todos/${todo.firebaseKey}`));

  /* filter logic */
  const visible = todos.filter((t) =>
    filter === 'all' ? true : filter === 'completed' ? t.completed : !t.completed
  );

  return (
    <>
      <FilterButtons filter={filter} setFilter={setFilter} />

      <ul className="list-group">
        {visible.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item list-group-item-darkish d-flex justify-content-between align-items-center mb-3 rounded glass-card-dark"
          >
            <div className="d-flex align-items-center gap-3">
              <input
                type="checkbox"
                className="form-check-input"
                checked={todo.completed}
                onChange={() => toggle(todo)}
              />
              <span className={`fs-5 ${todo.completed && 'todo-completed'}`}>
                {todo.task}
              </span>
            </div>

            <button
              className="btn btn-outline-danger btn-sm rounded-circle"
              onClick={() => del(todo)}
              title="Delete task"
            >
              <FaTrash />
            </button>
          </li>
        ))}

        {visible.length === 0 && (
          <li className="text-center text-secondary py-4">No tasks to show.</li>
        )}
      </ul>
    </>
  );
}

export default TodoList;
