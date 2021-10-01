import React from 'react'

export const GifCard = ({gif}) => {

    const {  title} = gif

    return (
        <div className="gifcard">
            <img src={ gif.url } alt={title} />
            <h4>{title}</h4>
        </div>
    )
}
