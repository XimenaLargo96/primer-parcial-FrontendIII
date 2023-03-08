import React from 'react'
import { useState } from 'react'
import Card from './Card'
import style from '../styles.module.css'

export default function Form() {
    const [values, setValues] = useState({
        name:'',
        lastName:'',
        animal:''
    })
    const [message, setMessage] = useState(false)
    const [error, setError] = useState(false)

    const onHandlerChange = (e)=>{
        const{name, value} = e.target
        setValues({...values , [name]: value})
    }

    const validateName = (name)=>{
        if(name.length >= 3){
            return true;
        }else{
            return false;
        }
    }
    const validateLastName = (lastName)=>{
        if(lastName.length >= 6){
            return true;
        }else{
            return false;
        }
    }

    const onSubmitForm = (e)=>{
        e.preventDefault();
        if(!validateName(values.name) || !validateLastName(values.lastName) ){
            setMessage(false)
            setError(true)
            return;
        }else{
            setMessage(true)
            setError(false)
        }
    }
  return (
    <>
    <h1>Formulario</h1>
    <h2>¿Cual es tu animal favorito?</h2>
    <form className={style.data} onSubmit={onSubmitForm}>
        <input type="text" name='name' placeholder='ingrese su nombre' onChange={onHandlerChange} value={values.name}/>
        <input type="text" name='lastName' placeholder='ingrese su apellido'onChange={onHandlerChange} value={values.lastName}/>
        <input type="text" name='animal' placeholder='ingrese su animal favorito'onChange={onHandlerChange} value={values.animal}/>
        <button type='submit' className={style.buttonSubmit}>Enviar</button>
    </form>
    {message && <Card name={values.name} lastName={values.lastName} animal={values.animal}/> }
    {error && <p className={style.error}>Por favor checa que la informacion sea correcta!</p>}
    </>
  )
}
