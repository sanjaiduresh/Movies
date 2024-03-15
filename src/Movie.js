import React, { useState } from 'react'
import "./App.css"
import Counter from "./Counter"
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Movie({movieTake}) {
  const [show, setShow] = useState(false);
  const navigate=useNavigate();
  return (
    <>
      <Card className='movie-container'>
        <CardMedia className='movie-poster' image={movieTake.poster} />
        <CardContent className='movie-spec'>
          <Typography className='movie-name'>
           {movieTake.name}

            <IconButton color='primary' aria-label="Toggle-Description" onClick={() => setShow(!show)}>
              {show ? <ExpandLessIcon fontSize='large' /> : <ExpandMoreIcon fontSize='large' />}
            </IconButton>

            <IconButton color='primary' aria-label="Toggle-Description" onClick={()=>navigate(`/portal/view/${movieTake.id}`)}>
              <InfoIcon fontSize='small' />
            </IconButton>
            <Typography component="span" className='movie-rating'>
              ⭐{movieTake.rating}
            </Typography>
          </Typography>

        </CardContent>
        {show ? <Typography className='movie-summary'>{movieTake.summary}</Typography> : null}

        <CardActions>
          <Counter />
          <IconButton 
          sx={{marginLeft:"auto"}}
          aria-label='editMovie'
          onClick={()=>navigate(`/portal/edit/${movieTake.id}`)}>
            <EditIcon color="secondary"/>
          </IconButton>
          <IconButton 
          sx={{marginLeft:"auto"}}
          aria-label='editMovie'>
            <DeleteIcon color="secondary"/>
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}
