import React, {createContext, useState} from 'react'

export const  SettingContext= createContext()

const SettingContextProvider = (props) => {

const [pomodoro, setPomodoro]= useState(0)
const [executing, setExecuting] = useState({})
const [startAnimate, setStartAnimate] = useState(false)

function startTimer(){
    setStartAnimate(true)
}

function pauseTimer(){
    setStartAnimate(false)
}

function stopTimer(){
    setStartAnimate(false)
}

const SettingButton = () => {
    setExecuting({})
    setPomodoro(0)
}

function setCurrentTimer(active_state){

    if (active_state === 'cicle') {
        updateExecute({
            ...executing,
            active: 'cicle', 
        });
        setPomodoro(executing.cicle * (executing.study + executing.break));
    } else {
        updateExecute({
            ...executing,
            active: active_state,
        });
        setTimerTime(executing);
    }
}

const updateExecute = updatedSettings => {
    setExecuting(updatedSettings)
    setTimerTime(updatedSettings)
}

const setTimerTime = evalute => {
    switch (evalute.active) {
        case 'study':
            setPomodoro(evalute.study)
            break;

        case 'break':
            setPomodoro(evalute.break)
            break;

        case 'cicle':
            if (evalute.cicle > 0) {
                setPomodoro(evalute.study); 
                setExecuting({
                    ...evalute,
                    cicle: evalute.cicle - 1 
                });
            } else {
                setPomodoro(0); 
                setStartAnimate(false); 
            }
            break;
    
        default:
            setPomodoro(0)
            break;
    }
}

const children = ({remainingTime}) => {

    const hours = Math.floor(remainingTime / 3600)
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60
  
    return `${hours}:${minutes}:${seconds}`
}

  return (
    <SettingContext.Provider value={{
        stopTimer, 
        updateExecute,
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        SettingButton,
        setCurrentTimer,
        children
        }}>
        {props.children}
    </SettingContext.Provider>
  )
}

export default  SettingContextProvider