import React, { useState, useEffect } from 'react';

import './CSS/Navbar.css'
import Calendar from './views/Calendar'
import Home from './views/Home'
import Login from './views/Login'
import Note from './views/Note'
import Pomodoro from './views/Pomodoro'
import TimeMachine from './views/TimeMachine'
import './CSS/Pomodoro.css'

const App = () => {
  const [route, setRoute] = useState(window.location.pathname);

  // Funzione per gestire il routing
  const handleNavigation = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  // Ascolta i cambiamenti nell'URL per supportare il pulsante indietro/avanti
  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    
    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  // Funzione per scegliere cosa visualizzare
  const renderRoute = () => {
    switch (route) {
      case '/':
        return <Home />;

      case '/Pomodoro':
        return <Pomodoro />;

      case '/Calendario':
        return <Calendar />;

      case '/Login':
        return <Login />;      
        
      case '/Note':
        return <Note />;

      case '/Timemachine':
        return <TimeMachine />;
        
      default:
        return <h1>404 - Page Not Found</h1>;
    }
  };

  return (
    <div className='app-container'>
      <nav>
        {/* Links che modificano l'URL senza ricaricare */}
        <button className='nav-button' onClick={() => handleNavigation('/')}>Home</button>
        <button className='nav-button' onClick={() => handleNavigation('/Pomodoro')}>Pomodoro</button>
        <button className='nav-button' onClick={() => handleNavigation('/Calendario')}>Calendario</button>
        <button className='nav-button' onClick={() => handleNavigation('/Note')}>Note</button>
        <button className='nav-button' onClick={() => handleNavigation('/Timemachine')}>Time machine</button>
        <button className='nav-button' onClick={() => handleNavigation('/Login')}>Login</button>
      </nav>

      {/* Renderizza il contenuto in base alla route */}
      {renderRoute()}
    </div>
  );
}

export default App;
