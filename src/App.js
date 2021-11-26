import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom'
import { Home, Login, Register, MyPage, Watch, Movies } from "./pages";
import './main.scss'

class App extends Component {
  render(){
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/movies" element={<Movies />}/>
          <Route path="/watch/:type/:id" element={<Watch/>}/>
        </Routes>
      </>
    );
  }
}

export default App;