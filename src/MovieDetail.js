import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mui/material';
import { api } from './global';
export default function MovieDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${api}/getone/${id}`, {
            method: "GET"
        }).then((data) => data.json()).then((res) => setMovie(res));
    },[id]);
    const ratingStyle = {
        color: movie.rating > 7 ? "green" : "red",
    }

    return (
        <div>
            <iframe width="903" height="508" src={movie.trailer} title="Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train - Official Sub Trailer (English Subtitles)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <div className='movie-detail-container'>
                <div className='movie--spec'>
                    <h2 className='movie--name'>{movie.name}</h2>
                    <h3 style={ratingStyle} className='movie--rating'>
                        ⭐{movie.rating}
                    </h3>
                </div>
                <p className='movie--summary'>{movie.summary}</p>
            </div>
            <Button variant="contained" startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} >
                Back
            </Button>
        </div>
    )
}