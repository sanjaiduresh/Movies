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
    <div>MovieDetail</div>
  )
}
