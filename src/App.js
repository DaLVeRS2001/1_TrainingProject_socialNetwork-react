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
      refactor
      <Sidebar/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={()=> <Dialogs
          state={props.store.getState().dialogsReducer.dialogsData}
          store={props.store}
        />}/>
        <Route path='/profile' render={()=> <Profile store={props.store}/> } />
      </div>
    </div>
)
}








export default App;
