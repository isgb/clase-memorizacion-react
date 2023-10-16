import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre,setNombre] = useState("");

    useEffect(() => {
        console.log("La vista de Gestion se ha renderizado")
    })

    const asignarGestor = e =>{
        setNombre(e.target.value)
    }

  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>

        <input type='text' onChange={asignarGestor} placeholder='Introduce tu nombre de gestor'/>

        <h2>Listado de empleados: </h2>

        <p>Los usuarios son gestionados por {nombre} de jsonplaceholder</p>

        <Empleados/>
    </div>
  )
}
