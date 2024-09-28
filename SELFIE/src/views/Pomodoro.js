import SetPomodoro from '../components/SetPomodoro';
import { useContext } from 'react';
import { SettingContext } from '../context/SettingContext';
import Button from '../components/Button';
import CountdownAnimation from '../components/CountdownAnimation';

export default function Pomodoro(){
    const {
        pomodoro, 
        executing, 
        setCurrentTimer, 
        SettingButton, 
        children, 
        startAnimate, 
        startTimer, 
        pauseTimer} = useContext(SettingContext)
        
    return (
        <div className='container'>
      {pomodoro === 0 ? <SetPomodoro /> : 
        <>
          <ul className='lables'>
            <li>
              <Button title="Studio" activeClass={executing.active === 'study' && 'active-label'}
                _callback={()=> setCurrentTimer('study')}
              />
            </li>

            <li>
              <Button title="Pausa" activeClass={executing.active === 'break' && 'active-label'}
                _callback={()=> setCurrentTimer('break')}
              />
            </li>

            <li>
              <Button title="Ciclo" activeClass={executing.active === 'cicle' && 'active-label'}
                _callback={()=> setCurrentTimer('cicle')}
              />
            </li>
          </ul>
          <Button title="Impostazioni" _callback={SettingButton}/>
          <div className='time-container'>
            <div className='time-wrapper'>
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div className="button-wrapper">
            <Button title='Avvia' className={!startAnimate && 'active'} _callback={startTimer}/>
            <Button title='Ferma' className={startAnimate && 'active'} _callback={pauseTimer}/>
          </div>
        </>
        }
      </div> 
    )
}