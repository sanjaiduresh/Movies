import './App.css';
import { Routes, Route } from "react-router-dom";
import AddMovie from './AddMovie';
import Register from './Register';
import Login from './Login';
import Portal from './Portal';
import Home from './Home';
import PageNotfound from './PageNotfound';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/portal' element={<Portal />}>  
        <Route path='addmovie' element={<AddMovie />} />
        <Route path='home' element={<Home />} />
        </Route>
        <Route path='*' element={<PageNotfound />} />
      </Routes>
    </div>
  );
}

export default App;
