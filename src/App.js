import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={()=> <Dialogs state={props.state.dialogsPage}/>} />
        <Route path='/profile' render={()=> <Profile
          state={props.state.profilePage}
          addPost={props.addPost}
          updatePostText={props.updatePostText}
        />}/>
      </div>
    </div>
)
}








export default App;
