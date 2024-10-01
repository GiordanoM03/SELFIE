import React, { useContext, useState } from 'react';
import Button from './Button'
import { SettingContext } from '../context/SettingContext';

const SetPomodoro = () => {
    const [newTimer, setNewTimer]= useState({
        study: 30,
        break: 5,
        cicle: 5,
        active: 'study'
    })

    const {updateExecute} = useContext(SettingContext)

    const handleChange= input =>{
        const {name, value}= input.target

        switch(name){
            case 'study':
                setNewTimer({
                    ...newTimer,
                    study: parseInt(value)
                })
                break;
            case 'break':
                setNewTimer({
                    ...newTimer,
                    break: parseInt(value)
                })
                break;
            case 'cicle':
                setNewTimer({
                    ...newTimer,
                    cicle: parseInt(value)
                })
                break;
        }
    }

    const handleSubmit= e =>{
        e.preventDefault()
        updateExecute(newTimer)
    }

  return (
    <div className="form-container">
        <form noValidate onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input className='input' name='study' onChange={handleChange} value={newTimer.study}/>
                <input className='input' name='break' onChange={handleChange} value={newTimer.break}/>
                <input className='input' name='cicle' onChange={handleChange} value={newTimer.cicle}/>
            </div>
            <Button title="Imposta timer" _callback={handleSubmit}/>
        </form>
    </div>

  )
}

export default SetPomodoro