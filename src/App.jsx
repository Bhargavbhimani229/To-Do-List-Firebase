import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg glass-card-dark shadow-sm py-2 px-4">
        <div className="container-fluid">
          {/* 🔹 Logo + Title */}
          <a
            className="navbar-brand d-flex align-items-center gap-2 text-warning fw-bold fs-4"
            href="#"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png"
              alt="logo"
              width="32"
              height="32"
              className="rounded-circle"
            />
            FocusTodo
          </a>

          {/* 🔹 Menu Links */}
          <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
            <li className="nav-item">
              <a className="nav-link text-light fw-semibold" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Docs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5 flex-grow-1">
        <AddTodo />
        <TodoList />
      </div>

      {/* Footer */}
      <footer className="text-center py-3 text-secondary glass-card-dark border-top mt-auto">
        Built with <span className="text-danger">❤️</span> by{" "}
        <strong>Bhargav</strong> • Firebase{" "}
        <span className="text-warning">🔥</span> | Redux{" "}
        <span className="text-pink">🧠</span>
      </footer>
    </div>
  );
}

export default App;
