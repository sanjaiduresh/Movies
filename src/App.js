import './App.css';
import { Routes, Route } from "react-router-dom";
import AddMovie from './AddMovie';
import Register from './Register';
import Login from './Login';
import Portal from './Portal';
import Home from './Home';
import PageNotfound from './PageNotfound';
import Movie from './Movie';
import MovieList from './MovieList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState("light");
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <div className="App">
          <ThemeProvider theme={darkTheme}>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/portal' element={<Portal />}>  
        <Route path='addmovie' element={<AddMovie />} />
        <Route path='home' element={<Home />} />
        </Route>
        <Route path='/movie' element={<Movie />} />  
        <Route path='/movielist' element={<MovieList />} /> 

        <Route path='*' element={<PageNotfound />} />
      </Routes>
      </ThemeProvider>

    </div>
  );
}

export default App;
