import React, { useContext, useState } from 'react';
import Button from './Button'
import { SettingContext } from '../context/SettingContext';
import '../CSS/SetPomodoro.css';

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
            case 'studio':
                setNewTimer({
                    ...newTimer,
                    study: parseFloat(value)
                })
                break;

            case 'pausa':
                setNewTimer({
                    ...newTimer,
                    break: parseInt(value)
                })
                break;

            case 'ciclo':
                setNewTimer({
                    ...newTimer,
                    cicle: parseInt(value)
                })
                break;
            
            default:
                break;
        }
    }

    const handleSubmit= e =>{
        e.preventDefault();
        updateExecute(newTimer)
    }

  return (
    <div className="set-form-container">
        <form noValidate onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input className='input' type="number" name='studio' onChange={handleChange} value={newTimer.study}/>
                <input className='input' type="number" name='pausa' onChange={handleChange} value={newTimer.break}/>
                <input className='input' type="number" name='ciclo' onChange={handleChange} value={newTimer.cicle}/>
            </div>
            <Button className="setTimer" title="Inizia" _callback={handleSubmit}/>
        </form>
    </div>

  )
}

export default SetPomodoro