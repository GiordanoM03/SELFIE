
import SetPomodoro from '../components/SetPomodoro';
import { useContext, useEffect } from 'react';
import { SettingContext } from '../context/SettingContext';
import Button from '../components/Button';
import CountdownAnimation from '../components/CountdownAnimation';
import '../CSS/Pomodoro.css'

const Pomodoro=()=>{
    const {
        pomodoro, 
        executing, 
        setCurrentTimer, 
        SettingButton, 
        children, 
        startAnimate, 
        startTimer, 
        pauseTimer,
        updateExecute} = useContext(SettingContext)
        
    useEffect(()=> {updateExecute(executing)}, [executing, startAnimate])

    return (
        <div className="pom-container">
          <h1>Pomodoro Timer</h1>
      {pomodoro == 0 ? 
        <SetPomodoro /> : 
        <>
          <ul className='labels'>
            <li>
              <Button className='button-pom' title="Studio" activeClass={executing.active === 'study' ? 'active-label' : undefined}
                _callback={()=> setCurrentTimer('study')}
              />
            </li>

            <li>
              <Button className='button-pom' title="Pausa" activeClass={executing.active === 'break' ? 'active-label' : undefined}
                _callback={()=> setCurrentTimer('break')}
              />
            </li>

            <li>
              <Button className='button-pom' title="Ciclo" activeClass={executing.active === 'cicle' ? 'active-label' : undefined}
                _callback={()=> setCurrentTimer('cicle')}
              />
            </li>
          </ul>
          <Button className='button-pom' title="Impostazioni" _callback={SettingButton}/>
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
            <Button title='Avvia' className={!startAnimate ? 'active' : undefined} _callback={startTimer}/>
            <Button title='Ferma' className={startAnimate ? 'active' : undefined} _callback={pauseTimer}/>
          </div>
        </>          
        /*<ul className="pom-background-animation">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */  
        }
        
        
      </div> 
    )
}

export default Pomodoro;