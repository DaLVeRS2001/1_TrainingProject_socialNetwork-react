import './App.css';
import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Profile from "./components/Profile";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <Profile/>
    </div>
  )
}








export default App;
