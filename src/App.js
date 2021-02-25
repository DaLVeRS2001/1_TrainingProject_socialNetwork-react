import './App.css';
import React from 'react';
import Sidebar from "./components/SideBar/SideBar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/login/Login";



const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Sidebar/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/users' render={() => <UsersContainer/>}/>
        <Route path='/login' render={() => <LoginPage/>}/>
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
      </div>
    </div>
)
}


export default App
