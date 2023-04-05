import { useState } from 'react'
import Todo from "./pages/Todo"
import Today from "./pages/Today"
import Calendar from "./pages/Calendar"
import './App.css'
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';

function App() {

  return (
    <div className="App">

<h1>Tasks</h1>
      <div className="content">
        <Routes>
          <Route path="/todo" element={<Todo></Todo>}></Route>
          <Route path="/today" element={<Today></Today>}></Route>
          <Route path="/calendar" element={<Calendar></Calendar>}></Route>
        </Routes>
      </div>

      <nav >
        <ul className="nav-links">
          <li>
            <NavLink to="/">
              Incoming
            </NavLink>
          </li>
          <li>
            <NavLink to="/today">
              Today
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar">
              Calendar
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
