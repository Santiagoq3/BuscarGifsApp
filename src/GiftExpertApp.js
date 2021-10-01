import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { Gifts } from './Components/Gifts'

export const GiftExpertApp = () => {

    // const categorias = ["Mean girls", "American Pie", "Supercool"]


    const [categorias, setCategorias] = useState([""])

    // const handleAdd = (categoria)=>{

    //     setCategorias( [...categorias, categoria])
    // }

    return (
        <div>
            <h1>Aplicacion de gifs</h1>
            <AddCategory setCategorias={setCategorias} />
            <hr></hr>

            {/* <button onClick ={()=>{ handleAdd("Messi")}}>Agregar</button> */}

           <ul>
               {
                   categorias.map((categoria)=>{
                     return <Gifts key={categoria} categoria={categoria} />
                   })
               }
           </ul>
        </div>
    )
}
