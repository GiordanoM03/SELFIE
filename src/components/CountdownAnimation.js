import React, { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingContext } from '../context/SettingsContext'

const CountdownAnimation = ({key=1, timer=20, animate=true, mode, children}) => {
  
  const {stopTimer, executing, setCurrentTimer, updateExecute}=useContext(SettingContext)
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer*60}
      colors={mode === 'cicle' ? ['transparent'] : ['#8EC5FC', '#E0C3FC']}
      strokeWidth={6}
      size={290}
      trailColor='#151932'
      onComplete={() => {
        if (executing.active === 'work') {
            // Passa a "pausa" alla fine dello "studio"
            setCurrentTimer('break');
        } else if (executing.active === 'break') {
            // Dopo la pausa, controlla se ci sono cicli rimanenti
            if (executing.cicle > 1) {
                // Passa allo stato "studio" e decrementa il ciclo
                updateExecute({
                    ...executing,
                    active: 'work', // Riprendi lo studio
                    cicle: executing.cicle - 1 // Decrementa il ciclo
                });
            } else {
                // Se non ci sono più cicli, ferma il timer
                stopTimer();
            }
        }
        return [true, 0]; // Ritorna true per riavviare il countdown con il nuovo timer
    }}
    >
      {children}
    </CountdownCircleTimer>
  )
}

export default CountdownAnimation