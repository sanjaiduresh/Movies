import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Logout } from './Logout';

export default function Topbar({mode,setMode}) {
    const navigate=useNavigate();
  return (
   
      <AppBar position="static">
        <Toolbar>
          <Button variant="inherit" onClick={()=>navigate("/portal/home")}>Home</Button>
          <Button variant="inherit" onClick={()=>navigate("/portal/movielist")}>Movies</Button>
          <Button variant="inherit" onClick={()=>navigate("/portal/addmovie")}>AddMovie</Button>
          <Button style={{marginLeft:"60%"}} startIcon={mode==="light"?<Brightness4Icon />:<Brightness7Icon />} color='inherit'
          onClick={()=>setMode(mode==="light" ? "dark" : "light")}>
            {mode==="light"? "Dark":"Light"}Mode
          </Button>
          <Button color="inherit" onClick={()=>Logout()}>Logout</Button>
        </Toolbar>
      </AppBar>
  );
}