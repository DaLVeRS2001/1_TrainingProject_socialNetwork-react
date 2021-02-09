import './App.css';
import React from 'react';
import Sidebar from "./components/SideBar/SideBar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Sidebar/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={()=> <DialogsContainer />} />
        <Route path='/profile/:userId?' render={()=> <ProfileContainer /> } />
        <Route path='/users' render={()=> <UsersContainer/> } />
      </div>
    </div>
)
}




export default App;
