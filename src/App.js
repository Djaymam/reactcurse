
import React from 'react'
import profile from './images/djay.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img className="profile-pic" src={profile} alt='pic'/>
        <div className="info">
          <h1 className="name">Jaylson Almeida</h1>
          <h2>FrontEnd Developer</h2>
          <h4>j.almeidacv@gmail.com</h4>
          <div className="btn-container">
           <button className="btn1"><i class="material-symbols-outlined"></i>Email</button>
           <button className="btn2"><i></i>LinkedIn</button>
          </div>
        </div>
      
      
      
    </div>
  );
}

export default App;
