import logo from './logo.svg';
import axios from 'axios'
import { Header } from './Components/Header';
import { Login } from './Components/Login';
import {Signup} from './Components/Signup';
import { Post } from './Components/Post';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path = '/'  element = {<Header />}  />
    <Route path = '/post'  element = {<Post />}  />

    
    <Route path = '/login' element = {<Login />} />
    <Route path = '/sign' element = {<Signup /> } />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
