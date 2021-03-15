import './App.css';
import React from 'react';
import Sidebar from "./components/SideBar/SideBar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import Profile from "./components/Profile/Profile"
import PhotoModal from "./components/Profile/MyProfile/#myProfileCommon/ChangerPhotoModal/PhotoModal";


class App extends React.Component {
  state = {
    isPhotoModal: false
  }

  componentDidMount() {
    this.props.initializeApp()
  }

  toggleIsPhotoModal = () => {
    this.setState({isPhotoModal: !this.state.isPhotoModal})
  }


  render() {
    if (!this.props.initialized) return <Preloader/>
      return (
        <div className="app">
        <div className="app-wrapper">
          <HeaderContainer/>
          <Sidebar ownId={this.props.ownId}/>
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId' render={() =>
              <Profile isAuth={this.props.isAuth}
                       ownId={this.props.ownId}
                       toggleIsPhotoModal={this.toggleIsPhotoModal}
            />}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <LoginPage/>}/>
          </div>
        </div>

          {this.state.isPhotoModal && <PhotoModal toggleIsPhotoModal={this.toggleIsPhotoModal}/>}
        </div>
      )

  }
}


const mapStateToProps = (state) => {
  return{
    initialized: state.appReducer.initialized,
    ownId: state.authReducer.id,
    isAuth: state.authReducer.isAuth
  }
}

export default  connect(mapStateToProps,{initializeApp})(App)

