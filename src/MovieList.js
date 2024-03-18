import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import "./App.css"
import { api } from './global';
export default function MovieList() {

    const [movie,setMovie]=useState([]);
    const getMovies=()=>{
        fetch(`${api}/get`, {
            method:"GET",
        })
        .then((data)=>data.json())
        .then((mvs)=>setMovie(mvs));
    }
    useEffect(()=>{
        getMovies();
    },[]
    );
    console.log(movie);
  return (
    <div className='movie-list'>
        {movie.map((list,index)=>(
            <div key={index}>
                <Movie getMovies={getMovies} movieTake={list} />
            </div>
        ))}
    </div>
  )
}