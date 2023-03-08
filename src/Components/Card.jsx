import React from 'react'
import style from '../styles.module.css'

export default function Card({name, lastName, animal}) {
  return (
    <div className={style.success}>✨ Hola {name} {lastName} tu animal favorito es {animal} ✨ </div>
  )
}
