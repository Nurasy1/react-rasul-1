import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*'
                               element={<Dialogs state={props.state.dialogsPage} />} />
                        <Route path='/profile'
                               element={<Profile state={props.state.profilePage} />} />
                        <Route path='/settings'
                               element={<Settings/>}/>
                        <Route path='/music'
                               element={<Music/>}/>
                        <Route path='/news'
                               element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;


