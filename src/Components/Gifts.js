import React, { useEffect, useState } from 'react'
import { GifCard } from './GifCard'

export const Gifts = ({categoria}) => {

    
    const [images, setImages] = useState([])
    


    useEffect(()=>{

        getGifs()

    },[])


    const getGifs = ()=>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=5&api_key=YYOeIaMEdkSFNP3fHIdI8q8RmT4O3LMW`;

        fetch(url)
        .then((res)=>{
            return res.json()
        })
        .then((gifsData)=>{

            const {data} = gifsData;
            const gifs = data.map(img => {
                return{
                    id: img.id,
                    title: img.title,
                    url: img.images.downsized_medium.url
                }
            })

            setImages(gifs)
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    return (
        <div>
            <h2>{categoria}</h2>
            
                {
                    images.map(gif =>{

                       return <GifCard key={gif.id} gif={gif} />
                    })
                }
            
        </div>
    )
}
