import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(({ pagina = 1 }) => {
    
    const [empleados, setEmpleados] = useState([]);
    
    useEffect(() => {
      conseguirEmpleados(pagina);
    }, [pagina])
    
    const conseguirEmpleados = async (p) => {
      const url = `https://reqres.in/api/users?page=${p}`;
      const peticion = await fetch(url);
      const {data: empleados} = await peticion.json();

      // console.log(empleados)
      setEmpleados(empleados)

      console.log("Se ejecuto la petición ajax")
    }

    console.log("Se ha vuelto a renderizar Empleados!")
    
  return (
    <div>
      <p>Mostrando la página : {pagina}</p>
      <ul className='empleados'>
        {
          empleados.length >= 1 && empleados.map(empleado => {
            return <li key={empleado.id}>{
              empleado.first_name + " " + empleado.last_name
            }</li>
          })
        }
      </ul>
    </div>
  )
}
);
