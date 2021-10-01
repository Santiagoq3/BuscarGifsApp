import React, { useState } from 'react'

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e)=>{


        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(inputValue.trim().length > 2){

            setCategorias( categoria => [inputValue,...categoria ]);
            setInputValue("");
        }


    }

    return (
        <div className="AddCategory">

            <form onSubmit={handleSubmit}>

                <input
                    type="text" placeholder="Buscar Gifs..."
                    value={inputValue} onChange={ handleInputChange} >

                </input>

            </form>
        </div>
    )
}
