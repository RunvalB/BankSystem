import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import UserLogin from './components/UserLogin';
import Terms from './components/Terms';
import { useState } from 'react';
import Profile from './components/Profile';
import Withdrawl from './components/Withdrawl';
import Deposit from './components/Deposit';
import OpenFd from './components/OpenFd';
import ViewUser from './components/ViewUser';

function App() {
  const [user,setUser] = useState({});
  const getLoginData = (userData) =>{
    console.log(userData);
    setUser(userData);
  }
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin onSubmit={getLoginData}></UserLogin>}></Route>
          <Route path="/home" element={<Home getUserData = {user}></Home>}></Route>
          <Route path="/register" element={<Register userData = {user}></Register>}></Route>
          <Route path="/login" element={<UserLogin onSubmit={getLoginData}></UserLogin>}></Route>
          <Route path="/terms" element={<Terms></Terms>}></Route>
          <Route path="/profile" element={<Profile getUserData={user}></Profile>}></Route>
          <Route path="/withdrawl" element={<Withdrawl getUserData={user}></Withdrawl>}></Route>
          <Route path="/deposit" element={<Deposit getUserData={user}></Deposit>}></Route>
          <Route path="/openfd" element={<OpenFd getUserData={user}></OpenFd>}></Route>
          <Route path="/allUsers" element={<ViewUser userData = {user}></ViewUser>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
