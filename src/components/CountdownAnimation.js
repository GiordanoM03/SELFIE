 import React, { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingContext } from '../context/SettingContext'

const CountdownAnimation = ({key=1, timer, animate=true, children}) => {

  const {stopTimer} = useContext(SettingContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer} //aggiungi un *60
      colors={[
        ['#fe6f6b', 0.33],
        ['#f7b801', 0.33],
        ['#a30000', 0.33]
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        if (executing.active === 'study') {
            // Passa a "pausa" alla fine dello "studio"
            setCurrentTimer('break');
        } else if (executing.active === 'break') {
            // Dopo la pausa, controlla se ci sono cicli rimanenti
            if (executing.cicle > 1) {
                // Passa allo stato "studio" e decrementa il ciclo
                updateExecute({
                    ...executing,
                    active: 'study', // Riprendi lo studio
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