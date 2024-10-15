import React, { createContext, useState, useEffect } from 'react'

export const SettingContext=createContext()

const SettingsContextProvider = (props) => {

    const [pomodoro, setPomodoro]=useState(0)
    const [executing, setExecuting]=useState({})
    const [startAnimate, setStartAnimate]=useState(false)

    function startTimer(){
        setStartAnimate(true)
    }

    function pauseTimer(){
        setStartAnimate(false)
    }

    function stopTimer(){
        setStartAnimate(false)
    }

    const SettingBtn = () => {
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

    const updateExecute=(updatedSettings) => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    const setTimerTime = evalute => {
        switch (evalute.active) {
            case 'work':
                setPomodoro(evalute.work)
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
        const minutes =Math.floor(remainingTime/60)
        const seconds = remainingTime%60
        const sum=minutes+seconds
        if(executing.active === 'work'){
        return `${minutes}:${seconds}`
        }else if(executing.active === 'break'){
            return `${minutes}:${seconds}`
        }else{
            return `${executing.cicle}`
        }
        
    }

  return (
    <SettingContext.Provider 
        value={{
            stopTimer, 
            updateExecute,
            pomodoro,
            executing,
            startAnimate,
            startTimer,
            pauseTimer,
            SettingBtn,
            setCurrentTimer,
            setTimerTime,
            updateExecute,
            children
            }}>
        {props.children}
    </SettingContext.Provider>
  )
}

export default SettingsContextProvider