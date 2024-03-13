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
import Paper from '@mui/material/Paper';


function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={9}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/portal' element={<Portal mode={mode} setMode={setMode} />}>
              <Route path='addmovie' element={<AddMovie />} />
              <Route path='home' element={<Home />} />
              
            <Route path='movie' element={<Movie />} />
            <Route path='movielist' element={<MovieList />} />
            </Route>

            <Route path='*' element={<PageNotfound />} />
          </Routes>
        </Paper>
      </ThemeProvider>

    </div>
  );
}

export default App;
