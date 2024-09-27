import './App.css';
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'

import Calendar from './views/Calendar'
import Home from './views/Home'
import Login from './views/Login'
import Note from './views/Note'
import Pomodoro from './views/Pomodoro'
import TimeMachine from './views/TimeMachine'
import SetPomodoro from './components/SetPomodoro';

function App() {
  return (
    <BrowserRouter>
      <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="calendar">Calendario</NavLink>
            <NavLink to="note">Note</NavLink>
            <NavLink to="pomodoro">Timer Pomodoro</NavLink>
            <NavLink to="timeMachine">Time Machine</NavLink>
          </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='login' element={<Login />} />
          <Route path='note' element={<Note />} />
          <Route path='pomodoro' element={<Pomodoro />} />
          <Route path='timeMachine' element={<TimeMachine />} />
        </Routes>
      </main>
      {/*<SetPomodoro />*/}
      {/*<CountdownCircleTimer />*/}
    </BrowserRouter>
  );
}

export default App;
