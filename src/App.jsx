import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom'
import { Home, Login, Register, MyPage, Watch } from "./pages";
import './main.scss'

class App extends Component {
  render(){
    return (
      <>
        <Routes>
          {/* <Route path="/" element={<Register />}/> */}
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/mypage" element={<MyPage />}/>
          <Route path="/watch/:type/:id" element={<Watch/>}/>
        </Routes>
      </>
    );
  }
}

export default App;