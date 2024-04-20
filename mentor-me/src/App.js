import './styles.css';
import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Search from './Search';
import Profile from './routes/Profile';
import  { Routes, Route } from "react-router-dom"
import Signup from './routes/Signup';
import Protected from './routes/Protected';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/profile" element={<Protected/>}>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
