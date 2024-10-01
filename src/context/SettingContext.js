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
    updateExecute({
        ...executing,
        active: active_state
    })
    setTimerTime(executing)
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
            setPomodoro(evalute.cicle)
            break;
    
        default:
            setPomodoro(0)
            break;
    }
}

const children = ({remainingTime}) => {
    const minutes = Math.floor(remainingTime/60)
    const seconds = remainingTime % 60

    return `${minutes}:${seconds}`
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