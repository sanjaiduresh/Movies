import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {
    const{id}=useParams();
    console.log(id);
    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        fetch(`https://65f16b99034bdbecc762724b.mockapi.io/movie/${id}`,{
            method:"GET"
        }).then((data)=>data.json()).then((res)=>setMovie(res));
    },[]);
    console.log(movie);
  return (
    <div>
        <iframe width="903" height="508" src={movie.trailer} title="Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train - Official Sub Trailer (English Subtitles)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
  )
}
