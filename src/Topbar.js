import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
    const navigate=useNavigate();
  return (
   
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Login</Button>
          <Button variant="inherit" onClick={()=>navigate("/portal/home")}>Home</Button>
          <Button variant="inherit" onClick={()=>navigate("/portal/addmovie")}>AddMovie</Button>
        </Toolbar>
      </AppBar>
  );
}